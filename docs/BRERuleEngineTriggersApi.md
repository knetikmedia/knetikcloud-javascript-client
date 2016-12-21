# KnetikPlatformApiDocumentationLatest.BRERuleEngineTriggersApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTriggerUsingPOST**](BRERuleEngineTriggersApi.md#createTriggerUsingPOST) | **POST** /bre/triggers | Create a trigger
[**deleteTriggerUsingDELETE**](BRERuleEngineTriggersApi.md#deleteTriggerUsingDELETE) | **DELETE** /bre/triggers/{event_name} | Delete a trigger
[**getTriggerUsingGET**](BRERuleEngineTriggersApi.md#getTriggerUsingGET) | **GET** /bre/triggers/{event_name} | Get a single trigger
[**getTriggersUsingGET**](BRERuleEngineTriggersApi.md#getTriggersUsingGET) | **GET** /bre/triggers | List triggers
[**updateTriggerUsingPUT**](BRERuleEngineTriggersApi.md#updateTriggerUsingPUT) | **PUT** /bre/triggers/{event_name} | Update a trigger


<a name="createTriggerUsingPOST"></a>
# **createTriggerUsingPOST**
> BreTriggerResource createTriggerUsingPOST(opts)

Create a trigger

Customer added triggers will not be fired automatically or have rules associated with them by default. Custom rules must be added to get use from the trigger and it must then be fired from the outside. See the Bre Event services

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.BRERuleEngineTriggersApi();

var opts = { 
  'breTriggerResource': new KnetikPlatformApiDocumentationLatest.BreTriggerResource() // BreTriggerResource | The BRE trigger resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTriggerUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **breTriggerResource** | [**BreTriggerResource**](BreTriggerResource.md)| The BRE trigger resource object | [optional] 

### Return type

[**BreTriggerResource**](BreTriggerResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTriggerUsingDELETE"></a>
# **deleteTriggerUsingDELETE**
> deleteTriggerUsingDELETE(eventName)

Delete a trigger

May fail if there are existing rules against it. Cannot delete core triggers

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.BRERuleEngineTriggersApi();

var eventName = "eventName_example"; // String | The trigger event name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTriggerUsingDELETE(eventName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventName** | **String**| The trigger event name | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTriggerUsingGET"></a>
# **getTriggerUsingGET**
> BreTriggerResource getTriggerUsingGET(eventName)

Get a single trigger

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.BRERuleEngineTriggersApi();

var eventName = "eventName_example"; // String | The trigger event name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTriggerUsingGET(eventName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventName** | **String**| The trigger event name | 

### Return type

[**BreTriggerResource**](BreTriggerResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTriggersUsingGET"></a>
# **getTriggersUsingGET**
> PageResourceBreTriggerResource getTriggersUsingGET(opts)

List triggers

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.BRERuleEngineTriggersApi();

var opts = { 
  'filterSystem': true, // Boolean | Filter for triggers that are system triggers when true, or not when false. Leave off for both mixed
  'filterCategory': "filterCategory_example", // String | Filter for triggers that are within a specific category
  'filterName': "filterName_example", // String | Filter for triggers that have names containing the given string
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTriggersUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterSystem** | **Boolean**| Filter for triggers that are system triggers when true, or not when false. Leave off for both mixed | [optional] 
 **filterCategory** | **String**| Filter for triggers that are within a specific category | [optional] 
 **filterName** | **String**| Filter for triggers that have names containing the given string | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceBreTriggerResource**](PageResourceBreTriggerResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTriggerUsingPUT"></a>
# **updateTriggerUsingPUT**
> updateTriggerUsingPUT(eventName, opts)

Update a trigger

May fail if new parameters mismatch requirements of existing rules. Cannot update core triggers

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.BRERuleEngineTriggersApi();

var eventName = "eventName_example"; // String | The trigger event name

var opts = { 
  'breTriggerResource': new KnetikPlatformApiDocumentationLatest.BreTriggerResource() // BreTriggerResource | The BRE trigger resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateTriggerUsingPUT(eventName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventName** | **String**| The trigger event name | 
 **breTriggerResource** | [**BreTriggerResource**](BreTriggerResource.md)| The BRE trigger resource object | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

