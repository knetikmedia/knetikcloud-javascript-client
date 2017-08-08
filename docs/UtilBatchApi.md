# KnetikCloud.UtilBatchApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBatch**](UtilBatchApi.md#getBatch) | **GET** /batch/{token} | Get batch result with token
[**sendBatch**](UtilBatchApi.md#sendBatch) | **POST** /batch | Request to run API call given the method, content type, path url, and body of request


<a name="getBatch"></a>
# **getBatch**
> [BatchReturn] getBatch(token)

Get batch result with token

Tokens expire in 24 hours

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.UtilBatchApi();

let token = "token_example"; // String | token

apiInstance.getBatch(token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| token | 

### Return type

[**[BatchReturn]**](BatchReturn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendBatch"></a>
# **sendBatch**
> [BatchReturn] sendBatch(opts)

Request to run API call given the method, content type, path url, and body of request

Should the request take longer than one of the alloted timeout parameters, a token will be returned instead, which can be used on the token endpoint in this service

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.UtilBatchApi();

let opts = { 
  'batch': new KnetikCloud.Batch() // Batch | The batch object
};
apiInstance.sendBatch(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch** | [**Batch**](Batch.md)| The batch object | [optional] 

### Return type

[**[BatchReturn]**](BatchReturn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

