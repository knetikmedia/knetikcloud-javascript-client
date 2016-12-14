# KnetikPlatformApiDocumentationLatest.PaymentsWalletsApi

All URIs are relative to *https://devsandbox.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWalletTotalsUsingGET**](PaymentsWalletsApi.md#getWalletTotalsUsingGET) | **GET** /wallets/totals | Retrieves a summation of wallet balances by currency code
[**getWalletUsingGET**](PaymentsWalletsApi.md#getWalletUsingGET) | **GET** /users/{user_id}/wallets/{currency_code} | Returns the user&#39;s wallet for the given currency code
[**getWalletsUsingGET**](PaymentsWalletsApi.md#getWalletsUsingGET) | **GET** /users/{user_id}/wallets | List all of a user&#39;s wallets
[**getWalletsUsingGET1**](PaymentsWalletsApi.md#getWalletsUsingGET1) | **GET** /wallets | Retrieve a list of wallets across the system
[**transactionHistoryUsingGET**](PaymentsWalletsApi.md#transactionHistoryUsingGET) | **GET** /wallets/transactions | Retrieve wallet transactions across the system
[**updateBalanceUsingPUT**](PaymentsWalletsApi.md#updateBalanceUsingPUT) | **PUT** /users/{user_id}/wallets/{currency_code}/balance | Updates the balance for a user&#39;s wallet
[**userTransactionHistoryUsingGET**](PaymentsWalletsApi.md#userTransactionHistoryUsingGET) | **GET** /users/{user_id}/wallets/{currency_code}/transactions | Retrieve a user&#39;s wallet transactions


<a name="getWalletTotalsUsingGET"></a>
# **getWalletTotalsUsingGET**
> PageWalletTotalResponse getWalletTotalsUsingGET()

Retrieves a summation of wallet balances by currency code

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsWalletsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWalletTotalsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PageWalletTotalResponse**](PageWalletTotalResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getWalletUsingGET"></a>
# **getWalletUsingGET**
> SimpleWallet getWalletUsingGET(userId, currencyCode)

Returns the user&#39;s wallet for the given currency code

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsWalletsApi();

var userId = 56; // Number | The ID of the user for whom wallet is being retrieved

var currencyCode = "currencyCode_example"; // String | Currency code of the user's wallet


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWalletUsingGET(userId, currencyCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The ID of the user for whom wallet is being retrieved | 
 **currencyCode** | **String**| Currency code of the user&#39;s wallet | 

### Return type

[**SimpleWallet**](SimpleWallet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getWalletsUsingGET"></a>
# **getWalletsUsingGET**
> [SimpleWallet] getWalletsUsingGET(userId)

List all of a user&#39;s wallets

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsWalletsApi();

var userId = 56; // Number | The ID of the user for whom wallets are being retrieved


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWalletsUsingGET(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The ID of the user for whom wallets are being retrieved | 

### Return type

[**[SimpleWallet]**](SimpleWallet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getWalletsUsingGET1"></a>
# **getWalletsUsingGET1**
> PageSimpleWallet getWalletsUsingGET1(opts)

Retrieve a list of wallets across the system

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsWalletsApi();

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
apiInstance.getWalletsUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**PageSimpleWallet**](PageSimpleWallet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="transactionHistoryUsingGET"></a>
# **transactionHistoryUsingGET**
> PageWalletTransactionResource transactionHistoryUsingGET(opts)

Retrieve wallet transactions across the system

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsWalletsApi();

var opts = { 
  'filterInvoice': 56, // Number | Filter for transactions from a specific invoice
  'filterType': "filterType_example", // String | Filter for transactions with specified type
  'filterMaxDate': 789, // Number | Filter for transactions from no earlier than the specified date as a unix timestamp in seconds
  'filterMinDate': 789, // Number | Filter for transactions from no later than the specified date as a unix timestamp in seconds
  'filterSign': "filterSign_example", // String | Filter for transactions with amount with the given sign
  'filterUserId': 56, // Number | Filter for transactions for specific userId
  'filterUsername': "filterUsername_example", // String | Filter for transactions for specific username that start with the given string
  'filterDetails': "filterDetails_example", // String | Filter for transactions for specific details that start with the given string
  'filterCurrencyCode': "filterCurrencyCode_example", // String | Filter for transactions for specific currency code
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "1" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transactionHistoryUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterInvoice** | **Number**| Filter for transactions from a specific invoice | [optional] 
 **filterType** | **String**| Filter for transactions with specified type | [optional] 
 **filterMaxDate** | **Number**| Filter for transactions from no earlier than the specified date as a unix timestamp in seconds | [optional] 
 **filterMinDate** | **Number**| Filter for transactions from no later than the specified date as a unix timestamp in seconds | [optional] 
 **filterSign** | **String**| Filter for transactions with amount with the given sign | [optional] 
 **filterUserId** | **Number**| Filter for transactions for specific userId | [optional] 
 **filterUsername** | **String**| Filter for transactions for specific username that start with the given string | [optional] 
 **filterDetails** | **String**| Filter for transactions for specific details that start with the given string | [optional] 
 **filterCurrencyCode** | **String**| Filter for transactions for specific currency code | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**PageWalletTransactionResource**](PageWalletTransactionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateBalanceUsingPUT"></a>
# **updateBalanceUsingPUT**
> WalletTransactionResource updateBalanceUsingPUT(userId, currencyCode, opts)

Updates the balance for a user&#39;s wallet

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsWalletsApi();

var userId = 56; // Number | The ID of the user for whom wallet is being modified

var currencyCode = "currencyCode_example"; // String | Currency code of the user's wallet

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.WalletAlterRequest() // WalletAlterRequest | The requested balance modification to be made to the user's wallet
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateBalanceUsingPUT(userId, currencyCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The ID of the user for whom wallet is being modified | 
 **currencyCode** | **String**| Currency code of the user&#39;s wallet | 
 **request** | [**WalletAlterRequest**](WalletAlterRequest.md)| The requested balance modification to be made to the user&#39;s wallet | [optional] 

### Return type

[**WalletTransactionResource**](WalletTransactionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="userTransactionHistoryUsingGET"></a>
# **userTransactionHistoryUsingGET**
> PageWalletTransactionResource userTransactionHistoryUsingGET(userId, currencyCode, opts)

Retrieve a user&#39;s wallet transactions

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.PaymentsWalletsApi();

var userId = 56; // Number | The ID of the user for whom wallet transactions are being retrieved

var currencyCode = "currencyCode_example"; // String | Currency code of the user's wallet

var opts = { 
  'filterType': "filterType_example", // String | Filter for transactions with specified type
  'filterMaxDate': 789, // Number | Filter for transactions from no earlier than the specified date as a unix timestamp in seconds
  'filterMinDate': 789, // Number | Filter for transactions from no later than the specified date as a unix timestamp in seconds
  'filterSign': "filterSign_example", // String | Filter for transactions with amount with the given sign.  Allowable values: ('positive', 'negative')
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "1" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userTransactionHistoryUsingGET(userId, currencyCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The ID of the user for whom wallet transactions are being retrieved | 
 **currencyCode** | **String**| Currency code of the user&#39;s wallet | 
 **filterType** | **String**| Filter for transactions with specified type | [optional] 
 **filterMaxDate** | **Number**| Filter for transactions from no earlier than the specified date as a unix timestamp in seconds | [optional] 
 **filterMinDate** | **Number**| Filter for transactions from no later than the specified date as a unix timestamp in seconds | [optional] 
 **filterSign** | **String**| Filter for transactions with amount with the given sign.  Allowable values: (&#39;positive&#39;, &#39;negative&#39;) | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**PageWalletTransactionResource**](PageWalletTransactionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

