# KnetikPlatformApiDocumentationLatest.FulfillmentApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFulfillmentTypeUsingPOST**](FulfillmentApi.md#createFulfillmentTypeUsingPOST) | **POST** /store/fulfillment/types | Create a fulfillment type
[**deleteFulfillmentTypeUsingDELETE**](FulfillmentApi.md#deleteFulfillmentTypeUsingDELETE) | **DELETE** /store/fulfillment/types/{id} | Delete a fulfillment type
[**getFulfillmentTypeUsingGET**](FulfillmentApi.md#getFulfillmentTypeUsingGET) | **GET** /store/fulfillment/types/{id} | Get a single fulfillment type
[**getFulfillmentsUsingGET**](FulfillmentApi.md#getFulfillmentsUsingGET) | **GET** /store/fulfillment/types | List and search fulfillment types
[**updateFulfillmentTypeUsingPUT**](FulfillmentApi.md#updateFulfillmentTypeUsingPUT) | **PUT** /store/fulfillment/types/{id} | Update a fulfillment type


<a name="createFulfillmentTypeUsingPOST"></a>
# **createFulfillmentTypeUsingPOST**
> FulfillmentType createFulfillmentTypeUsingPOST(opts)

Create a fulfillment type

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.FulfillmentApi();

var opts = { 
  'type': new KnetikPlatformApiDocumentationLatest.FulfillmentType() // FulfillmentType | The fulfillment type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFulfillmentTypeUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**FulfillmentType**](FulfillmentType.md)| The fulfillment type | [optional] 

### Return type

[**FulfillmentType**](FulfillmentType.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFulfillmentTypeUsingDELETE"></a>
# **deleteFulfillmentTypeUsingDELETE**
> deleteFulfillmentTypeUsingDELETE(id)

Delete a fulfillment type

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.FulfillmentApi();

var id = 56; // Number | The id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFulfillmentTypeUsingDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFulfillmentTypeUsingGET"></a>
# **getFulfillmentTypeUsingGET**
> FulfillmentType getFulfillmentTypeUsingGET(id)

Get a single fulfillment type

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.FulfillmentApi();

var id = 56; // Number | The id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFulfillmentTypeUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id | 

### Return type

[**FulfillmentType**](FulfillmentType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFulfillmentsUsingGET"></a>
# **getFulfillmentsUsingGET**
> PageFulfillmentType getFulfillmentsUsingGET(opts)

List and search fulfillment types

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.FulfillmentApi();

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
apiInstance.getFulfillmentsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageFulfillmentType**](PageFulfillmentType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFulfillmentTypeUsingPUT"></a>
# **updateFulfillmentTypeUsingPUT**
> updateFulfillmentTypeUsingPUT(id, opts)

Update a fulfillment type

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.FulfillmentApi();

var id = 56; // Number | The id

var opts = { 
  'fulfillmentType': new KnetikPlatformApiDocumentationLatest.FulfillmentType() // FulfillmentType | The fulfillment type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateFulfillmentTypeUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id | 
 **fulfillmentType** | [**FulfillmentType**](FulfillmentType.md)| The fulfillment type | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

