# KnetikPlatformApiDocumentationLatest.AuthRolesApi

All URIs are relative to *https://integration.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignClientRolesUsingPUT**](AuthRolesApi.md#assignClientRolesUsingPUT) | **PUT** /auth/clients/{client_key}/roles | Set roles for a client
[**assignPermissionsUsingPUT**](AuthRolesApi.md#assignPermissionsUsingPUT) | **PUT** /auth/roles/{role}/permissions | Set permissions for a role
[**assignUserRolesExternalUsingPUT**](AuthRolesApi.md#assignUserRolesExternalUsingPUT) | **PUT** /auth/users/{user_id}/roles | Set roles for a user
[**createRoleUsingPOST**](AuthRolesApi.md#createRoleUsingPOST) | **POST** /auth/roles | Create a new role
[**deleteRoleUsingDELETE**](AuthRolesApi.md#deleteRoleUsingDELETE) | **DELETE** /auth/roles/{role} | Delete a role
[**getClientRolesUsingGET**](AuthRolesApi.md#getClientRolesUsingGET) | **GET** /auth/clients/{client_key}/roles | Get roles for a client
[**getRoleUsingGET**](AuthRolesApi.md#getRoleUsingGET) | **GET** /auth/roles/{role} | Get a single role
[**getRolesUsingGET**](AuthRolesApi.md#getRolesUsingGET) | **GET** /auth/roles | List and search roles
[**getUserRolesUsingGET**](AuthRolesApi.md#getUserRolesUsingGET) | **GET** /auth/users/{user_id}/roles | Get roles for a user
[**updateRoleUsingPUT**](AuthRolesApi.md#updateRoleUsingPUT) | **PUT** /auth/roles/{role} | Update a role


<a name="assignClientRolesUsingPUT"></a>
# **assignClientRolesUsingPUT**
> assignClientRolesUsingPUT(clientKey, opts)

Set roles for a client

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthRolesApi();

var clientKey = "clientKey_example"; // String | The client key

var opts = { 
  'rolesList': [new KnetikPlatformApiDocumentationLatest.[String]()] // [String] | The list of unique roles
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.assignClientRolesUsingPUT(clientKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientKey** | **String**| The client key | 
 **rolesList** | **[String]**| The list of unique roles | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="assignPermissionsUsingPUT"></a>
# **assignPermissionsUsingPUT**
> assignPermissionsUsingPUT(role, opts)

Set permissions for a role

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthRolesApi();

var role = "role_example"; // String | The role value

var opts = { 
  'permissionsList': [new KnetikPlatformApiDocumentationLatest.[String]()] // [String] | The list of unique permissions
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.assignPermissionsUsingPUT(role, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | **String**| The role value | 
 **permissionsList** | **[String]**| The list of unique permissions | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="assignUserRolesExternalUsingPUT"></a>
# **assignUserRolesExternalUsingPUT**
> assignUserRolesExternalUsingPUT(userId, opts)

Set roles for a user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthRolesApi();

var userId = 56; // Number | The user's id

var opts = { 
  'rolesList': [new KnetikPlatformApiDocumentationLatest.[String]()] // [String] | The list of unique roles
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.assignUserRolesExternalUsingPUT(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The user&#39;s id | 
 **rolesList** | **[String]**| The list of unique roles | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRoleUsingPOST"></a>
# **createRoleUsingPOST**
> RoleResource createRoleUsingPOST(opts)

Create a new role

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthRolesApi();

var opts = { 
  'roleResource': new KnetikPlatformApiDocumentationLatest.RoleResource() // RoleResource | The role resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRoleUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleResource** | [**RoleResource**](RoleResource.md)| The role resource object | [optional] 

### Return type

[**RoleResource**](RoleResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRoleUsingDELETE"></a>
# **deleteRoleUsingDELETE**
> deleteRoleUsingDELETE(role, opts)

Delete a role

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthRolesApi();

var role = "role_example"; // String | The role value

var opts = { 
  'force': true // Boolean | If true, removes role from users/clients
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRoleUsingDELETE(role, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | **String**| The role value | 
 **force** | **Boolean**| If true, removes role from users/clients | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClientRolesUsingGET"></a>
# **getClientRolesUsingGET**
> [RoleResource] getClientRolesUsingGET(clientKey)

Get roles for a client

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthRolesApi();

var clientKey = "clientKey_example"; // String | The client key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClientRolesUsingGET(clientKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientKey** | **String**| The client key | 

### Return type

[**[RoleResource]**](RoleResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRoleUsingGET"></a>
# **getRoleUsingGET**
> RoleResource getRoleUsingGET(role)

Get a single role

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthRolesApi();

var role = "role_example"; // String | The role value


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRoleUsingGET(role, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | **String**| The role value | 

### Return type

[**RoleResource**](RoleResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRolesUsingGET"></a>
# **getRolesUsingGET**
> PageResourceRoleResource getRolesUsingGET(opts)

List and search roles

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthRolesApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "name:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRolesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to name:ASC]

### Return type

[**PageResourceRoleResource**](PageResourceRoleResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserRolesUsingGET"></a>
# **getUserRolesUsingGET**
> [RoleResource] getUserRolesUsingGET(userId)

Get roles for a user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthRolesApi();

var userId = 56; // Number | The user's id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserRolesUsingGET(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The user&#39;s id | 

### Return type

[**[RoleResource]**](RoleResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRoleUsingPUT"></a>
# **updateRoleUsingPUT**
> updateRoleUsingPUT(role, opts)

Update a role

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.AuthRolesApi();

var role = "role_example"; // String | The role value

var opts = { 
  'roleResource': new KnetikPlatformApiDocumentationLatest.RoleResource() // RoleResource | The role resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRoleUsingPUT(role, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | **String**| The role value | 
 **roleResource** | [**RoleResource**](RoleResource.md)| The role resource object | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

