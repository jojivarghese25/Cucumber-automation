$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("customer.feature");
formatter.feature({
  "line": 1,
  "name": "Testing the API\u0027s",
  "description": "",
  "id": "testing-the-api\u0027s",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Get Subscribed customer details",
  "description": "",
  "id": "testing-the-api\u0027s;get-subscribed-customer-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I create a new request with http://apiops1-anypoint-bdd-sapi.us-e2.cloudhub.io/api/ service",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I add the users/registerUser/subscription endpoint to the service",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I send the GET request to the service",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I get the 200 response code",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://apiops1-anypoint-bdd-sapi.us-e2.cloudhub.io/api/",
      "offset": 28
    }
  ],
  "location": "CustomerStepDefinition.createNewRequest(String)"
});
formatter.result({
  "duration": 111029700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users/registerUser/subscription",
      "offset": 10
    }
  ],
  "location": "CustomerStepDefinition.addEndpoint(String)"
});
formatter.result({
  "duration": 106100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 11
    }
  ],
  "location": "CustomerStepDefinition.sendRequest(String)"
});
formatter.result({
  "duration": 2335872100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 10
    }
  ],
  "location": "CustomerStepDefinition.responseCodeValidation(int)"
});
formatter.result({
  "duration": 14772800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Register Customer",
  "description": "",
  "id": "testing-the-api\u0027s;register-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I create a new request with http://apiops1-anypoint-bdd-sapi.us-e2.cloudhub.io/api/ service",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I add the users/registerUser endpoint to the service",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I pass application/json as content type",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I send the values of src/test/resources/cucumberResources/registerCustomerInput.json in the request body",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I send the POST request to the service",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get the 201 response code",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I expect the values of src/test/resources/cucumberResources/registerCustomerOutput.json in the response body",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://apiops1-anypoint-bdd-sapi.us-e2.cloudhub.io/api/",
      "offset": 28
    }
  ],
  "location": "CustomerStepDefinition.createNewRequest(String)"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users/registerUser",
      "offset": 10
    }
  ],
  "location": "CustomerStepDefinition.addEndpoint(String)"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 7
    }
  ],
  "location": "CustomerStepDefinition.setContentType(String)"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src/test/resources/cucumberResources/registerCustomerInput.json",
      "offset": 21
    }
  ],
  "location": "CustomerStepDefinition.setRequestBody(String)"
});
formatter.result({
  "duration": 117006300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 11
    }
  ],
  "location": "CustomerStepDefinition.sendRequest(String)"
});
formatter.result({
  "duration": 1310503200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 10
    }
  ],
  "location": "CustomerStepDefinition.responseCodeValidation(int)"
});
formatter.result({
  "duration": 459600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src/test/resources/cucumberResources/registerCustomerOutput.json",
      "offset": 23
    }
  ],
  "location": "CustomerStepDefinition.responseAttributeValidation(String)"
});
formatter.result({
  "duration": 239654400,
  "status": "passed"
});
});