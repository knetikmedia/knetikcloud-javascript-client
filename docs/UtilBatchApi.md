# KnetikPlatformApiDocumentationLatest.UtilBatchApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBatchPOSTUsingPOST**](UtilBatchApi.md#getBatchPOSTUsingPOST) | **POST** /batch | Request to run API call given the method, content type, path url, and body of request


<a name="getBatchPOSTUsingPOST"></a>
# **getBatchPOSTUsingPOST**
> getBatchPOSTUsingPOST(opts)

Request to run API call given the method, content type, path url, and body of request

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.UtilBatchApi();

var opts = { 
  'batch': new KnetikPlatformApiDocumentationLatest.Batch() // Batch | The batch object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBatchPOSTUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch** | [**Batch**](Batch.md)| The batch object | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

