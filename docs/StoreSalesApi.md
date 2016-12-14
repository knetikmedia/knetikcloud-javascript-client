# KnetikPlatformApiDocumentationLatest.StoreSalesApi

All URIs are relative to *https://devsandbox.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCatalogSaleUsingPOST**](StoreSalesApi.md#createCatalogSaleUsingPOST) | **POST** /store/sales | Create a sale
[**deleteCatalogSaleUsingDELETE**](StoreSalesApi.md#deleteCatalogSaleUsingDELETE) | **DELETE** /store/sales/{id} | Delete a sale
[**getCatalogSaleUsingGET**](StoreSalesApi.md#getCatalogSaleUsingGET) | **GET** /store/sales/{id} | Get a single sale
[**getCatalogSalesUsingGET**](StoreSalesApi.md#getCatalogSalesUsingGET) | **GET** /store/sales | List and search sales
[**updateCatalogSaleUsingPUT**](StoreSalesApi.md#updateCatalogSaleUsingPUT) | **PUT** /store/sales/{id} | Update a sale


<a name="createCatalogSaleUsingPOST"></a>
# **createCatalogSaleUsingPOST**
> CatalogSale createCatalogSaleUsingPOST(opts)

Create a sale

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSalesApi();

var opts = { 
  'catalogSale': new KnetikPlatformApiDocumentationLatest.CatalogSale() // CatalogSale | The catalog sale object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCatalogSaleUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogSale** | [**CatalogSale**](CatalogSale.md)| The catalog sale object | [optional] 

### Return type

[**CatalogSale**](CatalogSale.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteCatalogSaleUsingDELETE"></a>
# **deleteCatalogSaleUsingDELETE**
> deleteCatalogSaleUsingDELETE(id)

Delete a sale

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSalesApi();

var id = 56; // Number | The id of the sale


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCatalogSaleUsingDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the sale | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getCatalogSaleUsingGET"></a>
# **getCatalogSaleUsingGET**
> CatalogSale getCatalogSaleUsingGET(id)

Get a single sale

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSalesApi();

var id = 56; // Number | The id of the sale


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCatalogSaleUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the sale | 

### Return type

[**CatalogSale**](CatalogSale.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getCatalogSalesUsingGET"></a>
# **getCatalogSalesUsingGET**
> PageCatalogSale getCatalogSalesUsingGET(opts)

List and search sales

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSalesApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "1" // String | a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCatalogSalesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**PageCatalogSale**](PageCatalogSale.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateCatalogSaleUsingPUT"></a>
# **updateCatalogSaleUsingPUT**
> updateCatalogSaleUsingPUT(id, opts)

Update a sale

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreSalesApi();

var id = 56; // Number | The id of the sale

var opts = { 
  'catalogSale': new KnetikPlatformApiDocumentationLatest.CatalogSale() // CatalogSale | The catalog sale object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCatalogSaleUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the sale | 
 **catalogSale** | [**CatalogSale**](CatalogSale.md)| The catalog sale object | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

