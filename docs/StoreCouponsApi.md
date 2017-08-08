# KnetikCloud.StoreCouponsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCouponItem**](StoreCouponsApi.md#createCouponItem) | **POST** /store/coupons | Create a coupon item
[**createCouponTemplate**](StoreCouponsApi.md#createCouponTemplate) | **POST** /store/coupons/templates | Create a coupon template
[**deleteCouponItem**](StoreCouponsApi.md#deleteCouponItem) | **DELETE** /store/coupons/{id} | Delete a coupon item
[**deleteCouponTemplate**](StoreCouponsApi.md#deleteCouponTemplate) | **DELETE** /store/coupons/templates/{id} | Delete a coupon template
[**getCouponItem**](StoreCouponsApi.md#getCouponItem) | **GET** /store/coupons/{id} | Get a single coupon item
[**getCouponTemplate**](StoreCouponsApi.md#getCouponTemplate) | **GET** /store/coupons/templates/{id} | Get a single coupon template
[**getCouponTemplates**](StoreCouponsApi.md#getCouponTemplates) | **GET** /store/coupons/templates | List and search coupon templates
[**updateCouponItem**](StoreCouponsApi.md#updateCouponItem) | **PUT** /store/coupons/{id} | Update a coupon item
[**updateCouponTemplate**](StoreCouponsApi.md#updateCouponTemplate) | **PUT** /store/coupons/templates/{id} | Update a coupon template


<a name="createCouponItem"></a>
# **createCouponItem**
> CouponItem createCouponItem(opts)

Create a coupon item

SKUs have to be unique in the entire store.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.StoreCouponsApi();

let opts = { 
  'cascade': false, // Boolean | Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values.
  'couponItem': new KnetikCloud.CouponItem() // CouponItem | The coupon item object
};
apiInstance.createCouponItem(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cascade** | **Boolean**| Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. | [optional] [default to false]
 **couponItem** | [**CouponItem**](CouponItem.md)| The coupon item object | [optional] 

### Return type

[**CouponItem**](CouponItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCouponTemplate"></a>
# **createCouponTemplate**
> ItemTemplateResource createCouponTemplate(opts)

Create a coupon template

Coupon Templates define a type of coupon and the properties they have.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.StoreCouponsApi();

let opts = { 
  'couponTemplateResource': new KnetikCloud.ItemTemplateResource() // ItemTemplateResource | The new coupon template
};
apiInstance.createCouponTemplate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="deleteCouponItem"></a>
# **deleteCouponItem**
> deleteCouponItem(id)

Delete a coupon item

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.StoreCouponsApi();

let id = 56; // Number | The id of the coupon

apiInstance.deleteCouponItem(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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

<a name="deleteCouponTemplate"></a>
# **deleteCouponTemplate**
> deleteCouponTemplate(id, opts)

Delete a coupon template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.StoreCouponsApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'cascade': "cascade_example" // String | force deleting the template if it's attached to other objects, cascade = detach
};
apiInstance.deleteCouponTemplate(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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

<a name="getCouponItem"></a>
# **getCouponItem**
> CouponItem getCouponItem(id)

Get a single coupon item

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.StoreCouponsApi();

let id = 56; // Number | The id of the coupon

apiInstance.getCouponItem(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="getCouponTemplate"></a>
# **getCouponTemplate**
> ItemTemplateResource getCouponTemplate(id)

Get a single coupon template

Coupon Templates define a type of coupon and the properties they have.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.StoreCouponsApi();

let id = "id_example"; // String | The id of the template

apiInstance.getCouponTemplate(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="getCouponTemplates"></a>
# **getCouponTemplates**
> PageResourceItemTemplateResource getCouponTemplates(opts)

List and search coupon templates

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.StoreCouponsApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getCouponTemplates(opts).then((data) => {
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

[**PageResourceItemTemplateResource**](PageResourceItemTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCouponItem"></a>
# **updateCouponItem**
> CouponItem updateCouponItem(id, opts)

Update a coupon item

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.StoreCouponsApi();

let id = 56; // Number | The id of the coupon

let opts = { 
  'cascade': false, // Boolean | Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values.
  'couponItem': new KnetikCloud.CouponItem() // CouponItem | The coupon item object
};
apiInstance.updateCouponItem(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the coupon | 
 **cascade** | **Boolean**| Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. | [optional] [default to false]
 **couponItem** | [**CouponItem**](CouponItem.md)| The coupon item object | [optional] 

### Return type

[**CouponItem**](CouponItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCouponTemplate"></a>
# **updateCouponTemplate**
> ItemTemplateResource updateCouponTemplate(id, opts)

Update a coupon template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.StoreCouponsApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'couponTemplateResource': new KnetikCloud.ItemTemplateResource() // ItemTemplateResource | The coupon template resource object
};
apiInstance.updateCouponTemplate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **couponTemplateResource** | [**ItemTemplateResource**](ItemTemplateResource.md)| The coupon template resource object | [optional] 

### Return type

[**ItemTemplateResource**](ItemTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

