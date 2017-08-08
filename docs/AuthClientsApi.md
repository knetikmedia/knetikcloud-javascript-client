# KnetikCloud.AuthClientsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClient**](AuthClientsApi.md#createClient) | **POST** /auth/clients | Create a new client
[**deleteClient**](AuthClientsApi.md#deleteClient) | **DELETE** /auth/clients/{client_key} | Delete a client
[**getClient**](AuthClientsApi.md#getClient) | **GET** /auth/clients/{client_key} | Get a single client
[**getClientGrantTypes**](AuthClientsApi.md#getClientGrantTypes) | **GET** /auth/clients/grant-types | List available client grant types
[**getClients**](AuthClientsApi.md#getClients) | **GET** /auth/clients | List and search clients
[**setClientGrantTypes**](AuthClientsApi.md#setClientGrantTypes) | **PUT** /auth/clients/{client_key}/grant-types | Set grant types for a client
[**setClientRedirectUris**](AuthClientsApi.md#setClientRedirectUris) | **PUT** /auth/clients/{client_key}/redirect-uris | Set redirect uris for a client
[**updateClient**](AuthClientsApi.md#updateClient) | **PUT** /auth/clients/{client_key} | Update a client


<a name="createClient"></a>
# **createClient**
> ClientResource createClient(opts)

Create a new client

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.AuthClientsApi();

let opts = { 
  'clientResource': new KnetikCloud.ClientResource() // ClientResource | The client resource object
};
apiInstance.createClient(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="deleteClient"></a>
# **deleteClient**
> deleteClient(clientKey)

Delete a client

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.AuthClientsApi();

let clientKey = "clientKey_example"; // String | The key of the client

apiInstance.deleteClient(clientKey).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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

<a name="getClient"></a>
# **getClient**
> ClientResource getClient(clientKey)

Get a single client

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.AuthClientsApi();

let clientKey = "clientKey_example"; // String | The key of the client

apiInstance.getClient(clientKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="getClientGrantTypes"></a>
# **getClientGrantTypes**
> [GrantTypeResource] getClientGrantTypes()

List available client grant types

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.AuthClientsApi();
apiInstance.getClientGrantTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="getClients"></a>
# **getClients**
> PageResourceClientResource getClients(opts)

List and search clients

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.AuthClientsApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getClients(opts).then((data) => {
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

[**PageResourceClientResource**](PageResourceClientResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setClientGrantTypes"></a>
# **setClientGrantTypes**
> setClientGrantTypes(clientKey, opts)

Set grant types for a client

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.AuthClientsApi();

let clientKey = "clientKey_example"; // String | The key of the client

let opts = { 
  'grantList': [new KnetikCloud.[String]()] // [String] | A list of unique grant types
};
apiInstance.setClientGrantTypes(clientKey, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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

<a name="setClientRedirectUris"></a>
# **setClientRedirectUris**
> setClientRedirectUris(clientKey, opts)

Set redirect uris for a client

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.AuthClientsApi();

let clientKey = "clientKey_example"; // String | The key of the client

let opts = { 
  'redirectList': [new KnetikCloud.[String]()] // [String] | A list of unique redirect uris
};
apiInstance.setClientRedirectUris(clientKey, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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

<a name="updateClient"></a>
# **updateClient**
> ClientResource updateClient(clientKey, opts)

Update a client

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.AuthClientsApi();

let clientKey = "clientKey_example"; // String | The key of the client

let opts = { 
  'clientResource': new KnetikCloud.ClientResource() // ClientResource | The client resource object
};
apiInstance.updateClient(clientKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientKey** | **String**| The key of the client | 
 **clientResource** | [**ClientResource**](ClientResource.md)| The client resource object | [optional] 

### Return type

[**ClientResource**](ClientResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

