# KnetikCloud.SearchApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchIndex**](SearchApi.md#searchIndex) | **POST** /search/index/{type} | Search an index with no template
[**searchIndexWithTemplate**](SearchApi.md#searchIndexWithTemplate) | **POST** /search/index/{type}/{template} | Search an index with a template


<a name="searchIndex"></a>
# **searchIndex**
> PageResourceMapstringobject searchIndex(type, opts)

Search an index with no template

The body is an ElasticSearch query in JSON format. Please see their &lt;a href&#x3D;&#39;https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html&#39;&gt;documentation&lt;/a&gt; for details on the format and search options. The searchable object&#39;s format depends on on the type but mostly matches the resource from it&#39;s main endpoint. Exceptions include referenced objects (like user) being replaced with the full user resource to allow deeper searching.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.SearchApi();

var type = "type_example"; // String | The index type

var opts = { 
  'query': null, // Object | The query to be used for the search
  'size': 25, // Number | The number of documents returned per page
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
 **size** | **Number**| The number of documents returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceMapstringobject**](PageResourceMapstringobject.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchIndexWithTemplate"></a>
# **searchIndexWithTemplate**
> PageResourceMapstringobject searchIndexWithTemplate(type, template, opts)

Search an index with a template

The body is an ElasticSearch query in JSON format. Please see their &lt;a href&#x3D;&#39;https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html&#39;&gt;documentation&lt;/a&gt; for details on the format and search options. The searchable object&#39;s format depends on on the type but mostly matches the resource from it&#39;s main endpoint. Exceptions include referenced objects (like user) being replaced with the full user resource to allow deeper searching.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.SearchApi();

var type = "type_example"; // String | The index type

var template = "template_example"; // String | The index template

var opts = { 
  'query': null, // Object | The query to be used for the search
  'size': 25, // Number | The number of documents returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.searchIndexWithTemplate(type, template, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| The index type | 
 **template** | **String**| The index template | 
 **query** | **Object**| The query to be used for the search | [optional] 
 **size** | **Number**| The number of documents returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceMapstringobject**](PageResourceMapstringobject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

