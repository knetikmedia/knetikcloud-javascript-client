# KnetikCloud.PaymentsPayPalClassicApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayPalBillingAgreementUrl**](PaymentsPayPalClassicApi.md#createPayPalBillingAgreementUrl) | **POST** /payment/provider/paypal/classic/agreements/start | Create a PayPal Classic billing agreement for the user
[**createPayPalExpressCheckout**](PaymentsPayPalClassicApi.md#createPayPalExpressCheckout) | **POST** /payment/provider/paypal/classic/checkout/start | Create a payment token for PayPal express checkout
[**finalizePayPalBillingAgreement**](PaymentsPayPalClassicApi.md#finalizePayPalBillingAgreement) | **POST** /payment/provider/paypal/classic/agreements/finish | Finalizes a billing agreement after the user has accepted through PayPal
[**finalizePayPalCheckout**](PaymentsPayPalClassicApi.md#finalizePayPalCheckout) | **POST** /payment/provider/paypal/classic/checkout/finish | Finalizes a payment after the user has completed checkout with PayPal


<a name="createPayPalBillingAgreementUrl"></a>
# **createPayPalBillingAgreementUrl**
> &#39;String&#39; createPayPalBillingAgreementUrl(opts)

Create a PayPal Classic billing agreement for the user

Returns the token that should be used to forward the user to PayPal so they can accept the agreement.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikCloud.CreateBillingAgreementRequest() // CreateBillingAgreementRequest | The request to create a PayPal billing agreement
};
apiInstance.createPayPalBillingAgreementUrl(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateBillingAgreementRequest**](CreateBillingAgreementRequest.md)| The request to create a PayPal billing agreement | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPayPalExpressCheckout"></a>
# **createPayPalExpressCheckout**
> &#39;String&#39; createPayPalExpressCheckout(opts)

Create a payment token for PayPal express checkout

Returns the token that should be used to forward the user to PayPal so they can complete the checkout.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikCloud.CreatePayPalPaymentRequest() // CreatePayPalPaymentRequest | The request to create a PayPal payment token
};
apiInstance.createPayPalExpressCheckout(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreatePayPalPaymentRequest**](CreatePayPalPaymentRequest.md)| The request to create a PayPal payment token | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="finalizePayPalBillingAgreement"></a>
# **finalizePayPalBillingAgreement**
> &#39;Number&#39; finalizePayPalBillingAgreement(opts)

Finalizes a billing agreement after the user has accepted through PayPal

Returns the ID of the new payment method created for the user for the billing agreement.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikCloud.FinalizeBillingAgreementRequest() // FinalizeBillingAgreementRequest | The request to finalize a PayPal billing agreement
};
apiInstance.finalizePayPalBillingAgreement(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**FinalizeBillingAgreementRequest**](FinalizeBillingAgreementRequest.md)| The request to finalize a PayPal billing agreement | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="finalizePayPalCheckout"></a>
# **finalizePayPalCheckout**
> finalizePayPalCheckout(opts)

Finalizes a payment after the user has completed checkout with PayPal

The invoice will be marked paid/failed by asynchronous IPN callback.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikCloud.FinalizePayPalPaymentRequest() // FinalizePayPalPaymentRequest | The request to finalize the payment
};
apiInstance.finalizePayPalCheckout(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**FinalizePayPalPaymentRequest**](FinalizePayPalPaymentRequest.md)| The request to finalize the payment | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

