# KnetikCloud.CampaignsRewardsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRewardSet**](CampaignsRewardsApi.md#createRewardSet) | **POST** /rewards | Create a reward set
[**deleteRewardSet**](CampaignsRewardsApi.md#deleteRewardSet) | **DELETE** /rewards/{id} | Delete a reward set
[**getRewardSet**](CampaignsRewardsApi.md#getRewardSet) | **GET** /rewards/{id} | Get a single reward set
[**getRewardSets**](CampaignsRewardsApi.md#getRewardSets) | **GET** /rewards | List and search reward sets
[**updateRewardSet**](CampaignsRewardsApi.md#updateRewardSet) | **PUT** /rewards/{id} | Update a reward set


<a name="createRewardSet"></a>
# **createRewardSet**
> RewardSetResource createRewardSet(opts)

Create a reward set

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.CampaignsRewardsApi();

var opts = { 
  'rewardSetResource': new KnetikCloud.RewardSetResource() // RewardSetResource | The reward set resource object
};
apiInstance.createRewardSet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardSetResource** | [**RewardSetResource**](RewardSetResource.md)| The reward set resource object | [optional] 

### Return type

[**RewardSetResource**](RewardSetResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRewardSet"></a>
# **deleteRewardSet**
> deleteRewardSet(id)

Delete a reward set

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.CampaignsRewardsApi();

var id = 56; // Number | The reward id

apiInstance.deleteRewardSet(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The reward id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRewardSet"></a>
# **getRewardSet**
> RewardSetResource getRewardSet(id)

Get a single reward set

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.CampaignsRewardsApi();

var id = 56; // Number | The reward id

apiInstance.getRewardSet(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

<a name="getRewardSets"></a>
# **getRewardSets**
> PageResourceRewardSetResource getRewardSets(opts)

List and search reward sets

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.CampaignsRewardsApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getRewardSets(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

<a name="updateRewardSet"></a>
# **updateRewardSet**
> RewardSetResource updateRewardSet(id, opts)

Update a reward set

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.CampaignsRewardsApi();

var id = 56; // Number | The reward id

var opts = { 
  'rewardSetResource': new KnetikCloud.RewardSetResource() // RewardSetResource | The reward set resource object
};
apiInstance.updateRewardSet(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The reward id | 
 **rewardSetResource** | [**RewardSetResource**](RewardSetResource.md)| The reward set resource object | [optional] 

### Return type

[**RewardSetResource**](RewardSetResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

