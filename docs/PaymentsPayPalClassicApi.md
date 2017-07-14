# KnetikcloudSdk.PaymentsPayPalClassicApi

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
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikcloudSdk.CreateBillingAgreementRequest() // CreateBillingAgreementRequest | The request to create a PayPal billing agreement
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPayPalBillingAgreementUrl(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateBillingAgreementRequest**](CreateBillingAgreementRequest.md)| The request to create a PayPal billing agreement | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[OAuth2](../README.md#OAuth2)

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
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikcloudSdk.CreatePayPalPaymentRequest() // CreatePayPalPaymentRequest | The request to create a PayPal payment token
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPayPalExpressCheckout(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreatePayPalPaymentRequest**](CreatePayPalPaymentRequest.md)| The request to create a PayPal payment token | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[OAuth2](../README.md#OAuth2)

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
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikcloudSdk.FinalizeBillingAgreementRequest() // FinalizeBillingAgreementRequest | The request to finalize a PayPal billing agreement
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.finalizePayPalBillingAgreement(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**FinalizeBillingAgreementRequest**](FinalizeBillingAgreementRequest.md)| The request to finalize a PayPal billing agreement | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

[OAuth2](../README.md#OAuth2)

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
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.PaymentsPayPalClassicApi();

var opts = { 
  'request': new KnetikcloudSdk.FinalizePayPalPaymentRequest() // FinalizePayPalPaymentRequest | The request to finalize the payment
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.finalizePayPalCheckout(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**FinalizePayPalPaymentRequest**](FinalizePayPalPaymentRequest.md)| The request to finalize the payment | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

