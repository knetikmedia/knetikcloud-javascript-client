# KnetikCloud.PaymentsStripeApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStripePaymentMethod**](PaymentsStripeApi.md#createStripePaymentMethod) | **POST** /payment/provider/stripe/payment-methods | Create a Stripe payment method for a user
[**payStripeInvoice**](PaymentsStripeApi.md#payStripeInvoice) | **POST** /payment/provider/stripe/payments | Pay with a single use token


<a name="createStripePaymentMethod"></a>
# **createStripePaymentMethod**
> PaymentMethodResource createStripePaymentMethod(opts)

Create a Stripe payment method for a user

Stores customer information and creates a payment method that can be used to pay invoices through the payments endpoints.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.PaymentsStripeApi();

let opts = { 
  'request': new KnetikCloud.StripeCreatePaymentMethod() // StripeCreatePaymentMethod | The request to create a Stripe customer with payment info
};
apiInstance.createStripePaymentMethod(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="payStripeInvoice"></a>
# **payStripeInvoice**
> payStripeInvoice(opts)

Pay with a single use token

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.PaymentsStripeApi();

let opts = { 
  'request': new KnetikCloud.StripePaymentRequest() // StripePaymentRequest | The request to pay an invoice
};
apiInstance.payStripeInvoice(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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

