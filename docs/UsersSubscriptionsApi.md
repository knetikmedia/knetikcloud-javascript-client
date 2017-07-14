# knetikcloud-sdk.UsersSubscriptionsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserSubscriptionDetails**](UsersSubscriptionsApi.md#getUserSubscriptionDetails) | **GET** /users/{user_id}/subscriptions/{inventory_id} | Get details about a user&#39;s subscription
[**getUsersSubscriptionDetails**](UsersSubscriptionsApi.md#getUsersSubscriptionDetails) | **GET** /users/{user_id}/subscriptions | Get details about a user&#39;s subscriptions
[**reactivateUserSubscription**](UsersSubscriptionsApi.md#reactivateUserSubscription) | **POST** /users/{user_id}/subscriptions/{inventory_id}/reactivate | Reactivate a subscription and charge fee
[**setSubscriptionBillDate**](UsersSubscriptionsApi.md#setSubscriptionBillDate) | **PUT** /users/{user_id}/subscriptions/{inventory_id}/bill-date | Set a new date to bill a subscription on
[**setSubscriptionPaymentMethod**](UsersSubscriptionsApi.md#setSubscriptionPaymentMethod) | **PUT** /users/{user_id}/subscriptions/{inventory_id}/payment-method | Set the payment method to use for a subscription
[**setSubscriptionStatus**](UsersSubscriptionsApi.md#setSubscriptionStatus) | **PUT** /users/{user_id}/subscriptions/{inventory_id}/status | Set the status of a subscription
[**setUserSubscriptionPlan**](UsersSubscriptionsApi.md#setUserSubscriptionPlan) | **PUT** /users/{user_id}/subscriptions/{inventory_id}/plan | Set a new subscription plan for a user
[**setUserSubscriptionPrice**](UsersSubscriptionsApi.md#setUserSubscriptionPrice) | **PUT** /users/{user_id}/subscriptions/{inventory_id}/price-override | Set a new subscription price for a user


<a name="getUserSubscriptionDetails"></a>
# **getUserSubscriptionDetails**
> InventorySubscriptionResource getUserSubscriptionDetails(userId, inventoryId)

Get details about a user&#39;s subscription

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserSubscriptionDetails(userId, inventoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 

### Return type

[**InventorySubscriptionResource**](InventorySubscriptionResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsersSubscriptionDetails"></a>
# **getUsersSubscriptionDetails**
> [InventorySubscriptionResource] getUsersSubscriptionDetails(userId)

Get details about a user&#39;s subscriptions

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersSubscriptionDetails(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 

### Return type

[**[InventorySubscriptionResource]**](InventorySubscriptionResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reactivateUserSubscription"></a>
# **reactivateUserSubscription**
> InvoiceResource reactivateUserSubscription(userId, inventoryId, opts)

Reactivate a subscription and charge fee

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var opts = { 
  'reactivateSubscriptionRequest': new knetikcloud-sdk.ReactivateSubscriptionRequest() // ReactivateSubscriptionRequest | The reactivate subscription request object inventory
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reactivateUserSubscription(userId, inventoryId, opts, callback);
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

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setSubscriptionBillDate"></a>
# **setSubscriptionBillDate**
> setSubscriptionBillDate(userId, inventoryId, billDate)

Set a new date to bill a subscription on

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersSubscriptionsApi();

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
apiInstance.setSubscriptionBillDate(userId, inventoryId, billDate, callback);
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

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setSubscriptionPaymentMethod"></a>
# **setSubscriptionPaymentMethod**
> setSubscriptionPaymentMethod(userId, inventoryId, opts)

Set the payment method to use for a subscription

May send null to use floating default

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersSubscriptionsApi();

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
apiInstance.setSubscriptionPaymentMethod(userId, inventoryId, opts, callback);
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

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setSubscriptionStatus"></a>
# **setSubscriptionStatus**
> setSubscriptionStatus(userId, inventoryId, status)

Set the status of a subscription

The body is a json string (put in quotes) that should match a desired invoice status type. Note that the new status may be blocked if the system is not configured to allow the current status to be changed to the new, to enforce proper flow. The default options for statuses are shown below but may be altered for special use cases

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersSubscriptionsApi();

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
apiInstance.setSubscriptionStatus(userId, inventoryId, status, callback);
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

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setUserSubscriptionPlan"></a>
# **setUserSubscriptionPlan**
> setUserSubscriptionPlan(userId, inventoryId, opts)

Set a new subscription plan for a user

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersSubscriptionsApi();

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
apiInstance.setUserSubscriptionPlan(userId, inventoryId, opts, callback);
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

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setUserSubscriptionPrice"></a>
# **setUserSubscriptionPrice**
> setUserSubscriptionPrice(userId, inventoryId, opts)

Set a new subscription price for a user

This new price will be what the user is charged at the begining of each new period. This override is specific to the current subscription and will not carry over if they end and later re-subscribe. It will persist if the plan is changed using the setUserSubscriptionPlan endpoint.

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var opts = { 
  'theOverrideDetails': new knetikcloud-sdk.SubscriptionPriceOverrideRequest() // SubscriptionPriceOverrideRequest | override
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setUserSubscriptionPrice(userId, inventoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 
 **theOverrideDetails** | [**SubscriptionPriceOverrideRequest**](SubscriptionPriceOverrideRequest.md)| override | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

