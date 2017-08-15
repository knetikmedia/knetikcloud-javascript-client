# KnetikCloud.PaymentsWalletsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserWallet**](PaymentsWalletsApi.md#getUserWallet) | **GET** /users/{user_id}/wallets/{currency_code} | Returns the user&#39;s wallet for the given currency code
[**getUserWalletTransactions**](PaymentsWalletsApi.md#getUserWalletTransactions) | **GET** /users/{user_id}/wallets/{currency_code}/transactions | Retrieve a user&#39;s wallet transactions
[**getUserWallets**](PaymentsWalletsApi.md#getUserWallets) | **GET** /users/{user_id}/wallets | List all of a user&#39;s wallets
[**getWalletBalances**](PaymentsWalletsApi.md#getWalletBalances) | **GET** /wallets/totals | Retrieves a summation of wallet balances by currency code
[**getWalletTransactions**](PaymentsWalletsApi.md#getWalletTransactions) | **GET** /wallets/transactions | Retrieve wallet transactions across the system
[**getWallets**](PaymentsWalletsApi.md#getWallets) | **GET** /wallets | Retrieve a list of wallets across the system
[**updateWalletBalance**](PaymentsWalletsApi.md#updateWalletBalance) | **PUT** /users/{user_id}/wallets/{currency_code}/balance | Updates the balance for a user&#39;s wallet


<a name="getUserWallet"></a>
# **getUserWallet**
> SimpleWallet getUserWallet(userId, currencyCode)

Returns the user&#39;s wallet for the given currency code

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.PaymentsWalletsApi();

let userId = 56; // Number | The ID of the user for whom wallet is being retrieved

let currencyCode = "currencyCode_example"; // String | Currency code of the user's wallet

apiInstance.getUserWallet(userId, currencyCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
 - **Accept**: application/json

<a name="getUserWalletTransactions"></a>
# **getUserWalletTransactions**
> PageResourceWalletTransactionResource getUserWalletTransactions(userId, currencyCode, opts)

Retrieve a user&#39;s wallet transactions

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.PaymentsWalletsApi();

let userId = 56; // Number | The ID of the user for whom wallet transactions are being retrieved

let currencyCode = "currencyCode_example"; // String | Currency code of the user's wallet

let opts = { 
  'filterType': "filterType_example", // String | Filter for transactions with specified type
  'filterMaxDate': 789, // Number | Filter for transactions from no earlier than the specified date as a unix timestamp in seconds
  'filterMinDate': 789, // Number | Filter for transactions from no later than the specified date as a unix timestamp in seconds
  'filterSign': "filterSign_example", // String | Filter for transactions with amount with the given sign.  Allowable values: ('positive', 'negative')
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getUserWalletTransactions(userId, currencyCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceWalletTransactionResource**](PageResourceWalletTransactionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserWallets"></a>
# **getUserWallets**
> [SimpleWallet] getUserWallets(userId)

List all of a user&#39;s wallets

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.PaymentsWalletsApi();

let userId = 56; // Number | The ID of the user for whom wallets are being retrieved

apiInstance.getUserWallets(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
 - **Accept**: application/json

<a name="getWalletBalances"></a>
# **getWalletBalances**
> PageResourceWalletTotalResponse getWalletBalances()

Retrieves a summation of wallet balances by currency code

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.PaymentsWalletsApi();
apiInstance.getWalletBalances().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PageResourceWalletTotalResponse**](PageResourceWalletTotalResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWalletTransactions"></a>
# **getWalletTransactions**
> PageResourceWalletTransactionResource getWalletTransactions(opts)

Retrieve wallet transactions across the system

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.PaymentsWalletsApi();

let opts = { 
  'filterInvoice': 56, // Number | Filter for transactions from a specific invoice
  'filterType': "filterType_example", // String | Filter for transactions with specified type
  'filterDate': "filterDate_example", // String | A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds. Can be repeated for a range, eg: GT,123,LT,456  Allowed operators: (GT, LT, EQ, GOE, LOE).
  'filterSign': "filterSign_example", // String | Filter for transactions with amount with the given sign
  'filterUserId': 56, // Number | Filter for transactions for specific userId
  'filterUsername': "filterUsername_example", // String | Filter for transactions for specific username that start with the given string
  'filterDetails': "filterDetails_example", // String | Filter for transactions for specific details that start with the given string
  'filterCurrencyCode': "filterCurrencyCode_example", // String | Filter for transactions for specific currency code
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getWalletTransactions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterInvoice** | **Number**| Filter for transactions from a specific invoice | [optional] 
 **filterType** | **String**| Filter for transactions with specified type | [optional] 
 **filterDate** | **String**| A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds. Can be repeated for a range, eg: GT,123,LT,456  Allowed operators: (GT, LT, EQ, GOE, LOE). | [optional] 
 **filterSign** | **String**| Filter for transactions with amount with the given sign | [optional] 
 **filterUserId** | **Number**| Filter for transactions for specific userId | [optional] 
 **filterUsername** | **String**| Filter for transactions for specific username that start with the given string | [optional] 
 **filterDetails** | **String**| Filter for transactions for specific details that start with the given string | [optional] 
 **filterCurrencyCode** | **String**| Filter for transactions for specific currency code | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceWalletTransactionResource**](PageResourceWalletTransactionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWallets"></a>
# **getWallets**
> PageResourceSimpleWallet getWallets(opts)

Retrieve a list of wallets across the system

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.PaymentsWalletsApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getWallets(opts).then((data) => {
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

[**PageResourceSimpleWallet**](PageResourceSimpleWallet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateWalletBalance"></a>
# **updateWalletBalance**
> WalletTransactionResource updateWalletBalance(userId, currencyCode, opts)

Updates the balance for a user&#39;s wallet

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.PaymentsWalletsApi();

let userId = 56; // Number | The ID of the user for whom wallet is being modified

let currencyCode = "currencyCode_example"; // String | Currency code of the user's wallet

let opts = { 
  'request': new KnetikCloud.WalletAlterRequest() // WalletAlterRequest | The requested balance modification to be made to the user's wallet
};
apiInstance.updateWalletBalance(userId, currencyCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
 - **Accept**: application/json

