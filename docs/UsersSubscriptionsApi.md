# KnetikPlatformApiDocumentationLatest.UsersSubscriptionsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSubscriptionDetailsUsingGET**](UsersSubscriptionsApi.md#getSubscriptionDetailsUsingGET) | **GET** /users/{user_id}/subscriptions/{inventory_id} | Get details about a user&#39;s subscription
[**getSubscriptionDetailsUsingGET1**](UsersSubscriptionsApi.md#getSubscriptionDetailsUsingGET1) | **GET** /users/{user_id}/subscriptions | Get details about a user&#39;s subscriptions
[**reactivateUsingPOST**](UsersSubscriptionsApi.md#reactivateUsingPOST) | **POST** /users/{user_id}/subscriptions/{inventory_id}/reactivate | Reactivate a subscription and charge fee
[**setBillDateUsingPUT**](UsersSubscriptionsApi.md#setBillDateUsingPUT) | **PUT** /users/{user_id}/subscriptions/{inventory_id}/bill-date | Set a new date to bill a subscription on
[**setPaymentMethodUsingPUT**](UsersSubscriptionsApi.md#setPaymentMethodUsingPUT) | **PUT** /users/{user_id}/subscriptions/{inventory_id}/payment-method | Set the payment method to use for a subscription
[**setStatusUsingPUT**](UsersSubscriptionsApi.md#setStatusUsingPUT) | **PUT** /users/{user_id}/subscriptions/{inventory_id}/status | Set the status of a subscription
[**setUserPlanUsingPUT**](UsersSubscriptionsApi.md#setUserPlanUsingPUT) | **PUT** /users/{user_id}/subscriptions/{inventory_id}/plan | Set a new subscription plan for a user


<a name="getSubscriptionDetailsUsingGET"></a>
# **getSubscriptionDetailsUsingGET**
> InventorySubscriptionResource getSubscriptionDetailsUsingGET(userId, inventoryId)

Get details about a user&#39;s subscription

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriptionDetailsUsingGET(userId, inventoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 

### Return type

[**InventorySubscriptionResource**](InventorySubscriptionResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubscriptionDetailsUsingGET1"></a>
# **getSubscriptionDetailsUsingGET1**
> [InventorySubscriptionResource] getSubscriptionDetailsUsingGET1(userId)

Get details about a user&#39;s subscriptions

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriptionDetailsUsingGET1(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 

### Return type

[**[InventorySubscriptionResource]**](InventorySubscriptionResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reactivateUsingPOST"></a>
# **reactivateUsingPOST**
> InvoiceResource reactivateUsingPOST(userId, inventoryId, opts)

Reactivate a subscription and charge fee

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var opts = { 
  'reactivateSubscriptionRequest': new KnetikPlatformApiDocumentationLatest.ReactivateSubscriptionRequest() // ReactivateSubscriptionRequest | The reactivate subscription request object inventory
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reactivateUsingPOST(userId, inventoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 
 **reactivateSubscriptionRequest** | [**ReactivateSubscriptionRequest**](ReactivateSubscriptionRequest.md)| The reactivate subscription request object inventory | [optional] 

### Return type

[**InvoiceResource**](InvoiceResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setBillDateUsingPUT"></a>
# **setBillDateUsingPUT**
> setBillDateUsingPUT(userId, inventoryId, billDate)

Set a new date to bill a subscription on

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var billDate = 789; // Number | The new bill date. Unix timestamp in seconds


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setBillDateUsingPUT(userId, inventoryId, billDate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 
 **billDate** | **Number**| The new bill date. Unix timestamp in seconds | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setPaymentMethodUsingPUT"></a>
# **setPaymentMethodUsingPUT**
> setPaymentMethodUsingPUT(userId, inventoryId, opts)

Set the payment method to use for a subscription

May send null to use floating default

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var opts = { 
  'paymentMethodId': 56 // Number | The id of the payment method
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setPaymentMethodUsingPUT(userId, inventoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 
 **paymentMethodId** | **Number**| The id of the payment method | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setStatusUsingPUT"></a>
# **setStatusUsingPUT**
> setStatusUsingPUT(userId, inventoryId, status)

Set the status of a subscription

The body is a json string (put in quotes) that should match a desired invoice status type. Note that the new status may be blocked if the system is not configured to allow the current status to be changed to the new, to enforce proper flow. The default options for statuses are shown below but may be altered for special use cases

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var status = "status_example"; // String | The new status for the subscription. Actual options may differ from the indicated set if the invoice status type data has been altered.  Allowable values: ('current', 'canceled', 'stopped', 'payment_failed', 'suspended')


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setStatusUsingPUT(userId, inventoryId, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 
 **status** | **String**| The new status for the subscription. Actual options may differ from the indicated set if the invoice status type data has been altered.  Allowable values: (&#39;current&#39;, &#39;canceled&#39;, &#39;stopped&#39;, &#39;payment_failed&#39;, &#39;suspended&#39;) | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setUserPlanUsingPUT"></a>
# **setUserPlanUsingPUT**
> setUserPlanUsingPUT(userId, inventoryId, opts)

Set a new subscription plan for a user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var opts = { 
  'planId': "planId_example" // String | The id of the new plan. Must be from the same subscription
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setUserPlanUsingPUT(userId, inventoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 
 **planId** | **String**| The id of the new plan. Must be from the same subscription | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

