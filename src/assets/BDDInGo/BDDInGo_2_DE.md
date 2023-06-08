---
title: BDD (Behavior-driven development) mit Go
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: May 18, 2021
tags: testing, go, bdd, test
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/assets/BDDInGo/BDDInGo.png
---

In [Einstieg in BDD (Behavior-driven development)](https://dev.to/jankaritech/einstieg-in-bdd-behavior-driven-development-1m8h) habe ich die Grundzüge von BDD erklärt und ihren Einsatz, um die Funktionen einer Anwendung zu beschreiben. Im Grunde genommen ist BDD dazu gedacht, alle Beteiligten zusammenzubringen und klar zu beschreiben, wie sich die "Features" einer Anwendung in verschiedenen Situationen zu verhalten haben.

## Automatische Tests
Die Kommunikation und damit die Erfolgschancen der Entwicklung einer Anwendung zu verbessern, ist das Wichtigste bei BDD. Aber wir können noch einen Schritt weiter gehen und die entstandenen Feature-Beschreibungen nutzen, um die Anwendung automatisch zu testen.

(Wie schon im ersten Artikel werde ich den Quellcode und die Feature-Dateien nicht übersetzen, sondern so zeigen, wie sie in [GitHub](https://github.com/JankariTech/bsDateServer) abgespeichert sind.)

Nach ["Einstieg in BDD (Behavior-driven development)"](https://dev.to/jankaritech/einstieg-in-bdd-behavior-driven-development-1m8h) haben wir ein Feature-File, das so aussieht:
```gherkin
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
    Then the HTTP-response code should be "200"
    And the response content should be "2003-07-17"

  Scenario: converting an invalid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01"
    Then the HTTP-response code should be "400"
    And the response content should be "not a valid date"
```

Um aus den Feature-Files automatische Tests zu machen, brauchen wir zunächst einen Interpreter, der die Gherkin Sprache versteht und die entsprechenden Tests ausführt.

Solche Interpreter gibt es für die verschiedensten Programmiersprachen. In diesem Artikel demonstriere ich, wie es mit [godog package](https://github.com/cucumber/godog) für Go funktioniert.

Um godog zu [installieren](https://github.com/cucumber/godog#install), müssen wir zunächst eine einfache `go.mod` Datei anlegen
```golang
module github.com/JankariTech/bsDateServer

go 1.19
```
und dann `go get github.com/cucumber/godog@v0.12.6` ausführen.

(Die Versionsnummer `@v0.12.6` ist optional; ohne sie wird die neueste vorhandene Version installiert. Damit dieser Artikel aber länger verwendbar bleibt und ich ihn nicht ständig anpassen muss, gebe ich hier eine Versionsnummer an.)

Wir brauchen auch das godog Kommandozeilenwerkzeug, um das zu installieren muss

`go install github.com/cucumber/godog/cmd/godog@v0.12.6`

ausgeführt werden

Jetzt können wir godog mit `$GOPATH/bin/godog *.feature` ausführen. Die Ausgabe sollte in etwa so aussehen:
```gherkin
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
    Then the HTTP-response code should be "200"
    And the response content should be "2003-07-17"

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01"
    Then the HTTP-response code should be "400"
    And the response content should be "not a valid date"

2 scenarios (2 undefined)
6 steps (6 undefined)
441.226µs

You can implement step definitions for undefined steps with these snippets:

func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
	return godog.ErrPending
}

func theHTTPresponseCodeShouldBe(arg1 string) error {
	return godog.ErrPending
}

func theResponseContentShouldBe(arg1 string) error {
	return godog.ErrPending
}

func InitializeScenario(ctx *godog.ScenarioContext) {
	ctx.Step(`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$`, aRequestIsSentToTheEndpoint)
	ctx.Step(`^the HTTP-response code should be "([^"]*)"$`, theHTTPresponseCodeShouldBe)
	ctx.Step(`^the response content should be "([^"]*)"$`, theResponseContentShouldBe)
}
```

Godog listet alle Szenarien, die wir ausführen wollen, und sagt uns, dass es keine Ahnung hat, was es machen soll. Das ist keine Überraschung - schließlich haben wir noch keine Test-Schritte implementiert. Um das zu tun, erstellen wir eine Datei mit dem Namen `bsdateServer_test.go` und dem Inhalt:

```go
package main

import (
    "github.com/cucumber/godog"
)

func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
	return godog.ErrPending
}

func theHTTPresponseCodeShouldBe(arg1 string) error {
	return godog.ErrPending
}

func theResponseContentShouldBe(arg1 string) error {
	return godog.ErrPending
}

func InitializeScenario(ctx *godog.ScenarioContext) {
	ctx.Step(`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$`, aRequestIsSentToTheEndpoint)
	ctx.Step(`^the HTTP-response code should be "([^"]*)"$`, theHTTPresponseCodeShouldBe)
	ctx.Step(`^the response content should be "([^"]*)"$`, theResponseContentShouldBe)
}
```

Die `InitializeScenario` Funktion ist die Verbindung zwischen der menschenlesbaren Gherkin Sprache und dem Code, den der Computer ausführen soll. Mithilfe von RegularExpressions werden Teile der Sätze aus der Gherkin Zeile extrahiert und als Argumente an die jeweilige Funktion gesendet.
Aus `When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"` wird der Funktionsaufruf: `aRequestIsSentToTheEndpoint("GET", "/ad-from-bs/2060-04-01")`

Wenn wir wieder `$GOPATH/bin/godog *.feature` ausführen, sieht die Ausgabe schon anders aus:
```gherkin
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:8 -> aRequestIsSentToTheEndpoint
      TODO: write pending definition
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:12 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:16 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:8 -> aRequestIsSentToTheEndpoint
      TODO: write pending definition
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:12 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:16 -> theResponseContentShouldBe

2 scenarios (2 pending)
6 steps (2 pending, 4 skipped)
576.1µs
```

Godog hat jetzt die Funktionen gefunden, die mit den jeweiligen Schritten korrespondieren, aber diese Funktionen tun, außer Fehler anzuzeigen, noch nichts.

Also implementieren wir die erste Funktion, die die HTTP Anfrage and unsere (noch nicht vorhandene) API sendet:
```diff
index c8b0144..f7ee56d 100644
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -1,11 +1,26 @@
 package main

 import (
+    "fmt"
     "github.com/cucumber/godog"
+    "net/http"
+    "strings"
 )

-func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
-    return godog.ErrPending
+var host = "http://localhost:10000"
+var res *http.Response
+
+func aRequestIsSentToTheEndpoint(method, endpoint string) error {
+    var reader = strings.NewReader("")
+    var request, err = http.NewRequest(method, host+endpoint, reader)
+    if err != nil {
+        return fmt.Errorf("could not create request %s", err.Error())
+    }
+    res, err = http.DefaultClient.Do(request)
+    if err != nil {
+        return fmt.Errorf("could not send request %s", err.Error())
+    }
+    return nil
 }

 func theHTTPresponseCodeShouldBe(arg1 string) error {
```

Wir benutzen das `net/http` Go packet, um eine einfache HTTP Anfrage zu versenden. Der Trick bei godog ist, `nil` zurückzugeben, wenn kein Fehler aufgetreten ist. Das führt dazu, dass godog den Schritt als erfolgreich bewertet. Auf der anderen Seite wird ein Schritt als gescheitert markiert, wenn die Funktion irgendein Objekt zurückgibt, das die `error` Schnittstelle (Interface) implementiert.

Randbemerkung: die `res` Variable ist außerhalb der Funktion definiert, weil wir auf sie noch von anderen Funktionen zugreifen müssen.

Die Ausgabe von `$GOPATH/godog *.feature` ist jetzt:
```gherkin
...
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    could not send request Get "http://localhost:10000/ad-from-bs/2060-04-01": dial tcp 127.0.0.1:10000: connect: connection refused
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:31 -> theResponseContentShouldBe

...
```

Die HTTP Anfrage, die der Test sendet, schlägt fehl, weil nichts auf dem entsprechenden Port lauscht. Ganz Ähnlich wie bei TDD (Test Driven Development) haben wir erst den Test gebaut (oder einen Teil davon), bevor die Software implementiert wurde.

Deswegen implementieren wir jetzt einen minimal-Server, der praktisch nur den Port `10000` öffnet. Dafür kommt der folgende code in die Datei `main.go` und dann wird der Server mit `go run main.go` gestartet
```go
package main

import (
    "fmt"
    "github.com/gorilla/mux"
    "log"
    "net/http"
)

func homePage(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Bikram Sambat Server")
}

func handleRequests() {
    myRouter := mux.NewRouter().StrictSlash(true)
    myRouter.HandleFunc("/", homePage)
    log.Fatal(http.ListenAndServe(":10000", myRouter))
}

func main() {
    handleRequests()
}
```

Wenn wir jetzt die Tests laufen lassen, während der Server läuft, sieht man, dass wir einen Schritt weiter gekommen sind:
```gherkin
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
      TODO: write pending definition
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:31 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
      TODO: write pending definition
    And the response content should be "not a valid date"               # bsdateServer_test.go:31 -> theResponseContentShouldBe

2 scenarios (2 pending)
6 steps (2 passed, 2 pending, 2 skipped)
1.849695ms
```

Die `When` Schritte funktionieren jetzt wie gewünscht. Als Nächstes müssen die `Then` Schritte implementiert werden:

```diff
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -3,6 +3,7 @@ package main
 import (
     "fmt"
     "github.com/cucumber/godog"
+    "io/ioutil"
     "net/http"
     "strings"
 )
@@ -23,16 +24,23 @@ func aRequestIsSentToTheEndpoint(method, endpoint string) error {
     return nil
 }

-func theHTTPresponseCodeShouldBe(arg1 string) error {
-    return godog.ErrPending
+func theHTTPresponseCodeShouldBe(expectedCode int) error {
+    if expectedCode != res.StatusCode {
+        return fmt.Errorf("status code not as expected! Expected '%d', got '%d'", expectedCode, res.StatusCode)
+    }
+    return nil
 }

-func theResponseContentShouldBe(arg1 string) error {
-    return godog.ErrPending
+func theResponseContentShouldBe(expectedContent string) error {
+    body, _ := ioutil.ReadAll(res.Body)
+    if expectedContent != string(body) {
+        return fmt.Errorf("status code not as expected! Expected '%s', got '%s'", expectedContent, string(body))
+    }
+    return nil
 }

 func InitializeScenario(ctx *godog.ScenarioContext) {
     ctx.Step(`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$`, aRequestIsSentToTheEndpoint)
-    ctx.Step(`^the HTTP-response code should be "([^"]*)"$`, theHTTPresponseCodeShouldBe)
+    ctx.Step(`^the HTTP-response code should be "(\d+)"$`, theHTTPresponseCodeShouldBe)
     ctx.Step(`^the response content should be "([^"]*)"$`, theResponseContentShouldBe)
 }
```

Hier lesen wir den HTTP Status Code und den Inhalt aus der HTTP Antwort und vergleichen die Werte mit den Erwartungen. Sollten die Resultate nicht mit den Erwartungen übereinstimmen, wird ein Fehler zurückgegeben.

_Randnotiz: Es ist wichtig, gute Fehlermeldungen auszugeben. Das Ziel einer Fehlermeldung ist es, dem Entwickler die Fehlersuche zu erleichtern. Die Ausgabe des Tests muss den Entwickler zum Fehler führen. Diese Tests sollen schließlich nicht nur in der Entstehungsphase des Projekts benutzt werden, sondern auch später, um Regressionen zu vermeiden._

Die kleine Änderung in der Regular-Expression in `InitializeScenario` stellt sicher, dass nur Zahlen als HTTP Status Code akzeptiert werden.

Die Ausgabe der Tests ist jetzt:
```feature
...
  Scenario: converting a valid BS date # bs-to-ad-conversion.feature:6
    Then the HTTP-response code should be "200" # bs-to-ad-conversion.feature:8
      Error: status code not as expected! Expected '200', got '404'

  Scenario: converting an invalid BS date # bs-to-ad-conversion.feature:11
    Then the HTTP-response code should be "400" # bs-to-ad-conversion.feature:13
      Error: status code not as expected! Expected '400', got '404'


2 scenarios (2 failed)
6 steps (2 passed, 2 failed, 2 skipped)
1.766438ms
```

Das war zu erwarten; `/ad-from-bs/` existiert noch nicht. Es ist an der Zeit, die API an sich zu implementieren.

Hier die Änderungen in `main.go` für eine einfache Konvertierung eines Bikram Sambat Datums in ein gregorianisches Datum:

```diff
index ae01ed0..06299b0 100644
--- a/main.go
+++ b/main.go
@@ -2,18 +2,34 @@ package main

 import (
        "fmt"
+       "github.com/JankariTech/GoBikramSambat"
        "github.com/gorilla/mux"
        "log"
        "net/http"
+       "strconv"
+       "strings"
 )

+func getAdFromBs(w http.ResponseWriter, r *http.Request) {
+       vars := mux.Vars(r)
+       dateString := vars["date"]
+       var splitedDate = strings.Split(dateString, "-")
+       day, _ := strconv.Atoi(splitedDate[2])
+       month, _ := strconv.Atoi(splitedDate[1])
+       year, _ := strconv.Atoi(splitedDate[0])
+       date, _ := bsdate.New(day, month, year)
+       gregorianDate, _ := date.GetGregorianDate()
+       fmt.Fprintf(w, gregorianDate.Format("2006-01-02"))
+}
+
 func handleRequests() {
        myRouter := mux.NewRouter().StrictSlash(true)
        myRouter.HandleFunc("/", homePage)
+       myRouter.HandleFunc("/ad-from-bs/{date}", getAdFromBs)
        log.Fatal(http.ListenAndServe(":10000", myRouter))
 }
```

Die Änderung ist eigentlich recht simpel: das BS Datum in Tag, Monat und Jahr aufspalten und es an die fertige `GoBikramSambat` Bibliothek übergeben. (Die Bibliothek wird mit `go get github.com/JankariTech/GoBikramSambat` installiert)

Und damit funktioniert schon das erste Szenario:
```feature
...
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:34 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    could not send request Get "http://localhost:10000/ad-from-bs/60-13-01": EOF
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:34 -> theResponseContentShouldBe

--- Failed steps:

  Scenario: converting an invalid BS date # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bs-to-ad-conversion.feature:12
      Error: could not send request Get "http://localhost:10000/ad-from-bs/60-13-01": EOF


2 scenarios (1 passed, 1 failed)
6 steps (3 passed, 1 failed, 2 skipped)
2.035601ms
```

Mit ein paar kleinen Änderungen zur Behandlung von Fehlern sollte das zweite Scenario auch funktionieren:

```diff
index 8243aef..2850678 100644
--- a/main.go
+++ b/main.go
@@ -21,7 +21,11 @@ func getAdFromBs(w http.ResponseWriter, r *http.Request) {
     day, _ := strconv.Atoi(splitedDate[2])
     month, _ := strconv.Atoi(splitedDate[1])
     year, _ := strconv.Atoi(splitedDate[0])
-    date, _ := bsdate.New(day, month, year)
+    date, err := bsdate.New(day, month, year)
+    if err != nil {
+        http.Error(w, err.Error(), http.StatusBadRequest)
+        return
+    }
     gregorianDate, _ := date.GetGregorianDate()
     fmt.Fprintf(w, gregorianDate.Format("2006-01-02"))
 }


index b731d6d..9871219 100644
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -33,7 +33,7 @@ func theHTTPresponseCodeShouldBe(expectedCode int) error {

 func theResponseContentShouldBe(expectedContent string) error {
     body, _ := ioutil.ReadAll(res.Body)
-    if expectedContent != string(body) {
+    if expectedContent != strings.TrimSpace(string(body)) {
         return fmt.Errorf("status code not as expected! Expected '%s', got '%s'", expectedContent, string(body))
     }
     return nil
```

Sollte die Konvertierung nicht funktionieren, wird jetzt in `main.go` ein Fehler ausgegeben. In den Tests benutzen wir `TrimSpace`, weil `http.Error` ein `\n` an den Fehlertext hängt.

Nun sollten beide Szenarien grün sein:
```feature
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:34 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:34 -> theResponseContentShouldBe

2 scenarios (2 passed)
6 steps (6 passed)
1.343415ms
```

## Beispiel-Tabellen (Examples)
Um sicherzustellen, dass die Konvertierung richtig funktioniert, sollten wir noch mehr verschiedene Daten testen. Grundsätzlich sind beim Testen oft diese Dinge interessant:
- höchste und niedrigste möglichen Werte - da die [Umrechnung zwischen BS und AD auf Tabellen beruht](https://dev.to/jankaritech/demonstrating-tdd-test-driven-development-in-go-27b0), haben wir ein erstes Datum, das wir konvertieren können, und ein letztes; darüber hinaus ist keine Umrechnung möglich
- Übergänge - zwischen Monaten und Jahren
- andere besondere Fälle - Schaltjahre
- falsche Eingaben - dreizehnter Monat, 32ter Tag, usw.
- falsches Format - in unserem Fall z.b. `2012.12.03`

Wir könnten für jeden Fall ein eigenes Szenario schreiben, aber das würde zu vielen Wiederholungen führen und die Datei schnell unübersichtlich machen. Besser ist es, mit dem `Examples` Schlüsselwort Beispiel-Tabellen anzulegen:

```diff
index 33f5d6c..9003cff 100644
--- a/bs-to-ad-conversion.feature
+++ b/bs-to-ad-conversion.feature
@@ -3,10 +3,15 @@ Feature: convert dates from BS to AD using an API
   I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
   So that I have a simple way to convert BS to AD dates, that can be used in different apps

-  Scenario: converting a valid BS date
-    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
+  Scenario Outline: converting a valid BS date
+    When a "GET" request is sent to the endpoint "/ad-from-bs/<bs-date>"
     Then the HTTP-response code should be "200"
-    And the response content should be "2003-07-17"
+    And the response content should be "<ad-date>"
+    Examples:
+      | bs-date    | ad-date    |
+      | 2060-04-01 | 2003-07-17 |
+      | 2040-01-01 | 1983-04-14 |
+      | 2040-12-30 | 1984-04-12 |
```

Anstatt `Scenario` benutzen wir hier `Scenario Outline` als Schlüsselwort und am Ende des Szenarios ist eine Tabelle angefügt. Die Überschriften der Spalten werden als Variablennamen benutzt und in den Test-Schritten, in denen die Namen vorkommen, werden diese durch die Werte aus der Tabelle ersetzt.
Godog erstellt damit aus jeder Tabellenzeile ein separates Szenario.

## Zusammenfassung
1. Die gewünschten Erwartungen an die Software in Gherkin Syntax niederzuschreiben, kann die Kommunikation zwischen allen Beteiligten verbessern und damit die Chancen auf den Erfolg des Projekts drastisch verbessern.
2. Die Beschreibungen der Funktionen werden zur Dokumentation.
3. Zusätzlich können die gleichen Beschreibungen benutzt werden, um die Software automatisch zu testen.

Wir helfen gerne bei der Umstellung auf BDD und der Erstellung von automatischen Tests:
- https://www.jankaritech.com/
- https://www.linkedin.com/company/jankaritech/
