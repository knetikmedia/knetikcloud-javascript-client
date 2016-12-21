# KnetikPlatformApiDocumentationLatest.InvoicesApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInvoiceUsingPOST**](InvoicesApi.md#createInvoiceUsingPOST) | **POST** /invoices | Create an invoice
[**getInvoiceHistoryUsingGET**](InvoicesApi.md#getInvoiceHistoryUsingGET) | **GET** /invoices | Retrieve invoices
[**getInvoiceUsingGET**](InvoicesApi.md#getInvoiceUsingGET) | **GET** /invoices/{id} | Retrieve an invoice
[**getLogsUsingGET**](InvoicesApi.md#getLogsUsingGET) | **GET** /invoices/{id}/logs | List invoice logs
[**listFulFillmentStatusesUsingGET**](InvoicesApi.md#listFulFillmentStatusesUsingGET) | **GET** /invoices/fulfillment-statuses | Lists available fulfillment statuses
[**listPaymentStatusesUsingGET**](InvoicesApi.md#listPaymentStatusesUsingGET) | **GET** /invoices/payment-statuses | Lists available payment statuses
[**payInvoiceUsingPOST**](InvoicesApi.md#payInvoiceUsingPOST) | **POST** /invoices/{id}/payments | Trigger payment of an invoice
[**setItemFulfillmentStatusUsingPUT**](InvoicesApi.md#setItemFulfillmentStatusUsingPUT) | **PUT** /invoices/{id}/items/{sku}/fulfillment-status | Set the fulfillment status of an invoice item
[**setOrderNotesUsingPUT**](InvoicesApi.md#setOrderNotesUsingPUT) | **PUT** /invoices/{id}/order-notes | Set the order notes of an invoice
[**setPaymentStatusUsingPUT**](InvoicesApi.md#setPaymentStatusUsingPUT) | **PUT** /invoices/{id}/payment-status | Set the payment status of an invoice
[**updateBillingInfoUsingPUT**](InvoicesApi.md#updateBillingInfoUsingPUT) | **PUT** /invoices/{id}/billing-address | Set or update billing info


<a name="createInvoiceUsingPOST"></a>
# **createInvoiceUsingPOST**
> [InvoiceResource] createInvoiceUsingPOST(opts)

Create an invoice

Create an invoice(s) by providing a cart GUID. Note that there may be multiple invoices created, one per vendor.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();

var opts = { 
  'req': new KnetikPlatformApiDocumentationLatest.InvoiceCreateRequest() // InvoiceCreateRequest | Invoice to be created
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createInvoiceUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **req** | [**InvoiceCreateRequest**](InvoiceCreateRequest.md)| Invoice to be created | [optional] 

### Return type

[**[InvoiceResource]**](InvoiceResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInvoiceHistoryUsingGET"></a>
# **getInvoiceHistoryUsingGET**
> PageResourceInvoiceResource getInvoiceHistoryUsingGET(opts)

Retrieve invoices

Without INVOICES_ADMIN permission the results are automatically filtered for only the logged in user&#39;s invoices. It is recomended however that filter_user be added to avoid issues for admin users accidentally getting additional invoices.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();

var opts = { 
  'filterUser': 56, // Number | The id of a user to get invoices for. Automtically added if not being called with admin permissions.
  'filterEmail': "filterEmail_example", // String | Filters invoices by customer's email. Admins only.
  'filterFulfillmentStatus': "filterFulfillmentStatus_example", // String | Filters invoices by fulfillment status type. Can be a comma separated list of statuses
  'filterPaymentStatus': "filterPaymentStatus_example", // String | Filters invoices by payment status type. Can be a comma separated list of statuses
  'filterItemName': "filterItemName_example", // String | Filters invoices by item name containing the given string
  'filterCreatedDate': "filterCreatedDate_example", // String | Filters invoices by creation date. Multiple values possible for range search. Format: filter_created_date=OP,ts&... where OP in (GT, LT, GOE, LOE, EQ) and ts is a unix timestamp in seconds. Ex: filter_created_date=GT,1452154258,LT,1554254874
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
apiInstance.getInvoiceHistoryUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterUser** | **Number**| The id of a user to get invoices for. Automtically added if not being called with admin permissions. | [optional] 
 **filterEmail** | **String**| Filters invoices by customer&#39;s email. Admins only. | [optional] 
 **filterFulfillmentStatus** | **String**| Filters invoices by fulfillment status type. Can be a comma separated list of statuses | [optional] 
 **filterPaymentStatus** | **String**| Filters invoices by payment status type. Can be a comma separated list of statuses | [optional] 
 **filterItemName** | **String**| Filters invoices by item name containing the given string | [optional] 
 **filterCreatedDate** | **String**| Filters invoices by creation date. Multiple values possible for range search. Format: filter_created_date&#x3D;OP,ts&amp;... where OP in (GT, LT, GOE, LOE, EQ) and ts is a unix timestamp in seconds. Ex: filter_created_date&#x3D;GT,1452154258,LT,1554254874 | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceInvoiceResource**](PageResourceInvoiceResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInvoiceUsingGET"></a>
# **getInvoiceUsingGET**
> InvoiceResource getInvoiceUsingGET(id, opts)

Retrieve an invoice

The postal code associated with the invoice may be required for security purposes if the invoice has one set and the config postal_code_required is set to true. Send &#39;none&#39; if the invoice has no postal code.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();

var id = 56; // Number | The id of the invoice

var opts = { 
  'postalCode': "postalCode_example" // String | The postal code of the invoice or 'none'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInvoiceUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the invoice | 
 **postalCode** | **String**| The postal code of the invoice or &#39;none&#39;. | [optional] 

### Return type

[**InvoiceResource**](InvoiceResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLogsUsingGET"></a>
# **getLogsUsingGET**
> PageResourceInvoiceLogEntry getLogsUsingGET(id, opts)

List invoice logs

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();

var id = 56; // Number | The id of the invoice

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLogsUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the invoice | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceInvoiceLogEntry**](PageResourceInvoiceLogEntry.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFulFillmentStatusesUsingGET"></a>
# **listFulFillmentStatusesUsingGET**
> [&#39;String&#39;] listFulFillmentStatusesUsingGET()

Lists available fulfillment statuses

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFulFillmentStatusesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listPaymentStatusesUsingGET"></a>
# **listPaymentStatusesUsingGET**
> [&#39;String&#39;] listPaymentStatusesUsingGET()

Lists available payment statuses

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPaymentStatusesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="payInvoiceUsingPOST"></a>
# **payInvoiceUsingPOST**
> payInvoiceUsingPOST(id, opts)

Trigger payment of an invoice

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();

var id = 56; // Number | The id of the invoice

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.PayBySavedMethodRequest() // PayBySavedMethodRequest | Payment info
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.payInvoiceUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the invoice | 
 **request** | [**PayBySavedMethodRequest**](PayBySavedMethodRequest.md)| Payment info | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setItemFulfillmentStatusUsingPUT"></a>
# **setItemFulfillmentStatusUsingPUT**
> setItemFulfillmentStatusUsingPUT(id, sku, status)

Set the fulfillment status of an invoice item

This allows external fulfillment systems to report success or failure. Fulfillment status changes are restricted by a specific flow determining which status can lead to which.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();

var id = 56; // Number | The id of the invoice

var sku = "sku_example"; // String | The sku of an item in the invoice

var status = "status_example"; // String | The new fulfillment status for the item. Additional options may be available based on configuration.  Allowable values:  'unfulfilled', 'fulfilled', 'not fulfillable', 'failed', 'processing', 'failed_permanent', 'delayed'


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setItemFulfillmentStatusUsingPUT(id, sku, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the invoice | 
 **sku** | **String**| The sku of an item in the invoice | 
 **status** | **String**| The new fulfillment status for the item. Additional options may be available based on configuration.  Allowable values:  &#39;unfulfilled&#39;, &#39;fulfilled&#39;, &#39;not fulfillable&#39;, &#39;failed&#39;, &#39;processing&#39;, &#39;failed_permanent&#39;, &#39;delayed&#39; | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setOrderNotesUsingPUT"></a>
# **setOrderNotesUsingPUT**
> setOrderNotesUsingPUT(id, opts)

Set the order notes of an invoice

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();

var id = 56; // Number | The id of the invoice

var opts = { 
  'orderNotes': "orderNotes_example" // String | Payment status info
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setOrderNotesUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the invoice | 
 **orderNotes** | **String**| Payment status info | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setPaymentStatusUsingPUT"></a>
# **setPaymentStatusUsingPUT**
> setPaymentStatusUsingPUT(id, opts)

Set the payment status of an invoice

This may trigger fulfillment if setting the status to &#39;paid&#39;. This is mainly intended to support external payment systems that cannot be incorporated into the payment method system. Payment status changes are restricted by a specific flow determining which status can lead to which.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();

var id = 56; // Number | The id of the invoice

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.InvoicePaymentStatusRequest() // InvoicePaymentStatusRequest | Payment status info
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setPaymentStatusUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the invoice | 
 **request** | [**InvoicePaymentStatusRequest**](InvoicePaymentStatusRequest.md)| Payment status info | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBillingInfoUsingPUT"></a>
# **updateBillingInfoUsingPUT**
> updateBillingInfoUsingPUT(id, opts)

Set or update billing info

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();

var id = 56; // Number | The id of the invoice

var opts = { 
  'billingInfoRequest': new KnetikPlatformApiDocumentationLatest.AddressResource() // AddressResource | Address info
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBillingInfoUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the invoice | 
 **billingInfoRequest** | [**AddressResource**](AddressResource.md)| Address info | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

