# KnetikPlatformApiDocumentationLatest.PaymentsAppleApi

All URIs are relative to *https://integration.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**verifyReceiptUsingPOST**](PaymentsAppleApi.md#verifyReceiptUsingPOST) | **POST** /payment/provider/apple/receipt | Pay invoice with Apple receipt


<a name="verifyReceiptUsingPOST"></a>
# **verifyReceiptUsingPOST**
> &#39;String&#39; verifyReceiptUsingPOST(opts)

Pay invoice with Apple receipt

Mark an invoice paid using Apple payment receipt. A receipt will only be accepted once and the details of the transaction must match the invoice, including the product_id matching the sku text of the item in the invoice. Returns the transaction ID if successful.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsAppleApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.ApplyPaymentRequest() // ApplyPaymentRequest | The request for paying an invoice through an Apple receipt
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyReceiptUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ApplyPaymentRequest**](ApplyPaymentRequest.md)| The request for paying an invoice through an Apple receipt | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

