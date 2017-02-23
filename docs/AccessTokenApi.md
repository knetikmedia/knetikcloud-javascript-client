# KnetikPlatformApiDocumentationLatest.AccessTokenApi

All URIs are relative to *https://sandbox.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOAuthToken**](AccessTokenApi.md#getOAuthToken) | **POST** /oauth/token | Get access token


<a name="getOAuthToken"></a>
# **getOAuthToken**
> OAuth2Resource getOAuthToken(grantType, clientId, opts)

Get access token

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.AccessTokenApi();

var grantType = "client_credentials"; // String | Grant type

var clientId = "knetik"; // String | The id of the client

var opts = { 
  'clientSecret': "clientSecret_example", // String | The secret key of the client.  Used only with a grant_type of client_credentials
  'username': "username_example", // String | The username of the client.  Used only with a grant_type of password
  'password': "password_example" // String | The password of the client.  Used only with a grant_type of password
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOAuthToken(grantType, clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| Grant type | [default to client_credentials]
 **clientId** | **String**| The id of the client | [default to knetik]
 **clientSecret** | **String**| The secret key of the client.  Used only with a grant_type of client_credentials | [optional] 
 **username** | **String**| The username of the client.  Used only with a grant_type of password | [optional] 
 **password** | **String**| The password of the client.  Used only with a grant_type of password | [optional] 

### Return type

[**OAuth2Resource**](OAuth2Resource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

