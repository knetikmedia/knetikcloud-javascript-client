# KnetikcloudSdk.StoreSalesApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCatalogSale**](StoreSalesApi.md#createCatalogSale) | **POST** /store/sales | Create a sale
[**deleteCatalogSale**](StoreSalesApi.md#deleteCatalogSale) | **DELETE** /store/sales/{id} | Delete a sale
[**getCatalogSale**](StoreSalesApi.md#getCatalogSale) | **GET** /store/sales/{id} | Get a single sale
[**getCatalogSales**](StoreSalesApi.md#getCatalogSales) | **GET** /store/sales | List and search sales
[**updateCatalogSale**](StoreSalesApi.md#updateCatalogSale) | **PUT** /store/sales/{id} | Update a sale


<a name="createCatalogSale"></a>
# **createCatalogSale**
> CatalogSale createCatalogSale(opts)

Create a sale

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreSalesApi();

var opts = { 
  'catalogSale': new KnetikcloudSdk.CatalogSale() // CatalogSale | The catalog sale object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCatalogSale(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogSale** | [**CatalogSale**](CatalogSale.md)| The catalog sale object | [optional] 

### Return type

[**CatalogSale**](CatalogSale.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCatalogSale"></a>
# **deleteCatalogSale**
> deleteCatalogSale(id)

Delete a sale

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreSalesApi();

var id = 56; // Number | The id of the sale


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCatalogSale(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the sale | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCatalogSale"></a>
# **getCatalogSale**
> CatalogSale getCatalogSale(id)

Get a single sale

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreSalesApi();

var id = 56; // Number | The id of the sale


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCatalogSale(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the sale | 

### Return type

[**CatalogSale**](CatalogSale.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCatalogSales"></a>
# **getCatalogSales**
> PageResourceCatalogSale getCatalogSales(opts)

List and search sales

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreSalesApi();

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
apiInstance.getCatalogSales(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceCatalogSale**](PageResourceCatalogSale.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCatalogSale"></a>
# **updateCatalogSale**
> CatalogSale updateCatalogSale(id, opts)

Update a sale

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.StoreSalesApi();

var id = 56; // Number | The id of the sale

var opts = { 
  'catalogSale': new KnetikcloudSdk.CatalogSale() // CatalogSale | The catalog sale object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCatalogSale(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the sale | 
 **catalogSale** | [**CatalogSale**](CatalogSale.md)| The catalog sale object | [optional] 

### Return type

[**CatalogSale**](CatalogSale.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

