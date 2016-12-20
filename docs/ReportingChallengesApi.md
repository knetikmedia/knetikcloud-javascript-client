# KnetikPlatformApiDocumentationLatest.ReportingChallengesApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChallengeEventLeaderboardUsingGET**](ReportingChallengesApi.md#getChallengeEventLeaderboardUsingGET) | **GET** /reporting/events/leaderboard | Retrieve a challenge event leaderboard details
[**getChallengeEventParticipantsUsingGET**](ReportingChallengesApi.md#getChallengeEventParticipantsUsingGET) | **GET** /reporting/events/participants | Retrieve a challenge event participant details


<a name="getChallengeEventLeaderboardUsingGET"></a>
# **getChallengeEventLeaderboardUsingGET**
> PageResourceChallengeEventParticipantResource getChallengeEventLeaderboardUsingGET(opts)

Retrieve a challenge event leaderboard details

Lists all leaderboard entries with additional user details

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingChallengesApi();

var opts = { 
  'filterEvent': 789 // Number | A sepecific challenge event id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChallengeEventLeaderboardUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterEvent** | **Number**| A sepecific challenge event id | [optional] 

### Return type

[**PageResourceChallengeEventParticipantResource**](PageResourceChallengeEventParticipantResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallengeEventParticipantsUsingGET"></a>
# **getChallengeEventParticipantsUsingGET**
> PageResourceChallengeEventParticipantResource getChallengeEventParticipantsUsingGET(opts)

Retrieve a challenge event participant details

Lists all user submitted scores sorted by value, including those that do not apear in the leaderboard due to value or aggregation

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingChallengesApi();

var opts = { 
  'filterEvent': 789 // Number | A sepecific challenge event id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChallengeEventParticipantsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterEvent** | **Number**| A sepecific challenge event id | [optional] 

### Return type

[**PageResourceChallengeEventParticipantResource**](PageResourceChallengeEventParticipantResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

