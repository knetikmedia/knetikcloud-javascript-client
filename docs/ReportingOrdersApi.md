# KnetikCloud.ReportingOrdersApi

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
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ReportingOrdersApi();

let currencyCode = "currencyCode_example"; // String | The code for a currency to get sales data for

let opts = { 
  'granularity': "day", // String | The time duration to aggregate by
  'filterPaymentStatus': "filterPaymentStatus_example", // String | A payment status to filter results by, can be a comma separated list
  'filterFulfillmentStatus': "filterFulfillmentStatus_example", // String | An invoice fulfillment status to filter results by, can be a comma separated list
  'startDate': 789, // Number | The start of the time range to return, unix timestamp in seconds. Default is beginning of time
  'endDate': 789, // Number | The end of the time range to return, unix timestamp in seconds. Default is end of time
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned
};
apiInstance.getInvoiceReports(currencyCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

