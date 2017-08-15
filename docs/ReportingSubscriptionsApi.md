# KnetikCloud.ReportingSubscriptionsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSubscriptionReports**](ReportingSubscriptionsApi.md#getSubscriptionReports) | **GET** /reporting/subscription | Get a list of available subscription reports in most recent first order


<a name="getSubscriptionReports"></a>
# **getSubscriptionReports**
> PageResourceBillingReport getSubscriptionReports(opts)

Get a list of available subscription reports in most recent first order

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ReportingSubscriptionsApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getSubscriptionReports(opts).then((data) => {
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

### Return type

[**PageResourceBillingReport**](PageResourceBillingReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

