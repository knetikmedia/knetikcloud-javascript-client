# KnetikCloud.ReportingRevenueApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemRevenue**](ReportingRevenueApi.md#getItemRevenue) | **GET** /reporting/revenue/item-sales/{currency_code} | Get item revenue info
[**getRefundRevenue**](ReportingRevenueApi.md#getRefundRevenue) | **GET** /reporting/revenue/refunds/{currency_code} | Get refund revenue info
[**getRevenueByCountry**](ReportingRevenueApi.md#getRevenueByCountry) | **GET** /reporting/revenue/countries/{currency_code} | Get revenue info by country
[**getRevenueByItem**](ReportingRevenueApi.md#getRevenueByItem) | **GET** /reporting/revenue/products/{currency_code} | Get revenue info by item
[**getSubscriptionRevenue**](ReportingRevenueApi.md#getSubscriptionRevenue) | **GET** /reporting/revenue/subscription-sales/{currency_code} | Get subscription revenue info


<a name="getItemRevenue"></a>
# **getItemRevenue**
> RevenueReportResource getItemRevenue(currencyCode, opts)

Get item revenue info

Get basic info about revenue from sales of items and bundles (not subscriptions, shipping, etc), summed up within a time range

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.ReportingRevenueApi();

let currencyCode = "currencyCode_example"; // String | The code for a currency to get sales data for

let opts = { 
  'startDate': 789, // Number | The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
  'endDate': 789 // Number | The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
};
apiInstance.getItemRevenue(currencyCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get sales data for | 
 **startDate** | **Number**| The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to aggregate, unix timestamp in seconds. Default is end of time | [optional] 

### Return type

[**RevenueReportResource**](RevenueReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRefundRevenue"></a>
# **getRefundRevenue**
> RevenueReportResource getRefundRevenue(currencyCode, opts)

Get refund revenue info

Get basic info about revenue loss from refunds (for all item types), summed up within a time range.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.ReportingRevenueApi();

let currencyCode = "currencyCode_example"; // String | The code for a currency to get refund data for

let opts = { 
  'startDate': 789, // Number | The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
  'endDate': 789 // Number | The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
};
apiInstance.getRefundRevenue(currencyCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get refund data for | 
 **startDate** | **Number**| The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to aggregate, unix timestamp in seconds. Default is end of time | [optional] 

### Return type

[**RevenueReportResource**](RevenueReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRevenueByCountry"></a>
# **getRevenueByCountry**
> PageResourceRevenueCountryReportResource getRevenueByCountry(currencyCode, opts)

Get revenue info by country

Get basic info about revenue from sales of all types, summed up within a time range and split out by country. Sorted for largest revenue at the top

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.ReportingRevenueApi();

let currencyCode = "currencyCode_example"; // String | The code for a currency to get sales data for

let opts = { 
  'startDate': 789, // Number | The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
  'endDate': 789, // Number | The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getRevenueByCountry(currencyCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get sales data for | 
 **startDate** | **Number**| The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to aggregate, unix timestamp in seconds. Default is end of time | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceRevenueCountryReportResource**](PageResourceRevenueCountryReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRevenueByItem"></a>
# **getRevenueByItem**
> PageResourceRevenueProductReportResource getRevenueByItem(currencyCode, opts)

Get revenue info by item

Get basic info about revenue from sales of all types, summed up within a time range and split out by specific item. Sorted for largest revenue at the top

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.ReportingRevenueApi();

let currencyCode = "currencyCode_example"; // String | The code for a currency to get sales data for

let opts = { 
  'startDate': 789, // Number | The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
  'endDate': 789, // Number | The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getRevenueByItem(currencyCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get sales data for | 
 **startDate** | **Number**| The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to aggregate, unix timestamp in seconds. Default is end of time | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceRevenueProductReportResource**](PageResourceRevenueProductReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubscriptionRevenue"></a>
# **getSubscriptionRevenue**
> RevenueReportResource getSubscriptionRevenue(currencyCode, opts)

Get subscription revenue info

Get basic info about revenue from sales of new subscriptions as well as recurring payemnts, summed up within a time range

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.ReportingRevenueApi();

let currencyCode = "currencyCode_example"; // String | The code for a currency to get sales data for

let opts = { 
  'startDate': 789, // Number | The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
  'endDate': 789 // Number | The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
};
apiInstance.getSubscriptionRevenue(currencyCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get sales data for | 
 **startDate** | **Number**| The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to aggregate, unix timestamp in seconds. Default is end of time | [optional] 

### Return type

[**RevenueReportResource**](RevenueReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

