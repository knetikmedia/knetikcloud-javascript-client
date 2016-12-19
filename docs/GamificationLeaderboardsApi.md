# KnetikPlatformApiDocumentationLatest.GamificationLeaderboardsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLeaderboardUsingGET**](GamificationLeaderboardsApi.md#getLeaderboardUsingGET) | **GET** /leaderboards/{context_type}/{context_id} | Retrieves leaderboard details and paginated entries
[**getStrategiesUsingGET**](GamificationLeaderboardsApi.md#getStrategiesUsingGET) | **GET** /leaderboards/strategies | Get a list of available leaderboard strategy names
[**getUserRankUsingGET**](GamificationLeaderboardsApi.md#getUserRankUsingGET) | **GET** /leaderboards/{context_type}/{context_id}/users/{id}/rank | Retrieves a specific user entry with rank


<a name="getLeaderboardUsingGET"></a>
# **getLeaderboardUsingGET**
> LeaderboardResource getLeaderboardUsingGET(contextType, contextId, opts)

Retrieves leaderboard details and paginated entries

The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationLeaderboardsApi();

var contextType = "contextType_example"; // String | The context type for the leaderboard

var contextId = "contextId_example"; // String | The context id for the leaderboard

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
apiInstance.getLeaderboardUsingGET(contextType, contextId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contextType** | **String**| The context type for the leaderboard | 
 **contextId** | **String**| The context id for the leaderboard | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**LeaderboardResource**](LeaderboardResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getStrategiesUsingGET"></a>
# **getStrategiesUsingGET**
> [&#39;String&#39;] getStrategiesUsingGET()

Get a list of available leaderboard strategy names

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationLeaderboardsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStrategiesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserRankUsingGET"></a>
# **getUserRankUsingGET**
> LeaderboardEntryResource getUserRankUsingGET(contextType, contextId, id)

Retrieves a specific user entry with rank

The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationLeaderboardsApi();

var contextType = "contextType_example"; // String | The context type for the leaderboard

var contextId = "contextId_example"; // String | The context id for the leaderboard

var id = "id_example"; // String | The id of a user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserRankUsingGET(contextType, contextId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contextType** | **String**| The context type for the leaderboard | 
 **contextId** | **String**| The context id for the leaderboard | 
 **id** | **String**| The id of a user | 

### Return type

[**LeaderboardEntryResource**](LeaderboardEntryResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

