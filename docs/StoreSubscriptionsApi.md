# KnetikCloud.StoreSubscriptionsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](StoreSubscriptionsApi.md#createSubscription) | **POST** /subscriptions | Creates a subscription item and associated plans
[**createSubscriptionTemplate**](StoreSubscriptionsApi.md#createSubscriptionTemplate) | **POST** /subscriptions/templates | Create a subscription template
[**deleteSubscription**](StoreSubscriptionsApi.md#deleteSubscription) | **DELETE** /subscriptions/{id}/plans/{plan_id} | Delete a subscription plan
[**deleteSubscriptionTemplate**](StoreSubscriptionsApi.md#deleteSubscriptionTemplate) | **DELETE** /subscriptions/templates/{id} | Delete a subscription template
[**getSubscription**](StoreSubscriptionsApi.md#getSubscription) | **GET** /subscriptions/{id} | Retrieve a single subscription item and associated plans
[**getSubscriptionTemplate**](StoreSubscriptionsApi.md#getSubscriptionTemplate) | **GET** /subscriptions/templates/{id} | Get a single subscription template
[**getSubscriptionTemplates**](StoreSubscriptionsApi.md#getSubscriptionTemplates) | **GET** /subscriptions/templates | List and search subscription templates
[**getSubscriptions**](StoreSubscriptionsApi.md#getSubscriptions) | **GET** /subscriptions | List available subscription items and associated plans
[**processSubscriptions**](StoreSubscriptionsApi.md#processSubscriptions) | **POST** /subscriptions/process | Processes subscriptions and charge dues
[**updateSubscription**](StoreSubscriptionsApi.md#updateSubscription) | **PUT** /subscriptions/{id} | Updates a subscription item and associated plans
[**updateSubscriptionTemplate**](StoreSubscriptionsApi.md#updateSubscriptionTemplate) | **PUT** /subscriptions/templates/{id} | Update a subscription template


<a name="createSubscription"></a>
# **createSubscription**
> SubscriptionResource createSubscription(opts)

Creates a subscription item and associated plans

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.StoreSubscriptionsApi();

let opts = { 
  'subscriptionResource': new KnetikCloud.SubscriptionResource() // SubscriptionResource | The subscription to be created
};
apiInstance.createSubscription(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
 - **Accept**: application/json

<a name="createSubscriptionTemplate"></a>
# **createSubscriptionTemplate**
> SubscriptionTemplateResource createSubscriptionTemplate(opts)

Create a subscription template

Subscription Templates define a type of subscription and the properties they have.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.StoreSubscriptionsApi();

let opts = { 
  'subscriptionTemplateResource': new KnetikCloud.SubscriptionTemplateResource() // SubscriptionTemplateResource | The new subscription template
};
apiInstance.createSubscriptionTemplate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
 - **Accept**: application/json

<a name="deleteSubscription"></a>
# **deleteSubscription**
> deleteSubscription(id, planId)

Delete a subscription plan

Must not be locked or a migration target

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.StoreSubscriptionsApi();

let id = 56; // Number | The id of the subscription

let planId = "planId_example"; // String | The id of the plan

apiInstance.deleteSubscription(id, planId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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
 - **Accept**: application/json

<a name="deleteSubscriptionTemplate"></a>
# **deleteSubscriptionTemplate**
> deleteSubscriptionTemplate(id, opts)

Delete a subscription template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.StoreSubscriptionsApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'cascade': "cascade_example" // String | force deleting the template if it's attached to other objects, cascade = detach
};
apiInstance.deleteSubscriptionTemplate(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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
 - **Accept**: application/json

<a name="getSubscription"></a>
# **getSubscription**
> SubscriptionResource getSubscription(id)

Retrieve a single subscription item and associated plans

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.StoreSubscriptionsApi();

let id = 56; // Number | The id of the subscription

apiInstance.getSubscription(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
 - **Accept**: application/json

<a name="getSubscriptionTemplate"></a>
# **getSubscriptionTemplate**
> SubscriptionTemplateResource getSubscriptionTemplate(id)

Get a single subscription template

Subscription Templates define a type of subscription and the properties they have.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.StoreSubscriptionsApi();

let id = "id_example"; // String | The id of the template

apiInstance.getSubscriptionTemplate(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
 - **Accept**: application/json

<a name="getSubscriptionTemplates"></a>
# **getSubscriptionTemplates**
> PageResourceSubscriptionTemplateResource getSubscriptionTemplates(opts)

List and search subscription templates

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.StoreSubscriptionsApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getSubscriptionTemplates(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceSubscriptionTemplateResource**](PageResourceSubscriptionTemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubscriptions"></a>
# **getSubscriptions**
> PageResourceSubscriptionResource getSubscriptions(opts)

List available subscription items and associated plans

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.StoreSubscriptionsApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getSubscriptions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceSubscriptionResource**](PageResourceSubscriptionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="processSubscriptions"></a>
# **processSubscriptions**
> processSubscriptions()

Processes subscriptions and charge dues

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.StoreSubscriptionsApi();
apiInstance.processSubscriptions().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSubscription"></a>
# **updateSubscription**
> updateSubscription(id, opts)

Updates a subscription item and associated plans

Will not remove plans left out

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.StoreSubscriptionsApi();

let id = 56; // Number | The id of the subscription

let opts = { 
  'subscriptionResource': new KnetikCloud.SubscriptionResource() // SubscriptionResource | The subscription resource object
};
apiInstance.updateSubscription(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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
 - **Accept**: application/json

<a name="updateSubscriptionTemplate"></a>
# **updateSubscriptionTemplate**
> SubscriptionTemplateResource updateSubscriptionTemplate(id, opts)

Update a subscription template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.StoreSubscriptionsApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'subscriptionTemplateResource': new KnetikCloud.SubscriptionTemplateResource() // SubscriptionTemplateResource | The subscription template resource object
};
apiInstance.updateSubscriptionTemplate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **subscriptionTemplateResource** | [**SubscriptionTemplateResource**](SubscriptionTemplateResource.md)| The subscription template resource object | [optional] 

### Return type

[**SubscriptionTemplateResource**](SubscriptionTemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

