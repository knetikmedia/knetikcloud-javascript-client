# KnetikPlatformApiDocumentationLatest.AuthTokensApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTokenUsingDELETE**](AuthTokensApi.md#deleteTokenUsingDELETE) | **DELETE** /auth/tokens/{username} | Delete all tokens by username
[**deleteTokenWithClientIdUsingDELETE**](AuthTokensApi.md#deleteTokenWithClientIdUsingDELETE) | **DELETE** /auth/tokens/{username}/{client_id} | Delete a token by username and client id
[**getTokenByUserUsingGET**](AuthTokensApi.md#getTokenByUserUsingGET) | **GET** /auth/tokens/{username}/{client_id} | Get a single token by username and client id
[**getTokensUsingGET**](AuthTokensApi.md#getTokensUsingGET) | **GET** /auth/tokens | List usernames and client ids


<a name="deleteTokenUsingDELETE"></a>
# **deleteTokenUsingDELETE**
> deleteTokenUsingDELETE(username)

Delete all tokens by username

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthTokensApi();

var username = "username_example"; // String | The username of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTokenUsingDELETE(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The username of the user | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTokenWithClientIdUsingDELETE"></a>
# **deleteTokenWithClientIdUsingDELETE**
> deleteTokenWithClientIdUsingDELETE(username, clientId)

Delete a token by username and client id

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthTokensApi();

var username = "username_example"; // String | The username of the user

var clientId = "clientId_example"; // String | The id of the client


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTokenWithClientIdUsingDELETE(username, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The username of the user | 
 **clientId** | **String**| The id of the client | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTokenByUserUsingGET"></a>
# **getTokenByUserUsingGET**
> OauthAccessTokenResource getTokenByUserUsingGET(username, clientId)

Get a single token by username and client id

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthTokensApi();

var username = "username_example"; // String | The username of the user

var clientId = "clientId_example"; // String | The id of the client


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTokenByUserUsingGET(username, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The username of the user | 
 **clientId** | **String**| The id of the client | 

### Return type

[**OauthAccessTokenResource**](OauthAccessTokenResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTokensUsingGET"></a>
# **getTokensUsingGET**
> PageOauthAccessTokenResource getTokensUsingGET(opts)

List usernames and client ids

Token value not shown

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthTokensApi();

var opts = { 
  'filterClientId': "filterClientId_example", // String | Filters for token whose client id matches provided string
  'filterUsername': "filterUsername_example", // String | Filters for token whose username matches provided string
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "username:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTokensUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterClientId** | **String**| Filters for token whose client id matches provided string | [optional] 
 **filterUsername** | **String**| Filters for token whose username matches provided string | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to username:ASC]

### Return type

[**PageOauthAccessTokenResource**](PageOauthAccessTokenResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

