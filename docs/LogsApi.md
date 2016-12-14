# KnetikPlatformApiDocumentationLatest.LogsApi

All URIs are relative to *https://devsandbox.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserLogUsingPOST**](LogsApi.md#addUserLogUsingPOST) | **POST** /audit/logs | Add a new user log entry
[**getEventLogUsingGET**](LogsApi.md#getEventLogUsingGET) | **GET** /bre/logs/event-log/{id} | Get an existing BRE event log entry by id
[**getEventsLogsUsingGET**](LogsApi.md#getEventsLogsUsingGET) | **GET** /bre/logs/event-log | Returns a list of BRE event log entries
[**getForwardLogUsingGET**](LogsApi.md#getForwardLogUsingGET) | **GET** /bre/logs/forward-log/{id} | Get an existing forward log entry by id
[**getForwardLogsUsingGET**](LogsApi.md#getForwardLogsUsingGET) | **GET** /bre/logs/forward-log | Returns a list of forward log entries
[**getUserLogsUsingGET**](LogsApi.md#getUserLogsUsingGET) | **GET** /audit/logs/{id} | Returns a user log entry by id
[**getUserLogsUsingGET1**](LogsApi.md#getUserLogsUsingGET1) | **GET** /audit/logs | Returns a page of user logs entries


<a name="addUserLogUsingPOST"></a>
# **addUserLogUsingPOST**
> addUserLogUsingPOST(opts)

Add a new user log entry

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LogsApi();

var opts = { 
  'logEntry': new KnetikPlatformApiDocumentationLatest.UserActionLog() // UserActionLog | The user log entry to be added
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addUserLogUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logEntry** | [**UserActionLog**](UserActionLog.md)| The user log entry to be added | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getEventLogUsingGET"></a>
# **getEventLogUsingGET**
> BreEventLog getEventLogUsingGET(id)

Get an existing BRE event log entry by id

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LogsApi();

var id = "id_example"; // String | The BRE event log entry id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEventLogUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The BRE event log entry id | 

### Return type

[**BreEventLog**](BreEventLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getEventsLogsUsingGET"></a>
# **getEventsLogsUsingGET**
> PageBreEventLog getEventsLogsUsingGET(opts)

Returns a list of BRE event log entries

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LogsApi();

var opts = { 
  'filterStartDate': "filterStartDate_example", // String | A comma separated string without spaces.  First value is the operator to search on, second value is the event log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
  'filterEventName': "filterEventName_example", // String | Filter event logs by event name
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "1" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEventsLogsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterStartDate** | **String**| A comma separated string without spaces.  First value is the operator to search on, second value is the event log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE). | [optional] 
 **filterEventName** | **String**| Filter event logs by event name | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**PageBreEventLog**](PageBreEventLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getForwardLogUsingGET"></a>
# **getForwardLogUsingGET**
> ForwardLog getForwardLogUsingGET(id)

Get an existing forward log entry by id

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LogsApi();

var id = "id_example"; // String | The forward log entry id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getForwardLogUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The forward log entry id | 

### Return type

[**ForwardLog**](ForwardLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getForwardLogsUsingGET"></a>
# **getForwardLogsUsingGET**
> PageForwardLog getForwardLogsUsingGET(opts)

Returns a list of forward log entries

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LogsApi();

var opts = { 
  'filterStartDate': "filterStartDate_example", // String | A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
  'filterEndDate': "filterEndDate_example", // String | A comma separated string without spaces.  First value is the operator to search on, second value is the log end date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
  'filterStatusCode': 56, // Number | Filter forward logs by http status code
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "1" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getForwardLogsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterStartDate** | **String**| A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE). | [optional] 
 **filterEndDate** | **String**| A comma separated string without spaces.  First value is the operator to search on, second value is the log end date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE). | [optional] 
 **filterStatusCode** | **Number**| Filter forward logs by http status code | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**PageForwardLog**](PageForwardLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserLogsUsingGET"></a>
# **getUserLogsUsingGET**
> UserActionLog getUserLogsUsingGET(id)

Returns a user log entry by id

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LogsApi();

var id = "id_example"; // String | The user log entry id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserLogsUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The user log entry id | 

### Return type

[**UserActionLog**](UserActionLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserLogsUsingGET1"></a>
# **getUserLogsUsingGET1**
> PageUserActionLog getUserLogsUsingGET1(opts)

Returns a page of user logs entries

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LogsApi();

var opts = { 
  'filterUser': 56, // Number | Filter for actions taken by a specific user by id
  'filterActionName': "filterActionName_example", // String | Filter for actions of a specific name
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
apiInstance.getUserLogsUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterUser** | **Number**| Filter for actions taken by a specific user by id | [optional] 
 **filterActionName** | **String**| Filter for actions of a specific name | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageUserActionLog**](PageUserActionLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

