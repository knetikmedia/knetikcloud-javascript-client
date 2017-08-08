# KnetikCloud.UsersFriendshipsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFriend**](UsersFriendshipsApi.md#addFriend) | **POST** /users/{user_id}/friends/{id} | Add a friend
[**getFriends**](UsersFriendshipsApi.md#getFriends) | **GET** /users/{user_id}/friends | Get friends list
[**getInviteToken**](UsersFriendshipsApi.md#getInviteToken) | **GET** /users/{user_id}/invite-token | Returns the invite token
[**getInvites**](UsersFriendshipsApi.md#getInvites) | **GET** /users/{user_id}/invites | Get pending invites
[**redeemFriendshipToken**](UsersFriendshipsApi.md#redeemFriendshipToken) | **POST** /users/{user_id}/friends/tokens | Redeem friendship token
[**removeOrDeclineFriend**](UsersFriendshipsApi.md#removeOrDeclineFriend) | **DELETE** /users/{user_id}/friends/{id} | Remove or decline a friend


<a name="addFriend"></a>
# **addFriend**
> addFriend(userId, id)

Add a friend

As a user, either creates or confirm a pending request. As an admin, call this endpoint twice while inverting the IDs to create a confirmed friendship.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.UsersFriendshipsApi();

let userId = "userId_example"; // String | The id of the user or 'me' if logged in

let id = 56; // Number | The id of the user to befriend

apiInstance.addFriend(userId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user or &#39;me&#39; if logged in | 
 **id** | **Number**| The id of the user to befriend | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFriends"></a>
# **getFriends**
> PageResourceSimpleUserResource getFriends(userId, opts)

Get friends list

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.UsersFriendshipsApi();

let userId = "userId_example"; // String | The id of the user or 'me'

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getFriends(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user or &#39;me&#39; | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceSimpleUserResource**](PageResourceSimpleUserResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInviteToken"></a>
# **getInviteToken**
> &#39;String&#39; getInviteToken(userId)

Returns the invite token

This is a unique invite token that allows direct connection to the request user.  Exposing that token presents privacy issues if the token is leaked. Use friend request flow instead if confirmation is required

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.UsersFriendshipsApi();

let userId = "userId_example"; // String | The id of the user or 'me' if logged in

apiInstance.getInviteToken(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user or &#39;me&#39; if logged in | 

### Return type

**&#39;String&#39;**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInvites"></a>
# **getInvites**
> PageResourceSimpleUserResource getInvites(userId, opts)

Get pending invites

Invites that the specified user received

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.UsersFriendshipsApi();

let userId = "userId_example"; // String | The id of the user or 'me'

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getInvites(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user or &#39;me&#39; | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceSimpleUserResource**](PageResourceSimpleUserResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="redeemFriendshipToken"></a>
# **redeemFriendshipToken**
> redeemFriendshipToken(userId, opts)

Redeem friendship token

Immediately connects the requested user with the user mapped by the provided invite token

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.UsersFriendshipsApi();

let userId = "userId_example"; // String | The id of the user or 'me' if logged in

let opts = { 
  'token': new KnetikCloud.StringWrapper() // StringWrapper | The invite token
};
apiInstance.redeemFriendshipToken(userId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user or &#39;me&#39; if logged in | 
 **token** | [**StringWrapper**](StringWrapper.md)| The invite token | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeOrDeclineFriend"></a>
# **removeOrDeclineFriend**
> removeOrDeclineFriend(userId, id)

Remove or decline a friend

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';
let defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KnetikCloud.UsersFriendshipsApi();

let userId = "userId_example"; // String | The id of the user or 'me' if logged in

let id = 56; // Number | The id of the user to befriend

apiInstance.removeOrDeclineFriend(userId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user or &#39;me&#39; if logged in | 
 **id** | **Number**| The id of the user to befriend | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

