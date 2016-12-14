# KnetikPlatformApiDocumentationLatest.CustomerserviceApi

All URIs are relative to *https://devsandbox.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomerUsingPOST**](CustomerserviceApi.md#createCustomerUsingPOST) | **POST** /customers | Create a customer
[**getCustomersUsingGET**](CustomerserviceApi.md#getCustomersUsingGET) | **GET** /customers | List and search customers


<a name="createCustomerUsingPOST"></a>
# **createCustomerUsingPOST**
> createCustomerUsingPOST(customer)

Create a customer

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.CustomerserviceApi();

var customer = new KnetikPlatformApiDocumentationLatest.CustomerConfig(); // CustomerConfig | customer


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createCustomerUsingPOST(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [**CustomerConfig**](CustomerConfig.md)| customer | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getCustomersUsingGET"></a>
# **getCustomersUsingGET**
> [CustomerResource] getCustomersUsingGET(opts)

List and search customers

Get a list of customers with optional filtering

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.CustomerserviceApi();

var opts = { 
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
apiInstance.getCustomersUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**[CustomerResource]**](CustomerResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

