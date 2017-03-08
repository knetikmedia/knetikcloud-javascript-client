# KnetikPlatformApiDocumentationLatest.PaymentsXsollaApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createXsollaTokenUrl**](PaymentsXsollaApi.md#createXsollaTokenUrl) | **POST** /payment/provider/xsolla/payment | Create a payment token that should be used to forward the user to Xsolla so they can complete payment
[**receiveXsollaNotification**](PaymentsXsollaApi.md#receiveXsollaNotification) | **POST** /payment/provider/xsolla/notifications | Receives payment response from Xsolla


<a name="createXsollaTokenUrl"></a>
# **createXsollaTokenUrl**
> &#39;String&#39; createXsollaTokenUrl(opts)

Create a payment token that should be used to forward the user to Xsolla so they can complete payment

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsXsollaApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.XsollaPaymentRequest() // XsollaPaymentRequest | The payment request to be sent to XSolla
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createXsollaTokenUrl(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**XsollaPaymentRequest**](XsollaPaymentRequest.md)| The payment request to be sent to XSolla | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="receiveXsollaNotification"></a>
# **receiveXsollaNotification**
> receiveXsollaNotification()

Receives payment response from Xsolla

Only used by Xsolla to call back to JSAPI after processing user payment action

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsXsollaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.receiveXsollaNotification(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

