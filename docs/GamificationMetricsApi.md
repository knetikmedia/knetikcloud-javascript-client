# KnetikcloudSdk.GamificationMetricsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMetric**](GamificationMetricsApi.md#addMetric) | **POST** /metrics | Add a metric


<a name="addMetric"></a>
# **addMetric**
> addMetric(opts)

Add a metric

Post a new score/stat for an activity occurrence without ending the occurrence itself

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.GamificationMetricsApi();

var opts = { 
  'metric': new KnetikcloudSdk.MetricResource() // MetricResource | The new metric
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addMetric(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metric** | [**MetricResource**](MetricResource.md)| The new metric | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

