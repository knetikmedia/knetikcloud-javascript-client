# KnetikPlatformApiDocumentationLatest.ReportingChallengesApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChallengeEventLeaderboard**](ReportingChallengesApi.md#getChallengeEventLeaderboard) | **GET** /reporting/events/leaderboard | Retrieve a challenge event leaderboard details
[**getChallengeEventParticipants**](ReportingChallengesApi.md#getChallengeEventParticipants) | **GET** /reporting/events/participants | Retrieve a challenge event participant details


<a name="getChallengeEventLeaderboard"></a>
# **getChallengeEventLeaderboard**
> PageResourceChallengeEventParticipantResource getChallengeEventLeaderboard(opts)

Retrieve a challenge event leaderboard details

Lists all leaderboard entries with additional user details

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingChallengesApi();

var opts = { 
  'filterEvent': 789, // Number | A sepecific challenge event id
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned
  'order': "order_example" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChallengeEventLeaderboard(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterEvent** | **Number**| A sepecific challenge event id | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] 

### Return type

[**PageResourceChallengeEventParticipantResource**](PageResourceChallengeEventParticipantResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallengeEventParticipants"></a>
# **getChallengeEventParticipants**
> PageResourceChallengeEventParticipantResource getChallengeEventParticipants(opts)

Retrieve a challenge event participant details

Lists all user submitted scores sorted by value, including those that do not apear in the leaderboard due to value or aggregation

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingChallengesApi();

var opts = { 
  'filterEvent': 789, // Number | A sepecific challenge event id
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned
  'order': "order_example" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChallengeEventParticipants(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterEvent** | **Number**| A sepecific challenge event id | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] 

### Return type

[**PageResourceChallengeEventParticipantResource**](PageResourceChallengeEventParticipantResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

