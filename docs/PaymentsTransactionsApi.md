# KnetikcloudSdk.PaymentsTransactionsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransaction**](PaymentsTransactionsApi.md#getTransaction) | **GET** /transactions/{id} | Get the details for a single transaction
[**getTransactions**](PaymentsTransactionsApi.md#getTransactions) | **GET** /transactions | List and search transactions
[**refundTransaction**](PaymentsTransactionsApi.md#refundTransaction) | **POST** /transactions/{id}/refunds | Refund a payment transaction, in full or in part


<a name="getTransaction"></a>
# **getTransaction**
> TransactionResource getTransaction(id)

Get the details for a single transaction

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.PaymentsTransactionsApi();

var id = 56; // Number | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransaction(id, callback);
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

<a name="getTransactions"></a>
# **getTransactions**
> PageResourceTransactionResource getTransactions(opts)

List and search transactions

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.PaymentsTransactionsApi();

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
apiInstance.getTransactions(opts, callback);
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

<a name="refundTransaction"></a>
# **refundTransaction**
> RefundResource refundTransaction(id, opts)

Refund a payment transaction, in full or in part

Will not allow for refunding more than the full amount even with multiple partial refunds. Money is refunded to the payment method used to make the original payment. Payment method must support refunds.

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.PaymentsTransactionsApi();

var id = 56; // Number | The id of the transaction to refund

var opts = { 
  'request': new KnetikcloudSdk.RefundRequest() // RefundRequest | Request containing refund details
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refundTransaction(id, opts, callback);
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

