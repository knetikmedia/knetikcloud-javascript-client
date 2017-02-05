# KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi

All URIs are relative to *https://integration.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChallengeActivityUsingPOST**](CampaignsChallengesApi.md#createChallengeActivityUsingPOST) | **POST** /challenges/{challenge_id}/activities | Create a challenge activity
[**createChallengeTemplateUsingPOST**](CampaignsChallengesApi.md#createChallengeTemplateUsingPOST) | **POST** /challenges/templates | Create a challenge template
[**createChallengeUsingPOST**](CampaignsChallengesApi.md#createChallengeUsingPOST) | **POST** /challenges | Create a challenge
[**deleteChallengeActivityUsingDELETE**](CampaignsChallengesApi.md#deleteChallengeActivityUsingDELETE) | **DELETE** /challenges/{challenge_id}/activities/{activity_id} | Delete a challenge activity
[**deleteChallengeEventUsingDELETE**](CampaignsChallengesApi.md#deleteChallengeEventUsingDELETE) | **DELETE** /challenges/events/{id} | Delete a challenge event
[**deleteChallengeTemplateUsingDELETE**](CampaignsChallengesApi.md#deleteChallengeTemplateUsingDELETE) | **DELETE** /challenges/templates/{id} | Delete a challenge template
[**deleteChallengeUsingDELETE**](CampaignsChallengesApi.md#deleteChallengeUsingDELETE) | **DELETE** /challenges/{id} | Delete a challenge
[**getActivitiesUsingGET1**](CampaignsChallengesApi.md#getActivitiesUsingGET1) | **GET** /challenges/{challenge_id}/activities | List and search challenge activities
[**getChallengeActivityUsingGET**](CampaignsChallengesApi.md#getChallengeActivityUsingGET) | **GET** /challenges/{challenge_id}/activities/{activity_id} | Get a single challenge activity
[**getChallengeEventUsingGET**](CampaignsChallengesApi.md#getChallengeEventUsingGET) | **GET** /challenges/events/{id} | Retrieve a single challenge event details
[**getChallengeEventssUsingGET**](CampaignsChallengesApi.md#getChallengeEventssUsingGET) | **GET** /challenges/events | Retrieve a list of challenge events
[**getChallengeTemplateUsingGET**](CampaignsChallengesApi.md#getChallengeTemplateUsingGET) | **GET** /challenges/templates/{id} | Get a single challenge template
[**getChallengeTemplatesUsingGET**](CampaignsChallengesApi.md#getChallengeTemplatesUsingGET) | **GET** /challenges/templates | List and search challenge templates
[**getChallengeUsingGET**](CampaignsChallengesApi.md#getChallengeUsingGET) | **GET** /challenges/{id} | Retrieve a single challenge details
[**getChallengesUsingGET1**](CampaignsChallengesApi.md#getChallengesUsingGET1) | **GET** /challenges | Retrieve a list of challenges
[**updateChallengeActivityUsingPUT**](CampaignsChallengesApi.md#updateChallengeActivityUsingPUT) | **PUT** /challenges/{challenge_id}/activities/{activity_id} | Update a challenge activity
[**updateChallengeTemplateUsingPUT**](CampaignsChallengesApi.md#updateChallengeTemplateUsingPUT) | **PUT** /challenges/templates/{id} | Update a challenge template
[**updateChallengeUsingPUT**](CampaignsChallengesApi.md#updateChallengeUsingPUT) | **PUT** /challenges/{id} | Update a challenge&#39;s information


<a name="createChallengeActivityUsingPOST"></a>
# **createChallengeActivityUsingPOST**
> ChallengeActivityResource createChallengeActivityUsingPOST(challengeId, opts)

Create a challenge activity

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var challengeId = 789; // Number | The challenge id

var opts = { 
  'challengeActivityResource': new KnetikPlatformApiDocumentationLatest.ChallengeActivityResource(), // ChallengeActivityResource | The challenge activity resource object
  'validateSettings': false // Boolean | Whether to validate the settings being sent against the available settings on the base activity.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createChallengeActivityUsingPOST(challengeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **challengeId** | **Number**| The challenge id | 
 **challengeActivityResource** | [**ChallengeActivityResource**](ChallengeActivityResource.md)| The challenge activity resource object | [optional] 
 **validateSettings** | **Boolean**| Whether to validate the settings being sent against the available settings on the base activity. | [optional] [default to false]

### Return type

[**ChallengeActivityResource**](ChallengeActivityResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createChallengeTemplateUsingPOST"></a>
# **createChallengeTemplateUsingPOST**
> TemplateResource createChallengeTemplateUsingPOST(opts)

Create a challenge template

Challenge Templates define a type of challenge and the properties they have

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var opts = { 
  'challengeTemplateResource': new KnetikPlatformApiDocumentationLatest.TemplateResource() // TemplateResource | The challenge template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createChallengeTemplateUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **challengeTemplateResource** | [**TemplateResource**](TemplateResource.md)| The challenge template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createChallengeUsingPOST"></a>
# **createChallengeUsingPOST**
> ChallengeResource createChallengeUsingPOST(opts)

Create a challenge

Challenges do not run on their own.  They must be added to a campaign before events will spawn.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var opts = { 
  'challengeResource': new KnetikPlatformApiDocumentationLatest.ChallengeResource() // ChallengeResource | The challenge resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createChallengeUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **challengeResource** | [**ChallengeResource**](ChallengeResource.md)| The challenge resource object | [optional] 

### Return type

[**ChallengeResource**](ChallengeResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChallengeActivityUsingDELETE"></a>
# **deleteChallengeActivityUsingDELETE**
> deleteChallengeActivityUsingDELETE(activityId, challengeId)

Delete a challenge activity

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var activityId = 789; // Number | The activity id

var challengeId = 789; // Number | The challenge id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChallengeActivityUsingDELETE(activityId, challengeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityId** | **Number**| The activity id | 
 **challengeId** | **Number**| The challenge id | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChallengeEventUsingDELETE"></a>
# **deleteChallengeEventUsingDELETE**
> deleteChallengeEventUsingDELETE(id)

Delete a challenge event

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var id = 789; // Number | The challenge event id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChallengeEventUsingDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The challenge event id | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChallengeTemplateUsingDELETE"></a>
# **deleteChallengeTemplateUsingDELETE**
> deleteChallengeTemplateUsingDELETE(id, opts)

Delete a challenge template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'cascade': "cascade_example" // String | The value needed to delete used templates
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChallengeTemplateUsingDELETE(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **cascade** | **String**| The value needed to delete used templates | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChallengeUsingDELETE"></a>
# **deleteChallengeUsingDELETE**
> deleteChallengeUsingDELETE(id)

Delete a challenge

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var id = 789; // Number | The challenge id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChallengeUsingDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The challenge id | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActivitiesUsingGET1"></a>
# **getActivitiesUsingGET1**
> PageResourceBareChallengeActivityResource getActivitiesUsingGET1(challengeId, opts)

List and search challenge activities

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var challengeId = 789; // Number | The challenge id

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActivitiesUsingGET1(challengeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **challengeId** | **Number**| The challenge id | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceBareChallengeActivityResource**](PageResourceBareChallengeActivityResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallengeActivityUsingGET"></a>
# **getChallengeActivityUsingGET**
> ChallengeActivityResource getChallengeActivityUsingGET(activityId)

Get a single challenge activity

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var activityId = 789; // Number | The activity id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChallengeActivityUsingGET(activityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityId** | **Number**| The activity id | 

### Return type

[**ChallengeActivityResource**](ChallengeActivityResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallengeEventUsingGET"></a>
# **getChallengeEventUsingGET**
> ChallengeEventResource getChallengeEventUsingGET(id)

Retrieve a single challenge event details

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var id = 789; // Number | The challenge event id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChallengeEventUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The challenge event id | 

### Return type

[**ChallengeEventResource**](ChallengeEventResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallengeEventssUsingGET"></a>
# **getChallengeEventssUsingGET**
> PageResourceChallengeEventResource getChallengeEventssUsingGET(opts)

Retrieve a list of challenge events

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var opts = { 
  'filterStartDate': "filterStartDate_example", // String | A comma separated string without spaces.  First value is the operator to search on, second value is the event start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
  'filterEndDate': "filterEndDate_example", // String | A comma separated string without spaces.  First value is the operator to search on, second value is the event end date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
  'filterCampaigns': true, // Boolean | check only for events from currently running campaigns
  'filterChallenge': 789, // Number | check only for events from the challenge specified by id
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChallengeEventssUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterStartDate** | **String**| A comma separated string without spaces.  First value is the operator to search on, second value is the event start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE). | [optional] 
 **filterEndDate** | **String**| A comma separated string without spaces.  First value is the operator to search on, second value is the event end date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE). | [optional] 
 **filterCampaigns** | **Boolean**| check only for events from currently running campaigns | [optional] 
 **filterChallenge** | **Number**| check only for events from the challenge specified by id | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceChallengeEventResource**](PageResourceChallengeEventResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallengeTemplateUsingGET"></a>
# **getChallengeTemplateUsingGET**
> TemplateResource getChallengeTemplateUsingGET(id)

Get a single challenge template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChallengeTemplateUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallengeTemplatesUsingGET"></a>
# **getChallengeTemplatesUsingGET**
> PageResourceTemplateResource getChallengeTemplatesUsingGET(opts)

List and search challenge templates

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChallengeTemplatesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceTemplateResource**](PageResourceTemplateResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallengeUsingGET"></a>
# **getChallengeUsingGET**
> ChallengeResource getChallengeUsingGET(id)

Retrieve a single challenge details

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var id = 789; // Number | The challenge id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChallengeUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The challenge id | 

### Return type

[**ChallengeResource**](ChallengeResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallengesUsingGET1"></a>
# **getChallengesUsingGET1**
> PageResourceChallengeResource getChallengesUsingGET1(opts)

Retrieve a list of challenges

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var opts = { 
  'filterTemplate': true, // Boolean | Filter for challenges that are not tied to campaigns (templates)
  'filterActiveCampaign': true // Boolean | Filter for challenges that are tied to active campaigns
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChallengesUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterTemplate** | **Boolean**| Filter for challenges that are not tied to campaigns (templates) | [optional] 
 **filterActiveCampaign** | **Boolean**| Filter for challenges that are tied to active campaigns | [optional] 

### Return type

[**PageResourceChallengeResource**](PageResourceChallengeResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChallengeActivityUsingPUT"></a>
# **updateChallengeActivityUsingPUT**
> updateChallengeActivityUsingPUT(activityId, challengeId, opts)

Update a challenge activity

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var activityId = 789; // Number | The activity id

var challengeId = 789; // Number | The challenge id

var opts = { 
  'challengeActivityResource': new KnetikPlatformApiDocumentationLatest.ChallengeActivityResource() // ChallengeActivityResource | The challenge activity resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateChallengeActivityUsingPUT(activityId, challengeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityId** | **Number**| The activity id | 
 **challengeId** | **Number**| The challenge id | 
 **challengeActivityResource** | [**ChallengeActivityResource**](ChallengeActivityResource.md)| The challenge activity resource object | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChallengeTemplateUsingPUT"></a>
# **updateChallengeTemplateUsingPUT**
> updateChallengeTemplateUsingPUT(id, opts)

Update a challenge template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'challengeTemplateResource': new KnetikPlatformApiDocumentationLatest.TemplateResource() // TemplateResource | The challenge template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateChallengeTemplateUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **challengeTemplateResource** | [**TemplateResource**](TemplateResource.md)| The challenge template resource object | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChallengeUsingPUT"></a>
# **updateChallengeUsingPUT**
> ChallengeResource updateChallengeUsingPUT(id, opts)

Update a challenge&#39;s information

If the challenge is a copy, changes will propagate to all the related challenges

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();

var id = 789; // Number | The challenge id

var opts = { 
  'challengeResource': new KnetikPlatformApiDocumentationLatest.ChallengeResource() // ChallengeResource | The challenge resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateChallengeUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The challenge id | 
 **challengeResource** | [**ChallengeResource**](ChallengeResource.md)| The challenge resource object | [optional] 

### Return type

[**ChallengeResource**](ChallengeResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

