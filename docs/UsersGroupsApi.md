# KnetikcloudSdk.UsersGroupsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMemberToGroup**](UsersGroupsApi.md#addMemberToGroup) | **POST** /users/groups/{unique_name}/members | Adds a new member to the group
[**addMembersToGroup**](UsersGroupsApi.md#addMembersToGroup) | **POST** /users/groups/{unique_name}/members/batch-add | Adds multiple members to the group
[**createGroup**](UsersGroupsApi.md#createGroup) | **POST** /users/groups | Create a group
[**createGroupTemplate**](UsersGroupsApi.md#createGroupTemplate) | **POST** /users/groups/templates | Create a group template
[**deleteGroup**](UsersGroupsApi.md#deleteGroup) | **DELETE** /users/groups/{unique_name} | Removes a group from the system IF no resources are attached to it
[**deleteGroupTemplate**](UsersGroupsApi.md#deleteGroupTemplate) | **DELETE** /users/groups/templates/{id} | Delete a group template
[**getGroup**](UsersGroupsApi.md#getGroup) | **GET** /users/groups/{unique_name} | Loads a specific group&#39;s details
[**getGroupMember**](UsersGroupsApi.md#getGroupMember) | **GET** /users/groups/{unique_name}/members/{user_id} | Get a user from a group
[**getGroupMembers**](UsersGroupsApi.md#getGroupMembers) | **GET** /users/groups/{unique_name}/members | Lists members of the group
[**getGroupTemplate**](UsersGroupsApi.md#getGroupTemplate) | **GET** /users/groups/templates/{id} | Get a single group template
[**getGroupTemplates**](UsersGroupsApi.md#getGroupTemplates) | **GET** /users/groups/templates | List and search group templates
[**getGroupsForUser**](UsersGroupsApi.md#getGroupsForUser) | **GET** /users/{user_id}/groups | List groups a user is in
[**removeGroupMember**](UsersGroupsApi.md#removeGroupMember) | **DELETE** /users/groups/{unique_name}/members/{user_id} | Removes a user from a group
[**updateGroup**](UsersGroupsApi.md#updateGroup) | **PUT** /users/groups/{unique_name} | Update a group
[**updateGroupMemberStatus**](UsersGroupsApi.md#updateGroupMemberStatus) | **PUT** /users/groups/{unique_name}/members/{user_id}/status | Change a user&#39;s status
[**updateGroupTemplate**](UsersGroupsApi.md#updateGroupTemplate) | **PUT** /users/groups/templates/{id} | Update a group template
[**updateGroups**](UsersGroupsApi.md#updateGroups) | **GET** /users/groups | List and search groups


<a name="addMemberToGroup"></a>
# **addMemberToGroup**
> GroupMemberResource addMemberToGroup(uniqueName, user)

Adds a new member to the group

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var uniqueName = "uniqueName_example"; // String | The group unique name

var user = new KnetikcloudSdk.GroupMemberResource(); // GroupMemberResource | The id and status for a user to add to the group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addMemberToGroup(uniqueName, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueName** | **String**| The group unique name | 
 **user** | [**GroupMemberResource**](GroupMemberResource.md)| The id and status for a user to add to the group | 

### Return type

[**GroupMemberResource**](GroupMemberResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addMembersToGroup"></a>
# **addMembersToGroup**
> [GroupMemberResource] addMembersToGroup(uniqueName, users)

Adds multiple members to the group

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var uniqueName = "uniqueName_example"; // String | The group unique name

var users = [new KnetikcloudSdk.GroupMemberResource()]; // [GroupMemberResource] | The id and status for a list of users to add to the group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addMembersToGroup(uniqueName, users, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueName** | **String**| The group unique name | 
 **users** | [**[GroupMemberResource]**](GroupMemberResource.md)| The id and status for a list of users to add to the group | 

### Return type

[**[GroupMemberResource]**](GroupMemberResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGroup"></a>
# **createGroup**
> GroupResource createGroup(opts)

Create a group

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var opts = { 
  'groupResource': new KnetikcloudSdk.GroupResource() // GroupResource | The new group
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createGroup(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupResource** | [**GroupResource**](GroupResource.md)| The new group | [optional] 

### Return type

[**GroupResource**](GroupResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGroupTemplate"></a>
# **createGroupTemplate**
> TemplateResource createGroupTemplate(opts)

Create a group template

Group Templates define a type of group and the properties they have

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var opts = { 
  'groupTemplateResource': new KnetikcloudSdk.TemplateResource() // TemplateResource | The group template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createGroupTemplate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupTemplateResource** | [**TemplateResource**](TemplateResource.md)| The group template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(uniqueName)

Removes a group from the system IF no resources are attached to it

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var uniqueName = "uniqueName_example"; // String | The group unique name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGroup(uniqueName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueName** | **String**| The group unique name | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroupTemplate"></a>
# **deleteGroupTemplate**
> deleteGroupTemplate(id, opts)

Delete a group template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

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
apiInstance.deleteGroupTemplate(id, opts, callback);
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

<a name="getGroup"></a>
# **getGroup**
> GroupResource getGroup(uniqueName)

Loads a specific group&#39;s details

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var uniqueName = "uniqueName_example"; // String | The group unique name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroup(uniqueName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueName** | **String**| The group unique name | 

### Return type

[**GroupResource**](GroupResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupMember"></a>
# **getGroupMember**
> GroupMemberResource getGroupMember(uniqueName, userId)

Get a user from a group

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var uniqueName = "uniqueName_example"; // String | The group unique name

var userId = 56; // Number | The id of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupMember(uniqueName, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueName** | **String**| The group unique name | 
 **userId** | **Number**| The id of the user | 

### Return type

[**GroupMemberResource**](GroupMemberResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupMembers"></a>
# **getGroupMembers**
> PageResourceGroupMemberResource getGroupMembers(uniqueName, opts)

Lists members of the group

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var uniqueName = "uniqueName_example"; // String | The group unique name

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
apiInstance.getGroupMembers(uniqueName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueName** | **String**| The group unique name | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceGroupMemberResource**](PageResourceGroupMemberResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupTemplate"></a>
# **getGroupTemplate**
> TemplateResource getGroupTemplate(id)

Get a single group template

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupTemplate(id, callback);
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

<a name="getGroupTemplates"></a>
# **getGroupTemplates**
> PageResourceTemplateResource getGroupTemplates(opts)

List and search group templates

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupTemplates(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceTemplateResource**](PageResourceTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupsForUser"></a>
# **getGroupsForUser**
> [&#39;String&#39;] getGroupsForUser(userId)

List groups a user is in

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var userId = 56; // Number | The id of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupsForUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeGroupMember"></a>
# **removeGroupMember**
> removeGroupMember(uniqueName, userId)

Removes a user from a group

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var uniqueName = "uniqueName_example"; // String | The group unique name

var userId = 56; // Number | The id of the user to remove


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeGroupMember(uniqueName, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueName** | **String**| The group unique name | 
 **userId** | **Number**| The id of the user to remove | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGroup"></a>
# **updateGroup**
> updateGroup(uniqueName, opts)

Update a group

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var uniqueName = "uniqueName_example"; // String | The group unique name

var opts = { 
  'groupResource': new KnetikcloudSdk.GroupResource() // GroupResource | The updated group
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateGroup(uniqueName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueName** | **String**| The group unique name | 
 **groupResource** | [**GroupResource**](GroupResource.md)| The updated group | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGroupMemberStatus"></a>
# **updateGroupMemberStatus**
> updateGroupMemberStatus(uniqueName, userId, status)

Change a user&#39;s status

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var uniqueName = "uniqueName_example"; // String | The group unique name

var userId = 56; // Number | The user id of the member to modify

var status = "status_example"; // String | The new status for the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateGroupMemberStatus(uniqueName, userId, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueName** | **String**| The group unique name | 
 **userId** | **Number**| The user id of the member to modify | 
 **status** | **String**| The new status for the user | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGroupTemplate"></a>
# **updateGroupTemplate**
> TemplateResource updateGroupTemplate(id, opts)

Update a group template

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'groupTemplateResource': new KnetikcloudSdk.TemplateResource() // TemplateResource | The group template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGroupTemplate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **groupTemplateResource** | [**TemplateResource**](TemplateResource.md)| The group template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGroups"></a>
# **updateGroups**
> PageResourceGroupResource updateGroups(opts)

List and search groups

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.UsersGroupsApi();

var opts = { 
  'filterTemplate': "filterTemplate_example", // String | Filter for groups using a specific template, by id
  'filterMemberCount': "filterMemberCount_example", // String | Filters groups by member count. Multiple values possible for range search. Format: filter_member_count=OP,ts&... where OP in (GT, LT, GOE, LOE, EQ). Ex: filter_member_count=GT,14,LT,17
  'filterName': "filterName_example", // String | Filter for groups with names starting with the given string
  'filterUniqueName': "filterUniqueName_example", // String | Filter for groups whose unique_name starts with provided string
  'filterParent': "filterParent_example", // String | Filter for groups with a specific parent, by unique name
  'filterStatus': "filterStatus_example", // String | Filter for groups with a certain status
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
apiInstance.updateGroups(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterTemplate** | **String**| Filter for groups using a specific template, by id | [optional] 
 **filterMemberCount** | **String**| Filters groups by member count. Multiple values possible for range search. Format: filter_member_count&#x3D;OP,ts&amp;... where OP in (GT, LT, GOE, LOE, EQ). Ex: filter_member_count&#x3D;GT,14,LT,17 | [optional] 
 **filterName** | **String**| Filter for groups with names starting with the given string | [optional] 
 **filterUniqueName** | **String**| Filter for groups whose unique_name starts with provided string | [optional] 
 **filterParent** | **String**| Filter for groups with a specific parent, by unique name | [optional] 
 **filterStatus** | **String**| Filter for groups with a certain status | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to name:ASC]

### Return type

[**PageResourceGroupResource**](PageResourceGroupResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

