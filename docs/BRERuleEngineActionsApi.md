# KnetikCloud.BRERuleEngineActionsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBREActions**](BRERuleEngineActionsApi.md#getBREActions) | **GET** /bre/actions | Get a list of available actions


<a name="getBREActions"></a>
# **getBREActions**
> [ActionResource] getBREActions(opts)

Get a list of available actions

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.BRERuleEngineActionsApi();

let opts = { 
  'filterCategory': "filterCategory_example", // String | Filter for actions that are within a specific category
  'filterName': "filterName_example", // String | Filter for actions that have names containing the given string
  'filterTags': "filterTags_example", // String | Filter for actions that have all of the given tags (comma separated list)
  'filterSearch': "filterSearch_example" // String | Filter for actions containing the given words somewhere within name, description and tags
};
apiInstance.getBREActions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCategory** | **String**| Filter for actions that are within a specific category | [optional] 
 **filterName** | **String**| Filter for actions that have names containing the given string | [optional] 
 **filterTags** | **String**| Filter for actions that have all of the given tags (comma separated list) | [optional] 
 **filterSearch** | **String**| Filter for actions containing the given words somewhere within name, description and tags | [optional] 

### Return type

[**[ActionResource]**](ActionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

