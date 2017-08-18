# KnetikCloud.PaymentsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentMethod**](PaymentsApi.md#createPaymentMethod) | **POST** /users/{user_id}/payment-methods | Create a new payment method for a user
[**deletePaymentMethod**](PaymentsApi.md#deletePaymentMethod) | **DELETE** /users/{user_id}/payment-methods/{id} | Delete an existing payment method for a user
[**getPaymentMethod**](PaymentsApi.md#getPaymentMethod) | **GET** /users/{user_id}/payment-methods/{id} | Get a single payment method for a user
[**getPaymentMethods**](PaymentsApi.md#getPaymentMethods) | **GET** /users/{user_id}/payment-methods | Get all payment methods for a user
[**paymentAuthorization**](PaymentsApi.md#paymentAuthorization) | **POST** /payment/authorizations | Authorize payment of an invoice for later capture
[**paymentCapture**](PaymentsApi.md#paymentCapture) | **POST** /payment/authorizations/{id}/capture | Capture an existing invoice payment authorization
[**updatePaymentMethod**](PaymentsApi.md#updatePaymentMethod) | **PUT** /users/{user_id}/payment-methods/{id} | Update an existing payment method for a user


<a name="createPaymentMethod"></a>
# **createPaymentMethod**
> PaymentMethodResource createPaymentMethod(userId, opts)

Create a new payment method for a user

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.PaymentsApi();

var userId = 56; // Number | ID of the user for whom the payment method is being created

var opts = { 
  'paymentMethod': new KnetikCloud.PaymentMethodResource() // PaymentMethodResource | Payment method being created
};
apiInstance.createPaymentMethod(userId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user for whom the payment method is being created | 
 **paymentMethod** | [**PaymentMethodResource**](PaymentMethodResource.md)| Payment method being created | [optional] 

### Return type

[**PaymentMethodResource**](PaymentMethodResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePaymentMethod"></a>
# **deletePaymentMethod**
> deletePaymentMethod(userId, id)

Delete an existing payment method for a user

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.PaymentsApi();

var userId = 56; // Number | ID of the user for whom the payment method is being updated

var id = 56; // Number | ID of the payment method being deleted

apiInstance.deletePaymentMethod(userId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user for whom the payment method is being updated | 
 **id** | **Number**| ID of the payment method being deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentMethod"></a>
# **getPaymentMethod**
> PaymentMethodResource getPaymentMethod(userId, id)

Get a single payment method for a user

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.PaymentsApi();

var userId = 56; // Number | ID of the user for whom the payment method is being retrieved

var id = 56; // Number | ID of the payment method being retrieved

apiInstance.getPaymentMethod(userId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user for whom the payment method is being retrieved | 
 **id** | **Number**| ID of the payment method being retrieved | 

### Return type

[**PaymentMethodResource**](PaymentMethodResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentMethods"></a>
# **getPaymentMethods**
> [PaymentMethodResource] getPaymentMethods(userId, opts)

Get all payment methods for a user

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.PaymentsApi();

var userId = 56; // Number | ID of the user for whom the payment methods are being retrieved

var opts = { 
  'filterName': "filterName_example", // String | Filter for payment methods whose name starts with a given string
  'filterPaymentType': "filterPaymentType_example", // String | Filter for payment methods with a specific payment type
  'filterPaymentMethodTypeId': 56, // Number | Filter for payment methods with a specific payment method type by id
  'filterPaymentMethodTypeName': "filterPaymentMethodTypeName_example", // String | Filter for payment methods whose payment method type name starts with a given string
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getPaymentMethods(userId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user for whom the payment methods are being retrieved | 
 **filterName** | **String**| Filter for payment methods whose name starts with a given string | [optional] 
 **filterPaymentType** | **String**| Filter for payment methods with a specific payment type | [optional] 
 **filterPaymentMethodTypeId** | **Number**| Filter for payment methods with a specific payment method type by id | [optional] 
 **filterPaymentMethodTypeName** | **String**| Filter for payment methods whose payment method type name starts with a given string | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**[PaymentMethodResource]**](PaymentMethodResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentAuthorization"></a>
# **paymentAuthorization**
> PaymentAuthorizationResource paymentAuthorization(opts)

Authorize payment of an invoice for later capture

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.PaymentsApi();

var opts = { 
  'request': new KnetikCloud.PaymentAuthorizationResource() // PaymentAuthorizationResource | Payment authorization request
};
apiInstance.paymentAuthorization(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**PaymentAuthorizationResource**](PaymentAuthorizationResource.md)| Payment authorization request | [optional] 

### Return type

[**PaymentAuthorizationResource**](PaymentAuthorizationResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentCapture"></a>
# **paymentCapture**
> paymentCapture(id)

Capture an existing invoice payment authorization

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.PaymentsApi();

var id = 56; // Number | ID of the payment authorization to capture

apiInstance.paymentCapture(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the payment authorization to capture | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePaymentMethod"></a>
# **updatePaymentMethod**
> PaymentMethodResource updatePaymentMethod(userId, id, opts)

Update an existing payment method for a user

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.PaymentsApi();

var userId = 56; // Number | ID of the user for whom the payment method is being updated

var id = 56; // Number | ID of the payment method being updated

var opts = { 
  'paymentMethod': new KnetikCloud.PaymentMethodResource() // PaymentMethodResource | The updated payment method data
};
apiInstance.updatePaymentMethod(userId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user for whom the payment method is being updated | 
 **id** | **Number**| ID of the payment method being updated | 
 **paymentMethod** | [**PaymentMethodResource**](PaymentMethodResource.md)| The updated payment method data | [optional] 

### Return type

[**PaymentMethodResource**](PaymentMethodResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

