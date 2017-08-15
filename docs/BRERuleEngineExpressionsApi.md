# KnetikCloud.BRERuleEngineExpressionsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBREExpressions**](BRERuleEngineExpressionsApi.md#getBREExpressions) | **GET** /bre/expressions/lookup | Get a list of &#39;lookup&#39; type expressions


<a name="getBREExpressions"></a>
# **getBREExpressions**
> [LookupTypeResource] getBREExpressions()

Get a list of &#39;lookup&#39; type expressions

These are expression types that take a second expression as input and produce a value. These can be used in addition to the standard types, like parameter, global and constant (see BRE documentation for details).

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.BRERuleEngineExpressionsApi();
apiInstance.getBREExpressions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[LookupTypeResource]**](LookupTypeResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

