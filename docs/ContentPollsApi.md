# KnetikcloudSdk.ContentPollsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**answerPoll**](ContentPollsApi.md#answerPoll) | **POST** /media/polls/{id}/response | Add your vote to a poll
[**createPoll**](ContentPollsApi.md#createPoll) | **POST** /media/polls | Create a new poll
[**createPollTemplate**](ContentPollsApi.md#createPollTemplate) | **POST** /media/polls/templates | Create a poll template
[**deletePoll**](ContentPollsApi.md#deletePoll) | **DELETE** /media/polls/{id} | Delete an existing poll
[**deletePollTemplate**](ContentPollsApi.md#deletePollTemplate) | **DELETE** /media/polls/templates/{id} | Delete a poll template
[**getPoll**](ContentPollsApi.md#getPoll) | **GET** /media/polls/{id} | Get a single poll
[**getPollAnswer**](ContentPollsApi.md#getPollAnswer) | **GET** /media/polls/{id}/response | Get poll answer
[**getPollTemplate**](ContentPollsApi.md#getPollTemplate) | **GET** /media/polls/templates/{id} | Get a single poll template
[**getPollTemplates**](ContentPollsApi.md#getPollTemplates) | **GET** /media/polls/templates | List and search poll templates
[**getPolls**](ContentPollsApi.md#getPolls) | **GET** /media/polls | List and search polls
[**updatePoll**](ContentPollsApi.md#updatePoll) | **PUT** /media/polls/{id} | Update an existing poll
[**updatePollTemplate**](ContentPollsApi.md#updatePollTemplate) | **PUT** /media/polls/templates/{id} | Update a poll template


<a name="answerPoll"></a>
# **answerPoll**
> PollResponseResource answerPoll(id, opts)

Add your vote to a poll

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

var id = "id_example"; // String | The poll id

var opts = { 
  'answerKey': "answerKey_example" // String | The answer key
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.answerPoll(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The poll id | 
 **answerKey** | **String**| The answer key | [optional] 

### Return type

[**PollResponseResource**](PollResponseResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPoll"></a>
# **createPoll**
> PollResource createPoll(opts)

Create a new poll

Polls are blobs of text with titles, a category and assets. Formatting and display of the text is in the hands of the front end.

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

var opts = { 
  'pollResource': new KnetikcloudSdk.PollResource() // PollResource | The poll object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPoll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pollResource** | [**PollResource**](PollResource.md)| The poll object | [optional] 

### Return type

[**PollResource**](PollResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPollTemplate"></a>
# **createPollTemplate**
> TemplateResource createPollTemplate(opts)

Create a poll template

Poll templates define a type of poll and the properties they have

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

var opts = { 
  'pollTemplateResource': new KnetikcloudSdk.TemplateResource() // TemplateResource | The poll template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPollTemplate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pollTemplateResource** | [**TemplateResource**](TemplateResource.md)| The poll template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePoll"></a>
# **deletePoll**
> deletePoll(id)

Delete an existing poll

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

var id = "id_example"; // String | The poll id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePoll(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The poll id | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePollTemplate"></a>
# **deletePollTemplate**
> deletePollTemplate(id, opts)

Delete a poll template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'cascade': "cascade_example" // String | The value needed to delete used templates
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePollTemplate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **cascade** | **String**| The value needed to delete used templates | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPoll"></a>
# **getPoll**
> PollResource getPoll(id)

Get a single poll

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

var id = "id_example"; // String | The poll id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPoll(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The poll id | 

### Return type

[**PollResource**](PollResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPollAnswer"></a>
# **getPollAnswer**
> PollResponseResource getPollAnswer(id)

Get poll answer

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

var id = "id_example"; // String | The poll id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPollAnswer(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The poll id | 

### Return type

[**PollResponseResource**](PollResponseResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPollTemplate"></a>
# **getPollTemplate**
> TemplateResource getPollTemplate(id)

Get a single poll template

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPollTemplate(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPollTemplates"></a>
# **getPollTemplates**
> PageResourceTemplateResource getPollTemplates(opts)

List and search poll templates

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

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
apiInstance.getPollTemplates(opts, callback);
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

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPolls"></a>
# **getPolls**
> PageResourcePollResource getPolls(opts)

List and search polls

Get a list of polls with optional filtering. Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

var opts = { 
  'filterCategory': "filterCategory_example", // String | Filter for polls from a specific category by id
  'filterTagset': "filterTagset_example", // String | Filter for polls with specified tags (separated by comma)
  'filterText': "filterText_example", // String | Filter for polls whose text contains a string
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPolls(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCategory** | **String**| Filter for polls from a specific category by id | [optional] 
 **filterTagset** | **String**| Filter for polls with specified tags (separated by comma) | [optional] 
 **filterText** | **String**| Filter for polls whose text contains a string | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourcePollResource**](PageResourcePollResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePoll"></a>
# **updatePoll**
> PollResource updatePoll(id, opts)

Update an existing poll

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

var id = "id_example"; // String | The poll id

var opts = { 
  'pollResource': new KnetikcloudSdk.PollResource() // PollResource | The poll object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePoll(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The poll id | 
 **pollResource** | [**PollResource**](PollResource.md)| The poll object | [optional] 

### Return type

[**PollResource**](PollResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePollTemplate"></a>
# **updatePollTemplate**
> TemplateResource updatePollTemplate(id, opts)

Update a poll template

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ContentPollsApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'pollTemplateResource': new KnetikcloudSdk.TemplateResource() // TemplateResource | The poll template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePollTemplate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **pollTemplateResource** | [**TemplateResource**](TemplateResource.md)| The poll template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

