---
title: Einstieg in BDD (Behavior-driven development)
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: March 31, 2021
tags: testing, bdd, test
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/assets/BDDInGo/BDDInGoDe.png
---

In [Demonstrating TDD (Test-driven development) in Go](https://dev.to/jankaritech/demonstrating-tdd-test-driven-development-in-go-27b0) habe ich über TDD geschrieben und jetzt möchte ich zeigen wie BDD (Behavior-driven development) mit Go funktionieren kann.
In diesem Artikel gehe ich auf die Grundlagen von BDD ein und darauf, wie die Funktionen einer Applikation beschrieben werden. Der nächste Artikel wird dann technischer sein und sich darum drehen, wie man BDD Tests automatisch in einer Golang Umgebung laufen lässt.

Beide Artikel wurden bereits auf Englisch veröffentlicht [Demonstrating BDD (Behavior-driven development) in Go](https://dev.to/jankaritech/demonstrating-bdd-behavior-driven-development-in-go-1eci)

Anstatt BDD in Theorie zu beschreiben, werde ich praktische Beispiele benutzen, um die Prinzipien von BDD zu erklären.
Hier ein paar weiterführende Links zu BDD:
- ["Introducing BDD", by Dan North (2006)](http://blog.dannorth.net/introducing-bdd)
- [Wikipedia](https://en.wikipedia.org/wiki/Behavior-driven_development)
- ["The beginner's guide to BDD (behaviour-driven development)", By Konstantin Kudryashov, Alistair Stead, Dan North](https://inviqa.com/blog/bdd-guide)
- [Behaviour-Driven Development](https://cucumber.io/docs/bdd/)

Wenn du weitere gute Ressourcen kennst, poste sie bitte in den Kommentaren.

## Die Idee
Ich bin ein großer Fan davon, Dinge an anschaulichen Beispielen zu erklären. Daher habe ich in [Demonstrating TDD (Test-driven development) in Go](https://dev.to/jankaritech/demonstrating-tdd-test-driven-development-in-go-27b0) eine kleine Bibliothek gebaut, um Daten aus dem in Nepal benutzten Kalender (Bikram Sambat (BS), auch als Vikram Samvat bekannt) in gregorianische Daten umzuwandeln.
Diese Bibliothek verwende ich jetzt und baue eine API drumherum. (Das Projekt ist bei [github](https://github.com/JankariTech/bsDateServer) zu finden)

Man könnte diese "Anforderung" auch an einen Entwickler geben und sehen, was passiert. Bei einem solch kleinen Projekt kann das gut gehen, aber es kann auch viel schief laufen:
- die API wird sehr komplex
- die API kann Daten umwandeln, aber behandelt Fehler nicht richtig
- usw.

Wenn es schief läuft, werden viele Ressourcen verschwendet, Konflikte und Missverständnisse entstehen, usw. Es wäre also viel besser, die Anforderungen detaillierter aufzuschreiben, um das zu vermeiden. Dabei profitieren alle Beteiligten:

1. Als Kunde will man, dass die Applikation korrekt arbeitet (manchmal ohne zu wissen, was das genau bedeutet).
2. Als Entwickler will man genau das entwickeln, was gefordert ist (um Zeit zu sparen), und am Ende will man bezahlt werden.
3. Als Tester möchte man genau wissen, was zu testen ist und ob ein Verhalten ein Bug oder ein Feature ist.

Im Grunde genommen will man alle beteiligten Parteien (und es können mehr als die drei genannten sein) dazu bringen, ihre Erwartungen zu kommunizieren und sich auf das akzeptable Verhalten der Anwendung zu einigen. Und das ist die grundlegende Idee hinter BDD: die Kommunikation zwischen allen Beteiligten zu verbessern, um sicherzustellen, dass jeder weiß, worüber geredet wird.

Aber wie erreicht man das? Der Kunde könnte denken, dass eine Zeile zur Erklärung reicht: "API um Daten von BS zu AD und AD zu BS zu konvertieren". Der Manager möchte einen wasserdichten Vertrag und der Entwickler sagt: "Der Quellcode genügt als Dokumentation."
Eine gute Möglichkeit, das gemeinsame Verständnis zu verbessern, ist das Aufschreiben der Anforderungen in der Gherkin-Sprache. Gherkin ist eine teilstrukturierte Sprache, die so einfach ist, dass sogar eine Gurke sie verstehen kann.

## Wer will was und wozu erreichen
Im Hauptverzeichnis unseres Projekts erstellen wir als Erstes eine Datei mit dem Namen `bs-to-ad-conversion.feature`. In dieser Datei werden wir beschreiben, wie die Konvertierung in die eine Richtung funktionieren soll.
Jede Funktion sollte in einer eigenen Datei beschrieben werden.

_Randnotiz: es wird immer wieder darüber diskutiert, was eine Funktion / ein Feature ist. Konkret in unsrem Beispiel: Ist die Konvertierung in beide Richtungen ein oder zwei Features? Ist die Behandlung von Fehlern ein separates Feature oder ein Teil der Konvertierung? Wenn ich mir nicht sicher bin, ist die Lösung für mich oft einfach pragmatisch: Die Datei sollte nicht zu lang sein._

Wir fangen mit einer allgemeinen Beschreibung der Funktion an:
(Ich werde den Quellcode und die Feature-Dateien nicht übersetzen, sondern so zeigen, wie sie in GitHub abgespeichert sind. Aber Gherkin kann in jeder beliebigen Sprache verwendet werden. Je nachdem, was die gemeinsame Sprache der Beteiligten ist.)
```
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps
```

Diese Zeilen sind sehr wichtig, weil sie die Fragen beantworten WER WAS und WOFÜR erreichen möchte. Wenn es niemanden gibt, der die Funktion benutzen möchte, warum sollte man die Funktion dann implementieren? Wenn man nicht weiß, was gemacht werden soll, gibt es eigentlich nichts zu programmieren. Und wenn es keinen übergeordneten Zweck für die Funktion gibt, hat sie keinen Wert.
Falls die Beteiligten (Entwickler, Kunden, Manager, QA, usw.) diese drei Fragen nicht beantworten können, sollte niemand Zeit und Geld investieren, um die Funktion zu implementieren.

## Szenarien
Jede Funktion hat verschiedene Szenarien. Die Funktion "einen Artikel in den Warenkorb legen" in einem online shop kann diese Szenarien haben:
- einen Artikel in den Warenkorb legen, wenn der Benutzer angemeldet ist
- einen Artikel in den Warenkorb legen, wenn der Benutzer nicht angemeldet ist
- einen Artikel in den Warenkorb legen, wenn der Warenkorb leer ist
- einen Artikel in den Warenkorb legen, wenn sich schon Waren im Warenkorb befinden
- mehrere Artikel auf einmal in den Warenkorb legen
- usw.

Gut möglich, dass sich die Anwendung in jedem Szenario anders zu verhalten hat. Ist das spezifische Verhalten für einen der Beteiligten wichtig, dann sollte es auch beschrieben werden.

In Gherkin fängt jedes Szenario mit Schlüsselwort `Scenario` an und es folgt ein kurzer, frei wählbarer Text, der das Szenario beschreibt:

```
  Scenario: converting a valid BS date

  Scenario: converting an invalid BS date
```

## Given, When, Then
Als Nächstes müssen wir das gewünschte Verhalten der Anwendung in diesem Szenario beschreiben. Dafür kennt Gherkin drei Schlüsselwörter:
- **Given** - die Voraussetzungen für das Szenario
- **When** - die Aktion, die getestet werden soll
- **Then** - das gewünschte Ergebnis

Zusätzlich kennt Gherkin auch das **And** Schlüsselwort. Um die anderen Schlüsselwörter nicht zu wiederholen, kann man statt:
```
When doing A
When doing B
```

das `And` Schlüsselwort benutzen
 ```
 When doing A
 And doing B
 ```

In den meisten Fällen müssen irgendwelche Schritte ausgeführt werden, um die Anwendung in einen Zustand zu bringen, in dem die entsprechende Funktion getestet werden kann. Das kann z.B. das Anlegen von Benutzern oder das Navigieren zu einer bestimmten Stelle sein. Um die Anwendung in den testbaren Zustand zu bringen, wird das `Given` Schlüsselwort benutzt.
Für die Beispielanwendung in diesem Blog kommt mir da aber nichts in den Sinn, und so gehen wir jetzt weiter zum `When` Schlüsselwort.

Das `When` Schlüsselwort ist die Aktion die getestet werden soll.
```
  Scenario: converting a valid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"

  Scenario: converting an invalid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-13-01"
```

Was soll nun in den spezifischen Szenarien passieren? Was ist das Resultat, das der Benutzer beobachten kann? Wir benutzen das `Then` Schlüsselwort, um die Resultate zu beschreiben.

```
  Scenario: converting a valid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
    Then the HTTP-response code should be "200"
    And the response content should be "2003-07-17"

  Scenario: converting an invalid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01"
    Then the HTTP-response code should be "400"
    And the response content should be "not a valid date"
```

Damit haben wir alle Zutaten zusammen, um die Applikation zu beschreiben:
1. Funktionen - eine Funktion pro Datei.
2. Szenarien - verschiedene Weisen, wie die Funktion sich verhalten soll.
3. Schritte - detaillierte Beschreibung jedes Szenarios. Jeder Schritt startet mit `Given`, `When` oder `Then` als Schlüsselwort.

Die komplette Beschreibung muss in natürlicher Sprache verfasst sein. Alle Beteiligten müssen die Beschreibung verstehen können. Was das genau bedeutet, ist ein Thema für einen separaten Blogpost. In unserem Fall hat der "Kunde" eine API bestellt, also sind technische Ausdrücke wie "HTTP-response code" meiner Meinung nach in Ordnung. Die Beschreibung einer grafischen Benutzeroberfläche würde wahrscheinlich weniger technische Begriffe enthalten. Grundsätzlich gilt: Benutze Worte die alle Beteiligten verstehen. BDD ist schließlich hauptsächlich dazu da, die Kommunikation zu verbessern.

Für weitere Informationen, wie die Schritte formuliert werden sollen, siehe: https://cucumber.io/docs/gherkin/reference/

Nachdem eine Funktion oder auch nur ein Szenario beschrieben wurde, kann die Entwicklung starten. In SCRUM-Sprache: jedes Feature ist eine user-story. Der ganze agile Zyklus funktioniert damit. Diese Beschreibung ist nicht nur die To-Do-Liste für die Entwicklung, sondern auch das Testprozedere für die Qualitätssicherung und sie dient auch als Dokumentation.

Im zweiten Teil des Blogs tauchen wir dann in die technischen Details ein und benutzen die Feature-Dateien, um die Anwendung automatisch zu testen.
