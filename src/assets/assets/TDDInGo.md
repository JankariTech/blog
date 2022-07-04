---
    title: TDD in Go
    authorName: Kiran Parajuli
    authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
    authorLink: https://github.com/kiranparajuli589/
    createdAt: 02/10/2022
    tags: vue, jest, unit, testing
    banner: https://res.cloudinary.com/practicaldev/image/fetch/s--t1Oxkc_O--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ffkifasq4al1c75uculu.png
---
# Demonstrating TDD (Test-driven development) in Go

TDD is the practice to write tests before code and it should reduce failure rates and defects in your software.
In this blog-post I want to demonstrate how it can work.

## starting point
I'm writing an application in Go that should convert Bikram Sambat (BS) (also called Vikram Samvat) dates to Gregorian dates and vice-versa. [Vikram Samvat](https://en.wikipedia.org/wiki/Vikram_Samvat) is a calendar used mostly in Nepal and India. But even if you don't use it, this demonstration might be useful for you to understand TDD.

So far I have done a bit of work that makes it possible to create a BS (Bikram Sambat) date instance, to get its details and to convert it to a Gregorian date. See: https://github.com/JankariTech/GoBikramSambat/blob/b99c510b22faf8395becda9a6dec1d0239504bb1/bsdate.go

These functions are also tested: https://github.com/JankariTech/GoBikramSambat/blob/b99c510b22faf8395becda9a6dec1d0239504bb1/bsdate_test.go

Now I want to add the possibility to convert a Gregorian date to a Bikram Sambat date. To do so, I want to be able to create a BS-date-instance by using a Gregorian date, then I could just get the BS-date details and the conversion is done.

Something like `nepaliDate, err := NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear)` would be great and then simply use the existing `nepaliDate.GetDay()` `nepaliDate.GetMonth()` and `nepaliDate.GetYear()`

## 1. create the test
According to TDD I first have to create a test.
So in the file `bsdate_test.go` I create a new function called `TestCreateFromGregorian()`.
As I already have a table of test-dates that are used for the conversion from Nepali to Gregorian I will use that data also to test the reverse conversion.

Here is the test data and the test function:

```
type TestDateConversionStruc struct {
	bsDate        string
	gregorianDate string
}

var convertedDates = []TestDateConversionStruc{
	{"2068-04-01", "2011-07-17"}, //a random date
	{"2068-01-01", "2011-04-14"}, //1st Baisakh
	{"2037-11-28", "1981-03-11"},
	{"2038-09-17", "1982-01-01"}, //1st Jan
	{"2040-09-17", "1984-01-01"}, //1st Jan in a leap year
...
}

func TestCreateFromGregorian(t *testing.T) {
	for _, testCase := range convertedDates {
		t.Run(testCase.bsDate, func(t *testing.T) {
			var splitedBSDate = strings.Split(testCase.bsDate, "-")
			var expectedBsDay, _ = strconv.Atoi(splitedBSDate[2])
			var expectedBsMonth, _ = strconv.Atoi(splitedBSDate[1])
			var expectedBsYear, _ = strconv.Atoi(splitedBSDate[0])

			var splitedGregorianDate = strings.Split(testCase.gregorianDate, "-")
			var gregorianDay, _ = strconv.Atoi(splitedGregorianDate[2])
			var gregorianMonth, _ = strconv.Atoi(splitedGregorianDate[1])
			var gregorianYear, _ = strconv.Atoi(splitedGregorianDate[0])

			nepaliDate, err := NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear)
			assert.Equal(t, err, nil)
			assert.Equal(t, nepaliDate.GetDay(), expectedBsDay)
			assert.Equal(t, nepaliDate.GetMonth(), expectedBsMonth)
			assert.Equal(t, nepaliDate.GetYear(), expectedBsYear)
		})
	}
}
```

The function takes entries from the `convertedDates` list, splits them, tries to create a BS date out of the particular gregorian test-case and then asserts that the BS date (day, month, year) is as expected.

## 2. run the tests
The test is done, according to TDD I have to run it.

`go test -v`

results in:

```
# NepaliCalendar/bsdate [NepaliCalendar/bsdate.test]
./bsdate_test.go:171:23: undefined: NewFromGregorian
FAIL	NepaliCalendar/bsdate [build failed]
```

That was expected, the function does not exist, no wonder my tests fail. What to do next? Guess what: implement the function.
That makes TDD so easy, you just do what the tests tell you to fix.

## 3. fix it
That's easy, add to `bsdate.go` a new function:
```
func NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear int) (Date, error) {

}
```

## 4. repeat
running the tests again I get:

`./bsdate.go:195:1: missing return at end of function`

That is true, let's return something, but what? Hey let's just create a BS date with the Gregorian numbers
```diff
 func NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear int) (Date, error) {
-
+       return New(gregorianDay, gregorianMonth, gregorianYear)
 }
```

You are saying that will not work? I don't care, I do TDD, the test tells me to return something, and I do return, I even return the correct type of value.

lets run the tests again:
```
=== RUN   TestCreateFromGregorian/2068-04-01
	assert.go:24: got '17' want '1'

	assert.go:24: got '7' want '4'

	assert.go:24: got '2011' want '2068'

=== RUN   TestCreateFromGregorian/2068-01-01
	assert.go:24: got '14' want '1'

	assert.go:24: got '4' want '1'

	assert.go:24: got '2011' want '2068'

....
```

a lot of failures, you have guessed it, the conversion does not work. So lets implement some bits.

We know that BS is 56 point something years ahead of Gregorian. So adding 56 to the gregorian year should help:
```diff
 func NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear int) (Date, error) {
-       return New(gregorianDay, gregorianMonth, gregorianYear)
+       var bsYear = gregorianYear + 56
+       return New(gregorianDay, gregorianMonth, bsYear)
 }
```

test results look better, instead of

```
....
=== RUN   TestCreateFromGregorian/2037-11-28
	assert.go:24: got '11' want '28'

	assert.go:24: got '3' want '11'

	assert.go:24: got '1981' want '2037'

=== RUN   TestCreateFromGregorian/2038-09-17
	assert.go:24: got '1' want '17'

	assert.go:24: got '1' want '9'

	assert.go:24: got '1982' want '2038'
....
```
I get:

```
....
=== RUN   TestCreateFromGregorian/2037-11-28
	assert.go:24: got '11' want '28'

	assert.go:24: got '3' want '11'

=== RUN   TestCreateFromGregorian/2038-09-17
	assert.go:24: got '1' want '17'

	assert.go:24: got '1' want '9'
....
```

So some years are calculated correctly, at least. Lets fix more tests by calculating the years more accurate and also calculate the BS month.

Because of the way the BS-calendar works, there is no algorithm to convert the date directly from the Gregorian calendar, we need a table. We know that Jan 1st falls always in the 9th BS month (Paush). So we have a table of BS years where the first value is the day in Paush that is the 1st Jan in that year, then a list of days of every BS month.
We can easily get the day-of-year from the gregorian date. Starting from Paush, we count the days of each BS month, whenever we get over the gregorian day-of-year, we found the correct BS month.
```
2074: [13]int{17, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30},
2075: [13]int{17, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30},
2076: [13]int{16, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30},
2077: [13]int{17, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31},
2078: [13]int{17, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30},
```

These details have nothing to do with TDD, but help you to understand the coming algorithm.

lets put it into code:
```diff
 func NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear int) (Date, error) {
        var bsYear = gregorianYear + 56
-       return New(gregorianDay, gregorianMonth, bsYear)
+       var bsMonth = 9                         //Jan 1 always fall in BS month Paush which is the 9th month
+       var daysSinceJanFirstToEndOfBsMonth int //days calculated from 1st Jan till the end of the actual BS month,
+                                               // we use this value to check if the gregorian Date is in the actual BS month
+
+       year := time.Date(gregorianYear, time.Month(gregorianMonth), gregorianDay, 0, 0, 0, 0, time.UTC)
+       var gregorianDayOfYear = year.YearDay()
+
+       //get the BS day in Paush (month 9) of 1st January
+       var dayOfFirstJanInPaush = calendardata[bsYear][0]
+
+       //check how many days are left of Paush
+       daysSinceJanFirstToEndOfBsMonth = calendardata[bsYear][bsMonth] - dayOfFirstJanInPaush + 1
+
+       //If the gregorian day-of-year is smaller or equal to the sum of days between the 1st January and
+       //the end of the actual BS month we found the correct nepali month.
+       //Example:
+       //The 4th February 2011 is the gregorianDayOfYear 35 (31 days of January + 4)
+       //1st January 2011 is in the BS year 2067 and its the 17th day of Paush (9th month)
+       //In 2067 Paush had 30days, This means (30-17+1=14) there are 14days between 1st January and end of Paush
+       //(including 17th January)
+       //The gregorianDayOfYear (35) is bigger than 14, so we check the next month
+       //The next BS month (Mangh) has 29 days
+       //29+14=43, this is bigger than gregorianDayOfYear(35) so, we found the correct nepali month
+       for ; gregorianDayOfYear > daysSinceJanFirstToEndOfBsMonth; {
+               bsMonth++
+               if bsMonth > 12 {
+                       bsMonth = 1
+                       bsYear++
+               }
+               daysSinceJanFirstToEndOfBsMonth += calendardata[bsYear][bsMonth]
+       }
+
+       return New(gregorianDay, bsMonth, bsYear)
 }
```

and now? You guessed it! Run the tests:
```
=== RUN   TestCreateFromGregorian
=== RUN   TestCreateFromGregorian/2068-04-01
	assert.go:24: got '17' want '1'

=== RUN   TestCreateFromGregorian/2068-01-01
	assert.go:24: got '14' want '1'

=== RUN   TestCreateFromGregorian/2037-11-28
	assert.go:24: got '11' want '28'

....
```

Actually, while implementing the algorithm I've run the tests multiple times and found mistakes in mixed-up variable names and other rubbish. That's cool, the tests helped me to find the issues right away.

But the tests still fail, I better get the day calculation correct.
We know the correct BS month, and we know the days since 1st Jan till the end of this month. Subtracting the day-of-the-year of the gregorian calendar from the days since 1st Jan till the end of the correct BS month will give us the amount of days between the searched day and the end of the BS month. Subtracting that number from the amount of days in the BS month should bring us to the correct date.

So many words to describe it, so little effort to write it in code:
```diff
-       return New(gregorianDay, bsMonth, bsYear)
+       var bsDay = calendardata[bsYear][bsMonth] - (daysSinceJanFirstToEndOfBsMonth - gregorianDayOfYear)
+
+       return New(bsDay, bsMonth, bsYear)
```

I hear you shouting: "Run the tests, run the tests!" Don't worry, I will:
```
=== RUN   TestCreateFromGregorian
=== RUN   TestCreateFromGregorian/2068-04-01
=== RUN   TestCreateFromGregorian/2068-01-01
=== RUN   TestCreateFromGregorian/2037-11-28
=== RUN   TestCreateFromGregorian/2038-09-17
=== RUN   TestCreateFromGregorian/2040-09-17
=== RUN   TestCreateFromGregorian/2040-09-18
=== RUN   TestCreateFromGregorian/2041-09-17
=== RUN   TestCreateFromGregorian/2041-09-18
=== RUN   TestCreateFromGregorian/2068-09-01
=== RUN   TestCreateFromGregorian/2068-08-29
=== RUN   TestCreateFromGregorian/2068-09-20
=== RUN   TestCreateFromGregorian/2077-08-30
=== RUN   TestCreateFromGregorian/2077-09-16
=== RUN   TestCreateFromGregorian/2074-09-16
=== RUN   TestCreateFromGregorian/2077-09-17
=== RUN   TestCreateFromGregorian/2077-09-01
=== RUN   TestCreateFromGregorian/2076-11-17
=== RUN   TestCreateFromGregorian/2076-11-18
=== RUN   TestCreateFromGregorian/2075-11-16
=== RUN   TestCreateFromGregorian/2076-02-01
=== RUN   TestCreateFromGregorian/2076-02-32
=== RUN   TestCreateFromGregorian/2076-03-01
--- PASS: TestCreateFromGregorian (0.00s)
    --- PASS: TestCreateFromGregorian/2068-04-01 (0.00s)
    --- PASS: TestCreateFromGregorian/2068-01-01 (0.00s)
    --- PASS: TestCreateFromGregorian/2037-11-28 (0.00s)
    --- PASS: TestCreateFromGregorian/2038-09-17 (0.00s)
    --- PASS: TestCreateFromGregorian/2040-09-17 (0.00s)
    --- PASS: TestCreateFromGregorian/2040-09-18 (0.00s)
    --- PASS: TestCreateFromGregorian/2041-09-17 (0.00s)
    --- PASS: TestCreateFromGregorian/2041-09-18 (0.00s)
    --- PASS: TestCreateFromGregorian/2068-09-01 (0.00s)
    --- PASS: TestCreateFromGregorian/2068-08-29 (0.00s)
    --- PASS: TestCreateFromGregorian/2068-09-20 (0.00s)
    --- PASS: TestCreateFromGregorian/2077-08-30 (0.00s)
    --- PASS: TestCreateFromGregorian/2077-09-16 (0.00s)
    --- PASS: TestCreateFromGregorian/2074-09-16 (0.00s)
    --- PASS: TestCreateFromGregorian/2077-09-17 (0.00s)
    --- PASS: TestCreateFromGregorian/2077-09-01 (0.00s)
    --- PASS: TestCreateFromGregorian/2076-11-17 (0.00s)
    --- PASS: TestCreateFromGregorian/2076-11-18 (0.00s)
    --- PASS: TestCreateFromGregorian/2075-11-16 (0.00s)
    --- PASS: TestCreateFromGregorian/2076-02-01 (0.00s)
    --- PASS: TestCreateFromGregorian/2076-02-32 (0.00s)
    --- PASS: TestCreateFromGregorian/2076-03-01 (0.00s)
PASS
ok  	NepaliCalendar/bsdate	0.002s
```

The tests pass, job done! Commit it, push it and get yourself some [Chiya](https://www.youtube.com/watch?v=LO0k9rmKneI)!

You can find all the changes of this post here: https://github.com/JankariTech/GoBikramSambat/pull/4/

## conclusion
TDD is easy: think about what you want to achieve, write tests for it and wildly hack code till your tests pass.

An other big advantage is: I can refactor my code all I like and still be confident it works fine. Maybe I want to optimize the speed of the algorithm, maybe I don't like it altogether and come up with a better one, or I simply want to change variable names. I can do that all without fear of messing up the functionality, as long as my tests are passing I'm pretty sure the code reacts the same.
