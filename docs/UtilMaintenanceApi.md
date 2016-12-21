# KnetikPlatformApiDocumentationLatest.UtilMaintenanceApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUsingDELETE1**](UtilMaintenanceApi.md#deleteUsingDELETE1) | **DELETE** /maintenance | Remove maintenance info
[**getUsingGET1**](UtilMaintenanceApi.md#getUsingGET1) | **GET** /maintenance | Get current maintenance info
[**postUsingPOST**](UtilMaintenanceApi.md#postUsingPOST) | **POST** /maintenance | Set current maintenance info
[**postUsingPUT**](UtilMaintenanceApi.md#postUsingPUT) | **PUT** /maintenance | Set current maintenance info


<a name="deleteUsingDELETE1"></a>
# **deleteUsingDELETE1**
> deleteUsingDELETE1()

Remove maintenance info

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UtilMaintenanceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUsingDELETE1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsingGET1"></a>
# **getUsingGET1**
> Maintenance getUsingGET1()

Get current maintenance info

Get current maintenance info. 404 if no maintenance.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.UtilMaintenanceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsingGET1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Maintenance**](Maintenance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postUsingPOST"></a>
# **postUsingPOST**
> postUsingPOST(opts)

Set current maintenance info

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UtilMaintenanceApi();

var opts = { 
  'maintenance': new KnetikPlatformApiDocumentationLatest.Maintenance() // Maintenance | The Maintenance Object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **maintenance** | [**Maintenance**](Maintenance.md)| The Maintenance Object | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postUsingPUT"></a>
# **postUsingPUT**
> postUsingPUT(opts)

Set current maintenance info

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UtilMaintenanceApi();

var opts = { 
  'maintenance': new KnetikPlatformApiDocumentationLatest.Maintenance() // Maintenance | The Maintenance Object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **maintenance** | [**Maintenance**](Maintenance.md)| The Maintenance Object | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

