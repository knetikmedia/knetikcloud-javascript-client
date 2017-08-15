# KnetikCloud.UsersRelationshipsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserRelationship**](UsersRelationshipsApi.md#createUserRelationship) | **POST** /users/relationships | Create a user relationship
[**deleteUserRelationship**](UsersRelationshipsApi.md#deleteUserRelationship) | **DELETE** /users/relationships/{id} | Delete a user relationship
[**getUserRelationship**](UsersRelationshipsApi.md#getUserRelationship) | **GET** /users/relationships/{id} | Get a user relationship
[**getUserRelationships**](UsersRelationshipsApi.md#getUserRelationships) | **GET** /users/relationships | Get a list of user relationships
[**updateUserRelationship**](UsersRelationshipsApi.md#updateUserRelationship) | **PUT** /users/relationships/{id} | Update a user relationship


<a name="createUserRelationship"></a>
# **createUserRelationship**
> UserRelationshipResource createUserRelationship(opts)

Create a user relationship

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.UsersRelationshipsApi();

let opts = { 
  'relationship': new KnetikCloud.UserRelationshipResource() // UserRelationshipResource | The new relationship
};
apiInstance.createUserRelationship(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship** | [**UserRelationshipResource**](UserRelationshipResource.md)| The new relationship | [optional] 

### Return type

[**UserRelationshipResource**](UserRelationshipResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserRelationship"></a>
# **deleteUserRelationship**
> deleteUserRelationship(id)

Delete a user relationship

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.UsersRelationshipsApi();

let id = 789; // Number | The id of the relationship

apiInstance.deleteUserRelationship(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the relationship | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserRelationship"></a>
# **getUserRelationship**
> UserRelationshipResource getUserRelationship(id)

Get a user relationship

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.UsersRelationshipsApi();

let id = 789; // Number | The id of the relationship

apiInstance.getUserRelationship(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the relationship | 

### Return type

[**UserRelationshipResource**](UserRelationshipResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserRelationships"></a>
# **getUserRelationships**
> PageResourceUserRelationshipResource getUserRelationships(opts)

Get a list of user relationships

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.UsersRelationshipsApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned
  'order': "order_example" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getUserRelationships(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] 

### Return type

[**PageResourceUserRelationshipResource**](PageResourceUserRelationshipResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserRelationship"></a>
# **updateUserRelationship**
> UserRelationshipResource updateUserRelationship(id, opts)

Update a user relationship

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.UsersRelationshipsApi();

let id = 789; // Number | The id of the relationship

let opts = { 
  'relationship': new KnetikCloud.UserRelationshipResource() // UserRelationshipResource | The new relationship
};
apiInstance.updateUserRelationship(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the relationship | 
 **relationship** | [**UserRelationshipResource**](UserRelationshipResource.md)| The new relationship | [optional] 

### Return type

[**UserRelationshipResource**](UserRelationshipResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

