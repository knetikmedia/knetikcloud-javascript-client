# KnetikPlatformApiDocumentationLatest.PaymentsGoogleApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handlePaymentUsingPOST**](PaymentsGoogleApi.md#handlePaymentUsingPOST) | **POST** /payment/provider/google/payments | Mark an invoice paid with Google


<a name="handlePaymentUsingPOST"></a>
# **handlePaymentUsingPOST**
> &#39;Number&#39; handlePaymentUsingPOST(opts)

Mark an invoice paid with Google

Mark an invoice paid with Google. Verifies signature from Google and treats the developerPayload field inside the json payload as the id of the invoice to pay. Returns the transaction ID if successful.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsGoogleApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.GooglePaymentRequest() // GooglePaymentRequest | The request for paying an invoice through a Google in-app payment
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.handlePaymentUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**GooglePaymentRequest**](GooglePaymentRequest.md)| The request for paying an invoice through a Google in-app payment | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

