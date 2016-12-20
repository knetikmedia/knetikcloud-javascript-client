# KnetikPlatformApiDocumentationLatest.StoreCouponsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCouponItemUsingPOST**](StoreCouponsApi.md#createCouponItemUsingPOST) | **POST** /store/coupons | Create a coupon item
[**createCouponTemplateUsingPOST**](StoreCouponsApi.md#createCouponTemplateUsingPOST) | **POST** /store/coupons/templates | Create a coupon template
[**deleteCouponItemUsingDELETE**](StoreCouponsApi.md#deleteCouponItemUsingDELETE) | **DELETE** /store/coupons/{id} | Delete a coupon item
[**deleteCouponTemplateUsingDELETE**](StoreCouponsApi.md#deleteCouponTemplateUsingDELETE) | **DELETE** /store/coupons/templates/{id} | Delete a coupon template
[**getCouponItemUsingGET**](StoreCouponsApi.md#getCouponItemUsingGET) | **GET** /store/coupons/{id} | Get a single coupon item
[**getCouponTemplateUsingGET**](StoreCouponsApi.md#getCouponTemplateUsingGET) | **GET** /store/coupons/templates/{id} | Get a single coupon template
[**getCouponTemplatesUsingGET**](StoreCouponsApi.md#getCouponTemplatesUsingGET) | **GET** /store/coupons/templates | List and search coupon templates
[**updateCouponItemUsingPUT**](StoreCouponsApi.md#updateCouponItemUsingPUT) | **PUT** /store/coupons/{id} | Update a coupon item
[**updateCouponTemplateUsingPUT**](StoreCouponsApi.md#updateCouponTemplateUsingPUT) | **PUT** /store/coupons/templates/{id} | Update a coupon template


<a name="createCouponItemUsingPOST"></a>
# **createCouponItemUsingPOST**
> CouponItem createCouponItemUsingPOST(opts)

Create a coupon item

SKUs have to be unique in the entire store.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreCouponsApi();

var opts = { 
  'couponItem': new KnetikPlatformApiDocumentationLatest.CouponItem() // CouponItem | The coupon item object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCouponItemUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponItem** | [**CouponItem**](CouponItem.md)| The coupon item object | [optional] 

### Return type

[**CouponItem**](CouponItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCouponTemplateUsingPOST"></a>
# **createCouponTemplateUsingPOST**
> ItemTemplateResource createCouponTemplateUsingPOST(opts)

Create a coupon template

Coupon Templates define a type of coupon and the properties they have.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreCouponsApi();

var opts = { 
  'couponTemplateResource': new KnetikPlatformApiDocumentationLatest.ItemTemplateResource() // ItemTemplateResource | The new coupon template
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCouponTemplateUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponTemplateResource** | [**ItemTemplateResource**](ItemTemplateResource.md)| The new coupon template | [optional] 

### Return type

[**ItemTemplateResource**](ItemTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCouponItemUsingDELETE"></a>
# **deleteCouponItemUsingDELETE**
> deleteCouponItemUsingDELETE(id)

Delete a coupon item

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreCouponsApi();

var id = 56; // Number | The id of the coupon


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCouponItemUsingDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the coupon | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCouponTemplateUsingDELETE"></a>
# **deleteCouponTemplateUsingDELETE**
> deleteCouponTemplateUsingDELETE(id, opts)

Delete a coupon template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreCouponsApi();

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
apiInstance.deleteCouponTemplateUsingDELETE(id, opts, callback);
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

<a name="getCouponItemUsingGET"></a>
# **getCouponItemUsingGET**
> CouponItem getCouponItemUsingGET(id)

Get a single coupon item

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreCouponsApi();

var id = 56; // Number | The id of the coupon


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCouponItemUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the coupon | 

### Return type

[**CouponItem**](CouponItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponTemplateUsingGET"></a>
# **getCouponTemplateUsingGET**
> ItemTemplateResource getCouponTemplateUsingGET(id)

Get a single coupon template

Coupon Templates define a type of coupon and the properties they have.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreCouponsApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCouponTemplateUsingGET(id, callback);
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

<a name="getCouponTemplatesUsingGET"></a>
# **getCouponTemplatesUsingGET**
> PageResourceItemTemplateResource getCouponTemplatesUsingGET(opts)

List and search coupon templates

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreCouponsApi();

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
apiInstance.getCouponTemplatesUsingGET(opts, callback);
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

<a name="updateCouponItemUsingPUT"></a>
# **updateCouponItemUsingPUT**
> updateCouponItemUsingPUT(id, opts)

Update a coupon item

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreCouponsApi();

var id = 56; // Number | The id of the coupon

var opts = { 
  'couponItem': new KnetikPlatformApiDocumentationLatest.CouponItem() // CouponItem | The coupon item object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCouponItemUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the coupon | 
 **couponItem** | [**CouponItem**](CouponItem.md)| The coupon item object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCouponTemplateUsingPUT"></a>
# **updateCouponTemplateUsingPUT**
> updateCouponTemplateUsingPUT(id, opts)

Update a coupon template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.StoreCouponsApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'couponTemplateResource': new KnetikPlatformApiDocumentationLatest.ItemTemplateResource() // ItemTemplateResource | The coupon template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCouponTemplateUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **couponTemplateResource** | [**ItemTemplateResource**](ItemTemplateResource.md)| The coupon template resource object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

