# KnetikPlatformApiDocumentationLatest.UsersInventoryApi

All URIs are relative to *https://integration.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemUsingPOST1**](UsersInventoryApi.md#addItemUsingPOST1) | **POST** /users/{id}/inventory | Adds an item to the user inventory
[**createItemUsingPOST**](UsersInventoryApi.md#createItemUsingPOST) | **POST** /entitlements | Create an entitlement item
[**createTemplateUsingPOST3**](UsersInventoryApi.md#createTemplateUsingPOST3) | **POST** /entitlements/templates | Create an entitlement template
[**deleteEntitlementTemplateUsingDELETE**](UsersInventoryApi.md#deleteEntitlementTemplateUsingDELETE) | **DELETE** /entitlements/templates/{id} | Delete an entitlement template
[**deleteItemUsingDELETE**](UsersInventoryApi.md#deleteItemUsingDELETE) | **DELETE** /entitlements/{entitlement_id} | Delete an entitlement item
[**entitlementCheckUsingGET**](UsersInventoryApi.md#entitlementCheckUsingGET) | **GET** /users/{user_id}/entitlements/{item_id}/check | Check for access to an item without consuming
[**entitlementUseUsingPOST**](UsersInventoryApi.md#entitlementUseUsingPOST) | **POST** /users/{user_id}/entitlements/{item_id}/use | Use an item
[**getCurrenciesUsingGET1**](UsersInventoryApi.md#getCurrenciesUsingGET1) | **GET** /entitlements | List and search entitlement items
[**getEntitlementTemplateUsingGET**](UsersInventoryApi.md#getEntitlementTemplateUsingGET) | **GET** /entitlements/templates/{id} | Get a single entitlement template
[**getEntitlementTemplatesUsingGET**](UsersInventoryApi.md#getEntitlementTemplatesUsingGET) | **GET** /entitlements/templates | List and search entitlement templates
[**getInventoryListUsingGET**](UsersInventoryApi.md#getInventoryListUsingGET) | **GET** /inventories | List the user inventory entries for all users
[**getInventoryUsingGET**](UsersInventoryApi.md#getInventoryUsingGET) | **GET** /users/{user_id}/inventory/{id} | Get an inventory entry
[**getItemUsingGET**](UsersInventoryApi.md#getItemUsingGET) | **GET** /entitlements/{entitlement_id} | Get a single entitlement item
[**getUserInventoryListUsingGET**](UsersInventoryApi.md#getUserInventoryListUsingGET) | **GET** /users/{id}/inventory | List the user inventory entries for a given user
[**getUserInventoryLogUsingGET**](UsersInventoryApi.md#getUserInventoryLogUsingGET) | **GET** /users/{user_id}/inventory/{id}/log | List the log entries for this inventory entry.
[**grantEntitlementUsingPOST**](UsersInventoryApi.md#grantEntitlementUsingPOST) | **POST** /users/{user_id}/entitlements/ | Grant an entitlement
[**updateItemUsingPUT1**](UsersInventoryApi.md#updateItemUsingPUT1) | **PUT** /entitlements/{entitlement_id} | Update an entitlement item
[**updateTemplateUsingPUT3**](UsersInventoryApi.md#updateTemplateUsingPUT3) | **PUT** /entitlements/templates/{id} | Update an entitlement template
[**updateUserInventoryBehaviorDataUsingPUT**](UsersInventoryApi.md#updateUserInventoryBehaviorDataUsingPUT) | **PUT** /users/{user_id}/inventory/{id}/behavior-data | Set the behavior data for an inventory entry
[**updateUserInventoryExpiresUsingPUT**](UsersInventoryApi.md#updateUserInventoryExpiresUsingPUT) | **PUT** /users/{user_id}/inventory/{id}/expires | Set the expiration date
[**updateUserInventoryStatusUsingPUT**](UsersInventoryApi.md#updateUserInventoryStatusUsingPUT) | **PUT** /users/{user_id}/inventory/{id}/status | Set the status for an inventory entry


<a name="addItemUsingPOST1"></a>
# **addItemUsingPOST1**
> InvoiceResource addItemUsingPOST1(id, opts)

Adds an item to the user inventory

The inventory is fulfilled asynchronously UNLESS the invoice is explicitely skipped. Depending on the use case, it might require the client to verify that the entitlement was added after the fact or configure a BRE rule to get a notification in real time

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var id = 56; // Number | The id of the user

var opts = { 
  'userInventoryAddRequest': new KnetikPlatformApiDocumentationLatest.UserInventoryAddRequest() // UserInventoryAddRequest | The user inventory add request object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addItemUsingPOST1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the user | 
 **userInventoryAddRequest** | [**UserInventoryAddRequest**](UserInventoryAddRequest.md)| The user inventory add request object | [optional] 

### Return type

[**InvoiceResource**](InvoiceResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createItemUsingPOST"></a>
# **createItemUsingPOST**
> EntitlementItem createItemUsingPOST(opts)

Create an entitlement item

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var opts = { 
  'entitlementItem': new KnetikPlatformApiDocumentationLatest.EntitlementItem() // EntitlementItem | The entitlement item object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createItemUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementItem** | [**EntitlementItem**](EntitlementItem.md)| The entitlement item object | [optional] 

### Return type

[**EntitlementItem**](EntitlementItem.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTemplateUsingPOST3"></a>
# **createTemplateUsingPOST3**
> ItemTemplateResource createTemplateUsingPOST3(opts)

Create an entitlement template

Entitlement templates define a type of entitlement and the properties they have

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var opts = { 
  'template': new KnetikPlatformApiDocumentationLatest.ItemTemplateResource() // ItemTemplateResource | The entitlement template to be created
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTemplateUsingPOST3(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template** | [**ItemTemplateResource**](ItemTemplateResource.md)| The entitlement template to be created | [optional] 

### Return type

[**ItemTemplateResource**](ItemTemplateResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEntitlementTemplateUsingDELETE"></a>
# **deleteEntitlementTemplateUsingDELETE**
> deleteEntitlementTemplateUsingDELETE(id, opts)

Delete an entitlement template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'cascade': "cascade_example" // String | The value needed to delete used templates
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEntitlementTemplateUsingDELETE(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **cascade** | **String**| The value needed to delete used templates | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemUsingDELETE"></a>
# **deleteItemUsingDELETE**
> deleteItemUsingDELETE(entitlementId)

Delete an entitlement item

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var entitlementId = 56; // Number | The id of the entitlement


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemUsingDELETE(entitlementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementId** | **Number**| The id of the entitlement | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="entitlementCheckUsingGET"></a>
# **entitlementCheckUsingGET**
> entitlementCheckUsingGET(userId, itemId, opts)

Check for access to an item without consuming

Useful for pre-check and accounts for all various buisness rules

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var userId = "userId_example"; // String | The id of the user to check for or 'me' for logged in user

var itemId = 56; // Number | The id of the item

var opts = { 
  'sku': "sku_example" // String | The specific sku of an entitlement list addition to check entitlement for. This is of very limited and specific use and should generally be left out
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.entitlementCheckUsingGET(userId, itemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user to check for or &#39;me&#39; for logged in user | 
 **itemId** | **Number**| The id of the item | 
 **sku** | **String**| The specific sku of an entitlement list addition to check entitlement for. This is of very limited and specific use and should generally be left out | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="entitlementUseUsingPOST"></a>
# **entitlementUseUsingPOST**
> entitlementUseUsingPOST(userId, itemId, opts)

Use an item

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var userId = "userId_example"; // String | The id of the user to check for or 'me' for logged in user

var itemId = 56; // Number | The id of the item

var opts = { 
  'sku': "sku_example", // String | The specific sku of an entitlement_list addition to check entitlement for. This is of very limited and specific use and should generally be left out
  'info': "info_example" // String | Any additional info to add to the log about this use
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.entitlementUseUsingPOST(userId, itemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user to check for or &#39;me&#39; for logged in user | 
 **itemId** | **Number**| The id of the item | 
 **sku** | **String**| The specific sku of an entitlement_list addition to check entitlement for. This is of very limited and specific use and should generally be left out | [optional] 
 **info** | **String**| Any additional info to add to the log about this use | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrenciesUsingGET1"></a>
# **getCurrenciesUsingGET1**
> PageResourceEntitlementItem getCurrenciesUsingGET1(opts)

List and search entitlement items

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

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
apiInstance.getCurrenciesUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceEntitlementItem**](PageResourceEntitlementItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntitlementTemplateUsingGET"></a>
# **getEntitlementTemplateUsingGET**
> ItemTemplateResource getEntitlementTemplateUsingGET(id)

Get a single entitlement template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEntitlementTemplateUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 

### Return type

[**ItemTemplateResource**](ItemTemplateResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntitlementTemplatesUsingGET"></a>
# **getEntitlementTemplatesUsingGET**
> PageResourceItemTemplateResource getEntitlementTemplatesUsingGET(opts)

List and search entitlement templates

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

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
apiInstance.getEntitlementTemplatesUsingGET(opts, callback);
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

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryListUsingGET"></a>
# **getInventoryListUsingGET**
> PageResourceUserInventoryResource getInventoryListUsingGET(opts)

List the user inventory entries for all users

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var opts = { 
  'inactive': false, // Boolean | If true, accepts inactive user inventories
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'filterItemName': "filterItemName_example", // String | Filter by items whose name starts with a string
  'filterUsername': "filterUsername_example", // String | Filter by entries owned by the user with the specified username
  'filterGroup': "filterGroup_example", // String | Filter by entries owned by the users in a given group, by unique name
  'filterDate': "filterDate_example" // String | A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds. Can be repeated for a range, eg: GT,123,LT,456  Allowed operators: (GT, LT, EQ, GOE, LOE).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryListUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inactive** | **Boolean**| If true, accepts inactive user inventories | [optional] [default to false]
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **filterItemName** | **String**| Filter by items whose name starts with a string | [optional] 
 **filterUsername** | **String**| Filter by entries owned by the user with the specified username | [optional] 
 **filterGroup** | **String**| Filter by entries owned by the users in a given group, by unique name | [optional] 
 **filterDate** | **String**| A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds. Can be repeated for a range, eg: GT,123,LT,456  Allowed operators: (GT, LT, EQ, GOE, LOE). | [optional] 

### Return type

[**PageResourceUserInventoryResource**](PageResourceUserInventoryResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryUsingGET"></a>
# **getInventoryUsingGET**
> UserInventoryResource getInventoryUsingGET(userId, id)

Get an inventory entry

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var userId = 56; // Number | The id of the inventory owner or 'me' for the logged in user

var id = 56; // Number | The id of the user inventory


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryUsingGET(userId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the inventory owner or &#39;me&#39; for the logged in user | 
 **id** | **Number**| The id of the user inventory | 

### Return type

[**UserInventoryResource**](UserInventoryResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getItemUsingGET"></a>
# **getItemUsingGET**
> EntitlementItem getItemUsingGET(entitlementId)

Get a single entitlement item

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var entitlementId = 56; // Number | The id of the entitlement


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemUsingGET(entitlementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementId** | **Number**| The id of the entitlement | 

### Return type

[**EntitlementItem**](EntitlementItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserInventoryListUsingGET"></a>
# **getUserInventoryListUsingGET**
> PageResourceUserInventoryResource getUserInventoryListUsingGET(id, opts)

List the user inventory entries for a given user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var id = 56; // Number | The id of the user

var opts = { 
  'inactive': false, // Boolean | If true, accepts inactive user inventories
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'filterItemName': "filterItemName_example", // String | Filter by items whose name starts with a string
  'filterMinDate': 789, // Number | Filter for inventory added after the specified date, unix timestamp in seconds
  'filterMaxDate': 789 // Number | Filter for inventory added before the specified date, unix timestamp in seconds
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserInventoryListUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the user | 
 **inactive** | **Boolean**| If true, accepts inactive user inventories | [optional] [default to false]
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **filterItemName** | **String**| Filter by items whose name starts with a string | [optional] 
 **filterMinDate** | **Number**| Filter for inventory added after the specified date, unix timestamp in seconds | [optional] 
 **filterMaxDate** | **Number**| Filter for inventory added before the specified date, unix timestamp in seconds | [optional] 

### Return type

[**PageResourceUserInventoryResource**](PageResourceUserInventoryResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserInventoryLogUsingGET"></a>
# **getUserInventoryLogUsingGET**
> PageResourceUserItemLogResource getUserInventoryLogUsingGET(userId, id, opts)

List the log entries for this inventory entry.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var userId = "userId_example"; // String | The id of the inventory owner or 'me' for the logged in user

var id = 56; // Number | The id of the user inventory

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
apiInstance.getUserInventoryLogUsingGET(userId, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the inventory owner or &#39;me&#39; for the logged in user | 
 **id** | **Number**| The id of the user inventory | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUserItemLogResource**](PageResourceUserItemLogResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="grantEntitlementUsingPOST"></a>
# **grantEntitlementUsingPOST**
> grantEntitlementUsingPOST(userId, grantRequest)

Grant an entitlement

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var userId = 56; // Number | The id of the user to grant the entitlement to

var grantRequest = new KnetikPlatformApiDocumentationLatest.EntitlementGrantRequest(); // EntitlementGrantRequest | grantRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.grantEntitlementUsingPOST(userId, grantRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user to grant the entitlement to | 
 **grantRequest** | [**EntitlementGrantRequest**](EntitlementGrantRequest.md)| grantRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateItemUsingPUT1"></a>
# **updateItemUsingPUT1**
> updateItemUsingPUT1(entitlementId, opts)

Update an entitlement item

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var entitlementId = 56; // Number | The id of the entitlement

var opts = { 
  'entitlementItem': new KnetikPlatformApiDocumentationLatest.EntitlementItem() // EntitlementItem | The entitlement item object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateItemUsingPUT1(entitlementId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementId** | **Number**| The id of the entitlement | 
 **entitlementItem** | [**EntitlementItem**](EntitlementItem.md)| The entitlement item object | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTemplateUsingPUT3"></a>
# **updateTemplateUsingPUT3**
> updateTemplateUsingPUT3(id, opts)

Update an entitlement template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'template': new KnetikPlatformApiDocumentationLatest.ItemTemplateResource() // ItemTemplateResource | The updated template
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateTemplateUsingPUT3(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **template** | [**ItemTemplateResource**](ItemTemplateResource.md)| The updated template | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserInventoryBehaviorDataUsingPUT"></a>
# **updateUserInventoryBehaviorDataUsingPUT**
> updateUserInventoryBehaviorDataUsingPUT(userId, id, opts)

Set the behavior data for an inventory entry

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var userId = 56; // Number | The id of the user

var id = 56; // Number | The id of the user inventory

var opts = { 
  'data': null // Object | The data map
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUserInventoryBehaviorDataUsingPUT(userId, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **id** | **Number**| The id of the user inventory | 
 **data** | **Object**| The data map | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserInventoryExpiresUsingPUT"></a>
# **updateUserInventoryExpiresUsingPUT**
> updateUserInventoryExpiresUsingPUT(userId, id, opts)

Set the expiration date

Will change the current grace period for a subscription but not the bill date (possibly even ending before having the chance to re-bill)

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var userId = 56; // Number | user_id

var id = 56; // Number | The id of the user inventory

var opts = { 
  'timestamp': 789 // Number | The new expiration date as a unix timestamp in seconds. May be null (no body).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUserInventoryExpiresUsingPUT(userId, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| user_id | 
 **id** | **Number**| The id of the user inventory | 
 **timestamp** | **Number**| The new expiration date as a unix timestamp in seconds. May be null (no body). | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserInventoryStatusUsingPUT"></a>
# **updateUserInventoryStatusUsingPUT**
> updateUserInventoryStatusUsingPUT(userId, id, opts)

Set the status for an inventory entry

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersInventoryApi();

var userId = 56; // Number | The id of the user

var id = 56; // Number | The id of the user inventory

var opts = { 
  'inventoryStatus': "inventoryStatus_example" // String | The inventory status object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUserInventoryStatusUsingPUT(userId, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **id** | **Number**| The id of the user inventory | 
 **inventoryStatus** | **String**| The inventory status object | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

