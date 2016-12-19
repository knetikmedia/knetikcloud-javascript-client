# KnetikPlatformApiDocumentationLatest.ConfigsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConfigUsingPOST**](ConfigsApi.md#createConfigUsingPOST) | **POST** /configs | Create a new config
[**deleteConfigUsingDELETE**](ConfigsApi.md#deleteConfigUsingDELETE) | **DELETE** /configs/{name} | Delete an existing config.
[**getConfigUsingGET**](ConfigsApi.md#getConfigUsingGET) | **GET** /configs/{name} | Get a single config
[**getConfigsUsingGET**](ConfigsApi.md#getConfigsUsingGET) | **GET** /configs | List and search configs
[**updateConfigUsingPUT**](ConfigsApi.md#updateConfigUsingPUT) | **PUT** /configs/{name} | Update an existing config.


<a name="createConfigUsingPOST"></a>
# **createConfigUsingPOST**
> Config createConfigUsingPOST(opts)

Create a new config

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ConfigsApi();

var opts = { 
  'config': new KnetikPlatformApiDocumentationLatest.Config() // Config | The config object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createConfigUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config** | [**Config**](Config.md)| The config object | [optional] 

### Return type

[**Config**](Config.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteConfigUsingDELETE"></a>
# **deleteConfigUsingDELETE**
> deleteConfigUsingDELETE(name)

Delete an existing config.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ConfigsApi();

var name = "name_example"; // String | The config name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteConfigUsingDELETE(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The config name | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getConfigUsingGET"></a>
# **getConfigUsingGET**
> Config getConfigUsingGET(name)

Get a single config

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.ConfigsApi();

var name = "name_example"; // String | The config name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConfigUsingGET(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The config name | 

### Return type

[**Config**](Config.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getConfigsUsingGET"></a>
# **getConfigsUsingGET**
> PageConfig getConfigsUsingGET(opts)

List and search configs

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.ConfigsApi();

var opts = { 
  'filterSearch': "filterSearch_example", // String | Filter for configs whose name contains the given string
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConfigsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterSearch** | **String**| Filter for configs whose name contains the given string | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageConfig**](PageConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateConfigUsingPUT"></a>
# **updateConfigUsingPUT**
> updateConfigUsingPUT(name, opts)

Update an existing config.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ConfigsApi();

var name = "name_example"; // String | The config name

var opts = { 
  'config': new KnetikPlatformApiDocumentationLatest.Config() // Config | The config object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateConfigUsingPUT(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The config name | 
 **config** | [**Config**](Config.md)| The config object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

