# KnetikPlatformApiDocumentationLatest.BRERuleEngineEventsApi

All URIs are relative to *https://devsandbox.knetikcloud.com/*

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

var apiInstance = new KnetikPlatformApiDocumentationLatest.BRERuleEngineEventsApi();

var opts = { 
  'breEvent': new KnetikPlatformApiDocumentationLatest.BreEvent(), // BreEvent | The BRE event object
  'authentication': new KnetikPlatformApiDocumentationLatest.OAuth2Authentication() // OAuth2Authentication | The authentication object
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
 **authentication** | [**OAuth2Authentication**](OAuth2Authentication.md)| The authentication object | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

