# KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAchievement**](GamificationAchievementsApi.md#createAchievement) | **POST** /achievements | Create a new achievement definition
[**createAchievementTemplate**](GamificationAchievementsApi.md#createAchievementTemplate) | **POST** /achievements/templates | Create an achievement template
[**deleteAchievement**](GamificationAchievementsApi.md#deleteAchievement) | **DELETE** /achievements/{name} | Delete an achievement definition
[**deleteAchievementTemplate**](GamificationAchievementsApi.md#deleteAchievementTemplate) | **DELETE** /achievements/templates/{id} | Delete an achievement template
[**getAchievement**](GamificationAchievementsApi.md#getAchievement) | **GET** /achievements/{name} | Get a single achievement definition
[**getAchievementTemplate**](GamificationAchievementsApi.md#getAchievementTemplate) | **GET** /achievements/templates/{id} | Get a single achievement template
[**getAchievementTemplates**](GamificationAchievementsApi.md#getAchievementTemplates) | **GET** /achievements/templates | List and search achievement templates
[**getAchievementTriggers**](GamificationAchievementsApi.md#getAchievementTriggers) | **GET** /achievements/triggers | Get the list of triggers that can be used to trigger an achievement progress update
[**getAchievements**](GamificationAchievementsApi.md#getAchievements) | **GET** /achievements | Get all achievement definitions in the system
[**getDerivedAchievements**](GamificationAchievementsApi.md#getDerivedAchievements) | **GET** /achievements/derived/{name} | Get a list of derived achievements
[**getUserAchievementProgress**](GamificationAchievementsApi.md#getUserAchievementProgress) | **GET** /users/{user_id}/achievements/{achievement_name} | Retrieve progress on a given achievement for a given user
[**getUserAchievementsProgress**](GamificationAchievementsApi.md#getUserAchievementsProgress) | **GET** /users/{user_id}/achievements | Retrieve progress on achievements for a given user
[**getUsersAchievementProgress**](GamificationAchievementsApi.md#getUsersAchievementProgress) | **GET** /users/achievements/{achievement_name} | Retrieve progress on a given achievement for all users
[**getUsersAchievementsProgress**](GamificationAchievementsApi.md#getUsersAchievementsProgress) | **GET** /users/achievements | Retrieve progress on achievements for all users
[**updateAchievement**](GamificationAchievementsApi.md#updateAchievement) | **PUT** /achievements/{name} | Update an achievement definition
[**updateAchievementProgress**](GamificationAchievementsApi.md#updateAchievementProgress) | **PUT** /users/{user_id}/achievements/{achievement_name} | Update or create an achievement progress record for a user
[**updateAchievementTemplate**](GamificationAchievementsApi.md#updateAchievementTemplate) | **PUT** /achievements/templates/{id} | Update an achievement template


<a name="createAchievement"></a>
# **createAchievement**
> AchievementDefinitionResource createAchievement(opts)

Create a new achievement definition

If the definition contains a trigger event name, a BRE rule is created, so that tracking logic is executed when the triggering event occurs. If no trigger event name is specified, the user&#39;s achievement status must manually be updated via the API.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

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
apiInstance.createAchievement(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **achievement** | [**AchievementDefinitionResource**](AchievementDefinitionResource.md)| The achievement definition | [optional] 

### Return type

[**AchievementDefinitionResource**](AchievementDefinitionResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createAchievementTemplate"></a>
# **createAchievementTemplate**
> TemplateResource createAchievementTemplate(opts)

Create an achievement template

Achievement templates define a type of achievement and the properties they have

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

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
apiInstance.createAchievementTemplate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template** | [**TemplateResource**](TemplateResource.md)| The achievement template to be created | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAchievement"></a>
# **deleteAchievement**
> deleteAchievement(name)

Delete an achievement definition

Will also disable the associated generated rule, if any.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var name = "name_example"; // String | The name of the achievement


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAchievement(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the achievement | 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAchievementTemplate"></a>
# **deleteAchievementTemplate**
> deleteAchievementTemplate(id, opts)

Delete an achievement template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

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
apiInstance.deleteAchievementTemplate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **cascade** | **String**| The value needed to delete used templates | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAchievement"></a>
# **getAchievement**
> AchievementDefinitionResource getAchievement(name)

Get a single achievement definition

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var name = "name_example"; // String | The name of the achievement


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAchievement(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the achievement | 

### Return type

[**AchievementDefinitionResource**](AchievementDefinitionResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAchievementTemplate"></a>
# **getAchievementTemplate**
> TemplateResource getAchievementTemplate(id)

Get a single achievement template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAchievementTemplate(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAchievementTemplates"></a>
# **getAchievementTemplates**
> PageResourceTemplateResource getAchievementTemplates(opts)

List and search achievement templates

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

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
apiInstance.getAchievementTemplates(opts, callback);
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

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAchievementTriggers"></a>
# **getAchievementTriggers**
> [BreTriggerResource] getAchievementTriggers()

Get the list of triggers that can be used to trigger an achievement progress update

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAchievementTriggers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[BreTriggerResource]**](BreTriggerResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAchievements"></a>
# **getAchievements**
> PageResourceAchievementDefinitionResource getAchievements(opts)

Get all achievement definitions in the system

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var opts = { 
  'filterTagset': "filterTagset_example", // String | Filter for achievements with specified tags (separated by comma)
  'filterName': "filterName_example", // String | Filter for achievements whose name contains a string
  'filterHidden': true, // Boolean | Filter for achievements that are hidden or not
  'filterDerived': true, // Boolean | Filter for achievements that are derived from other services
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "name:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAchievements(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterTagset** | **String**| Filter for achievements with specified tags (separated by comma) | [optional] 
 **filterName** | **String**| Filter for achievements whose name contains a string | [optional] 
 **filterHidden** | **Boolean**| Filter for achievements that are hidden or not | [optional] 
 **filterDerived** | **Boolean**| Filter for achievements that are derived from other services | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to name:ASC]

### Return type

[**PageResourceAchievementDefinitionResource**](PageResourceAchievementDefinitionResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDerivedAchievements"></a>
# **getDerivedAchievements**
> [AchievementDefinitionResource] getDerivedAchievements(name)

Get a list of derived achievements

Used by other services that depend on achievements

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var name = "name_example"; // String | The name of the derived achievement


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDerivedAchievements(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the derived achievement | 

### Return type

[**[AchievementDefinitionResource]**](AchievementDefinitionResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserAchievementProgress"></a>
# **getUserAchievementProgress**
> UserAchievementGroupResource getUserAchievementProgress(userId, achievementName)

Retrieve progress on a given achievement for a given user

Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

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
apiInstance.getUserAchievementProgress(userId, achievementName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The user&#39;s id | 
 **achievementName** | **String**| The achievement&#39;s name | 

### Return type

[**UserAchievementGroupResource**](UserAchievementGroupResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserAchievementsProgress"></a>
# **getUserAchievementsProgress**
> PageResourceUserAchievementGroupResource getUserAchievementsProgress(userId, opts)

Retrieve progress on achievements for a given user

Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var userId = 56; // Number | The user's id

var opts = { 
  'filterAchievementDerived': true, // Boolean | Filter for achievements that are derived from other services
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
apiInstance.getUserAchievementsProgress(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The user&#39;s id | 
 **filterAchievementDerived** | **Boolean**| Filter for achievements that are derived from other services | [optional] 
 **filterAchievementTagset** | **String**| Filter for achievements with specified tags (separated by comma) | [optional] 
 **filterAchievementName** | **String**| Filter for achievements whose name contains a string | [optional] 
 **filterAchievementHidden** | **Boolean**| Filter for achievements that are hidden or not | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUserAchievementGroupResource**](PageResourceUserAchievementGroupResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsersAchievementProgress"></a>
# **getUsersAchievementProgress**
> PageResourceUserAchievementGroupResource getUsersAchievementProgress(achievementName, opts)

Retrieve progress on a given achievement for all users

Assets will not be filled in on the resources returned. Use &#39;Get single achievement progress for user&#39; to retrieve the full resource with assets for a given user as needed.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var achievementName = "achievementName_example"; // String | The achievement's name

var opts = { 
  'filterAchievementDerived': true, // Boolean | Filter for achievements that are derived from other services
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
apiInstance.getUsersAchievementProgress(achievementName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **achievementName** | **String**| The achievement&#39;s name | 
 **filterAchievementDerived** | **Boolean**| Filter for achievements that are derived from other services | [optional] 
 **filterAchievementTagset** | **String**| Filter for achievements with specified tags (separated by comma) | [optional] 
 **filterAchievementHidden** | **Boolean**| Filter for achievements that are hidden or not | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUserAchievementGroupResource**](PageResourceUserAchievementGroupResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsersAchievementsProgress"></a>
# **getUsersAchievementsProgress**
> PageResourceUserAchievementGroupResource getUsersAchievementsProgress(opts)

Retrieve progress on achievements for all users

Assets will not be filled in on the resources returned. Use &#39;Get single achievement progress for user&#39; to retrieve the full resource with assets for a given user as needed.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi();

var opts = { 
  'filterAchievementDerived': true, // Boolean | Filter for achievements that are derived from other services
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
apiInstance.getUsersAchievementsProgress(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterAchievementDerived** | **Boolean**| Filter for achievements that are derived from other services | [optional] 
 **filterAchievementTagset** | **String**| Filter for achievements with specified tags (separated by comma) | [optional] 
 **filterAchievementName** | **String**| Filter for achievements whose name contains a string | [optional] 
 **filterAchievementHidden** | **Boolean**| Filter for achievements that are hidden or not | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUserAchievementGroupResource**](PageResourceUserAchievementGroupResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAchievement"></a>
# **updateAchievement**
> updateAchievement(name, opts)

Update an achievement definition

The existing generated rule, if any, will be deleted. A new rule will be created if a trigger event name is specified in the new version.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

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
apiInstance.updateAchievement(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the achievement | 
 **achievement** | [**AchievementDefinitionResource**](AchievementDefinitionResource.md)| The achievement definition | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAchievementProgress"></a>
# **updateAchievementProgress**
> UserAchievementGroupResource updateAchievementProgress(userId, achievementName, opts)

Update or create an achievement progress record for a user

If no progress record yet exists for the user, it will be created. Otherwise it will be updated. If progress meets or exceeds the achievement&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

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
apiInstance.updateAchievementProgress(userId, achievementName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The user&#39;s id | 
 **achievementName** | **String**| The achievement&#39;s name | 
 **request** | [**AchievementProgressUpdateRequest**](AchievementProgressUpdateRequest.md)| The progress update details | [optional] 

### Return type

[**UserAchievementGroupResource**](UserAchievementGroupResource.md)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAchievementTemplate"></a>
# **updateAchievementTemplate**
> updateAchievementTemplate(id, opts)

Update an achievement template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: knetik_oauth
var knetik_oauth = defaultClient.authentications['knetik_oauth'];
knetik_oauth.accessToken = 'YOUR ACCESS TOKEN';

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
apiInstance.updateAchievementTemplate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **template** | [**TemplateResource**](TemplateResource.md)| The updated template | [optional] 

### Return type

null (empty response body)

### Authorization

[knetik_oauth](../README.md#knetik_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

