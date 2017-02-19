# KnetikPlatformApiDocumentationLatest.AWSS3Api

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSignedS3URL**](AWSS3Api.md#getSignedS3URL) | **GET** /amazon/s3/signedposturl | Get a signed S3 URL


<a name="getSignedS3URL"></a>
# **getSignedS3URL**
> AmazonS3Activity getSignedS3URL(opts)

Get a signed S3 URL

Requires the file name and file content type (i.e., &#39;video/mpeg&#39;)

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AWSS3Api();

var opts = { 
  'filename': "filename_example", // String | The file name
  'contentType': "contentType_example" // String | The content type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSignedS3URL(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | **String**| The file name | [optional] 
 **contentType** | **String**| The content type | [optional] 

### Return type

[**AmazonS3Activity**](AmazonS3Activity.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

