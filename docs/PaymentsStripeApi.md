# KnetikPlatformApiDocumentationLatest.PaymentsStripeApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomerUsingPOST1**](PaymentsStripeApi.md#createCustomerUsingPOST1) | **POST** /payment/provider/stripe/payment-methods | Create a Stripe payment method for a user
[**payInvoiceUsingPOST1**](PaymentsStripeApi.md#payInvoiceUsingPOST1) | **POST** /payment/provider/stripe/payments | Pay with a single use token


<a name="createCustomerUsingPOST1"></a>
# **createCustomerUsingPOST1**
> PaymentMethodResource createCustomerUsingPOST1(opts)

Create a Stripe payment method for a user

Stores customer information and creates a payment method that can be used to pay invoices through the payments endpoints.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsStripeApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.StripeCreatePaymentMethod() // StripeCreatePaymentMethod | The request to create a Stripe customer with payment info
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCustomerUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**StripeCreatePaymentMethod**](StripeCreatePaymentMethod.md)| The request to create a Stripe customer with payment info | [optional] 

### Return type

[**PaymentMethodResource**](PaymentMethodResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="payInvoiceUsingPOST1"></a>
# **payInvoiceUsingPOST1**
> payInvoiceUsingPOST1(opts)

Pay with a single use token

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsStripeApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.StripePaymentRequest() // StripePaymentRequest | The request to pay an invoice
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.payInvoiceUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**StripePaymentRequest**](StripePaymentRequest.md)| The request to pay an invoice | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

