# KnetikcloudSdk.ActivitiesApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createActivity**](ActivitiesApi.md#createActivity) | **POST** /activities | Create an activity
[**createActivityOccurrence**](ActivitiesApi.md#createActivityOccurrence) | **POST** /activity-occurrences | Create a new activity occurrence. Ex: start a game
[**createActivityTemplate**](ActivitiesApi.md#createActivityTemplate) | **POST** /activities/templates | Create a activity template
[**deleteActivity**](ActivitiesApi.md#deleteActivity) | **DELETE** /activities/{id} | Delete an activity
[**deleteActivityTemplate**](ActivitiesApi.md#deleteActivityTemplate) | **DELETE** /activities/templates/{id} | Delete a activity template
[**getActivities**](ActivitiesApi.md#getActivities) | **GET** /activities | List activity definitions
[**getActivity**](ActivitiesApi.md#getActivity) | **GET** /activities/{id} | Get a single activity
[**getActivityTemplate**](ActivitiesApi.md#getActivityTemplate) | **GET** /activities/templates/{id} | Get a single activity template
[**getActivityTemplates**](ActivitiesApi.md#getActivityTemplates) | **GET** /activities/templates | List and search activity templates
[**setActivityOccurrenceResults**](ActivitiesApi.md#setActivityOccurrenceResults) | **POST** /activity-occurrences/{activity_occurrence_id}/results | Sets the status of an activity occurrence to FINISHED and logs metrics
[**updateActivity**](ActivitiesApi.md#updateActivity) | **PUT** /activities/{id} | Update an activity
[**updateActivityOccurrence**](ActivitiesApi.md#updateActivityOccurrence) | **PUT** /activity-occurrences/{activity_occurrence_id}/status | Updated the status of an activity occurrence
[**updateActivityTemplate**](ActivitiesApi.md#updateActivityTemplate) | **PUT** /activities/templates/{id} | Update an activity template


<a name="createActivity"></a>
# **createActivity**
> ActivityResource createActivity(opts)

Create an activity

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

var opts = { 
  'activityResource': new KnetikcloudSdk.ActivityResource() // ActivityResource | The activity resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createActivity(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityResource** | [**ActivityResource**](ActivityResource.md)| The activity resource object | [optional] 

### Return type

[**ActivityResource**](ActivityResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createActivityOccurrence"></a>
# **createActivityOccurrence**
> ActivityOccurrenceResource createActivityOccurrence(opts)

Create a new activity occurrence. Ex: start a game

Has to enforce extra rules if not used as an admin

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

var opts = { 
  'test': false, // Boolean | if true, indicates that the occurrence should NOT be created. This can be used to test for eligibility and valid settings
  'activityOccurrenceResource': new KnetikcloudSdk.ActivityOccurrenceResource() // ActivityOccurrenceResource | The activity occurrence object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createActivityOccurrence(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test** | **Boolean**| if true, indicates that the occurrence should NOT be created. This can be used to test for eligibility and valid settings | [optional] [default to false]
 **activityOccurrenceResource** | [**ActivityOccurrenceResource**](ActivityOccurrenceResource.md)| The activity occurrence object | [optional] 

### Return type

[**ActivityOccurrenceResource**](ActivityOccurrenceResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createActivityTemplate"></a>
# **createActivityTemplate**
> TemplateResource createActivityTemplate(opts)

Create a activity template

Activity Templates define a type of activity and the properties they have

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

var opts = { 
  'activityTemplateResource': new KnetikcloudSdk.TemplateResource() // TemplateResource | The activity template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createActivityTemplate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityTemplateResource** | [**TemplateResource**](TemplateResource.md)| The activity template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteActivity"></a>
# **deleteActivity**
> deleteActivity(id)

Delete an activity

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

var id = 789; // Number | The id of the activity


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteActivity(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the activity | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteActivityTemplate"></a>
# **deleteActivityTemplate**
> deleteActivityTemplate(id, opts)

Delete a activity template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

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
apiInstance.deleteActivityTemplate(id, opts, callback);
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

<a name="getActivities"></a>
# **getActivities**
> PageResourceBareActivityResource getActivities(opts)

List activity definitions

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

var opts = { 
  'filterTemplate': true, // Boolean | Filter for activities that are templates, or specifically not if false
  'filterName': "filterName_example", // String | Filter for activities that have a name starting with specified string
  'filterId': "filterId_example", // String | Filter for activities with an id in the given comma separated list of ids
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
apiInstance.getActivities(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterTemplate** | **Boolean**| Filter for activities that are templates, or specifically not if false | [optional] 
 **filterName** | **String**| Filter for activities that have a name starting with specified string | [optional] 
 **filterId** | **String**| Filter for activities with an id in the given comma separated list of ids | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceBareActivityResource**](PageResourceBareActivityResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActivity"></a>
# **getActivity**
> ActivityResource getActivity(id)

Get a single activity

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

var id = 789; // Number | The id of the activity


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActivity(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the activity | 

### Return type

[**ActivityResource**](ActivityResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActivityTemplate"></a>
# **getActivityTemplate**
> TemplateResource getActivityTemplate(id)

Get a single activity template

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActivityTemplate(id, callback);
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

<a name="getActivityTemplates"></a>
# **getActivityTemplates**
> PageResourceTemplateResource getActivityTemplates(opts)

List and search activity templates

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

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
apiInstance.getActivityTemplates(opts, callback);
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

<a name="setActivityOccurrenceResults"></a>
# **setActivityOccurrenceResults**
> ActivityOccurrenceResults setActivityOccurrenceResults(activityOccurrenceId, opts)

Sets the status of an activity occurrence to FINISHED and logs metrics

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

var activityOccurrenceId = 789; // Number | The id of the activity occurrence

var opts = { 
  'activityOccurrenceResults': new KnetikcloudSdk.ActivityOccurrenceResultsResource() // ActivityOccurrenceResultsResource | The activity occurrence object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setActivityOccurrenceResults(activityOccurrenceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityOccurrenceId** | **Number**| The id of the activity occurrence | 
 **activityOccurrenceResults** | [**ActivityOccurrenceResultsResource**](ActivityOccurrenceResultsResource.md)| The activity occurrence object | [optional] 

### Return type

[**ActivityOccurrenceResults**](ActivityOccurrenceResults.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateActivity"></a>
# **updateActivity**
> ActivityResource updateActivity(id, opts)

Update an activity

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

var id = 789; // Number | The id of the activity

var opts = { 
  'activityResource': new KnetikcloudSdk.ActivityResource() // ActivityResource | The activity resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateActivity(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the activity | 
 **activityResource** | [**ActivityResource**](ActivityResource.md)| The activity resource object | [optional] 

### Return type

[**ActivityResource**](ActivityResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateActivityOccurrence"></a>
# **updateActivityOccurrence**
> updateActivityOccurrence(activityOccurrenceId, opts)

Updated the status of an activity occurrence

If setting to &#39;FINISHED&#39; you must POST to /results instead to record the metrics and get synchronous reward results

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

var activityOccurrenceId = 789; // Number | The id of the activity occurrence

var opts = { 
  'activityCccurrenceStatus': "activityCccurrenceStatus_example" // String | The activity occurrence status object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateActivityOccurrence(activityOccurrenceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityOccurrenceId** | **Number**| The id of the activity occurrence | 
 **activityCccurrenceStatus** | **String**| The activity occurrence status object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateActivityTemplate"></a>
# **updateActivityTemplate**
> TemplateResource updateActivityTemplate(id, opts)

Update an activity template

### Example
```javascript
var KnetikcloudSdk = require('knetikcloud-sdk');
var defaultClient = KnetikcloudSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikcloudSdk.ActivitiesApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'activityTemplateResource': new KnetikcloudSdk.TemplateResource() // TemplateResource | The activity template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateActivityTemplate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **activityTemplateResource** | [**TemplateResource**](TemplateResource.md)| The activity template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

