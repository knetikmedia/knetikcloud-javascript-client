# KnetikCloud.TemplatesPropertiesApi

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
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.TemplatesPropertiesApi();

let type = "type_example"; // String | type

apiInstance.getTemplatePropertyType(type).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.TemplatesPropertiesApi();
apiInstance.getTemplatePropertyTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

