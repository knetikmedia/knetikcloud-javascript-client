# KnetikCloud.CampaignsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addChallengeToCampaign**](CampaignsApi.md#addChallengeToCampaign) | **POST** /campaigns/{id}/challenges | Add a challenge to a campaign
[**createCampaign**](CampaignsApi.md#createCampaign) | **POST** /campaigns | Create a campaign
[**createCampaignTemplate**](CampaignsApi.md#createCampaignTemplate) | **POST** /campaigns/templates | Create a campaign template
[**deleteCampaign**](CampaignsApi.md#deleteCampaign) | **DELETE** /campaigns/{id} | Delete a campaign
[**deleteCampaignTemplate**](CampaignsApi.md#deleteCampaignTemplate) | **DELETE** /campaigns/templates/{id} | Delete a campaign template
[**getCampaign**](CampaignsApi.md#getCampaign) | **GET** /campaigns/{id} | Returns a single campaign
[**getCampaignChallenges**](CampaignsApi.md#getCampaignChallenges) | **GET** /campaigns/{id}/challenges | List the challenges associated with a campaign
[**getCampaignTemplate**](CampaignsApi.md#getCampaignTemplate) | **GET** /campaigns/templates/{id} | Get a single campaign template
[**getCampaignTemplates**](CampaignsApi.md#getCampaignTemplates) | **GET** /campaigns/templates | List and search campaign templates
[**getCampaigns**](CampaignsApi.md#getCampaigns) | **GET** /campaigns | List and search campaigns
[**removeChallengeFromCampaign**](CampaignsApi.md#removeChallengeFromCampaign) | **DELETE** /campaigns/{campaign_id}/challenges/{id} | Remove a challenge from a campaign
[**updateCampaign**](CampaignsApi.md#updateCampaign) | **PUT** /campaigns/{id} | Update a campaign
[**updateCampaignTemplate**](CampaignsApi.md#updateCampaignTemplate) | **PUT** /campaigns/templates/{id} | Update an campaign template


<a name="addChallengeToCampaign"></a>
# **addChallengeToCampaign**
> addChallengeToCampaign(id, opts)

Add a challenge to a campaign

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let id = 789; // Number | The id of the campaign

let opts = { 
  'challengeId': 789 // Number | The id of the challenge
};
apiInstance.addChallengeToCampaign(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the campaign | 
 **challengeId** | **Number**| The id of the challenge | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCampaign"></a>
# **createCampaign**
> CampaignResource createCampaign(opts)

Create a campaign

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let opts = { 
  'campaignResource': new KnetikCloud.CampaignResource() // CampaignResource | The campaign resource object
};
apiInstance.createCampaign(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignResource** | [**CampaignResource**](CampaignResource.md)| The campaign resource object | [optional] 

### Return type

[**CampaignResource**](CampaignResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCampaignTemplate"></a>
# **createCampaignTemplate**
> TemplateResource createCampaignTemplate(opts)

Create a campaign template

Campaign Templates define a type of campaign and the properties they have

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let opts = { 
  'campaignTemplateResource': new KnetikCloud.TemplateResource() // TemplateResource | The campaign template resource object
};
apiInstance.createCampaignTemplate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignTemplateResource** | [**TemplateResource**](TemplateResource.md)| The campaign template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCampaign"></a>
# **deleteCampaign**
> deleteCampaign(id)

Delete a campaign

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let id = 789; // Number | The campaign id

apiInstance.deleteCampaign(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The campaign id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCampaignTemplate"></a>
# **deleteCampaignTemplate**
> deleteCampaignTemplate(id, opts)

Delete a campaign template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'cascade': "cascade_example" // String | The value needed to delete used templates
};
apiInstance.deleteCampaignTemplate(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **cascade** | **String**| The value needed to delete used templates | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaign"></a>
# **getCampaign**
> CampaignResource getCampaign(id)

Returns a single campaign

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let id = 789; // Number | The campaign id

apiInstance.getCampaign(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The campaign id | 

### Return type

[**CampaignResource**](CampaignResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaignChallenges"></a>
# **getCampaignChallenges**
> PageResourceChallengeResource getCampaignChallenges(id, opts)

List the challenges associated with a campaign

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let id = 789; // Number | The campaign id

let opts = { 
  'filterStartDate': "filterStartDate_example", // String | A comma separated string without spaces.  First value is the operator to search on, second value is the challenge start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
  'filterEndDate': "filterEndDate_example", // String | A comma separated string without spaces.  First value is the operator to search on, second value is the challenge end date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getCampaignChallenges(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The campaign id | 
 **filterStartDate** | **String**| A comma separated string without spaces.  First value is the operator to search on, second value is the challenge start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE). | [optional] 
 **filterEndDate** | **String**| A comma separated string without spaces.  First value is the operator to search on, second value is the challenge end date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE). | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceChallengeResource**](PageResourceChallengeResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaignTemplate"></a>
# **getCampaignTemplate**
> TemplateResource getCampaignTemplate(id)

Get a single campaign template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let id = "id_example"; // String | The id of the template

apiInstance.getCampaignTemplate(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaignTemplates"></a>
# **getCampaignTemplates**
> PageResourceTemplateResource getCampaignTemplates(opts)

List and search campaign templates

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getCampaignTemplates(opts).then((data) => {
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
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceTemplateResource**](PageResourceTemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaigns"></a>
# **getCampaigns**
> PageResourceCampaignResource getCampaigns(opts)

List and search campaigns

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let opts = { 
  'filterActive': true, // Boolean | Filter for campaigns that are active
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getCampaigns(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterActive** | **Boolean**| Filter for campaigns that are active | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceCampaignResource**](PageResourceCampaignResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeChallengeFromCampaign"></a>
# **removeChallengeFromCampaign**
> removeChallengeFromCampaign(campaignId, id)

Remove a challenge from a campaign

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let campaignId = 789; // Number | The campaign id

let id = 789; // Number | The challenge id

apiInstance.removeChallengeFromCampaign(campaignId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| The campaign id | 
 **id** | **Number**| The challenge id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCampaign"></a>
# **updateCampaign**
> CampaignResource updateCampaign(id, opts)

Update a campaign

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let id = 789; // Number | The campaign id

let opts = { 
  'campaignResource': new KnetikCloud.CampaignResource() // CampaignResource | The campaign resource object
};
apiInstance.updateCampaign(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The campaign id | 
 **campaignResource** | [**CampaignResource**](CampaignResource.md)| The campaign resource object | [optional] 

### Return type

[**CampaignResource**](CampaignResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCampaignTemplate"></a>
# **updateCampaignTemplate**
> TemplateResource updateCampaignTemplate(id, opts)

Update an campaign template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.CampaignsApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'campaignTemplateResource': new KnetikCloud.TemplateResource() // TemplateResource | The campaign template resource object
};
apiInstance.updateCampaignTemplate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **campaignTemplateResource** | [**TemplateResource**](TemplateResource.md)| The campaign template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

