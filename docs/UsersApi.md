# KnetikPlatformApiDocumentationLatest.UsersApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTagUsingPOST1**](UsersApi.md#addTagUsingPOST1) | **POST** /users/{user_id}/tags | Add a tag to a user
[**createUserTemplateUsingPOST**](UsersApi.md#createUserTemplateUsingPOST) | **POST** /users/templates | Create a user template
[**deleteUserTemplateUsingDELETE**](UsersApi.md#deleteUserTemplateUsingDELETE) | **DELETE** /users/templates/{id} | Delete a user template
[**doPasswordResetUsingPUT**](UsersApi.md#doPasswordResetUsingPUT) | **PUT** /users/{id}/password-reset | Choose a new password after a reset
[**getTagsUsingGET3**](UsersApi.md#getTagsUsingGET3) | **GET** /users/{user_id}/tags | List tags for a user
[**getUserTemplateUsingGET**](UsersApi.md#getUserTemplateUsingGET) | **GET** /users/templates/{id} | Get a single user template
[**getUserTemplatesUsingGET**](UsersApi.md#getUserTemplatesUsingGET) | **GET** /users/templates | List and search user templates
[**getUserUsingGET**](UsersApi.md#getUserUsingGET) | **GET** /users/{id} | Get a single user
[**getUsersUsingGET**](UsersApi.md#getUsersUsingGET) | **GET** /users | List and search users
[**initiatePasswordResetUsingPOST**](UsersApi.md#initiatePasswordResetUsingPOST) | **POST** /users/{id}/password-reset | Reset a user&#39;s password
[**registerUserUsingPOST**](UsersApi.md#registerUserUsingPOST) | **POST** /users | Register a new user
[**removeTagUsingDELETE1**](UsersApi.md#removeTagUsingDELETE1) | **DELETE** /users/{user_id}/tags/{tag} | Remove a tag from a user
[**setPasswordUsingPUT**](UsersApi.md#setPasswordUsingPUT) | **PUT** /users/{id}/password | Set a user&#39;s password
[**updateUserTemplateUsingPUT**](UsersApi.md#updateUserTemplateUsingPUT) | **PUT** /users/templates/{id} | Update a user template
[**updateUserUsingPUT**](UsersApi.md#updateUserUsingPUT) | **PUT** /users/{id} | Update a user&#39;s info


<a name="addTagUsingPOST1"></a>
# **addTagUsingPOST1**
> addTagUsingPOST1(userId, tag)

Add a tag to a user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var userId = 56; // Number | The id of the user

var tag = "tag_example"; // String | tag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addTagUsingPOST1(userId, tag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **tag** | **String**| tag | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createUserTemplateUsingPOST"></a>
# **createUserTemplateUsingPOST**
> TemplateResource createUserTemplateUsingPOST(opts)

Create a user template

User Templates define a type of user and the properties they have

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var opts = { 
  'userTemplateResource': new KnetikPlatformApiDocumentationLatest.TemplateResource() // TemplateResource | The user template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserTemplateUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userTemplateResource** | [**TemplateResource**](TemplateResource.md)| The user template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUserTemplateUsingDELETE"></a>
# **deleteUserTemplateUsingDELETE**
> deleteUserTemplateUsingDELETE(id, opts)

Delete a user template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'cascade': "cascade_example" // String | The value needed to delete used templates
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserTemplateUsingDELETE(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **cascade** | **String**| The value needed to delete used templates | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="doPasswordResetUsingPUT"></a>
# **doPasswordResetUsingPUT**
> doPasswordResetUsingPUT(id, opts)

Choose a new password after a reset

Finish resetting a user&#39;s password using the secret provided from the password-reset endpoint.  Password should be in plain text and will be encrypted on receipt. Use SSL for security.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var id = 56; // Number | The id of the user

var opts = { 
  'newPasswordRequest': new KnetikPlatformApiDocumentationLatest.NewPasswordRequest() // NewPasswordRequest | The new password request object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.doPasswordResetUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the user | 
 **newPasswordRequest** | [**NewPasswordRequest**](NewPasswordRequest.md)| The new password request object | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getTagsUsingGET3"></a>
# **getTagsUsingGET3**
> [&#39;String&#39;] getTagsUsingGET3(userId)

List tags for a user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var userId = 56; // Number | The id of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTagsUsingGET3(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 

### Return type

**[&#39;String&#39;]**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserTemplateUsingGET"></a>
# **getUserTemplateUsingGET**
> TemplateResource getUserTemplateUsingGET(id)

Get a single user template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserTemplateUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserTemplatesUsingGET"></a>
# **getUserTemplatesUsingGET**
> PageTemplateResource getUserTemplatesUsingGET(opts)

List and search user templates

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var opts = { 
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
apiInstance.getUserTemplatesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageTemplateResource**](PageTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> UserResource getUserUsingGET(id)

Get a single user

Additional private info is included as USERS_ADMIN

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var id = "id_example"; // String | The id of the user or 'me'


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the user or &#39;me&#39; | 

### Return type

[**UserResource**](UserResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUsersUsingGET"></a>
# **getUsersUsingGET**
> PageUserBaseResource getUsersUsingGET(opts)

List and search users

Additional private info is included as USERS_ADMIN

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var opts = { 
  'filterRole': "filterRole_example", // String | Filter for users whose roles has the provided role
  'filterDisplayname': "filterDisplayname_example", // String | Filter for users whose display name starts with provided string.
  'filterEmail': "filterEmail_example", // String | Filter for users whose email starts with provided string. Requires USERS_ADMIN permission
  'filterFirstname': "filterFirstname_example", // String | Filter for users whose first name starts with provided string. Requires USERS_ADMIN permission
  'filterFullname': "filterFullname_example", // String | Filter for users whose full name starts with provided string. Requires USERS_ADMIN permission
  'filterLastname': "filterLastname_example", // String | Filter for users whose last name starts with provided string. Requires USERS_ADMIN permission
  'filterUsername': "filterUsername_example", // String | Filter for users whose username starts with the provided string. Requires USERS_ADMIN permission
  'filterTag': "filterTag_example", // String | Filter for users who have a given tag
  'filterGroup': "filterGroup_example", // String | Filter for users in a given group, by unique name
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
apiInstance.getUsersUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterRole** | **String**| Filter for users whose roles has the provided role | [optional] 
 **filterDisplayname** | **String**| Filter for users whose display name starts with provided string. | [optional] 
 **filterEmail** | **String**| Filter for users whose email starts with provided string. Requires USERS_ADMIN permission | [optional] 
 **filterFirstname** | **String**| Filter for users whose first name starts with provided string. Requires USERS_ADMIN permission | [optional] 
 **filterFullname** | **String**| Filter for users whose full name starts with provided string. Requires USERS_ADMIN permission | [optional] 
 **filterLastname** | **String**| Filter for users whose last name starts with provided string. Requires USERS_ADMIN permission | [optional] 
 **filterUsername** | **String**| Filter for users whose username starts with the provided string. Requires USERS_ADMIN permission | [optional] 
 **filterTag** | **String**| Filter for users who have a given tag | [optional] 
 **filterGroup** | **String**| Filter for users in a given group, by unique name | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageUserBaseResource**](PageUserBaseResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="initiatePasswordResetUsingPOST"></a>
# **initiatePasswordResetUsingPOST**
> initiatePasswordResetUsingPOST(id)

Reset a user&#39;s password

A reset code will be generated and a &#39;forgot_password&#39; BRE event will be fired with that code; this can be routed to the user as needed and submitted to the &#39;choose a new password&#39; endpoint.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var id = 56; // Number | The id of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.initiatePasswordResetUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the user | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="registerUserUsingPOST"></a>
# **registerUserUsingPOST**
> UserResource registerUserUsingPOST(opts)

Register a new user

Password should be in plain text and will be encrypted on receipt. Use SSL for security

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var opts = { 
  'userResource': new KnetikPlatformApiDocumentationLatest.UserResource() // UserResource | The user resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerUserUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userResource** | [**UserResource**](UserResource.md)| The user resource object | [optional] 

### Return type

[**UserResource**](UserResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="removeTagUsingDELETE1"></a>
# **removeTagUsingDELETE1**
> removeTagUsingDELETE1(userId, tag)

Remove a tag from a user

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var userId = 56; // Number | The id of the user

var tag = "tag_example"; // String | The tag to remove


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeTagUsingDELETE1(userId, tag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 
 **tag** | **String**| The tag to remove | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="setPasswordUsingPUT"></a>
# **setPasswordUsingPUT**
> setPasswordUsingPUT(id, opts)

Set a user&#39;s password

Password should be in plain text and will be encrypted on receipt. Use SSL for security.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var id = 56; // Number | The id of the user

var opts = { 
  'password': "password_example" // String | The new plain text password
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setPasswordUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the user | 
 **password** | **String**| The new plain text password | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateUserTemplateUsingPUT"></a>
# **updateUserTemplateUsingPUT**
> updateUserTemplateUsingPUT(id, opts)

Update a user template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'userTemplateResource': new KnetikPlatformApiDocumentationLatest.TemplateResource() // TemplateResource | The user template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUserTemplateUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **userTemplateResource** | [**TemplateResource**](TemplateResource.md)| The user template resource object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateUserUsingPUT"></a>
# **updateUserUsingPUT**
> updateUserUsingPUT(id, opts)

Update a user&#39;s info

Password will not be edited on this endpoint, use password specific endpoints.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.UsersApi();

var id = "id_example"; // String | The id of the user or 'me'

var opts = { 
  'userResource': new KnetikPlatformApiDocumentationLatest.UserResource() // UserResource | The user resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUserUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the user or &#39;me&#39; | 
 **userResource** | [**UserResource**](UserResource.md)| The user resource object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

