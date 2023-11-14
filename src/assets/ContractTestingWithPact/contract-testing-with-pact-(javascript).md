---
title: Contract testing with Pact (JavaScript)
authorName: Sawjan Gurung
authorAvatar: https://avatars.githubusercontent.com/u/52366632?v=4
authorLink: https://github.com/saw-jan
createdAt: Aug 24, 2021
tags: pactjs, testing, javascript
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/assets/ContractTestingWithPact/images/header.png
---
Contract testing is a software testing technique used to test the integration points and interfaces between different software applications. The main goal of contract testing is to test each application in isolation and ensure that they are compatible with a shared contract.

Consumer-driven contract testing is simply a contract testing approach in which a consumer sets the list of expectations as a contract and expects a provider to be compatible with that contract.

#### Pact

> Pact is a code-first tool for testing HTTP and message integrations using contract tests.

For more information, see [docs.pact.io](https://docs.pact.io/)

In this blog post, I will focus on how to test HTTP integrations using Pact. The following diagram shows the overview of how Pact works:

![Pact Workflow](/src/assets/ContractTestingWithPact/images/pactworkflow.png)

_Overview of How Pact Works_

For a step-by-step explanation, please refer to [How Pact works](https://pactflow.io/how-pact-works/?utm_source=ossdocs&utm_campaign=getting_started#slide-1).

Pact is available in more than 10 programming languages. See [here](https://docs.pact.io/implementation_guides) for supported programming languages. In this blog post, I will focus on the **JavaScript** implementation of Pact.

### Writing Tests with PactJs (Consumer Side)

Let's assume that you have a web application that gets the earth's total population from an API server, and you want to test that application without having to actually communicate with the real server. This is where _Pact_ comes in.

Before writing any tests, you need to have a working web application. Let's create one.

Install _axios_: required to make HTTP requests

```bash
npm i axios@0.21.1
```

Create a _client.js_ file inside a _src_ folder and write the following code:

```js
// src/client.js

const axios = require('axios');

function Earth(api_server_url) {
  this.AXIOS = axios.create({ baseURL: api_server_url });

  this.getTotalPopulation = function () {
    return this.AXIOS.get('/population').then((res) => res.data);
  };
}

module.exports = Earth;
```

Now, we are ready to write some tests.

#### Installation

We will be using `PactV3` with `Jest` in this example.
Install _PactV3_ and _Jest_ using the following command:

```bash
npm i -D @pact-foundation/pact@10.0.0-beta.44 jest@27.0.6
```

#### Writing Tests

Create _client.spec.js_ file inside a _tests_ folder. This _spec_ file is our test file.

The test looks like this:

> Note: The following example may or may not work with the latest version of the above packages

```js
// tests/client.spec.js

const path = require('path');
const Earth = require('../src/client');
const { PactV3, MatchersV3 } = require('@pact-foundation/pact');

describe('Test', () => {
  // pact mock server url
  const mock_port = 1234;
  const mock_server_url = 'http://127.0.0.1:' + mock_port;

  // pact instance
  const provider = new PactV3({
    consumer: 'web_server',
    provider: 'api_server',
    port: mock_port,
    dir: path.resolve(process.cwd(), 'tests', 'pacts'),
  });

  it('test: getTotalPopulation', () => {
    // interaction
    provider
      .uponReceiving("a GET request to get total earth's population")
      .withRequest({
        method: 'GET',
        path: '/population',
      })
      .willRespondWith({
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          population: MatchersV3.number(7794798739),
        },
      });

    return provider.executeTest(() => {
      const earth = new Earth(mock_server_url);
      return earth
        .getTotalPopulation()
        .then((res) => {
          expect(res.population).toBe(7794798739);
        })
        .catch((err) => {
          expect(err).toBeNull();
        });
    });
  });
});
```

In the above test, firstly, we created the pact instance with mandatory options except port (if the port is not provided, the mock server will run on a random port). Then, we added the interaction that we want to test.

During the test run, the test function `getTotalPopulation` will send the expected request to the mock server.

```js
.withRequest({
    method: 'GET',
    path: '/population',
})
```

And the mock server will respond with the expected response.

```js
.willRespondWith({
    status: 200,
    headers: {
        'Content-Type': 'application/json',
    },
    body: {
        population: MatchersV3.number(7794798739),
    },
})
```

`MatchersV3` provides a set of matchers that can be used to check the response. For detailed information, please read [Using the V3 matching rules](https://github.com/pact-foundation/pact-js/tree/feat/v3.0.0#using-the-v3-matching-rules)

It is important to note that the test function call and assertions should be done within the callback block of `executeTest`. Function `executeTest` is responsible for starting and, stopping the mock server and also for writing the pact file.

Now, as you have your first test, you can run the test using the following command:

```bash
npx jest tests/client.spec.js
```

Result:
![Consumer test result](/src/assets/ContractTestingWithPact/images/consumer_test.png)

When a test run exits with success, it will generate a json file (i.e. pact or contract file) inside the _pacts_ folder which is later used to verify the provider.

### Verifying the Provider (Provider Side)

You have written tests for your web application. But now, you also need to verify that your API server returns the expected response as per the contract. As I have mentioned above, you need a pact file (contract) to verify the provider (API server).

Let's create a simple API server using _express_ which will only respond to the `/population` endpoint.

Install _express_ with the following command:

```bash
npm i express@4.17.1
```

Create a `server.js` file inside a _src_ folder and write the following code:

```js
// src/server.js

const express = require('express');
const app = express();
const port = 5000;

app.get('/population', (req, res) => {
  res.append('Content-Type', 'application/json').status(200).send({
    populatioin: 123456789,
  });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

To run the server, run the following command:

```bash
node src/server
```

Now the API server is up and running, let's write a test file to verify the contract against the provider.

```js
// tests/server.spec.js

const { VerifierV3 } = require('@pact-foundation/pact');
const path = require('path');
const assert = require('assert');

describe('Pact Verification', () => {
  it('verifies the provider', () => {
    const options = {
      provider: 'api_server',
      providerBaseUrl: 'http://localhost:5000',
      disableSSLVerification: true,
      pactUrls: [
        path.resolve(
          process.cwd(),
          'tests',
          'pacts',
          'web_server-api_server.json'
        ),
      ],
    };

    return new VerifierV3(options)
      .verifyProvider()
      .then((output) => {
        console.log('Pact Verification Complete!');
        console.log('Result:', output);
      })
      .catch(function (error) {
        console.log(error);
        assert.fail();
      });
  });
});
```

The important things to note in the above test are:

- `providerBaseUrl`: This is the URL of the API server.

- `pactUrls`: This is the path to the pact file. The pact file is generated by the consumer side tests.

Run the provider verification test using the following command:

```bash
npx jest tests/server.spec.js
```

Result:
![Provider test result](/src/assets/ContractTestingWithPact/images/provider_test.png)

Congratulations! You have successfully written your first consumer-driven contract test and provider verification test using _Pact_.
