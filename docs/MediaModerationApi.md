# KnetikPlatformApiDocumentationLatest.MediaModerationApi

All URIs are relative to *https://devsandbox.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFlagReportUsingGET**](MediaModerationApi.md#getFlagReportUsingGET) | **GET** /moderation/reports/{id} | Get a flag report
[**getFlagsReportUsingGET**](MediaModerationApi.md#getFlagsReportUsingGET) | **GET** /moderation/reports | Returns a page of flag reports
[**setFlagResolutionUsingPUT**](MediaModerationApi.md#setFlagResolutionUsingPUT) | **PUT** /moderation/reports/{id} | Update a flag report


<a name="getFlagReportUsingGET"></a>
# **getFlagReportUsingGET**
> getFlagReportUsingGET(id)

Get a flag report

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaModerationApi();

var id = 789; // Number | The flag report id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFlagReportUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The flag report id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getFlagsReportUsingGET"></a>
# **getFlagsReportUsingGET**
> PageFlagReportResource getFlagsReportUsingGET(opts)

Returns a page of flag reports

Context can be either a free-form string or a pre-defined context name

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaModerationApi();

var opts = { 
  'excludeResolved': true, // Boolean | Ignore resolved context
  'filterContext': "filterContext_example", // String | Filter by moderation context
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
apiInstance.getFlagsReportUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **excludeResolved** | **Boolean**| Ignore resolved context | [optional] [default to true]
 **filterContext** | **String**| Filter by moderation context | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageFlagReportResource**](PageFlagReportResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="setFlagResolutionUsingPUT"></a>
# **setFlagResolutionUsingPUT**
> setFlagResolutionUsingPUT(id, opts)

Update a flag report

Lets you set the resolution of a report. Resolution types is {banned,ignore} in case of &#39;banned&#39; you will need to pass the reason.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaModerationApi();

var id = 789; // Number | The flag report id

var opts = { 
  'flagReportResource': new KnetikPlatformApiDocumentationLatest.FlagReportResource() // FlagReportResource | The new flag report
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setFlagResolutionUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The flag report id | 
 **flagReportResource** | [**FlagReportResource**](FlagReportResource.md)| The new flag report | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

