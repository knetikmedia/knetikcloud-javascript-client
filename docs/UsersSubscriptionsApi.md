# KnetikCloud.UsersSubscriptionsApi

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
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

apiInstance.getUserSubscriptionDetails(userId, inventoryId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 

### Return type

[**InventorySubscriptionResource**](InventorySubscriptionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsersSubscriptionDetails"></a>
# **getUsersSubscriptionDetails**
> [InventorySubscriptionResource] getUsersSubscriptionDetails(userId)

Get details about a user&#39;s subscriptions

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

apiInstance.getUsersSubscriptionDetails(userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 

### Return type

[**[InventorySubscriptionResource]**](InventorySubscriptionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reactivateUserSubscription"></a>
# **reactivateUserSubscription**
> InvoiceResource reactivateUserSubscription(userId, inventoryId, opts)

Reactivate a subscription and charge fee

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var opts = { 
  'reactivateSubscriptionRequest': new KnetikCloud.ReactivateSubscriptionRequest() // ReactivateSubscriptionRequest | The reactivate subscription request object inventory
};
apiInstance.reactivateUserSubscription(userId, inventoryId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setSubscriptionBillDate"></a>
# **setSubscriptionBillDate**
> setSubscriptionBillDate(userId, inventoryId, billDate)

Set a new date to bill a subscription on

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var billDate = 789; // Number | The new bill date. Unix timestamp in seconds

apiInstance.setSubscriptionBillDate(userId, inventoryId, billDate).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

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

No authorization required

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
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var opts = { 
  'paymentMethodId': new KnetikCloud.IntWrapper() // IntWrapper | The id of the payment method
};
apiInstance.setSubscriptionPaymentMethod(userId, inventoryId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 
 **paymentMethodId** | [**IntWrapper**](IntWrapper.md)| The id of the payment method | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setSubscriptionStatus"></a>
# **setSubscriptionStatus**
> setSubscriptionStatus(userId, inventoryId, status)

Set the status of a subscription

Note that the new status may be blocked if the system is not configured to allow the current status to be changed to the new, to enforce proper flow. The default options for statuses are shown below but may be altered for special use cases

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var status = new KnetikCloud.StringWrapper(); // StringWrapper | The new status for the subscription. Actual options may differ from the indicated set if the invoice status type data has been altered.  Allowable values: ('current', 'canceled', 'stopped', 'payment_failed', 'suspended')

apiInstance.setSubscriptionStatus(userId, inventoryId, status).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 
 **status** | [**StringWrapper**](StringWrapper.md)| The new status for the subscription. Actual options may differ from the indicated set if the invoice status type data has been altered.  Allowable values: (&#39;current&#39;, &#39;canceled&#39;, &#39;stopped&#39;, &#39;payment_failed&#39;, &#39;suspended&#39;) | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setUserSubscriptionPlan"></a>
# **setUserSubscriptionPlan**
> setUserSubscriptionPlan(userId, inventoryId, opts)

Set a new subscription plan for a user

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var opts = { 
  'planId': new KnetikCloud.StringWrapper() // StringWrapper | The id of the new plan. Must be from the same subscription
};
apiInstance.setUserSubscriptionPlan(userId, inventoryId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **inventoryId** | **Number**| The id of the user&#39;s inventory | 
 **planId** | [**StringWrapper**](StringWrapper.md)| The id of the new plan. Must be from the same subscription | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

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
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.UsersSubscriptionsApi();

var userId = 56; // Number | The id of the user

var inventoryId = 56; // Number | The id of the user's inventory

var opts = { 
  'theOverrideDetails': new KnetikCloud.SubscriptionPriceOverrideRequest() // SubscriptionPriceOverrideRequest | override
};
apiInstance.setUserSubscriptionPrice(userId, inventoryId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

