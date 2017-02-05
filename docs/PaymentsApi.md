# KnetikPlatformApiDocumentationLatest.PaymentsApi

All URIs are relative to *https://integration.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentMethodUsingPOST**](PaymentsApi.md#createPaymentMethodUsingPOST) | **POST** /users/{user_id}/payment-methods | Create a new payment method for a user
[**deletePaymentMethodUsingDELETE**](PaymentsApi.md#deletePaymentMethodUsingDELETE) | **DELETE** /users/{user_id}/payment-methods/{id} | Delete an existing payment method for a user
[**getPaymentMethodUsingGET**](PaymentsApi.md#getPaymentMethodUsingGET) | **GET** /users/{user_id}/payment-methods/{id} | Get a single payment method for a user
[**getPaymentMethodsUsingGET**](PaymentsApi.md#getPaymentMethodsUsingGET) | **GET** /users/{user_id}/payment-methods | Get all payment methods for a user
[**paymentAuthorizationUsingPOST**](PaymentsApi.md#paymentAuthorizationUsingPOST) | **POST** /payment/authorizations | Authorize payment of an invoice for later capture
[**paymentCaptureUsingPOST**](PaymentsApi.md#paymentCaptureUsingPOST) | **POST** /payment/authorizations/{id}/capture | Capture an existing invoice payment authorization
[**updatePaymentMethodUsingPUT**](PaymentsApi.md#updatePaymentMethodUsingPUT) | **PUT** /users/{user_id}/payment-methods/{id} | Update an existing payment method for a user


<a name="createPaymentMethodUsingPOST"></a>
# **createPaymentMethodUsingPOST**
> PaymentMethodResource createPaymentMethodUsingPOST(userId, opts)

Create a new payment method for a user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsApi();

var userId = 56; // Number | ID of the user for whom the payment method is being created

var opts = { 
  'paymentMethod': new KnetikPlatformApiDocumentationLatest.PaymentMethodResource() // PaymentMethodResource | Payment method being created
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPaymentMethodUsingPOST(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user for whom the payment method is being created | 
 **paymentMethod** | [**PaymentMethodResource**](PaymentMethodResource.md)| Payment method being created | [optional] 

### Return type

[**PaymentMethodResource**](PaymentMethodResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePaymentMethodUsingDELETE"></a>
# **deletePaymentMethodUsingDELETE**
> deletePaymentMethodUsingDELETE(userId, id)

Delete an existing payment method for a user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsApi();

var userId = 56; // Number | ID of the user for whom the payment method is being updated

var id = 56; // Number | ID of the payment method being deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePaymentMethodUsingDELETE(userId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user for whom the payment method is being updated | 
 **id** | **Number**| ID of the payment method being deleted | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentMethodUsingGET"></a>
# **getPaymentMethodUsingGET**
> PaymentMethodResource getPaymentMethodUsingGET(userId, id)

Get a single payment method for a user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsApi();

var userId = 56; // Number | ID of the user for whom the payment method is being retrieved

var id = 56; // Number | ID of the payment method being retrieved


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentMethodUsingGET(userId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user for whom the payment method is being retrieved | 
 **id** | **Number**| ID of the payment method being retrieved | 

### Return type

[**PaymentMethodResource**](PaymentMethodResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentMethodsUsingGET"></a>
# **getPaymentMethodsUsingGET**
> [PaymentMethodResource] getPaymentMethodsUsingGET(userId, opts)

Get all payment methods for a user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsApi();

var userId = 56; // Number | ID of the user for whom the payment methods are being retrieved

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentMethodsUsingGET(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user for whom the payment methods are being retrieved | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**[PaymentMethodResource]**](PaymentMethodResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentAuthorizationUsingPOST"></a>
# **paymentAuthorizationUsingPOST**
> PaymentAuthorizationResource paymentAuthorizationUsingPOST(opts)

Authorize payment of an invoice for later capture

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.PaymentAuthorizationResource() // PaymentAuthorizationResource | Payment authorization request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentAuthorizationUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**PaymentAuthorizationResource**](PaymentAuthorizationResource.md)| Payment authorization request | [optional] 

### Return type

[**PaymentAuthorizationResource**](PaymentAuthorizationResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentCaptureUsingPOST"></a>
# **paymentCaptureUsingPOST**
> paymentCaptureUsingPOST(id)

Capture an existing invoice payment authorization

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsApi();

var id = 56; // Number | ID of the payment authorization to capture


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.paymentCaptureUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the payment authorization to capture | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePaymentMethodUsingPUT"></a>
# **updatePaymentMethodUsingPUT**
> updatePaymentMethodUsingPUT(userId, id, opts)

Update an existing payment method for a user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsApi();

var userId = 56; // Number | ID of the user for whom the payment method is being updated

var id = 56; // Number | ID of the payment method being updated

var opts = { 
  'paymentMethod': new KnetikPlatformApiDocumentationLatest.PaymentMethodResource() // PaymentMethodResource | The updated payment method data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePaymentMethodUsingPUT(userId, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user for whom the payment method is being updated | 
 **id** | **Number**| ID of the payment method being updated | 
 **paymentMethod** | [**PaymentMethodResource**](PaymentMethodResource.md)| The updated payment method data | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

