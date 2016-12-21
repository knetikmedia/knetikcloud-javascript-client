# KnetikPlatformApiDocumentationLatest.CampaignsRewardsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRewardSetUsingPOST**](CampaignsRewardsApi.md#createRewardSetUsingPOST) | **POST** /rewards | Create a reward set
[**deleteRewardSetUsingDELETE**](CampaignsRewardsApi.md#deleteRewardSetUsingDELETE) | **DELETE** /rewards/{id} | Delete a reward set
[**getRewardSetUsingGET**](CampaignsRewardsApi.md#getRewardSetUsingGET) | **GET** /rewards/{id} | Get a single reward set
[**getRewardSetsUsingGET**](CampaignsRewardsApi.md#getRewardSetsUsingGET) | **GET** /rewards | List and search reward sets
[**updateRewardSetUsingPUT**](CampaignsRewardsApi.md#updateRewardSetUsingPUT) | **PUT** /rewards/{id} | Update a reward set


<a name="createRewardSetUsingPOST"></a>
# **createRewardSetUsingPOST**
> RewardSetResource createRewardSetUsingPOST(opts)

Create a reward set

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsRewardsApi();

var opts = { 
  'rewardSetResource': new KnetikPlatformApiDocumentationLatest.RewardSetResource() // RewardSetResource | The reward set resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRewardSetUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardSetResource** | [**RewardSetResource**](RewardSetResource.md)| The reward set resource object | [optional] 

### Return type

[**RewardSetResource**](RewardSetResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRewardSetUsingDELETE"></a>
# **deleteRewardSetUsingDELETE**
> deleteRewardSetUsingDELETE(id)

Delete a reward set

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsRewardsApi();

var id = 56; // Number | The reward id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRewardSetUsingDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The reward id | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRewardSetUsingGET"></a>
# **getRewardSetUsingGET**
> RewardSetResource getRewardSetUsingGET(id)

Get a single reward set

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsRewardsApi();

var id = 56; // Number | The reward id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRewardSetUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The reward id | 

### Return type

[**RewardSetResource**](RewardSetResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRewardSetsUsingGET"></a>
# **getRewardSetsUsingGET**
> PageResourceRewardSetResource getRewardSetsUsingGET(opts)

List and search reward sets

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsRewardsApi();

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
apiInstance.getRewardSetsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceRewardSetResource**](PageResourceRewardSetResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRewardSetUsingPUT"></a>
# **updateRewardSetUsingPUT**
> updateRewardSetUsingPUT(id, opts)

Update a reward set

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.CampaignsRewardsApi();

var id = 56; // Number | The reward id

var opts = { 
  'rewardSetResource': new KnetikPlatformApiDocumentationLatest.RewardSetResource() // RewardSetResource | The reward set resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRewardSetUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The reward id | 
 **rewardSetResource** | [**RewardSetResource**](RewardSetResource.md)| The reward set resource object | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

