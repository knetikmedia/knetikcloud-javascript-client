# KnetikPlatformApiDocumentationLatest.GamificationMetricsApi

All URIs are relative to *https://devsandbox.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMetricUsingPOST**](GamificationMetricsApi.md#addMetricUsingPOST) | **POST** /metrics | Add a metric


<a name="addMetricUsingPOST"></a>
# **addMetricUsingPOST**
> addMetricUsingPOST(opts)

Add a metric

Post a new score/stat for an activity occurrence without ending the occurrence itself

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationMetricsApi();

var opts = { 
  'metric': new KnetikPlatformApiDocumentationLatest.MetricResource() // MetricResource | The new metric
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addMetricUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metric** | [**MetricResource**](MetricResource.md)| The new metric | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

