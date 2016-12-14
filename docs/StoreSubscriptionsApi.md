# KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi

All URIs are relative to *https://devsandbox.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriptionTemplateUsingPOST**](StoreSubscriptionsApi.md#createSubscriptionTemplateUsingPOST) | **POST** /subscriptions/templates | Create a subscription template
[**createSubscriptionUsingPOST**](StoreSubscriptionsApi.md#createSubscriptionUsingPOST) | **POST** /subscriptions | Creates a subscription item and associated plans
[**deletePlanUsingDELETE**](StoreSubscriptionsApi.md#deletePlanUsingDELETE) | **DELETE** /subscriptions/{id}/plans/{plan_id} | Delete a subscription plan
[**deleteSubscriptionTemplateUsingDELETE**](StoreSubscriptionsApi.md#deleteSubscriptionTemplateUsingDELETE) | **DELETE** /subscriptions/templates/{id} | Delete a subscription template
[**getSubscriptionTemplateUsingGET**](StoreSubscriptionsApi.md#getSubscriptionTemplateUsingGET) | **GET** /subscriptions/templates/{id} | Get a single subscription template
[**getSubscriptionTemplatesUsingGET**](StoreSubscriptionsApi.md#getSubscriptionTemplatesUsingGET) | **GET** /subscriptions/templates | List and search subscription templates
[**getSubscriptionUsingGET**](StoreSubscriptionsApi.md#getSubscriptionUsingGET) | **GET** /subscriptions/{id} | Retrieve a single subscription item and associated plans
[**listBillingReportsUsingGET**](StoreSubscriptionsApi.md#listBillingReportsUsingGET) | **GET** /subscriptions/reports | Get a list of available subscription reports in most recent first order
[**listSubscriptionsUsingGET**](StoreSubscriptionsApi.md#listSubscriptionsUsingGET) | **GET** /subscriptions | List available subscription items and associated plans
[**processUsingPOST**](StoreSubscriptionsApi.md#processUsingPOST) | **POST** /subscriptions/process | Processes subscriptions and charge dues
[**updateSubscriptionTemplateUsingPUT**](StoreSubscriptionsApi.md#updateSubscriptionTemplateUsingPUT) | **PUT** /subscriptions/templates/{id} | Update a subscription template
[**updateSubscriptionUsingPUT**](StoreSubscriptionsApi.md#updateSubscriptionUsingPUT) | **PUT** /subscriptions/{id} | Updates a subscription item and associated plans


<a name="createSubscriptionTemplateUsingPOST"></a>
# **createSubscriptionTemplateUsingPOST**
> SubscriptionTemplateResource createSubscriptionTemplateUsingPOST(opts)

Create a subscription template

Subscription Templates define a type of subscription and the properties they have.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var opts = { 
  'subscriptionTemplateResource': new KnetikPlatformApiDocumentationLatest.SubscriptionTemplateResource() // SubscriptionTemplateResource | The new subscription template
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSubscriptionTemplateUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionTemplateResource** | [**SubscriptionTemplateResource**](SubscriptionTemplateResource.md)| The new subscription template | [optional] 

### Return type

[**SubscriptionTemplateResource**](SubscriptionTemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createSubscriptionUsingPOST"></a>
# **createSubscriptionUsingPOST**
> SubscriptionResource createSubscriptionUsingPOST(opts)

Creates a subscription item and associated plans

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var opts = { 
  'subscriptionResource': new KnetikPlatformApiDocumentationLatest.SubscriptionResource() // SubscriptionResource | The subscription to be created
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSubscriptionUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionResource** | [**SubscriptionResource**](SubscriptionResource.md)| The subscription to be created | [optional] 

### Return type

[**SubscriptionResource**](SubscriptionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deletePlanUsingDELETE"></a>
# **deletePlanUsingDELETE**
> deletePlanUsingDELETE(id, planId)

Delete a subscription plan

Must not be locked or a migration target

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var id = 56; // Number | The id of the subscription

var planId = "planId_example"; // String | The id of the plan


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePlanUsingDELETE(id, planId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the subscription | 
 **planId** | **String**| The id of the plan | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteSubscriptionTemplateUsingDELETE"></a>
# **deleteSubscriptionTemplateUsingDELETE**
> deleteSubscriptionTemplateUsingDELETE(id, opts)

Delete a subscription template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'cascade': "cascade_example" // String | force deleting the template if it's attached to other objects, cascade = detach
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSubscriptionTemplateUsingDELETE(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **cascade** | **String**| force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getSubscriptionTemplateUsingGET"></a>
# **getSubscriptionTemplateUsingGET**
> SubscriptionTemplateResource getSubscriptionTemplateUsingGET(id)

Get a single subscription template

Subscription Templates define a type of subscription and the properties they have.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriptionTemplateUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 

### Return type

[**SubscriptionTemplateResource**](SubscriptionTemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getSubscriptionTemplatesUsingGET"></a>
# **getSubscriptionTemplatesUsingGET**
> PageSubscriptionTemplateResource getSubscriptionTemplatesUsingGET(opts)

List and search subscription templates

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "1" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriptionTemplatesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**PageSubscriptionTemplateResource**](PageSubscriptionTemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getSubscriptionUsingGET"></a>
# **getSubscriptionUsingGET**
> SubscriptionResource getSubscriptionUsingGET(id)

Retrieve a single subscription item and associated plans

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var id = 56; // Number | The id of the subscription


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriptionUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the subscription | 

### Return type

[**SubscriptionResource**](SubscriptionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="listBillingReportsUsingGET"></a>
# **listBillingReportsUsingGET**
> PageBillingReport listBillingReportsUsingGET(opts)

Get a list of available subscription reports in most recent first order

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listBillingReportsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageBillingReport**](PageBillingReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="listSubscriptionsUsingGET"></a>
# **listSubscriptionsUsingGET**
> PageSubscriptionResource listSubscriptionsUsingGET(opts)

List available subscription items and associated plans

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "1" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSubscriptionsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**PageSubscriptionResource**](PageSubscriptionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="processUsingPOST"></a>
# **processUsingPOST**
> processUsingPOST()

Processes subscriptions and charge dues

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.processUsingPOST(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateSubscriptionTemplateUsingPUT"></a>
# **updateSubscriptionTemplateUsingPUT**
> updateSubscriptionTemplateUsingPUT(id, opts)

Update a subscription template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'subscriptionTemplateResource': new KnetikPlatformApiDocumentationLatest.SubscriptionTemplateResource() // SubscriptionTemplateResource | The subscription template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSubscriptionTemplateUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **subscriptionTemplateResource** | [**SubscriptionTemplateResource**](SubscriptionTemplateResource.md)| The subscription template resource object | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateSubscriptionUsingPUT"></a>
# **updateSubscriptionUsingPUT**
> updateSubscriptionUsingPUT(id, opts)

Updates a subscription item and associated plans

Will not remove plans left out

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();

var id = 56; // Number | The id of the subscription

var opts = { 
  'subscriptionResource': new KnetikPlatformApiDocumentationLatest.SubscriptionResource() // SubscriptionResource | The subscription resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSubscriptionUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the subscription | 
 **subscriptionResource** | [**SubscriptionResource**](SubscriptionResource.md)| The subscription resource object | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

