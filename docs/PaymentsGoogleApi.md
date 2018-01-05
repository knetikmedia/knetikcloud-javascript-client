# KnetikCloud.PaymentsGoogleApi

All URIs are relative to *https://devsandbox.knetikcloud.com*

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
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.PaymentsGoogleApi();

var opts = { 
  'request': new KnetikCloud.GooglePaymentRequest() // GooglePaymentRequest | The request for paying an invoice through a Google in-app payment
};
apiInstance.handleGooglePayment(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**GooglePaymentRequest**](GooglePaymentRequest.md)| The request for paying an invoice through a Google in-app payment | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

