# KnetikCloud.ContentCommentsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addComment**](ContentCommentsApi.md#addComment) | **POST** /comments | Add a new comment
[**deleteComment**](ContentCommentsApi.md#deleteComment) | **DELETE** /comments/{id} | Delete a comment
[**getComment**](ContentCommentsApi.md#getComment) | **GET** /comments/{id} | Return a comment
[**getComments**](ContentCommentsApi.md#getComments) | **GET** /comments | Returns a page of comments
[**searchComments**](ContentCommentsApi.md#searchComments) | **POST** /comments/search | Search the comment index
[**updateComment**](ContentCommentsApi.md#updateComment) | **PUT** /comments/{id}/content | Update a comment


<a name="addComment"></a>
# **addComment**
> CommentResource addComment(opts)

Add a new comment

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentCommentsApi();

let opts = { 
  'commentResource': new KnetikCloud.CommentResource() // CommentResource | The comment to be added
};
apiInstance.addComment(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentResource** | [**CommentResource**](CommentResource.md)| The comment to be added | [optional] 

### Return type

[**CommentResource**](CommentResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteComment"></a>
# **deleteComment**
> deleteComment(id)

Delete a comment

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentCommentsApi();

let id = 789; // Number | The comment id

apiInstance.deleteComment(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The comment id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getComment"></a>
# **getComment**
> CommentResource getComment(id)

Return a comment

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentCommentsApi();

let id = 789; // Number | The comment id

apiInstance.getComment(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The comment id | 

### Return type

[**CommentResource**](CommentResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getComments"></a>
# **getComments**
> PageResourceCommentResource getComments(context, contextId, opts)

Returns a page of comments

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentCommentsApi();

let context = "context_example"; // String | Get comments by context type

let contextId = 56; // Number | Get comments by context id

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getComments(context, contextId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**| Get comments by context type | 
 **contextId** | **Number**| Get comments by context id | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceCommentResource**](PageResourceCommentResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchComments"></a>
# **searchComments**
> CommentSearch searchComments(opts)

Search the comment index

The body is an ElasticSearch query json. Please see their &lt;a href&#x3D;&#39;https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html&#39;&gt;documentation&lt;/a&gt; for details on the format and search options

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentCommentsApi();

let opts = { 
  'query': null, // Object | The search query
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.searchComments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **Object**| The search query | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**CommentSearch**](CommentSearch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateComment"></a>
# **updateComment**
> updateComment(id, opts)

Update a comment

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentCommentsApi();

let id = 789; // Number | The comment id

let opts = { 
  'content': new KnetikCloud.StringWrapper() // StringWrapper | The comment content
};
apiInstance.updateComment(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The comment id | 
 **content** | [**StringWrapper**](StringWrapper.md)| The comment content | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

