# KnetikPlatformApiDocumentationLatest.PaymentsOptimalApi

All URIs are relative to *https://devsandbox.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**silentPostUsingPOST**](PaymentsOptimalApi.md#silentPostUsingPOST) | **POST** /payment/provider/optimal/silent | Initiate silent post with Optimal


<a name="silentPostUsingPOST"></a>
# **silentPostUsingPOST**
> &#39;String&#39; silentPostUsingPOST(opts)

Initiate silent post with Optimal

Will return the url for a hosted payment endpoint to post to. See Optimal documentation for details.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsOptimalApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest() // OptimalPaymentRequest | The payment request to initiate
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.silentPostUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**OptimalPaymentRequest**](OptimalPaymentRequest.md)| The payment request to initiate | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

