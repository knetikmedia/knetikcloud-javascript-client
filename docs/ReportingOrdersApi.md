# KnetikPlatformApiDocumentationLatest.ReportingOrdersApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvoiceReports**](ReportingOrdersApi.md#getInvoiceReports) | **GET** /reporting/orders/count/{currency_code} | Retrieve invoice counts aggregated by time ranges


<a name="getInvoiceReports"></a>
# **getInvoiceReports**
> PageResourceAggregateInvoiceReportResource getInvoiceReports(currencyCode, opts)

Retrieve invoice counts aggregated by time ranges

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingOrdersApi();

var currencyCode = "currencyCode_example"; // String | The code for a currency to get sales data for

var opts = { 
  'granularity': "day", // String | The time duration to aggregate by
  'filterPaymentStatus': "filterPaymentStatus_example", // String | A payment status to filter results by, can be a comma separated list
  'filterFulfillmentStatus': "filterFulfillmentStatus_example", // String | An invoice fulfillment status to filter results by, can be a comma separated list
  'startDate': 789, // Number | The start of the time range to return, unix timestamp in seconds. Default is beginning of time
  'endDate': 789, // Number | The end of the time range to return, unix timestamp in seconds. Default is end of time
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInvoiceReports(currencyCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get sales data for | 
 **granularity** | **String**| The time duration to aggregate by | [optional] [default to day]
 **filterPaymentStatus** | **String**| A payment status to filter results by, can be a comma separated list | [optional] 
 **filterFulfillmentStatus** | **String**| An invoice fulfillment status to filter results by, can be a comma separated list | [optional] 
 **startDate** | **Number**| The start of the time range to return, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to return, unix timestamp in seconds. Default is end of time | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]

### Return type

[**PageResourceAggregateInvoiceReportResource**](PageResourceAggregateInvoiceReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

