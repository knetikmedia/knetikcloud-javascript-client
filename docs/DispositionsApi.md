# KnetikPlatformApiDocumentationLatest.DispositionsApi

All URIs are relative to *https://integration.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDispositionUsingPOST**](DispositionsApi.md#addDispositionUsingPOST) | **POST** /dispositions | Add a new disposition. 
[**deleteDispositionUsingDELETE**](DispositionsApi.md#deleteDispositionUsingDELETE) | **DELETE** /dispositions/{id} | Delete a disposition
[**getDispositionCountUsingGET**](DispositionsApi.md#getDispositionCountUsingGET) | **GET** /dispositions/count | Returns a list of disposition counts
[**getDispositionUsingGET**](DispositionsApi.md#getDispositionUsingGET) | **GET** /dispositions/{id} | Returns a disposition
[**getDispositionsUsingGET**](DispositionsApi.md#getDispositionsUsingGET) | **GET** /dispositions | Returns a page of dispositions


<a name="addDispositionUsingPOST"></a>
# **addDispositionUsingPOST**
> DispositionResource addDispositionUsingPOST(opts)

Add a new disposition. 

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

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
apiInstance.addDispositionUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disposition** | [**DispositionResource**](DispositionResource.md)| The new disposition record | [optional] 

### Return type

[**DispositionResource**](DispositionResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDispositionUsingDELETE"></a>
# **deleteDispositionUsingDELETE**
> deleteDispositionUsingDELETE(id)

Delete a disposition

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.DispositionsApi();

var id = 789; // Number | The id of the disposition record


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDispositionUsingDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the disposition record | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDispositionCountUsingGET"></a>
# **getDispositionCountUsingGET**
> [DispositionCount] getDispositionCountUsingGET(opts)

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
apiInstance.getDispositionCountUsingGET(opts, callback);
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

<a name="getDispositionUsingGET"></a>
# **getDispositionUsingGET**
> DispositionResource getDispositionUsingGET(id)

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
apiInstance.getDispositionUsingGET(id, callback);
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

<a name="getDispositionsUsingGET"></a>
# **getDispositionsUsingGET**
> PageResourceDispositionResource getDispositionsUsingGET(opts)

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
apiInstance.getDispositionsUsingGET(opts, callback);
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

