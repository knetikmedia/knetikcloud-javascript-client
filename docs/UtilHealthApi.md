# KnetikPlatformApiDocumentationLatest.UtilHealthApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHealth**](UtilHealthApi.md#getHealth) | **GET** /health | Get health info


<a name="getHealth"></a>
# **getHealth**
> Object getHealth()

Get health info

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.UtilHealthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHealth(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

