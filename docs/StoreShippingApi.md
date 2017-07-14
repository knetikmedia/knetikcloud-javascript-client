# KnetikcloudSdk.StoreShippingApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createShippingItem**](StoreShippingApi.md#createShippingItem) | **POST** /store/shipping | Create a shipping item
[**createShippingTemplate**](StoreShippingApi.md#createShippingTemplate) | **POST** /store/shipping/templates | Create a shipping template
[**deleteShippingItem**](StoreShippingApi.md#deleteShippingItem) | **DELETE** /store/shipping/{id} | Delete a shipping item
[**deleteShippingTemplate**](StoreShippingApi.md#deleteShippingTemplate) | **DELETE** /store/shipping/templates/{id} | Delete a shipping template
[**getShippingItem**](StoreShippingApi.md#getShippingItem) | **GET** /store/shipping/{id} | Get a single shipping item
[**getShippingTemplate**](StoreShippingApi.md#getShippingTemplate) | **GET** /store/shipping/templates/{id} | Get a single shipping template
[**getShippingTemplates**](StoreShippingApi.md#getShippingTemplates) | **GET** /store/shipping/templates | List and search shipping templates
[**updateShippingItem**](StoreShippingApi.md#updateShippingItem) | **PUT** /store/shipping/{id} | Update a shipping item
[**updateShippingTemplate**](StoreShippingApi.md#updateShippingTemplate) | **PUT** /store/shipping/templates/{id} | Update a shipping template


<a name="createShippingItem"></a>
# **createShippingItem**
> ShippingItem createShippingItem(opts)

Create a shipping item

A shipping item represents a shipping option and cost. SKUs have to be unique in the entire store.

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreShippingApi();

var opts = { 
  'cascade': false, // Boolean | Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values.
  'shippingItem': new KnetikcloudSdk.ShippingItem() // ShippingItem | The shipping item object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createShippingItem(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cascade** | **Boolean**| Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. | [optional] [default to false]
 **shippingItem** | [**ShippingItem**](ShippingItem.md)| The shipping item object | [optional] 

### Return type

[**ShippingItem**](ShippingItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createShippingTemplate"></a>
# **createShippingTemplate**
> ItemTemplateResource createShippingTemplate(opts)

Create a shipping template

Shipping Templates define a type of shipping and the properties they have.

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreShippingApi();

var opts = { 
  'shippingTemplateResource': new KnetikcloudSdk.ItemTemplateResource() // ItemTemplateResource | The new shipping template
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createShippingTemplate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shippingTemplateResource** | [**ItemTemplateResource**](ItemTemplateResource.md)| The new shipping template | [optional] 

### Return type

[**ItemTemplateResource**](ItemTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteShippingItem"></a>
# **deleteShippingItem**
> deleteShippingItem(id)

Delete a shipping item

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreShippingApi();

var id = 56; // Number | The id of the shipping item


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteShippingItem(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the shipping item | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteShippingTemplate"></a>
# **deleteShippingTemplate**
> deleteShippingTemplate(id, opts)

Delete a shipping template

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreShippingApi();

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
apiInstance.deleteShippingTemplate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **cascade** | **String**| force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShippingItem"></a>
# **getShippingItem**
> ShippingItem getShippingItem(id)

Get a single shipping item

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.StoreShippingApi();

var id = 56; // Number | The id of the shipping item


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getShippingItem(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the shipping item | 

### Return type

[**ShippingItem**](ShippingItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShippingTemplate"></a>
# **getShippingTemplate**
> ItemTemplateResource getShippingTemplate(id)

Get a single shipping template

Shipping Templates define a type of shipping and the properties they have.

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreShippingApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getShippingTemplate(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 

### Return type

[**ItemTemplateResource**](ItemTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShippingTemplates"></a>
# **getShippingTemplates**
> PageResourceItemTemplateResource getShippingTemplates(opts)

List and search shipping templates

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreShippingApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getShippingTemplates(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceItemTemplateResource**](PageResourceItemTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateShippingItem"></a>
# **updateShippingItem**
> ShippingItem updateShippingItem(id, opts)

Update a shipping item

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreShippingApi();

var id = 56; // Number | The id of the shipping item

var opts = { 
  'cascade': false, // Boolean | Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values.
  'shippingItem': new KnetikcloudSdk.ShippingItem() // ShippingItem | The shipping item object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateShippingItem(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the shipping item | 
 **cascade** | **Boolean**| Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. | [optional] [default to false]
 **shippingItem** | [**ShippingItem**](ShippingItem.md)| The shipping item object | [optional] 

### Return type

[**ShippingItem**](ShippingItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateShippingTemplate"></a>
# **updateShippingTemplate**
> ItemTemplateResource updateShippingTemplate(id, opts)

Update a shipping template

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreShippingApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'shippingTemplateResource': new KnetikcloudSdk.ItemTemplateResource() // ItemTemplateResource | The shipping template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateShippingTemplate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **shippingTemplateResource** | [**ItemTemplateResource**](ItemTemplateResource.md)| The shipping template resource object | [optional] 

### Return type

[**ItemTemplateResource**](ItemTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

