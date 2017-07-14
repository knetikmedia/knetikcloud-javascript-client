# KnetikcloudSdk.PaymentsGoogleApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleGooglePayment**](PaymentsGoogleApi.md#handleGooglePayment) | **POST** /payment/provider/google/payments | Mark an invoice paid with Google


<a name="handleGooglePayment"></a>
# **handleGooglePayment**
> &#39;Number&#39; handleGooglePayment(opts)

Mark an invoice paid with Google

Mark an invoice paid with Google. Verifies signature from Google and treats the developerPayload field inside the json payload as the id of the invoice to pay. Returns the transaction ID if successful.

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.PaymentsGoogleApi();

var opts = { 
  'request': new KnetikcloudSdk.GooglePaymentRequest() // GooglePaymentRequest | The request for paying an invoice through a Google in-app payment
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.handleGooglePayment(opts, callback);
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

