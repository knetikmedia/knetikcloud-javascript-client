# KnetikPlatformApiDocumentationLatest.UsersAddressesApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAddressUsingPOST**](UsersAddressesApi.md#createAddressUsingPOST) | **POST** /users/{user_id}/addresses | Save a new address
[**deleteAddressUsingDELETE**](UsersAddressesApi.md#deleteAddressUsingDELETE) | **DELETE** /users/{user_id}/addresses/{id} | Delete an address
[**getAddressUsingGET**](UsersAddressesApi.md#getAddressUsingGET) | **GET** /users/{user_id}/addresses/{id} | Get a single address
[**getAddressesUsingGET**](UsersAddressesApi.md#getAddressesUsingGET) | **GET** /users/{user_id}/addresses | List and search addresses
[**updateAddressUsingPUT**](UsersAddressesApi.md#updateAddressUsingPUT) | **PUT** /users/{user_id}/addresses/{id} | Update an address


<a name="createAddressUsingPOST"></a>
# **createAddressUsingPOST**
> SavedAddressResource createAddressUsingPOST(userId, opts)

Save a new address

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersAddressesApi();

var userId = "userId_example"; // String | The id of the user

var opts = { 
  'savedAddressResource': new KnetikPlatformApiDocumentationLatest.SavedAddressResource() // SavedAddressResource | The new address
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAddressUsingPOST(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user | 
 **savedAddressResource** | [**SavedAddressResource**](SavedAddressResource.md)| The new address | [optional] 

### Return type

[**SavedAddressResource**](SavedAddressResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAddressUsingDELETE"></a>
# **deleteAddressUsingDELETE**
> deleteAddressUsingDELETE(userId, id)

Delete an address

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersAddressesApi();

var userId = "userId_example"; // String | The id of the user

var id = 56; // Number | The id of the address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAddressUsingDELETE(userId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user | 
 **id** | **Number**| The id of the address | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAddressUsingGET"></a>
# **getAddressUsingGET**
> SavedAddressResource getAddressUsingGET(userId, id)

Get a single address

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersAddressesApi();

var userId = "userId_example"; // String | The id of the user

var id = 56; // Number | The id of the address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAddressUsingGET(userId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user | 
 **id** | **Number**| The id of the address | 

### Return type

[**SavedAddressResource**](SavedAddressResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAddressesUsingGET"></a>
# **getAddressesUsingGET**
> PageSavedAddressResource getAddressesUsingGET(userId, opts)

List and search addresses

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersAddressesApi();

var userId = "userId_example"; // String | The id of the user

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
apiInstance.getAddressesUsingGET(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageSavedAddressResource**](PageSavedAddressResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAddressUsingPUT"></a>
# **updateAddressUsingPUT**
> updateAddressUsingPUT(userId, id, opts)

Update an address

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersAddressesApi();

var userId = "userId_example"; // String | The id of the user

var id = 56; // Number | The id of the address

var opts = { 
  'savedAddressResource': new KnetikPlatformApiDocumentationLatest.SavedAddressResource() // SavedAddressResource | The saved address resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAddressUsingPUT(userId, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user | 
 **id** | **Number**| The id of the address | 
 **savedAddressResource** | [**SavedAddressResource**](SavedAddressResource.md)| The saved address resource object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

