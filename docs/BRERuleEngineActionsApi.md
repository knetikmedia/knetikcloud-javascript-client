# KnetikPlatformApiDocumentationLatest.BRERuleEngineActionsApi

All URIs are relative to *https://integration.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActionsUsingGET**](BRERuleEngineActionsApi.md#getActionsUsingGET) | **GET** /bre/actions | Get a list of available actions


<a name="getActionsUsingGET"></a>
# **getActionsUsingGET**
> [ActionResource] getActionsUsingGET(opts)

Get a list of available actions

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.BRERuleEngineActionsApi();

var opts = { 
  'filterCategory': "filterCategory_example", // String | Filter for actions that are within a specific category
  'filterName': "filterName_example" // String | Filter for actions that have names containing the given string
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActionsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCategory** | **String**| Filter for actions that are within a specific category | [optional] 
 **filterName** | **String**| Filter for actions that have names containing the given string | [optional] 

### Return type

[**[ActionResource]**](ActionResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

