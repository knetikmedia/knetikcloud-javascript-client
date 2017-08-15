# KnetikCloud.AuthPermissionsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPermission**](AuthPermissionsApi.md#createPermission) | **POST** /auth/permissions | Create a new permission
[**deletePermission**](AuthPermissionsApi.md#deletePermission) | **DELETE** /auth/permissions/{permission} | Delete a permission
[**getPermission**](AuthPermissionsApi.md#getPermission) | **GET** /auth/permissions/{permission} | Get a single permission
[**getPermissions**](AuthPermissionsApi.md#getPermissions) | **GET** /auth/permissions | List and search permissions
[**updatePermission**](AuthPermissionsApi.md#updatePermission) | **PUT** /auth/permissions/{permission} | Update a permission


<a name="createPermission"></a>
# **createPermission**
> PermissionResource createPermission(opts)

Create a new permission

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.AuthPermissionsApi();

let opts = { 
  'permissionResource': new KnetikCloud.PermissionResource() // PermissionResource | The permission resource object
};
apiInstance.createPermission(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permissionResource** | [**PermissionResource**](PermissionResource.md)| The permission resource object | [optional] 

### Return type

[**PermissionResource**](PermissionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePermission"></a>
# **deletePermission**
> deletePermission(permission, opts)

Delete a permission

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.AuthPermissionsApi();

let permission = "permission_example"; // String | The permission value

let opts = { 
  'force': true // Boolean | If true, removes permission assigned to roles
};
apiInstance.deletePermission(permission, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permission** | **String**| The permission value | 
 **force** | **Boolean**| If true, removes permission assigned to roles | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPermission"></a>
# **getPermission**
> PermissionResource getPermission(permission)

Get a single permission

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.AuthPermissionsApi();

let permission = "permission_example"; // String | The permission value

apiInstance.getPermission(permission).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permission** | **String**| The permission value | 

### Return type

[**PermissionResource**](PermissionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPermissions"></a>
# **getPermissions**
> PageResourcePermissionResource getPermissions(opts)

List and search permissions

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.AuthPermissionsApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "permission:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getPermissions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to permission:ASC]

### Return type

[**PageResourcePermissionResource**](PageResourcePermissionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePermission"></a>
# **updatePermission**
> PermissionResource updatePermission(permission, opts)

Update a permission

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.AuthPermissionsApi();

let permission = "permission_example"; // String | The permission value

let opts = { 
  'permissionResource': new KnetikCloud.PermissionResource() // PermissionResource | The permission resource object
};
apiInstance.updatePermission(permission, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permission** | **String**| The permission value | 
 **permissionResource** | [**PermissionResource**](PermissionResource.md)| The permission resource object | [optional] 

### Return type

[**PermissionResource**](PermissionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

