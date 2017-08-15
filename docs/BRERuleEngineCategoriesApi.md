# KnetikCloud.BRERuleEngineCategoriesApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBRECategoryTemplate**](BRERuleEngineCategoriesApi.md#createBRECategoryTemplate) | **POST** /bre/categories/templates | Create a BRE category template
[**deleteBRECategoryTemplate**](BRERuleEngineCategoriesApi.md#deleteBRECategoryTemplate) | **DELETE** /bre/categories/templates/{id} | Delete a BRE category template
[**getBRECategories**](BRERuleEngineCategoriesApi.md#getBRECategories) | **GET** /bre/categories | List categories
[**getBRECategory**](BRERuleEngineCategoriesApi.md#getBRECategory) | **GET** /bre/categories/{name} | Get a single category
[**getBRECategoryTemplate**](BRERuleEngineCategoriesApi.md#getBRECategoryTemplate) | **GET** /bre/categories/templates/{id} | Get a single BRE category template
[**getBRECategoryTemplates**](BRERuleEngineCategoriesApi.md#getBRECategoryTemplates) | **GET** /bre/categories/templates | List and search BRE category templates
[**updateBRECategory**](BRERuleEngineCategoriesApi.md#updateBRECategory) | **PUT** /bre/categories/{name} | Update a category
[**updateBRECategoryTemplate**](BRERuleEngineCategoriesApi.md#updateBRECategoryTemplate) | **PUT** /bre/categories/templates/{id} | Update a BRE category template


<a name="createBRECategoryTemplate"></a>
# **createBRECategoryTemplate**
> TemplateResource createBRECategoryTemplate(opts)

Create a BRE category template

Templates define a type of BRE category and the properties they have

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.BRERuleEngineCategoriesApi();

let opts = { 
  'template': new KnetikCloud.TemplateResource() // TemplateResource | The category template to create
};
apiInstance.createBRECategoryTemplate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template** | [**TemplateResource**](TemplateResource.md)| The category template to create | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBRECategoryTemplate"></a>
# **deleteBRECategoryTemplate**
> deleteBRECategoryTemplate(id, opts)

Delete a BRE category template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.BRERuleEngineCategoriesApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'cascade': "cascade_example" // String | The value needed to delete used templates
};
apiInstance.deleteBRECategoryTemplate(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **cascade** | **String**| The value needed to delete used templates | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBRECategories"></a>
# **getBRECategories**
> PageResourceBreCategoryResource getBRECategories(opts)

List categories

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.BRERuleEngineCategoriesApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getBRECategories(opts).then((data) => {
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

[**PageResourceBreCategoryResource**](PageResourceBreCategoryResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBRECategory"></a>
# **getBRECategory**
> BreCategoryResource getBRECategory(name)

Get a single category

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.BRERuleEngineCategoriesApi();

let name = "name_example"; // String | The category name

apiInstance.getBRECategory(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The category name | 

### Return type

[**BreCategoryResource**](BreCategoryResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBRECategoryTemplate"></a>
# **getBRECategoryTemplate**
> TemplateResource getBRECategoryTemplate(id)

Get a single BRE category template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.BRERuleEngineCategoriesApi();

let id = "id_example"; // String | The id of the template

apiInstance.getBRECategoryTemplate(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBRECategoryTemplates"></a>
# **getBRECategoryTemplates**
> PageResourceTemplateResource getBRECategoryTemplates(opts)

List and search BRE category templates

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.BRERuleEngineCategoriesApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getBRECategoryTemplates(opts).then((data) => {
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

[**PageResourceTemplateResource**](PageResourceTemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBRECategory"></a>
# **updateBRECategory**
> BreCategoryResource updateBRECategory(name, opts)

Update a category

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.BRERuleEngineCategoriesApi();

let name = "name_example"; // String | The category name

let opts = { 
  'category': new KnetikCloud.BreCategoryResource() // BreCategoryResource | The updated BRE category information
};
apiInstance.updateBRECategory(name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The category name | 
 **category** | [**BreCategoryResource**](BreCategoryResource.md)| The updated BRE category information | [optional] 

### Return type

[**BreCategoryResource**](BreCategoryResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBRECategoryTemplate"></a>
# **updateBRECategoryTemplate**
> TemplateResource updateBRECategoryTemplate(id, opts)

Update a BRE category template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.BRERuleEngineCategoriesApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'template': new KnetikCloud.TemplateResource() // TemplateResource | The updated category template definition
};
apiInstance.updateBRECategoryTemplate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **template** | [**TemplateResource**](TemplateResource.md)| The updated category template definition | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

