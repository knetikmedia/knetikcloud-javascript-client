# KnetikPlatformApiDocumentationLatest.ReportingUsersApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserRegistrations**](ReportingUsersApi.md#getUserRegistrations) | **GET** /reporting/users/registrations | Get user registration info


<a name="getUserRegistrations"></a>
# **getUserRegistrations**
> PageResourceAggregateCountResource getUserRegistrations(opts)

Get user registration info

Get user registration counts grouped by time range

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsersApi();

var opts = { 
  'granularity': "day", // String | The time duration to aggregate by
  'startDate': 789, // Number | The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
  'endDate': 789 // Number | The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserRegistrations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **granularity** | **String**| The time duration to aggregate by | [optional] [default to day]
 **startDate** | **Number**| The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to aggregate, unix timestamp in seconds. Default is end of time | [optional] 

### Return type

[**PageResourceAggregateCountResource**](PageResourceAggregateCountResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

