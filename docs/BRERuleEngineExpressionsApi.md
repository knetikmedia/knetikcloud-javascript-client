# KnetikPlatformApiDocumentationLatest.BRERuleEngineExpressionsApi

All URIs are relative to *https://devsandbox.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLookupTypesUsingGET**](BRERuleEngineExpressionsApi.md#getLookupTypesUsingGET) | **GET** /bre/expressions/lookup | Get a list of &#39;lookup&#39; type expressions


<a name="getLookupTypesUsingGET"></a>
# **getLookupTypesUsingGET**
> [LookupTypeResource] getLookupTypesUsingGET()

Get a list of &#39;lookup&#39; type expressions

These are expression types that take a second expression as input and produce a value. These can be used in addition to the standard types, like parameter, global and constant (see BRE documentation for details).

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.BRERuleEngineExpressionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLookupTypesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[LookupTypeResource]**](LookupTypeResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

