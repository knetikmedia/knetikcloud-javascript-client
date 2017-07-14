# knetikcloud-sdk.UsersApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserTag**](UsersApi.md#addUserTag) | **POST** /users/{user_id}/tags | Add a tag to a user
[**createUserTemplate**](UsersApi.md#createUserTemplate) | **POST** /users/templates | Create a user template
[**deleteUserTemplate**](UsersApi.md#deleteUserTemplate) | **DELETE** /users/templates/{id} | Delete a user template
[**getUser**](UsersApi.md#getUser) | **GET** /users/{id} | Get a single user
[**getUserTags**](UsersApi.md#getUserTags) | **GET** /users/{user_id}/tags | List tags for a user
[**getUserTemplate**](UsersApi.md#getUserTemplate) | **GET** /users/templates/{id} | Get a single user template
[**getUserTemplates**](UsersApi.md#getUserTemplates) | **GET** /users/templates | List and search user templates
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | List and search users
[**passwordReset**](UsersApi.md#passwordReset) | **PUT** /users/{id}/password-reset | Choose a new password after a reset
[**registerUser**](UsersApi.md#registerUser) | **POST** /users | Register a new user
[**removeUserTag**](UsersApi.md#removeUserTag) | **DELETE** /users/{user_id}/tags/{tag} | Remove a tag from a user
[**setPassword**](UsersApi.md#setPassword) | **PUT** /users/{id}/password | Set a user&#39;s password
[**startPasswordReset**](UsersApi.md#startPasswordReset) | **POST** /users/{id}/password-reset | Reset a user&#39;s password
[**submitPasswordReset**](UsersApi.md#submitPasswordReset) | **POST** /users/password-reset | Reset a user&#39;s password without user id
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{id} | Update a user
[**updateUserTemplate**](UsersApi.md#updateUserTemplate) | **PUT** /users/templates/{id} | Update a user template


<a name="addUserTag"></a>
# **addUserTag**
> addUserTag(userId, tag)

Add a tag to a user

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

var userId = 56; // Number | The id of the user

var tag = "tag_example"; // String | tag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addUserTag(userId, tag, callback);
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
 - **Accept**: application/json

<a name="createUserTemplate"></a>
# **createUserTemplate**
> TemplateResource createUserTemplate(opts)

Create a user template

User Templates define a type of user and the properties they have

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

var opts = { 
  'userTemplateResource': new knetikcloud-sdk.TemplateResource() // TemplateResource | The user template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserTemplate(opts, callback);
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
 - **Accept**: application/json

<a name="deleteUserTemplate"></a>
# **deleteUserTemplate**
> deleteUserTemplate(id, opts)

Delete a user template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

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
apiInstance.deleteUserTemplate(id, opts, callback);
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
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> UserResource getUser(id)

Get a single user

Additional private info is included as USERS_ADMIN

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

var id = "id_example"; // String | The id of the user or 'me'


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the user or &#39;me&#39; | 

### Return type

[**UserResource**](UserResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserTags"></a>
# **getUserTags**
> [&#39;String&#39;] getUserTags(userId)

List tags for a user

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

var userId = 56; // Number | The id of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserTags(userId, callback);
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
 - **Accept**: application/json

<a name="getUserTemplate"></a>
# **getUserTemplate**
> TemplateResource getUserTemplate(id)

Get a single user template

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserTemplate(id, callback);
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
 - **Accept**: application/json

<a name="getUserTemplates"></a>
# **getUserTemplates**
> PageResourceTemplateResource getUserTemplates(opts)

List and search user templates

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

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
apiInstance.getUserTemplates(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceTemplateResource**](PageResourceTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> PageResourceUserBaseResource getUsers(opts)

List and search users

Additional private info is included as USERS_ADMIN

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

var opts = { 
  'filterDisplayname': "filterDisplayname_example", // String | Filter for users whose display name starts with provided string.
  'filterEmail': "filterEmail_example", // String | Filter for users whose email starts with provided string. Requires USERS_ADMIN permission
  'filterFirstname': "filterFirstname_example", // String | Filter for users whose first name starts with provided string. Requires USERS_ADMIN permission
  'filterFullname': "filterFullname_example", // String | Filter for users whose full name starts with provided string. Requires USERS_ADMIN permission
  'filterLastname': "filterLastname_example", // String | Filter for users whose last name starts with provided string. Requires USERS_ADMIN permission
  'filterUsername': "filterUsername_example", // String | Filter for users whose username starts with the provided string. Requires USERS_ADMIN permission
  'filterTag': "filterTag_example", // String | Filter for users who have a given tag
  'filterGroup': "filterGroup_example", // String | Filter for users in a given group, by unique name
  'filterRole': "filterRole_example", // String | Filter for users with a given role
  'filterSearch': "filterSearch_example", // String | Filter for users whose display_name starts with the provided string, or username if display_name is null
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
apiInstance.getUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterDisplayname** | **String**| Filter for users whose display name starts with provided string. | [optional] 
 **filterEmail** | **String**| Filter for users whose email starts with provided string. Requires USERS_ADMIN permission | [optional] 
 **filterFirstname** | **String**| Filter for users whose first name starts with provided string. Requires USERS_ADMIN permission | [optional] 
 **filterFullname** | **String**| Filter for users whose full name starts with provided string. Requires USERS_ADMIN permission | [optional] 
 **filterLastname** | **String**| Filter for users whose last name starts with provided string. Requires USERS_ADMIN permission | [optional] 
 **filterUsername** | **String**| Filter for users whose username starts with the provided string. Requires USERS_ADMIN permission | [optional] 
 **filterTag** | **String**| Filter for users who have a given tag | [optional] 
 **filterGroup** | **String**| Filter for users in a given group, by unique name | [optional] 
 **filterRole** | **String**| Filter for users with a given role | [optional] 
 **filterSearch** | **String**| Filter for users whose display_name starts with the provided string, or username if display_name is null | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceUserBaseResource**](PageResourceUserBaseResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="passwordReset"></a>
# **passwordReset**
> passwordReset(id, opts)

Choose a new password after a reset

Finish resetting a user&#39;s password using the secret provided from the password-reset endpoint.  Password should be in plain text and will be encrypted on receipt. Use SSL for security.

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');

var apiInstance = new knetikcloud-sdk.UsersApi();

var id = 56; // Number | The id of the user

var opts = { 
  'newPasswordRequest': new knetikcloud-sdk.NewPasswordRequest() // NewPasswordRequest | The new password request object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.passwordReset(id, opts, callback);
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
 - **Accept**: application/json

<a name="registerUser"></a>
# **registerUser**
> UserResource registerUser(opts)

Register a new user

Password should be in plain text and will be encrypted on receipt. Use SSL for security

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');

var apiInstance = new knetikcloud-sdk.UsersApi();

var opts = { 
  'userResource': new knetikcloud-sdk.UserResource() // UserResource | The user resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerUser(opts, callback);
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
 - **Accept**: application/json

<a name="removeUserTag"></a>
# **removeUserTag**
> removeUserTag(userId, tag)

Remove a tag from a user

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

var userId = 56; // Number | The id of the user

var tag = "tag_example"; // String | The tag to remove


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeUserTag(userId, tag, callback);
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
 - **Accept**: application/json

<a name="setPassword"></a>
# **setPassword**
> setPassword(id, opts)

Set a user&#39;s password

Password should be in plain text and will be encrypted on receipt. Use SSL for security.

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

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
apiInstance.setPassword(id, opts, callback);
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
 - **Accept**: application/json

<a name="startPasswordReset"></a>
# **startPasswordReset**
> startPasswordReset(id)

Reset a user&#39;s password

A reset code will be generated and a &#39;forgot_password&#39; BRE event will be fired with that code.  The default system rule will send an email to the selected user if an email service has been setup. You can modify that rule in BRE to send an SMS instead or any other type of notification as you see fit

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');

var apiInstance = new knetikcloud-sdk.UsersApi();

var id = 56; // Number | The id of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.startPasswordReset(id, callback);
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
 - **Accept**: application/json

<a name="submitPasswordReset"></a>
# **submitPasswordReset**
> submitPasswordReset(opts)

Reset a user&#39;s password without user id

A reset code will be generated and a &#39;forgot_password&#39; BRE event will be fired with that code.  The default system rule will send an email to the selected user if an email service has been setup. You can modify that rule in BRE to send an SMS instead or any other type of notification as you see fit.  Must submit their email, username, or mobile phone number

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');

var apiInstance = new knetikcloud-sdk.UsersApi();

var opts = { 
  'passwordReset': new knetikcloud-sdk.PasswordResetRequest() // PasswordResetRequest | An object containing one of three methods to look up a user
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.submitPasswordReset(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordReset** | [**PasswordResetRequest**](PasswordResetRequest.md)| An object containing one of three methods to look up a user | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> updateUser(id, opts)

Update a user

Password will not be edited on this endpoint, use password specific endpoints.

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

var id = "id_example"; // String | The id of the user or 'me'

var opts = { 
  'userResource': new knetikcloud-sdk.UserResource() // UserResource | The user resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUser(id, opts, callback);
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
 - **Accept**: application/json

<a name="updateUserTemplate"></a>
# **updateUserTemplate**
> TemplateResource updateUserTemplate(id, opts)

Update a user template

### Example
```javascript
var knetikcloud-sdk = require('knetik_platform_api_documentation_latest');
var defaultClient = knetikcloud-sdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new knetikcloud-sdk.UsersApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'userTemplateResource': new knetikcloud-sdk.TemplateResource() // TemplateResource | The user template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUserTemplate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **userTemplateResource** | [**TemplateResource**](TemplateResource.md)| The user template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

