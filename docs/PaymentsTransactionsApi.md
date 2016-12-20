# KnetikPlatformApiDocumentationLatest.PaymentsTransactionsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactionUsingGET**](PaymentsTransactionsApi.md#getTransactionUsingGET) | **GET** /transactions/{id} | Get the details for a single transaction
[**getTransactionsUsingGET**](PaymentsTransactionsApi.md#getTransactionsUsingGET) | **GET** /transactions | List and search transactions
[**refundTransactionUsingPOST**](PaymentsTransactionsApi.md#refundTransactionUsingPOST) | **POST** /transactions/{id}/refunds | Refund a payment transaction, in full or in part


<a name="getTransactionUsingGET"></a>
# **getTransactionUsingGET**
> TransactionResource getTransactionUsingGET(id)

Get the details for a single transaction

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsTransactionsApi();

var id = 56; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactionUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**TransactionResource**](TransactionResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransactionsUsingGET"></a>
# **getTransactionsUsingGET**
> PageResourceTransactionResource getTransactionsUsingGET(opts)

List and search transactions

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsTransactionsApi();

var opts = { 
  'filterInvoice': 56, // Number | Filter for transactions from a specific invoice
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
apiInstance.getTransactionsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterInvoice** | **Number**| Filter for transactions from a specific invoice | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceTransactionResource**](PageResourceTransactionResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refundTransactionUsingPOST"></a>
# **refundTransactionUsingPOST**
> RefundResource refundTransactionUsingPOST(id, opts)

Refund a payment transaction, in full or in part

Will not allow for refunding more than the full amount even with multiple partial refunds. Money is refunded to the payment method used to make the original payment. Payment method must support refunds.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsTransactionsApi();

var id = 56; // Number | The id of the transaction to refund

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.RefundRequest() // RefundRequest | Request containing refund details
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refundTransactionUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the transaction to refund | 
 **request** | [**RefundRequest**](RefundRequest.md)| Request containing refund details | [optional] 

### Return type

[**RefundResource**](RefundResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

