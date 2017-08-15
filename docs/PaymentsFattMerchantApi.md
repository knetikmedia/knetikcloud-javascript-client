# KnetikCloud.PaymentsFattMerchantApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrUpdateFattMerchantPaymentMethod**](PaymentsFattMerchantApi.md#createOrUpdateFattMerchantPaymentMethod) | **PUT** /payment/provider/fattmerchant/payment-methods | Create or update a FattMerchant payment method for a user


<a name="createOrUpdateFattMerchantPaymentMethod"></a>
# **createOrUpdateFattMerchantPaymentMethod**
> PaymentMethodResource createOrUpdateFattMerchantPaymentMethod(opts)

Create or update a FattMerchant payment method for a user

Stores customer information and creates a payment method that can be used to pay invoices through the payments endpoints.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.PaymentsFattMerchantApi();

let opts = { 
  'request': new KnetikCloud.FattMerchantPaymentMethodRequest() // FattMerchantPaymentMethodRequest | Request containing payment method information for user
};
apiInstance.createOrUpdateFattMerchantPaymentMethod(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**FattMerchantPaymentMethodRequest**](FattMerchantPaymentMethodRequest.md)| Request containing payment method information for user | [optional] 

### Return type

[**PaymentMethodResource**](PaymentMethodResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

