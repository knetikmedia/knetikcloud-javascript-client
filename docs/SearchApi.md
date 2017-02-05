# KnetikPlatformApiDocumentationLatest.SearchApi

All URIs are relative to *https://integration.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**externalAddUsingPOST**](SearchApi.md#externalAddUsingPOST) | **POST** /search/index/{type}/{id} | Add a new object to an index
[**externalDeleteAllUsingDELETE**](SearchApi.md#externalDeleteAllUsingDELETE) | **DELETE** /search/index/{type} | Delete all objects in an index
[**externalDeleteUsingDELETE**](SearchApi.md#externalDeleteUsingDELETE) | **DELETE** /search/index/{type}/{id} | Delete an object
[**externalRegisterUsingPOST**](SearchApi.md#externalRegisterUsingPOST) | **POST** /search/mappings | Register reference mappings
[**searchUsingPOST**](SearchApi.md#searchUsingPOST) | **POST** /search/index/{type} | Search an index


<a name="externalAddUsingPOST"></a>
# **externalAddUsingPOST**
> externalAddUsingPOST(type, id, opts)

Add a new object to an index

Mainly intended for internal use.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.SearchApi();

var type = "type_example"; // String | The index type

var id = "id_example"; // String | The ID of the object

var opts = { 
  '_object': null // Object | The object to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.externalAddUsingPOST(type, id, opts, callback);
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

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="externalDeleteAllUsingDELETE"></a>
# **externalDeleteAllUsingDELETE**
> externalDeleteAllUsingDELETE(type)

Delete all objects in an index

Mainly intended for internal use

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.SearchApi();

var type = "type_example"; // String | The index type


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.externalDeleteAllUsingDELETE(type, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| The index type | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="externalDeleteUsingDELETE"></a>
# **externalDeleteUsingDELETE**
> externalDeleteUsingDELETE(type, id)

Delete an object

Mainly intended for internal use. Requires SEARCH_ADMIN.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.SearchApi();

var type = "type_example"; // String | The index type

var id = "id_example"; // String | The ID of the object to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.externalDeleteUsingDELETE(type, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| The index type | 
 **id** | **String**| The ID of the object to delete | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="externalRegisterUsingPOST"></a>
# **externalRegisterUsingPOST**
> externalRegisterUsingPOST(opts)

Register reference mappings

Add a new type mapping to connect data from one index to another, or discover an exsting one. Mainly intended for internal use.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.SearchApi();

var opts = { 
  'mappings': [new KnetikPlatformApiDocumentationLatest.SearchReferenceMapping()] // [SearchReferenceMapping] | The mappings to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.externalRegisterUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mappings** | [**[SearchReferenceMapping]**](SearchReferenceMapping.md)| The mappings to add | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchUsingPOST"></a>
# **searchUsingPOST**
> PageResourceMapstringobject searchUsingPOST(type, opts)

Search an index

The body is an ElasticSearch query in JSON format. Please see their &lt;a href&#x3D;&#39;https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html&#39;&gt;documentation&lt;/a&gt; for details on the format and search options. The searchable object&#39;s format depends on on the type. See individual search endpoints on other resources for details on their format.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.SearchApi();

var type = "type_example"; // String | The index type

var opts = { 
  'query': null, // Object | The query to be used for the search
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUsingPOST(type, opts, callback);
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

