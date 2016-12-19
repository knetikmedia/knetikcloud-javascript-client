# KnetikPlatformApiDocumentationLatest.MediaVideosApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCommentUsingPOST1**](MediaVideosApi.md#addCommentUsingPOST1) | **POST** /media/videos/{video_id}/comments | Add a new video comment
[**addContributorUsingPOST**](MediaVideosApi.md#addContributorUsingPOST) | **POST** /media/videos/{video_id}/contributors | Adds a contributor to a video
[**addDispositionUsingPOST1**](MediaVideosApi.md#addDispositionUsingPOST1) | **POST** /media/videos/{video_id}/dispositions | Add a new Video disposition
[**addFlagUsingPOST**](MediaVideosApi.md#addFlagUsingPOST) | **POST** /media/videos/{video_id}/moderation | Add a new flag
[**addRelatedUsingPOST**](MediaVideosApi.md#addRelatedUsingPOST) | **POST** /media/videos/{video_id}/related | Adds one or more existing videos as related to this one
[**addVideoUsingPOST**](MediaVideosApi.md#addVideoUsingPOST) | **POST** /media/videos | Adds a new video in the system
[**addWhitelistUsingPOST**](MediaVideosApi.md#addWhitelistUsingPOST) | **POST** /media/videos/{id}/whitelist | Adds a user to a video&#39;s whitelist
[**deleteCommentUsingDELETE1**](MediaVideosApi.md#deleteCommentUsingDELETE1) | **DELETE** /media/videos/{video_id}/comments/{id} | Delete a video comment
[**deleteDispositionUsingDELETE1**](MediaVideosApi.md#deleteDispositionUsingDELETE1) | **DELETE** /media/videos/{video_id}/dispositions/{disposition_id} | Delete a video comment
[**deleteFlagUsingDELETE**](MediaVideosApi.md#deleteFlagUsingDELETE) | **DELETE** /media/videos/{video_id}/moderation | Delete a flag
[**deleteRelationshipUsingDELETE1**](MediaVideosApi.md#deleteRelationshipUsingDELETE1) | **DELETE** /media/videos/{video_id}/related/{id} | Delete a video&#39;s relationship
[**deleteVideoUsingDELETE**](MediaVideosApi.md#deleteVideoUsingDELETE) | **DELETE** /media/videos/{id} | Removes a video from the system if no resources are attached to it
[**getCommentsUsingGET1**](MediaVideosApi.md#getCommentsUsingGET1) | **GET** /media/videos/{video_id}/comments | Returns a page of comments for a video
[**getDispositionsUsingGET1**](MediaVideosApi.md#getDispositionsUsingGET1) | **GET** /media/videos/{video_id}/dispositions | Returns a page of dispositions for a video
[**getRelatedUsingGET**](MediaVideosApi.md#getRelatedUsingGET) | **GET** /media/videos/{video_id}/related | Returns a page of video relationships
[**getUserVideosUsingGET**](MediaVideosApi.md#getUserVideosUsingGET) | **GET** /users/{user_id}/videos | Get user videos
[**getVideoUsingGET**](MediaVideosApi.md#getVideoUsingGET) | **GET** /media/videos/{id} | Loads a specific video details
[**removeContributorUsingDELETE**](MediaVideosApi.md#removeContributorUsingDELETE) | **DELETE** /media/videos/{video_id}/contributors/{id} | Removes a contributor from a video
[**removeWhitelistUsingDELETE**](MediaVideosApi.md#removeWhitelistUsingDELETE) | **DELETE** /media/videos/{video_id}/whitelist/{id} | Removes a user from a video&#39;s whitelist
[**searchVideosUsingGET**](MediaVideosApi.md#searchVideosUsingGET) | **GET** /media/videos | Search videos using the documented filters
[**updateCommentUsingPUT1**](MediaVideosApi.md#updateCommentUsingPUT1) | **PUT** /media/videos/{video_id}/comments/{id}/content | Update video comment content 
[**updateRelationshipUsingPUT1**](MediaVideosApi.md#updateRelationshipUsingPUT1) | **PUT** /media/videos/{video_id}/related/{id}/relationship_details | Update a video&#39;s relationship details
[**updateVideoUsingPUT**](MediaVideosApi.md#updateVideoUsingPUT) | **PUT** /media/videos/{id} | Modifies a video&#39;s details
[**viewVideoUsingPOST**](MediaVideosApi.md#viewVideoUsingPOST) | **POST** /media/videos/{id}/views | Increment a video&#39;s view count


<a name="addCommentUsingPOST1"></a>
# **addCommentUsingPOST1**
> CommentResource addCommentUsingPOST1(videoId, opts)

Add a new video comment

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 56; // Number | The video id 

var opts = { 
  'commentResource': new KnetikPlatformApiDocumentationLatest.CommentResource() // CommentResource | The comment object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCommentUsingPOST1(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id  | 
 **commentResource** | [**CommentResource**](CommentResource.md)| The comment object | [optional] 

### Return type

[**CommentResource**](CommentResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="addContributorUsingPOST"></a>
# **addContributorUsingPOST**
> addContributorUsingPOST(videoId, opts)

Adds a contributor to a video

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 789; // Number | The video id

var opts = { 
  'contributionResource': new KnetikPlatformApiDocumentationLatest.ContributionResource() // ContributionResource | The contribution object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addContributorUsingPOST(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **contributionResource** | [**ContributionResource**](ContributionResource.md)| The contribution object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="addDispositionUsingPOST1"></a>
# **addDispositionUsingPOST1**
> DispositionResource addDispositionUsingPOST1(videoId, opts)

Add a new Video disposition

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 56; // Number | The video id

var opts = { 
  'dispositionResource': new KnetikPlatformApiDocumentationLatest.DispositionResource() // DispositionResource | The disposition object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addDispositionUsingPOST1(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **dispositionResource** | [**DispositionResource**](DispositionResource.md)| The disposition object | [optional] 

### Return type

[**DispositionResource**](DispositionResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="addFlagUsingPOST"></a>
# **addFlagUsingPOST**
> addFlagUsingPOST(videoId, opts)

Add a new flag

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 789; // Number | The video id

var opts = { 
  'reason': "reason_example" // String | The flag reason
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFlagUsingPOST(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **reason** | **String**| The flag reason | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="addRelatedUsingPOST"></a>
# **addRelatedUsingPOST**
> VideoRelationshipResource addRelatedUsingPOST(videoId, opts)

Adds one or more existing videos as related to this one

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 789; // Number | The video id

var opts = { 
  'videoRelationshipResource': new KnetikPlatformApiDocumentationLatest.VideoRelationshipResource() // VideoRelationshipResource | The video relationship object 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRelatedUsingPOST(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **videoRelationshipResource** | [**VideoRelationshipResource**](VideoRelationshipResource.md)| The video relationship object  | [optional] 

### Return type

[**VideoRelationshipResource**](VideoRelationshipResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="addVideoUsingPOST"></a>
# **addVideoUsingPOST**
> VideoResource addVideoUsingPOST(opts)

Adds a new video in the system

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var opts = { 
  'videoResource': new KnetikPlatformApiDocumentationLatest.VideoResource() // VideoResource | The video object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addVideoUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoResource** | [**VideoResource**](VideoResource.md)| The video object | [optional] 

### Return type

[**VideoResource**](VideoResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="addWhitelistUsingPOST"></a>
# **addWhitelistUsingPOST**
> addWhitelistUsingPOST(id, opts)

Adds a user to a video&#39;s whitelist

Whitelisted users can view video regardless of privacy setting.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var id = 789; // Number | The video id

var opts = { 
  'userId': 56 // Number | The user id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWhitelistUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The video id | 
 **userId** | **Number**| The user id | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteCommentUsingDELETE1"></a>
# **deleteCommentUsingDELETE1**
> deleteCommentUsingDELETE1(videoId, id)

Delete a video comment

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 789; // Number | The video id

var id = 789; // Number | The comment id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCommentUsingDELETE1(videoId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **id** | **Number**| The comment id | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteDispositionUsingDELETE1"></a>
# **deleteDispositionUsingDELETE1**
> deleteDispositionUsingDELETE1(dispositionId)

Delete a video comment

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var dispositionId = 789; // Number | The disposition id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDispositionUsingDELETE1(dispositionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dispositionId** | **Number**| The disposition id | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteFlagUsingDELETE"></a>
# **deleteFlagUsingDELETE**
> deleteFlagUsingDELETE(videoId)

Delete a flag

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 789; // Number | The video id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFlagUsingDELETE(videoId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteRelationshipUsingDELETE1"></a>
# **deleteRelationshipUsingDELETE1**
> deleteRelationshipUsingDELETE1(videoId, id)

Delete a video&#39;s relationship

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 789; // Number | The video id

var id = 789; // Number | The relationship id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRelationshipUsingDELETE1(videoId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **id** | **Number**| The relationship id | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteVideoUsingDELETE"></a>
# **deleteVideoUsingDELETE**
> deleteVideoUsingDELETE(id)

Removes a video from the system if no resources are attached to it

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var id = 789; // Number | The video id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteVideoUsingDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The video id | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getCommentsUsingGET1"></a>
# **getCommentsUsingGET1**
> PageCommentResource getCommentsUsingGET1(videoId, opts)

Returns a page of comments for a video

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 56; // Number | The video id

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCommentsUsingGET1(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageCommentResource**](PageCommentResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getDispositionsUsingGET1"></a>
# **getDispositionsUsingGET1**
> PageDispositionResource getDispositionsUsingGET1(videoId, opts)

Returns a page of dispositions for a video

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 56; // Number | The video id

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDispositionsUsingGET1(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageDispositionResource**](PageDispositionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getRelatedUsingGET"></a>
# **getRelatedUsingGET**
> PageVideoRelationshipResource getRelatedUsingGET(videoId, opts)

Returns a page of video relationships

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 789; // Number | The video id

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelatedUsingGET(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageVideoRelationshipResource**](PageVideoRelationshipResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserVideosUsingGET"></a>
# **getUserVideosUsingGET**
> PageVideoResource getUserVideosUsingGET(userId, opts)

Get user videos

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var userId = 56; // Number | The user id

var opts = { 
  'excludeFlagged': true, // Boolean | Skip videos that have been flagged by the current user
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserVideosUsingGET(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The user id | 
 **excludeFlagged** | **Boolean**| Skip videos that have been flagged by the current user | [optional] [default to true]
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageVideoResource**](PageVideoResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getVideoUsingGET"></a>
# **getVideoUsingGET**
> VideoResource getVideoUsingGET(id)

Loads a specific video details

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var id = 789; // Number | The video id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVideoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The video id | 

### Return type

[**VideoResource**](VideoResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="removeContributorUsingDELETE"></a>
# **removeContributorUsingDELETE**
> removeContributorUsingDELETE(videoId, id)

Removes a contributor from a video

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 789; // Number | The video id

var id = 56; // Number | The contributor id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeContributorUsingDELETE(videoId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **id** | **Number**| The contributor id | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="removeWhitelistUsingDELETE"></a>
# **removeWhitelistUsingDELETE**
> removeWhitelistUsingDELETE(videoId, id)

Removes a user from a video&#39;s whitelist

Remove the user with the id given in the path from the whitelist of users that can view this video regardless of privacy setting.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 789; // Number | The video id

var id = 56; // Number | The user id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeWhitelistUsingDELETE(videoId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **id** | **Number**| The user id | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="searchVideosUsingGET"></a>
# **searchVideosUsingGET**
> PageVideoResource searchVideosUsingGET(opts)

Search videos using the documented filters

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var opts = { 
  'excludeFlagged': true, // Boolean | Skip videos that have been flagged by the current user
  'filterVideosByUploader': "filterVideosByUploader_example", // String | Filter for videos by uploader id
  'filterCategory': "filterCategory_example", // String | Filter for videos from a specific category by id
  'filterTagset': "filterTagset_example", // String | Filter for videos with specified tags (separated by comma)
  'filterVideosByName': "filterVideosByName_example", // String | Filter for videos which name *STARTS* with the given string
  'filterVideosByContributor': "filterVideosByContributor_example", // String | Filter for videos with contribution from the artist specified by ID
  'filterVideosByAuthor': "filterVideosByAuthor_example", // String | Filter for videos with an artist as author specified by ID
  'filterHasAuthor': true, // Boolean | Filter for videos that have an author set if true, or that have no author if false
  'filterHasUploader': true, // Boolean | Filter for videos that have an uploader set if true, or that have no uploader if false
  'filterRelatedTo': "filterRelatedTo_example", // String | Filter for videos that have designated a particular video as the TO of a relationship. Pattern should match VIDEO_ID or VIDEO_ID:DETAILS to match with a specific details string as well
  'filterFriends': true, // Boolean | Filter for videos uploaded by friends. 'true' for friends of the caller (requires user token) or a user id for a specific user's friends (requires VIDEOS_ADMIN permission)
  'filterDisposition': "filterDisposition_example", // String | Filter for videos a given user has a given disposition towards. USER_ID:DISPOSITION where USER_ID is the id of the user who has this disposition or 'me' for the caller (requires user token for 'me') and DISPOSITION is the name of the disposition. E.G. filter_disposition=123:like or filter_disposition=me:favorite
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "1" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchVideosUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **excludeFlagged** | **Boolean**| Skip videos that have been flagged by the current user | [optional] [default to true]
 **filterVideosByUploader** | **String**| Filter for videos by uploader id | [optional] 
 **filterCategory** | **String**| Filter for videos from a specific category by id | [optional] 
 **filterTagset** | **String**| Filter for videos with specified tags (separated by comma) | [optional] 
 **filterVideosByName** | **String**| Filter for videos which name *STARTS* with the given string | [optional] 
 **filterVideosByContributor** | **String**| Filter for videos with contribution from the artist specified by ID | [optional] 
 **filterVideosByAuthor** | **String**| Filter for videos with an artist as author specified by ID | [optional] 
 **filterHasAuthor** | **Boolean**| Filter for videos that have an author set if true, or that have no author if false | [optional] 
 **filterHasUploader** | **Boolean**| Filter for videos that have an uploader set if true, or that have no uploader if false | [optional] 
 **filterRelatedTo** | **String**| Filter for videos that have designated a particular video as the TO of a relationship. Pattern should match VIDEO_ID or VIDEO_ID:DETAILS to match with a specific details string as well | [optional] 
 **filterFriends** | **Boolean**| Filter for videos uploaded by friends. &#39;true&#39; for friends of the caller (requires user token) or a user id for a specific user&#39;s friends (requires VIDEOS_ADMIN permission) | [optional] 
 **filterDisposition** | **String**| Filter for videos a given user has a given disposition towards. USER_ID:DISPOSITION where USER_ID is the id of the user who has this disposition or &#39;me&#39; for the caller (requires user token for &#39;me&#39;) and DISPOSITION is the name of the disposition. E.G. filter_disposition&#x3D;123:like or filter_disposition&#x3D;me:favorite | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**PageVideoResource**](PageVideoResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateCommentUsingPUT1"></a>
# **updateCommentUsingPUT1**
> updateCommentUsingPUT1(videoId, id, opts)

Update video comment content 

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 789; // Number | The video id

var id = 789; // Number | The comment id

var opts = { 
  'content': "content_example" // String | The comment content
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCommentUsingPUT1(videoId, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **id** | **Number**| The comment id | 
 **content** | **String**| The comment content | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateRelationshipUsingPUT1"></a>
# **updateRelationshipUsingPUT1**
> updateRelationshipUsingPUT1(videoId, relationshipId, opts)

Update a video&#39;s relationship details

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var videoId = 789; // Number | The video id

var relationshipId = 789; // Number | The relationship id

var opts = { 
  'details': "details_example" // String | The video relationship details
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRelationshipUsingPUT1(videoId, relationshipId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **relationshipId** | **Number**| The relationship id | 
 **details** | **String**| The video relationship details | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateVideoUsingPUT"></a>
# **updateVideoUsingPUT**
> updateVideoUsingPUT(id, opts)

Modifies a video&#39;s details

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var id = 789; // Number | The video id

var opts = { 
  'videoResource': new KnetikPlatformApiDocumentationLatest.VideoResource() // VideoResource | The video object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateVideoUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The video id | 
 **videoResource** | [**VideoResource**](VideoResource.md)| The video object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="viewVideoUsingPOST"></a>
# **viewVideoUsingPOST**
> viewVideoUsingPOST(id)

Increment a video&#39;s view count

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.MediaVideosApi();

var id = 789; // Number | The video id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.viewVideoUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The video id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

