# KnetikcloudSdk.UtilVersionApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVersion**](UtilVersionApi.md#getVersion) | **GET** /version | Get current version info


<a name="getVersion"></a>
# **getVersion**
> Version getVersion()

Get current version info

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.UtilVersionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVersion(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

