# KnetikCloud.UtilSecurityApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserLocationLog**](UtilSecurityApi.md#getUserLocationLog) | **GET** /security/country-log | Returns the authentication log for a user
[**getUserTokenDetails**](UtilSecurityApi.md#getUserTokenDetails) | **GET** /me | Returns the authentication token details. Use /users endpoint for detailed user&#39;s info


<a name="getUserLocationLog"></a>
# **getUserLocationLog**
> PageResourceLocationLogResource getUserLocationLog(opts)

Returns the authentication log for a user

A log entry is recorded everytime a user requests a new token. Standard pagination available

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.UtilSecurityApi();

let opts = { 
  'userId': 56, // Number | The user id
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "order_example" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getUserLocationLog(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The user id | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] 

### Return type

[**PageResourceLocationLogResource**](PageResourceLocationLogResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserTokenDetails"></a>
# **getUserTokenDetails**
> TokenDetailsResource getUserTokenDetails()

Returns the authentication token details. Use /users endpoint for detailed user&#39;s info

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.UtilSecurityApi();
apiInstance.getUserTokenDetails().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TokenDetailsResource**](TokenDetailsResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

