# KnetikPlatformApiDocumentationLatest.MediaVideosApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserToVideoWhitelist**](MediaVideosApi.md#addUserToVideoWhitelist) | **POST** /media/videos/{id}/whitelist | Adds a user to a video&#39;s whitelist
[**addVideo**](MediaVideosApi.md#addVideo) | **POST** /media/videos | Adds a new video in the system
[**addVideoComment**](MediaVideosApi.md#addVideoComment) | **POST** /media/videos/{video_id}/comments | Add a new video comment
[**addVideoContributor**](MediaVideosApi.md#addVideoContributor) | **POST** /media/videos/{video_id}/contributors | Adds a contributor to a video
[**addVideoFlag**](MediaVideosApi.md#addVideoFlag) | **POST** /media/videos/{video_id}/moderation | Add a new flag
[**addVideoRelationships**](MediaVideosApi.md#addVideoRelationships) | **POST** /media/videos/{video_id}/related | Adds one or more existing videos as related to this one
[**createVideoDisposition**](MediaVideosApi.md#createVideoDisposition) | **POST** /media/videos/{video_id}/dispositions | Create a video disposition
[**deleteVideo**](MediaVideosApi.md#deleteVideo) | **DELETE** /media/videos/{id} | Deletes a video from the system if no resources are attached to it
[**deleteVideoComment**](MediaVideosApi.md#deleteVideoComment) | **DELETE** /media/videos/{video_id}/comments/{id} | Delete a video comment
[**deleteVideoDisposition**](MediaVideosApi.md#deleteVideoDisposition) | **DELETE** /media/videos/{video_id}/dispositions/{disposition_id} | Delete a video disposition
[**deleteVideoFlag**](MediaVideosApi.md#deleteVideoFlag) | **DELETE** /media/videos/{video_id}/moderation | Delete a flag
[**deleteVideoRelationship**](MediaVideosApi.md#deleteVideoRelationship) | **DELETE** /media/videos/{video_id}/related/{id} | Delete a video&#39;s relationship
[**getUserVideos**](MediaVideosApi.md#getUserVideos) | **GET** /users/{user_id}/videos | Get user videos
[**getVideo**](MediaVideosApi.md#getVideo) | **GET** /media/videos/{id} | Loads a specific video details
[**getVideoComments**](MediaVideosApi.md#getVideoComments) | **GET** /media/videos/{video_id}/comments | Returns a page of comments for a video
[**getVideoDispositions**](MediaVideosApi.md#getVideoDispositions) | **GET** /media/videos/{video_id}/dispositions | Returns a page of dispositions for a video
[**getVideoRelationships**](MediaVideosApi.md#getVideoRelationships) | **GET** /media/videos/{video_id}/related | Returns a page of video relationships
[**getVideos**](MediaVideosApi.md#getVideos) | **GET** /media/videos | Search videos using the documented filters
[**removeUserFromVideoWhitelist**](MediaVideosApi.md#removeUserFromVideoWhitelist) | **DELETE** /media/videos/{video_id}/whitelist/{id} | Removes a user from a video&#39;s whitelist
[**removeVideoContributor**](MediaVideosApi.md#removeVideoContributor) | **DELETE** /media/videos/{video_id}/contributors/{id} | Removes a contributor from a video
[**updateVideo**](MediaVideosApi.md#updateVideo) | **PUT** /media/videos/{id} | Modifies a video&#39;s details
[**updateVideoComment**](MediaVideosApi.md#updateVideoComment) | **PUT** /media/videos/{video_id}/comments/{id}/content | Update a video comment
[**updateVideoRelationship**](MediaVideosApi.md#updateVideoRelationship) | **PUT** /media/videos/{video_id}/related/{id}/relationship_details | Update a video&#39;s relationship details
[**viewVideo**](MediaVideosApi.md#viewVideo) | **POST** /media/videos/{id}/views | Increment a video&#39;s view count


<a name="addUserToVideoWhitelist"></a>
# **addUserToVideoWhitelist**
> addUserToVideoWhitelist(id, opts)

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
apiInstance.addUserToVideoWhitelist(id, opts, callback);
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
 - **Accept**: application/json

<a name="addVideo"></a>
# **addVideo**
> VideoResource addVideo(opts)

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
apiInstance.addVideo(opts, callback);
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
 - **Accept**: application/json

<a name="addVideoComment"></a>
# **addVideoComment**
> CommentResource addVideoComment(videoId, opts)

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
apiInstance.addVideoComment(videoId, opts, callback);
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
 - **Accept**: application/json

<a name="addVideoContributor"></a>
# **addVideoContributor**
> addVideoContributor(videoId, opts)

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
apiInstance.addVideoContributor(videoId, opts, callback);
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
 - **Accept**: application/json

<a name="addVideoFlag"></a>
# **addVideoFlag**
> FlagResource addVideoFlag(videoId, opts)

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
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addVideoFlag(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **reason** | **String**| The flag reason | [optional] 

### Return type

[**FlagResource**](FlagResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addVideoRelationships"></a>
# **addVideoRelationships**
> VideoRelationshipResource addVideoRelationships(videoId, opts)

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
apiInstance.addVideoRelationships(videoId, opts, callback);
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
 - **Accept**: application/json

<a name="createVideoDisposition"></a>
# **createVideoDisposition**
> DispositionResource createVideoDisposition(videoId, opts)

Create a video disposition

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
apiInstance.createVideoDisposition(videoId, opts, callback);
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
 - **Accept**: application/json

<a name="deleteVideo"></a>
# **deleteVideo**
> deleteVideo(id)

Deletes a video from the system if no resources are attached to it

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
apiInstance.deleteVideo(id, callback);
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
 - **Accept**: application/json

<a name="deleteVideoComment"></a>
# **deleteVideoComment**
> deleteVideoComment(videoId, id)

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
apiInstance.deleteVideoComment(videoId, id, callback);
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
 - **Accept**: application/json

<a name="deleteVideoDisposition"></a>
# **deleteVideoDisposition**
> deleteVideoDisposition(dispositionId)

Delete a video disposition

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
apiInstance.deleteVideoDisposition(dispositionId, callback);
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
 - **Accept**: application/json

<a name="deleteVideoFlag"></a>
# **deleteVideoFlag**
> deleteVideoFlag(videoId)

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
apiInstance.deleteVideoFlag(videoId, callback);
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
 - **Accept**: application/json

<a name="deleteVideoRelationship"></a>
# **deleteVideoRelationship**
> deleteVideoRelationship(videoId, id)

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
apiInstance.deleteVideoRelationship(videoId, id, callback);
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
 - **Accept**: application/json

<a name="getUserVideos"></a>
# **getUserVideos**
> PageResourceVideoResource getUserVideos(userId, opts)

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
apiInstance.getUserVideos(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The user id | 
 **excludeFlagged** | **Boolean**| Skip videos that have been flagged by the current user | [optional] [default to true]
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceVideoResource**](PageResourceVideoResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVideo"></a>
# **getVideo**
> VideoResource getVideo(id)

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
apiInstance.getVideo(id, callback);
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
 - **Accept**: application/json

<a name="getVideoComments"></a>
# **getVideoComments**
> PageResourceCommentResource getVideoComments(videoId, opts)

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
apiInstance.getVideoComments(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceCommentResource**](PageResourceCommentResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVideoDispositions"></a>
# **getVideoDispositions**
> PageResourceDispositionResource getVideoDispositions(videoId, opts)

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
apiInstance.getVideoDispositions(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceDispositionResource**](PageResourceDispositionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVideoRelationships"></a>
# **getVideoRelationships**
> PageResourceVideoRelationshipResource getVideoRelationships(videoId, opts)

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
apiInstance.getVideoRelationships(videoId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Number**| The video id | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceVideoRelationshipResource**](PageResourceVideoRelationshipResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVideos"></a>
# **getVideos**
> PageResourceVideoResource getVideos(opts)

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
  'order': "author:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVideos(opts, callback);
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
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to author:ASC]

### Return type

[**PageResourceVideoResource**](PageResourceVideoResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeUserFromVideoWhitelist"></a>
# **removeUserFromVideoWhitelist**
> removeUserFromVideoWhitelist(videoId, id)

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
apiInstance.removeUserFromVideoWhitelist(videoId, id, callback);
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
 - **Accept**: application/json

<a name="removeVideoContributor"></a>
# **removeVideoContributor**
> removeVideoContributor(videoId, id)

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
apiInstance.removeVideoContributor(videoId, id, callback);
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
 - **Accept**: application/json

<a name="updateVideo"></a>
# **updateVideo**
> updateVideo(id, opts)

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
apiInstance.updateVideo(id, opts, callback);
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
 - **Accept**: application/json

<a name="updateVideoComment"></a>
# **updateVideoComment**
> updateVideoComment(videoId, id, opts)

Update a video comment

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
apiInstance.updateVideoComment(videoId, id, opts, callback);
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
 - **Accept**: application/json

<a name="updateVideoRelationship"></a>
# **updateVideoRelationship**
> updateVideoRelationship(videoId, relationshipId, opts)

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
apiInstance.updateVideoRelationship(videoId, relationshipId, opts, callback);
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
 - **Accept**: application/json

<a name="viewVideo"></a>
# **viewVideo**
> viewVideo(id)

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
apiInstance.viewVideo(id, callback);
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
 - **Accept**: application/json

