---
title: BDD on Software Rewrite
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Feb 15, 2021
tags: bdd, testing
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/assets/BDDOnRewrite/BDDOnRewrite.jpg
seriesTitle: Behaviour Driven Development
episode: 3
---

Imagine you have an application, it works great, but you need to rewrite it, maybe because the architecture is hitting some ceiling. There will be new features, but first, you need to make sure all the existing clients work with the new system. How do you make sure they do? It's simple: You need tests, tests that check the external behavior of the application. So if you have invested in a good UI and API test infrastructure in the first place, it's a relatively easy task. You can even do Behavior Driven Development while writing the new system without having to write new tests.

Let me show how it works at ownCloud. They are exactly in that situation, they have a stable and great product (ownCloud X written in PHP) but want to rewrite it in Go - OCIS (you can read about the reasons and background [here](https://owncloud.com/infinite-scale/)).
We as JankariTech have been working since 2017 for ownCloud to improve the test infrastructure, increase the coverage and reduce manual testing effort. As a result of this partnership, ownCloud has a huge API and UI test-suite that covers nearly all functionality of ownCloud X. How do you transfer that over to OCIS?

## Setup of the System under Test

We haven't started to use the API & UI tests from the first day of development, but only after there has been a bare minimum of functionalities implemented in OCIS. To run the tests, the first challenge was how to provision the system. The goal is to have feature parity, but of course OCIS did lack a lot of functionality at that stage of development, including APIs to create and delete users, set system relevant settings, etc. Additionally, to run tests in ownCloud X, we heavily rely on the command-line tool to bring the system into a testable state. There is no equivalent (yet) in OCIS. The solution to those challenges was to extend the test-code to do slightly different things on both systems. E.g. OCIS would get users from an LDAP server, in ownCloud X we would provision users and groups through the [provisioning api](https://doc.owncloud.com/server/developer_manual/core/apis/provisioning-api.html#instruction-set-for-users). Luckily, we had the LDAP code already in the test-suite from testing the [ownCloud LDAP app](https://github.com/owncloud/user_ldap).

Those different code paths should be reduced to the setup of the SUT (System Under Test) - in Gherkin speak: Given - steps.
All external behavior that needs to be tested and examined should be the same on both systems, the goal is to reach feature parity at some point.

By now a lot of the provisioning API is also implemented in OCIS, so we could switch off the provisioning by LDAP.

## Failing tests

Of course, at the beginning, most of the tests would fail on OCIS, the application is not ready and does not claim to be ready. We started with skipping the failing tests and running only the tests that we knew would pass on OCIS. That way we got green CI and still prevented regressions. It was never an option to have CI failing because "we know those tests are allowed to fail." In that case, the developers would have to check manually which tests are allowed to fail and which not. People would forget to do that or make wrong decisions about what is an expected failure and what not. Most important: red CI looks ugly on a pull request or worse a merge and is an embarrassment. 🙈

Simply skipping failing tests also had big disadvantages. To make sure the test coverage is increased with every new feature added, the developer needs to know all the tests related to that feature and run them during or after the development. Or someone needs to run the skipped tests on a regular basis to see which of them started to pass and enable them. Both approaches are not practical because of 1. the laziness of human beings and 2. the number of tests.

A lot of test frameworks have a feature that allows some specific tests to fail without failing the entire test-run. We took that idea further and implemented an "expected to fail" feature in CI. Tests listed in the expected-to-fail list **have** to fail, if they start to pass the CI run will fail.

The advantage of that above just a simple "these tests are allowed to fail" is that, after adding a feature or fixing a bug, the developer is forced to look into the tests. If tests start to pass, the only job the developer has to do is to remove them from the expected-to-fail list, [and what a joy is that](https://github.com/cs3org/reva/pull/1368#issuecomment-754179433) 🎉.
From that point on, the test has to pass in all future runs, and we are sure not to introduce any regressions. If we only had an allowed-to-fail list, there would be no pressure to remove tests from that list, humans are humans, so they would forget or miss some. Potentially, a bug could get fixed, then see some regression again and none of that would be noticed by the test-suite. So let the computers do what they are good at - automate!

## human-readable code

To improve the readability of the expected-to-fail list, it got converted from a TXT file to an MD file. If you browse now the [list](https://github.com/owncloud/ocis/blob/master/tests/acceptance/expected-failures-API-on-OCIS-storage.md) you can jump directly to the issue report, to see WHY this particular tests fails, and you can jump to the test itself, to see WHAT exactly it does.

## BDD for rewrite

With all that in place the developers
1. can use the existing test-suites for Behavior Driven Development while rewriting the whole system.
1. know what features are missing and how far they are on the way to feature parity
1. don't need to rewrite all the tests for the new system
1. are safe from regressions for already implemented features

The only job left is to reduce the number of expected-to-fail tests to 0, how hard can that be? 😜
