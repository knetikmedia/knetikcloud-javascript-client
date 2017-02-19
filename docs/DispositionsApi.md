# KnetikPlatformApiDocumentationLatest.DispositionsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDisposition**](DispositionsApi.md#addDisposition) | **POST** /dispositions | Add a new disposition
[**deleteDisposition**](DispositionsApi.md#deleteDisposition) | **DELETE** /dispositions/{id} | Delete a disposition
[**getDisposition**](DispositionsApi.md#getDisposition) | **GET** /dispositions/{id} | Returns a disposition
[**getDispositionCounts**](DispositionsApi.md#getDispositionCounts) | **GET** /dispositions/count | Returns a list of disposition counts
[**getDispositions**](DispositionsApi.md#getDispositions) | **GET** /dispositions | Returns a page of dispositions


<a name="addDisposition"></a>
# **addDisposition**
> DispositionResource addDisposition(opts)

Add a new disposition

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.DispositionsApi();

var opts = { 
  'disposition': new KnetikPlatformApiDocumentationLatest.DispositionResource() // DispositionResource | The new disposition record
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addDisposition(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disposition** | [**DispositionResource**](DispositionResource.md)| The new disposition record | [optional] 

### Return type

[**DispositionResource**](DispositionResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDisposition"></a>
# **deleteDisposition**
> deleteDisposition(id)

Delete a disposition

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.DispositionsApi();

var id = 789; // Number | The id of the disposition record


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDisposition(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the disposition record | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDisposition"></a>
# **getDisposition**
> DispositionResource getDisposition(id)

Returns a disposition

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.DispositionsApi();

var id = 789; // Number | The id of the disposition record


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDisposition(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the disposition record | 

### Return type

[**DispositionResource**](DispositionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDispositionCounts"></a>
# **getDispositionCounts**
> [DispositionCount] getDispositionCounts(opts)

Returns a list of disposition counts

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.DispositionsApi();

var opts = { 
  'filterContext': "filterContext_example", // String | Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context=video:47
  'filterOwner': "filterOwner_example" // String | Filter for dispositions from a specific user by id or 'me'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDispositionCounts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterContext** | **String**| Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47 | [optional] 
 **filterOwner** | **String**| Filter for dispositions from a specific user by id or &#39;me&#39; | [optional] 

### Return type

[**[DispositionCount]**](DispositionCount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDispositions"></a>
# **getDispositions**
> PageResourceDispositionResource getDispositions(opts)

Returns a page of dispositions

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.DispositionsApi();

var opts = { 
  'filterContext': "filterContext_example", // String | Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context=video:47
  'filterOwner': "filterOwner_example", // String | Filter for dispositions from a specific user by id or 'me'
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDispositions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterContext** | **String**| Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47 | [optional] 
 **filterOwner** | **String**| Filter for dispositions from a specific user by id or &#39;me&#39; | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceDispositionResource**](PageResourceDispositionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

