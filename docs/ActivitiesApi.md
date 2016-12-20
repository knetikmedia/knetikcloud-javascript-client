# KnetikPlatformApiDocumentationLatest.ActivitiesApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeActivityOccurrenceUsingPUT**](ActivitiesApi.md#completeActivityOccurrenceUsingPUT) | **PUT** /activity-occurrences/{activity_occurrence_id}/status | Updated the status of an activity occurrence
[**createActivityOccurrenceUsingPOST**](ActivitiesApi.md#createActivityOccurrenceUsingPOST) | **POST** /activity-occurrences | Create a new activity occurrence
[**createActivityUsingPOST**](ActivitiesApi.md#createActivityUsingPOST) | **POST** /activities | Create an activity
[**deleteActivityUsingDELETE**](ActivitiesApi.md#deleteActivityUsingDELETE) | **DELETE** /activities/{id} | Delete an activity
[**getActivitiesUsingGET**](ActivitiesApi.md#getActivitiesUsingGET) | **GET** /activities | List activity definitions
[**getActivityUsingGET**](ActivitiesApi.md#getActivityUsingGET) | **GET** /activities/{id} | Get a single activity
[**postResultsUsingPOST**](ActivitiesApi.md#postResultsUsingPOST) | **POST** /activity-occurrences/{activity_occurrence_id}/results | Sets the status of an activity occurrence to FINISHED and logs metrics
[**updateActivityUsingPUT**](ActivitiesApi.md#updateActivityUsingPUT) | **PUT** /activities/{id} | Update an activity


<a name="completeActivityOccurrenceUsingPUT"></a>
# **completeActivityOccurrenceUsingPUT**
> completeActivityOccurrenceUsingPUT(activityOccurrenceId, opts)

Updated the status of an activity occurrence

If setting to &#39;FINISHED&#39; you must POST to /results instead to record the metrics and get synchronous reward results

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ActivitiesApi();

var activityOccurrenceId = 789; // Number | The id of the activity occurrence

var opts = { 
  'activityCccurrenceStatus': "activityCccurrenceStatus_example" // String | The activity occurrence status object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.completeActivityOccurrenceUsingPUT(activityOccurrenceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityOccurrenceId** | **Number**| The id of the activity occurrence | 
 **activityCccurrenceStatus** | **String**| The activity occurrence status object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createActivityOccurrenceUsingPOST"></a>
# **createActivityOccurrenceUsingPOST**
> ActivityOccurrenceResource createActivityOccurrenceUsingPOST(opts)

Create a new activity occurrence

Has to enforce extra rules if not used as an admin

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ActivitiesApi();

var opts = { 
  'test': false, // Boolean | if true, indicates that the occurrence should NOT be created. This can be used to test for eligibility and valid settings
  'activityOccurrenceResource': new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource() // ActivityOccurrenceResource | The activity occurrence object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createActivityOccurrenceUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test** | **Boolean**| if true, indicates that the occurrence should NOT be created. This can be used to test for eligibility and valid settings | [optional] [default to false]
 **activityOccurrenceResource** | [**ActivityOccurrenceResource**](ActivityOccurrenceResource.md)| The activity occurrence object | [optional] 

### Return type

[**ActivityOccurrenceResource**](ActivityOccurrenceResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createActivityUsingPOST"></a>
# **createActivityUsingPOST**
> ActivityResource createActivityUsingPOST(opts)

Create an activity

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ActivitiesApi();

var opts = { 
  'activityResource': new KnetikPlatformApiDocumentationLatest.ActivityResource() // ActivityResource | The activity resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createActivityUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityResource** | [**ActivityResource**](ActivityResource.md)| The activity resource object | [optional] 

### Return type

[**ActivityResource**](ActivityResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteActivityUsingDELETE"></a>
# **deleteActivityUsingDELETE**
> deleteActivityUsingDELETE(id)

Delete an activity

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ActivitiesApi();

var id = 789; // Number | The id of the activity


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteActivityUsingDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the activity | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActivitiesUsingGET"></a>
# **getActivitiesUsingGET**
> PageResourceBareActivityResource getActivitiesUsingGET(opts)

List activity definitions

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.ActivitiesApi();

var opts = { 
  'filterTemplate': true, // Boolean | Filter for activities that are templates, or specifically not if false
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
apiInstance.getActivitiesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterTemplate** | **Boolean**| Filter for activities that are templates, or specifically not if false | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceBareActivityResource**](PageResourceBareActivityResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActivityUsingGET"></a>
# **getActivityUsingGET**
> ActivityResource getActivityUsingGET(id)

Get a single activity

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.ActivitiesApi();

var id = 789; // Number | The id of the activity


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActivityUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the activity | 

### Return type

[**ActivityResource**](ActivityResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postResultsUsingPOST"></a>
# **postResultsUsingPOST**
> ActivityOccurrenceResults postResultsUsingPOST(activityOccurrenceId, opts)

Sets the status of an activity occurrence to FINISHED and logs metrics

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ActivitiesApi();

var activityOccurrenceId = 789; // Number | The id of the activity occurrence

var opts = { 
  'activityOccurrenceResults': new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResults() // ActivityOccurrenceResults | The activity occurrence object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postResultsUsingPOST(activityOccurrenceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityOccurrenceId** | **Number**| The id of the activity occurrence | 
 **activityOccurrenceResults** | [**ActivityOccurrenceResults**](ActivityOccurrenceResults.md)| The activity occurrence object | [optional] 

### Return type

[**ActivityOccurrenceResults**](ActivityOccurrenceResults.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateActivityUsingPUT"></a>
# **updateActivityUsingPUT**
> updateActivityUsingPUT(id, opts)

Update an activity

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ActivitiesApi();

var id = 789; // Number | The id of the activity

var opts = { 
  'activityResource': new KnetikPlatformApiDocumentationLatest.ActivityResource() // ActivityResource | The activity resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateActivityUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the activity | 
 **activityResource** | [**ActivityResource**](ActivityResource.md)| The activity resource object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

