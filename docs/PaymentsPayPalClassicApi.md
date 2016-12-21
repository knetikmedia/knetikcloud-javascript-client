# KnetikPlatformApiDocumentationLatest.PaymentsPayPalClassicApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBillingAgreementUrlUsingPOST**](PaymentsPayPalClassicApi.md#createBillingAgreementUrlUsingPOST) | **POST** /payment/provider/paypal/classic/agreements/start | Create a PayPal Classic billing agreement for the user
[**expressCheckoutUsingPOST**](PaymentsPayPalClassicApi.md#expressCheckoutUsingPOST) | **POST** /payment/provider/paypal/classic/checkout/start | Create a payment token for PayPal express checkout
[**finalizeBillingAgreementUsingPOST**](PaymentsPayPalClassicApi.md#finalizeBillingAgreementUsingPOST) | **POST** /payment/provider/paypal/classic/agreements/finish | Finalizes a billing agreement after the user has accepted through PayPal
[**finalizeCheckoutUsingPOST**](PaymentsPayPalClassicApi.md#finalizeCheckoutUsingPOST) | **POST** /payment/provider/paypal/classic/checkout/finish | Finalizes a payment after the user has completed checkout with PayPal


<a name="createBillingAgreementUrlUsingPOST"></a>
# **createBillingAgreementUrlUsingPOST**
> &#39;String&#39; createBillingAgreementUrlUsingPOST(opts)

Create a PayPal Classic billing agreement for the user

Returns the token that should be used to forward the user to PayPal so they can accept the agreement.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.CreateBillingAgreementRequest() // CreateBillingAgreementRequest | The request to create a PayPal billing agreement
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBillingAgreementUrlUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateBillingAgreementRequest**](CreateBillingAgreementRequest.md)| The request to create a PayPal billing agreement | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="expressCheckoutUsingPOST"></a>
# **expressCheckoutUsingPOST**
> &#39;String&#39; expressCheckoutUsingPOST(opts)

Create a payment token for PayPal express checkout

Returns the token that should be used to forward the user to PayPal so they can complete the checkout.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.CreatePayPalPaymentRequest() // CreatePayPalPaymentRequest | The request to create a PayPal payment token
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.expressCheckoutUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreatePayPalPaymentRequest**](CreatePayPalPaymentRequest.md)| The request to create a PayPal payment token | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="finalizeBillingAgreementUsingPOST"></a>
# **finalizeBillingAgreementUsingPOST**
> &#39;Number&#39; finalizeBillingAgreementUsingPOST(opts)

Finalizes a billing agreement after the user has accepted through PayPal

Returns the ID of the new payment method created for the user for the billing agreement.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.FinalizeBillingAgreementRequest() // FinalizeBillingAgreementRequest | The request to finalize a PayPal billing agreement
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.finalizeBillingAgreementUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**FinalizeBillingAgreementRequest**](FinalizeBillingAgreementRequest.md)| The request to finalize a PayPal billing agreement | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="finalizeCheckoutUsingPOST"></a>
# **finalizeCheckoutUsingPOST**
> finalizeCheckoutUsingPOST(opts)

Finalizes a payment after the user has completed checkout with PayPal

The invoice will be marked paid/failed by asynchronous IPN callback.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.FinalizePayPalPaymentRequest() // FinalizePayPalPaymentRequest | The request to finalize the payment
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.finalizeCheckoutUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**FinalizePayPalPaymentRequest**](FinalizePayPalPaymentRequest.md)| The request to finalize the payment | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

