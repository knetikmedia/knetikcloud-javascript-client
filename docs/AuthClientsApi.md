# KnetikPlatformApiDocumentationLatest.AuthClientsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignClientGrantTypesUsingPUT**](AuthClientsApi.md#assignClientGrantTypesUsingPUT) | **PUT** /auth/clients/{client_key}/grant-types | Set grant types for a client
[**assignClientRedirectUrisUsingPUT**](AuthClientsApi.md#assignClientRedirectUrisUsingPUT) | **PUT** /auth/clients/{client_key}/redirect-uris | Set redirect uris for a client
[**createClientUsingPOST**](AuthClientsApi.md#createClientUsingPOST) | **POST** /auth/clients | Create a new client
[**deleteClientUsingDELETE**](AuthClientsApi.md#deleteClientUsingDELETE) | **DELETE** /auth/clients/{client_key} | Delete a client
[**getClientUsingGET**](AuthClientsApi.md#getClientUsingGET) | **GET** /auth/clients/{client_key} | Get a single client
[**getClientsUsingGET**](AuthClientsApi.md#getClientsUsingGET) | **GET** /auth/clients | List and search clients
[**listAvailableGrantTypesUsingGET**](AuthClientsApi.md#listAvailableGrantTypesUsingGET) | **GET** /auth/clients/grant-types | List available client grant types
[**updateClientUsingPUT**](AuthClientsApi.md#updateClientUsingPUT) | **PUT** /auth/clients/{client_key} | Update a client


<a name="assignClientGrantTypesUsingPUT"></a>
# **assignClientGrantTypesUsingPUT**
> assignClientGrantTypesUsingPUT(clientKey, opts)

Set grant types for a client

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthClientsApi();

var clientKey = "clientKey_example"; // String | The key of the client

var opts = { 
  'grantList': [new KnetikPlatformApiDocumentationLatest.[String]()] // [String] | A list of unique grant types
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.assignClientGrantTypesUsingPUT(clientKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientKey** | **String**| The key of the client | 
 **grantList** | **[String]**| A list of unique grant types | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="assignClientRedirectUrisUsingPUT"></a>
# **assignClientRedirectUrisUsingPUT**
> assignClientRedirectUrisUsingPUT(clientKey, opts)

Set redirect uris for a client

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthClientsApi();

var clientKey = "clientKey_example"; // String | The key of the client

var opts = { 
  'redirectList': [new KnetikPlatformApiDocumentationLatest.[String]()] // [String] | A list of unique redirect uris
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.assignClientRedirectUrisUsingPUT(clientKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientKey** | **String**| The key of the client | 
 **redirectList** | **[String]**| A list of unique redirect uris | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClientUsingPOST"></a>
# **createClientUsingPOST**
> ClientResource createClientUsingPOST(opts)

Create a new client

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthClientsApi();

var opts = { 
  'clientResource': new KnetikPlatformApiDocumentationLatest.ClientResource() // ClientResource | The client resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createClientUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientResource** | [**ClientResource**](ClientResource.md)| The client resource object | [optional] 

### Return type

[**ClientResource**](ClientResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClientUsingDELETE"></a>
# **deleteClientUsingDELETE**
> deleteClientUsingDELETE(clientKey)

Delete a client

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthClientsApi();

var clientKey = "clientKey_example"; // String | The key of the client


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteClientUsingDELETE(clientKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientKey** | **String**| The key of the client | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClientUsingGET"></a>
# **getClientUsingGET**
> ClientResource getClientUsingGET(clientKey)

Get a single client

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthClientsApi();

var clientKey = "clientKey_example"; // String | The key of the client


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClientUsingGET(clientKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientKey** | **String**| The key of the client | 

### Return type

[**ClientResource**](ClientResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClientsUsingGET"></a>
# **getClientsUsingGET**
> PageClientResource getClientsUsingGET(opts)

List and search clients

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthClientsApi();

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
apiInstance.getClientsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageClientResource**](PageClientResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAvailableGrantTypesUsingGET"></a>
# **listAvailableGrantTypesUsingGET**
> [GrantTypeResource] listAvailableGrantTypesUsingGET()

List available client grant types

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthClientsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAvailableGrantTypesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[GrantTypeResource]**](GrantTypeResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateClientUsingPUT"></a>
# **updateClientUsingPUT**
> updateClientUsingPUT(clientKey, opts)

Update a client

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthClientsApi();

var clientKey = "clientKey_example"; // String | The key of the client

var opts = { 
  'clientResource': new KnetikPlatformApiDocumentationLatest.ClientResource() // ClientResource | The client resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateClientUsingPUT(clientKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientKey** | **String**| The key of the client | 
 **clientResource** | [**ClientResource**](ClientResource.md)| The client resource object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

