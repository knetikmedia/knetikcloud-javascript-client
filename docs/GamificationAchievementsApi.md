# KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi

All URIs are relative to *https://devsandbox.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAchievementUsingPOST**](GamificationAchievementsApi.md#createAchievementUsingPOST) | **POST** /achievements | Create a new achievement definition
[**createTemplateUsingPOST**](GamificationAchievementsApi.md#createTemplateUsingPOST) | **POST** /achievements/templates | Create an achievement template
[**deleteAchievementTemplateUsingDELETE**](GamificationAchievementsApi.md#deleteAchievementTemplateUsingDELETE) | **DELETE** /achievements/templates/{id} | Delete an achievement template
[**deleteAchievementUsingDELETE**](GamificationAchievementsApi.md#deleteAchievementUsingDELETE) | **DELETE** /achievements/{name} | Delete an achievement definition
[**getAchievementTemplateUsingGET**](GamificationAchievementsApi.md#getAchievementTemplateUsingGET) | **GET** /achievements/templates/{id} | Get a single achievement template
[**getAchievementTemplatesUsingGET**](GamificationAchievementsApi.md#getAchievementTemplatesUsingGET) | **GET** /achievements/templates | List and search achievement templates
[**getAchievementUsingGET**](GamificationAchievementsApi.md#getAchievementUsingGET) | **GET** /achievements/{name} | Get a single achievement definition
[**getAchievementsUsingGET**](GamificationAchievementsApi.md#getAchievementsUsingGET) | **GET** /achievements | Get all achievement definitions in the system
[**getAllUserProgressForAchievementUsingGET**](GamificationAchievementsApi.md#getAllUserProgressForAchievementUsingGET) | **GET** /users/achievements/{achievement_name} | Retrieve progress on a given achievement for all users
[**getAllUserProgressUsingGET**](GamificationAchievementsApi.md#getAllUserProgressUsingGET) | **GET** /users/achievements | Retrieve progress on achievements for all users
[**getAvailableTriggersUsingGET**](GamificationAchievementsApi.md#getAvailableTriggersUsingGET) | **GET** /achievements/triggers | Get the list of triggers that can be used to trigger achievement progress update.
[**getUserProgressForAchievementUsingGET**](GamificationAchievementsApi.md#getUserProgressForAchievementUsingGET) | **GET** /users/{user_id}/achievements/{achievement_name} | Retrieve progress on a given achievement for a given user
[**getUserProgressUsingGET**](GamificationAchievementsApi.md#getUserProgressUsingGET) | **GET** /users/{user_id}/achievements | Retrieve progress on achievements for a given user
[**updateAchievementUsingPUT**](GamificationAchievementsApi.md#updateAchievementUsingPUT) | **PUT** /achievements/{name} | Update an achievement definition
[**updateProgressUsingPUT**](GamificationAchievementsApi.md#updateProgressUsingPUT) | **PUT** /users/{user_id}/achievements/{achievement_name} | Update or create an achievement progress record for a user
[**updateTemplateUsingPUT**](GamificationAchievementsApi.md#updateTemplateUsingPUT) | **PUT** /achievements/templates/{id} | Update an achievement template


<a name="createAchievementUsingPOST"></a>
# **createAchievementUsingPOST**
> AchievementDefinitionResource createAchievementUsingPOST(opts)

Create a new achievement definition

If the definition contains a trigger event name, a BRE rule is created, so that tracking logic is executed when the triggering event occurs. If no trigger event name is specified, the user&#39;s achievement status must manually be updated via the API.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var opts = { 
  'achievement': new KnetikPlatformApiDocumentationLatest.AchievementDefinitionResource() // AchievementDefinitionResource | The achievement definition
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAchievementUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **achievement** | [**AchievementDefinitionResource**](AchievementDefinitionResource.md)| The achievement definition | [optional] 

### Return type

[**AchievementDefinitionResource**](AchievementDefinitionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createTemplateUsingPOST"></a>
# **createTemplateUsingPOST**
> TemplateResource createTemplateUsingPOST(opts)

Create an achievement template

Achievement templates define a type of achievement and the properties they have

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var opts = { 
  'template': new KnetikPlatformApiDocumentationLatest.TemplateResource() // TemplateResource | The achievement template to be created
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTemplateUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template** | [**TemplateResource**](TemplateResource.md)| The achievement template to be created | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteAchievementTemplateUsingDELETE"></a>
# **deleteAchievementTemplateUsingDELETE**
> deleteAchievementTemplateUsingDELETE(id, opts)

Delete an achievement template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

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
apiInstance.deleteAchievementTemplateUsingDELETE(id, opts, callback);
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
 - **Accept**: */*

<a name="deleteAchievementUsingDELETE"></a>
# **deleteAchievementUsingDELETE**
> deleteAchievementUsingDELETE(name)

Delete an achievement definition

Will also disable the associated generated rule, if any.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var name = "name_example"; // String | The name of the achievement


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAchievementUsingDELETE(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the achievement | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAchievementTemplateUsingGET"></a>
# **getAchievementTemplateUsingGET**
> TemplateResource getAchievementTemplateUsingGET(id)

Get a single achievement template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAchievementTemplateUsingGET(id, callback);
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
 - **Accept**: */*

<a name="getAchievementTemplatesUsingGET"></a>
# **getAchievementTemplatesUsingGET**
> PageTemplateResource getAchievementTemplatesUsingGET(opts)

List and search achievement templates

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "1" // String | a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAchievementTemplatesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**PageTemplateResource**](PageTemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAchievementUsingGET"></a>
# **getAchievementUsingGET**
> AchievementDefinitionResource getAchievementUsingGET(name)

Get a single achievement definition

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var name = "name_example"; // String | The name of the achievement


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAchievementUsingGET(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the achievement | 

### Return type

[**AchievementDefinitionResource**](AchievementDefinitionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAchievementsUsingGET"></a>
# **getAchievementsUsingGET**
> PageAchievementDefinitionResource getAchievementsUsingGET(opts)

Get all achievement definitions in the system

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var opts = { 
  'filterTagset': "filterTagset_example", // String | Filter for achievements with specified tags (separated by comma)
  'filterName': "filterName_example", // String | Filter for achievements whose name contains a string
  'filterHidden': true, // Boolean | Filter for achievements that are hidden or not
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
apiInstance.getAchievementsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterTagset** | **String**| Filter for achievements with specified tags (separated by comma) | [optional] 
 **filterName** | **String**| Filter for achievements whose name contains a string | [optional] 
 **filterHidden** | **Boolean**| Filter for achievements that are hidden or not | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to 1]

### Return type

[**PageAchievementDefinitionResource**](PageAchievementDefinitionResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAllUserProgressForAchievementUsingGET"></a>
# **getAllUserProgressForAchievementUsingGET**
> PageUserAchievementResource getAllUserProgressForAchievementUsingGET(achievementName, opts)

Retrieve progress on a given achievement for all users

Assets will not be filled in on the resources returned. Use &#39;Get single achievement progress for user&#39; to retrieve the full resource with assets for a given user as needed.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var achievementName = "achievementName_example"; // String | The achievement's name

var opts = { 
  'filterAchievementTagset': "filterAchievementTagset_example", // String | Filter for achievements with specified tags (separated by comma)
  'filterAchievementHidden': true, // Boolean | Filter for achievements that are hidden or not
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
apiInstance.getAllUserProgressForAchievementUsingGET(achievementName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **achievementName** | **String**| The achievement&#39;s name | 
 **filterAchievementTagset** | **String**| Filter for achievements with specified tags (separated by comma) | [optional] 
 **filterAchievementHidden** | **Boolean**| Filter for achievements that are hidden or not | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageUserAchievementResource**](PageUserAchievementResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAllUserProgressUsingGET"></a>
# **getAllUserProgressUsingGET**
> PageUserAchievementResource getAllUserProgressUsingGET(opts)

Retrieve progress on achievements for all users

Assets will not be filled in on the resources returned. Use &#39;Get single achievement progress for user&#39; to retrieve the full resource with assets for a given user as needed.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var opts = { 
  'filterAchievementTagset': "filterAchievementTagset_example", // String | Filter for achievements with specified tags (separated by comma)
  'filterAchievementName': "filterAchievementName_example", // String | Filter for achievements whose name contains a string
  'filterAchievementHidden': true, // Boolean | Filter for achievements that are hidden or not
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
apiInstance.getAllUserProgressUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterAchievementTagset** | **String**| Filter for achievements with specified tags (separated by comma) | [optional] 
 **filterAchievementName** | **String**| Filter for achievements whose name contains a string | [optional] 
 **filterAchievementHidden** | **Boolean**| Filter for achievements that are hidden or not | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageUserAchievementResource**](PageUserAchievementResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAvailableTriggersUsingGET"></a>
# **getAvailableTriggersUsingGET**
> [BreTriggerResource] getAvailableTriggersUsingGET()

Get the list of triggers that can be used to trigger achievement progress update.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAvailableTriggersUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[BreTriggerResource]**](BreTriggerResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserProgressForAchievementUsingGET"></a>
# **getUserProgressForAchievementUsingGET**
> UserAchievementResource getUserProgressForAchievementUsingGET(userId, achievementName)

Retrieve progress on a given achievement for a given user

Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var userId = 56; // Number | The user's id

var achievementName = "achievementName_example"; // String | The achievement's name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserProgressForAchievementUsingGET(userId, achievementName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The user&#39;s id | 
 **achievementName** | **String**| The achievement&#39;s name | 

### Return type

[**UserAchievementResource**](UserAchievementResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserProgressUsingGET"></a>
# **getUserProgressUsingGET**
> PageUserAchievementResource getUserProgressUsingGET(userId, opts)

Retrieve progress on achievements for a given user

Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var userId = 56; // Number | The user's id

var opts = { 
  'filterAchievementTagset': "filterAchievementTagset_example", // String | Filter for achievements with specified tags (separated by comma)
  'filterAchievementName': "filterAchievementName_example", // String | Filter for achievements whose name contains a string
  'filterAchievementHidden': true, // Boolean | Filter for achievements that are hidden or not
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
apiInstance.getUserProgressUsingGET(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The user&#39;s id | 
 **filterAchievementTagset** | **String**| Filter for achievements with specified tags (separated by comma) | [optional] 
 **filterAchievementName** | **String**| Filter for achievements whose name contains a string | [optional] 
 **filterAchievementHidden** | **Boolean**| Filter for achievements that are hidden or not | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageUserAchievementResource**](PageUserAchievementResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateAchievementUsingPUT"></a>
# **updateAchievementUsingPUT**
> updateAchievementUsingPUT(name, opts)

Update an achievement definition

The existing generated rule, if any, will be deleted. A new rule will be created if a trigger event name is specified in the new version.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var name = "name_example"; // String | The name of the achievement

var opts = { 
  'achievement': new KnetikPlatformApiDocumentationLatest.AchievementDefinitionResource() // AchievementDefinitionResource | The achievement definition
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAchievementUsingPUT(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the achievement | 
 **achievement** | [**AchievementDefinitionResource**](AchievementDefinitionResource.md)| The achievement definition | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateProgressUsingPUT"></a>
# **updateProgressUsingPUT**
> UserAchievementResource updateProgressUsingPUT(userId, achievementName, opts)

Update or create an achievement progress record for a user

If no progress record yet exists for the user, it will be created. Otherwise it will be updated. If progress meets or exceeds the achievement&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var userId = 56; // Number | The user's id

var achievementName = "achievementName_example"; // String | The achievement's name

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.AchievementProgressUpdateRequest() // AchievementProgressUpdateRequest | The progress update details
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProgressUsingPUT(userId, achievementName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The user&#39;s id | 
 **achievementName** | **String**| The achievement&#39;s name | 
 **request** | [**AchievementProgressUpdateRequest**](AchievementProgressUpdateRequest.md)| The progress update details | [optional] 

### Return type

[**UserAchievementResource**](UserAchievementResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateTemplateUsingPUT"></a>
# **updateTemplateUsingPUT**
> updateTemplateUsingPUT(id, opts)

Update an achievement template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'template': new KnetikPlatformApiDocumentationLatest.TemplateResource() // TemplateResource | The updated template
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateTemplateUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **template** | [**TemplateResource**](TemplateResource.md)| The updated template | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

