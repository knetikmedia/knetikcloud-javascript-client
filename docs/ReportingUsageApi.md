# KnetikPlatformApiDocumentationLatest.ReportingUsageApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsageByDay**](ReportingUsageApi.md#getUsageByDay) | **GET** /reporting/usage/day | Returns aggregated endpoint usage information by day
[**getUsageByHour**](ReportingUsageApi.md#getUsageByHour) | **GET** /reporting/usage/hour | Returns aggregated endpoint usage information by hour
[**getUsageByMinute**](ReportingUsageApi.md#getUsageByMinute) | **GET** /reporting/usage/minute | Returns aggregated endpoint usage information by minute
[**getUsageByMonth**](ReportingUsageApi.md#getUsageByMonth) | **GET** /reporting/usage/month | Returns aggregated endpoint usage information by month
[**getUsageByYear**](ReportingUsageApi.md#getUsageByYear) | **GET** /reporting/usage/year | Returns aggregated endpoint usage information by year
[**getUsageEndpoints**](ReportingUsageApi.md#getUsageEndpoints) | **GET** /reporting/usage/endpoints | Returns list of endpoints called (method and url)


<a name="getUsageByDay"></a>
# **getUsageByDay**
> PageResourceUsageInfo getUsageByDay(startDate, endDate, opts)

Returns aggregated endpoint usage information by day

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
  'method': "method_example", // String | Filter for a certain endpoint method.  Must include url as well to work
  'url': "url_example", // String | Filter for a certain endpoint.  Must include method as well to work
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
apiInstance.getUsageByDay(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **method** | **String**| Filter for a certain endpoint method.  Must include url as well to work | [optional] 
 **url** | **String**| Filter for a certain endpoint.  Must include method as well to work | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsageByHour"></a>
# **getUsageByHour**
> PageResourceUsageInfo getUsageByHour(startDate, endDate, opts)

Returns aggregated endpoint usage information by hour

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
  'method': "method_example", // String | Filter for a certain endpoint method.  Must include url as well to work
  'url': "url_example", // String | Filter for a certain endpoint.  Must include method as well to work
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
apiInstance.getUsageByHour(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **method** | **String**| Filter for a certain endpoint method.  Must include url as well to work | [optional] 
 **url** | **String**| Filter for a certain endpoint.  Must include method as well to work | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsageByMinute"></a>
# **getUsageByMinute**
> PageResourceUsageInfo getUsageByMinute(startDate, endDate, opts)

Returns aggregated endpoint usage information by minute

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
  'method': "method_example", // String | Filter for a certain endpoint method.  Must include url as well to work
  'url': "url_example", // String | Filter for a certain endpoint.  Must include method as well to work
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
apiInstance.getUsageByMinute(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **method** | **String**| Filter for a certain endpoint method.  Must include url as well to work | [optional] 
 **url** | **String**| Filter for a certain endpoint.  Must include method as well to work | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsageByMonth"></a>
# **getUsageByMonth**
> PageResourceUsageInfo getUsageByMonth(startDate, endDate, opts)

Returns aggregated endpoint usage information by month

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
  'method': "method_example", // String | Filter for a certain endpoint method.  Must include url as well to work
  'url': "url_example", // String | Filter for a certain endpoint.  Must include method as well to work
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
apiInstance.getUsageByMonth(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **method** | **String**| Filter for a certain endpoint method.  Must include url as well to work | [optional] 
 **url** | **String**| Filter for a certain endpoint.  Must include method as well to work | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsageByYear"></a>
# **getUsageByYear**
> PageResourceUsageInfo getUsageByYear(startDate, endDate, opts)

Returns aggregated endpoint usage information by year

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoints. Removes the url and method from the result object
  'method': "method_example", // String | Filter for a certain endpoint method.  Must include url as well to work
  'url': "url_example", // String | Filter for a certain endpoint.  Must include method as well to work
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
apiInstance.getUsageByYear(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoints. Removes the url and method from the result object | [optional] [default to false]
 **method** | **String**| Filter for a certain endpoint method.  Must include url as well to work | [optional] 
 **url** | **String**| Filter for a certain endpoint.  Must include method as well to work | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsageEndpoints"></a>
# **getUsageEndpoints**
> [&#39;String&#39;] getUsageEndpoints(startDate, endDate)

Returns list of endpoints called (method and url)

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingUsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsageEndpoints(startDate, endDate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 

### Return type

**[&#39;String&#39;]**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

