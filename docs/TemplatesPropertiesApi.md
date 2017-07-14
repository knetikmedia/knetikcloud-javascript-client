# KnetikcloudSdk.TemplatesPropertiesApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTemplatePropertyType**](TemplatesPropertiesApi.md#getTemplatePropertyType) | **GET** /templates/properties/{type} | Get details for a template property type
[**getTemplatePropertyTypes**](TemplatesPropertiesApi.md#getTemplatePropertyTypes) | **GET** /templates/properties | List template property types


<a name="getTemplatePropertyType"></a>
# **getTemplatePropertyType**
> PropertyFieldListResource getTemplatePropertyType(type)

Get details for a template property type

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.TemplatesPropertiesApi();

var type = "type_example"; // String | type


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemplatePropertyType(type, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| type | 

### Return type

[**PropertyFieldListResource**](PropertyFieldListResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTemplatePropertyTypes"></a>
# **getTemplatePropertyTypes**
> [PropertyFieldListResource] getTemplatePropertyTypes()

List template property types

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.TemplatesPropertiesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemplatePropertyTypes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PropertyFieldListResource]**](PropertyFieldListResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

