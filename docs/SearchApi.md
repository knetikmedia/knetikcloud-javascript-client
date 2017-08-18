# KnetikCloud.SearchApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSearchIndex**](SearchApi.md#addSearchIndex) | **POST** /search/index/{type}/{id} | Add a new object to an index
[**addSearchMappings**](SearchApi.md#addSearchMappings) | **POST** /search/mappings | Register reference mappings
[**deleteSearchIndex**](SearchApi.md#deleteSearchIndex) | **DELETE** /search/index/{type}/{id} | Delete an object
[**deleteSearchIndexes**](SearchApi.md#deleteSearchIndexes) | **DELETE** /search/index/{type} | Delete all objects in an index
[**searchIndex**](SearchApi.md#searchIndex) | **POST** /search/index/{type} | Search an index


<a name="addSearchIndex"></a>
# **addSearchIndex**
> addSearchIndex(type, id, opts)

Add a new object to an index

Mainly intended for internal use.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.SearchApi();

var type = "type_example"; // String | The index type

var id = "id_example"; // String | The ID of the object

var opts = { 
  '_object': null // Object | The object to add
};
apiInstance.addSearchIndex(type, id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| The index type | 
 **id** | **String**| The ID of the object | 
 **_object** | **Object**| The object to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSearchMappings"></a>
# **addSearchMappings**
> addSearchMappings(opts)

Register reference mappings

Add a new type mapping to connect data from one index to another, or discover an exsting one. Mainly intended for internal use.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.SearchApi();

var opts = { 
  'mappings': [new KnetikCloud.SearchReferenceMapping()] // [SearchReferenceMapping] | The mappings to add
};
apiInstance.addSearchMappings(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mappings** | [**[SearchReferenceMapping]**](SearchReferenceMapping.md)| The mappings to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSearchIndex"></a>
# **deleteSearchIndex**
> deleteSearchIndex(type, id)

Delete an object

Mainly intended for internal use. Requires SEARCH_ADMIN.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.SearchApi();

var type = "type_example"; // String | The index type

var id = "id_example"; // String | The ID of the object to delete

apiInstance.deleteSearchIndex(type, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| The index type | 
 **id** | **String**| The ID of the object to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSearchIndexes"></a>
# **deleteSearchIndexes**
> deleteSearchIndexes(type)

Delete all objects in an index

Mainly intended for internal use

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.SearchApi();

var type = "type_example"; // String | The index type

apiInstance.deleteSearchIndexes(type).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| The index type | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchIndex"></a>
# **searchIndex**
> PageResourceMapstringobject searchIndex(type, opts)

Search an index

The body is an ElasticSearch query in JSON format. Please see their &lt;a href&#x3D;&#39;https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html&#39;&gt;documentation&lt;/a&gt; for details on the format and search options. The searchable object&#39;s format depends on on the type. See individual search endpoints on other resources for details on their format.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.SearchApi();

var type = "type_example"; // String | The index type

var opts = { 
  'query': null, // Object | The query to be used for the search
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.searchIndex(type, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| The index type | 
 **query** | **Object**| The query to be used for the search | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceMapstringobject**](PageResourceMapstringobject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

