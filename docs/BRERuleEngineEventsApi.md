# KnetikPlatformApiDocumentationLatest.BRERuleEngineEventsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fireEventUsingPOST**](BRERuleEngineEventsApi.md#fireEventUsingPOST) | **POST** /bre/events | Fire a new event, based on an existing trigger


<a name="fireEventUsingPOST"></a>
# **fireEventUsingPOST**
> fireEventUsingPOST(opts)

Fire a new event, based on an existing trigger

Parameters within the event must match names and types from the trigger. Actual rule execution is asynchornous.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.BRERuleEngineEventsApi();

var opts = { 
  'breEvent': new KnetikPlatformApiDocumentationLatest.BreEvent() // BreEvent | The BRE event object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.fireEventUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **breEvent** | [**BreEvent**](BreEvent.md)| The BRE event object | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

