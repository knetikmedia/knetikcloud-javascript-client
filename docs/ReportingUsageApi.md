# KnetikPlatformApiDocumentationLatest.ReportingUsageApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsageByDayUsingGET**](ReportingUsageApi.md#getUsageByDayUsingGET) | **GET** /reporting/usage/day | Returns aggregated endpoint usage information by the day
[**getUsageByHourUsingGET**](ReportingUsageApi.md#getUsageByHourUsingGET) | **GET** /reporting/usage/hour | Returns aggregated endpoint usage information by hour
[**getUsageByMinuteUsingGET**](ReportingUsageApi.md#getUsageByMinuteUsingGET) | **GET** /reporting/usage/minute | Returns aggregated endpoint usage information by minute
[**getUsageByMonthUsingGET**](ReportingUsageApi.md#getUsageByMonthUsingGET) | **GET** /reporting/usage/month | Returns aggregated endpoint usage information by month
[**getUsageByYearUsingGET**](ReportingUsageApi.md#getUsageByYearUsingGET) | **GET** /reporting/usage/year | Returns aggregated endpoint usage information by year


<a name="getUsageByDayUsingGET"></a>
# **getUsageByDayUsingGET**
> PageResourceUsageInfo getUsageByDayUsingGET(startDate, endDate, opts)

Returns aggregated endpoint usage information by the day

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
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
apiInstance.getUsageByDayUsingGET(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsageByHourUsingGET"></a>
# **getUsageByHourUsingGET**
> PageResourceUsageInfo getUsageByHourUsingGET(startDate, endDate, opts)

Returns aggregated endpoint usage information by hour

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
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
apiInstance.getUsageByHourUsingGET(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsageByMinuteUsingGET"></a>
# **getUsageByMinuteUsingGET**
> PageResourceUsageInfo getUsageByMinuteUsingGET(startDate, endDate, opts)

Returns aggregated endpoint usage information by minute

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
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
apiInstance.getUsageByMinuteUsingGET(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsageByMonthUsingGET"></a>
# **getUsageByMonthUsingGET**
> PageResourceUsageInfo getUsageByMonthUsingGET(startDate, endDate, opts)

Returns aggregated endpoint usage information by month

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
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
apiInstance.getUsageByMonthUsingGET(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsageByYearUsingGET"></a>
# **getUsageByYearUsingGET**
> PageResourceUsageInfo getUsageByYearUsingGET(startDate, endDate, opts)

Returns aggregated endpoint usage information by year

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
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
apiInstance.getUsageByYearUsingGET(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

