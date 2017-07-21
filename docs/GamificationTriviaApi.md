# KnetikPlatformApiDocumentationLatest.GamificationTriviaApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addQuestionAnswers**](GamificationTriviaApi.md#addQuestionAnswers) | **POST** /trivia/questions/{question_id}/answers | Add an answer to a question
[**addQuestionTag**](GamificationTriviaApi.md#addQuestionTag) | **POST** /trivia/questions/{id}/tags | Add a tag to a question
[**addTagToQuestionsBatch**](GamificationTriviaApi.md#addTagToQuestionsBatch) | **POST** /trivia/questions/tags | Add a tag to a batch of questions
[**createImportJob**](GamificationTriviaApi.md#createImportJob) | **POST** /trivia/import | Create an import job
[**createQuestion**](GamificationTriviaApi.md#createQuestion) | **POST** /trivia/questions | Create a question
[**createQuestionTemplate**](GamificationTriviaApi.md#createQuestionTemplate) | **POST** /trivia/questions/templates | Create a question template
[**deleteImportJob**](GamificationTriviaApi.md#deleteImportJob) | **DELETE** /trivia/import/{id} | Delete an import job
[**deleteQuestion**](GamificationTriviaApi.md#deleteQuestion) | **DELETE** /trivia/questions/{id} | Delete a question
[**deleteQuestionAnswers**](GamificationTriviaApi.md#deleteQuestionAnswers) | **DELETE** /trivia/questions/{question_id}/answers/{id} | Remove an answer from a question
[**deleteQuestionTemplate**](GamificationTriviaApi.md#deleteQuestionTemplate) | **DELETE** /trivia/questions/templates/{id} | Delete a question template
[**getImportJob**](GamificationTriviaApi.md#getImportJob) | **GET** /trivia/import/{id} | Get an import job
[**getImportJobs**](GamificationTriviaApi.md#getImportJobs) | **GET** /trivia/import | Get a list of import job
[**getQuestion**](GamificationTriviaApi.md#getQuestion) | **GET** /trivia/questions/{id} | Get a single question
[**getQuestionAnswer**](GamificationTriviaApi.md#getQuestionAnswer) | **GET** /trivia/questions/{question_id}/answers/{id} | Get an answer for a question
[**getQuestionAnswers**](GamificationTriviaApi.md#getQuestionAnswers) | **GET** /trivia/questions/{question_id}/answers | List the answers available for a question
[**getQuestionDeltas**](GamificationTriviaApi.md#getQuestionDeltas) | **GET** /trivia/questions/delta | List question deltas in ascending order of updated date
[**getQuestionTags**](GamificationTriviaApi.md#getQuestionTags) | **GET** /trivia/questions/{id}/tags | List the tags for a question
[**getQuestionTemplate**](GamificationTriviaApi.md#getQuestionTemplate) | **GET** /trivia/questions/templates/{id} | Get a single question template
[**getQuestionTemplates**](GamificationTriviaApi.md#getQuestionTemplates) | **GET** /trivia/questions/templates | List and search question templates
[**getQuestions**](GamificationTriviaApi.md#getQuestions) | **GET** /trivia/questions | List and search questions
[**getQuestionsCount**](GamificationTriviaApi.md#getQuestionsCount) | **GET** /trivia/questions/count | Count questions based on filters
[**processImportJob**](GamificationTriviaApi.md#processImportJob) | **POST** /trivia/import/{id}/process | Start processing an import job
[**removeQuestionTag**](GamificationTriviaApi.md#removeQuestionTag) | **DELETE** /trivia/questions/{id}/tags/{tag} | Remove a tag from a question
[**removeTagToQuestionsBatch**](GamificationTriviaApi.md#removeTagToQuestionsBatch) | **DELETE** /trivia/questions/tags/{tag} | Remove a tag from a batch of questions
[**searchQuestionTags**](GamificationTriviaApi.md#searchQuestionTags) | **GET** /trivia/tags | List and search tags by the beginning of the string
[**updateImportJob**](GamificationTriviaApi.md#updateImportJob) | **PUT** /trivia/import/{id} | Update an import job
[**updateQuestion**](GamificationTriviaApi.md#updateQuestion) | **PUT** /trivia/questions/{id} | Update a question
[**updateQuestionAnswer**](GamificationTriviaApi.md#updateQuestionAnswer) | **PUT** /trivia/questions/{question_id}/answers/{id} | Update an answer for a question
[**updateQuestionTemplate**](GamificationTriviaApi.md#updateQuestionTemplate) | **PUT** /trivia/questions/templates/{id} | Update a question template
[**updateQuestionsInBulk**](GamificationTriviaApi.md#updateQuestionsInBulk) | **PUT** /trivia/questions | Bulk update questions


<a name="addQuestionAnswers"></a>
# **addQuestionAnswers**
> AnswerResource addQuestionAnswers(questionId, opts)

Add an answer to a question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var questionId = "questionId_example"; // String | The id of the question

var opts = { 
  'answer': new KnetikPlatformApiDocumentationLatest.AnswerResource() // AnswerResource | The new answer
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addQuestionAnswers(questionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | **String**| The id of the question | 
 **answer** | [**AnswerResource**](AnswerResource.md)| The new answer | [optional] 

### Return type

[**AnswerResource**](AnswerResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addQuestionTag"></a>
# **addQuestionTag**
> addQuestionTag(id, opts)

Add a tag to a question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = "id_example"; // String | The id of the question

var opts = { 
  'tag': "tag_example" // String | The new tag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addQuestionTag(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the question | 
 **tag** | **String**| The new tag | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addTagToQuestionsBatch"></a>
# **addTagToQuestionsBatch**
> &#39;Number&#39; addTagToQuestionsBatch(opts)

Add a tag to a batch of questions

All questions that dont&#39;t have the tag and match filters will have it added. The returned number is the number of questions updated.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var opts = { 
  'tag': "tag_example", // String | The tag to add
  'filterSearch': "filterSearch_example", // String | Filter for documents whose question, answers or tags contains provided string
  'filterIdset': "filterIdset_example", // String | Filter for documents whose id is in the comma separated list provided
  'filterCategory': "filterCategory_example", // String | Filter for questions with specified category, by id
  'filterTag': "filterTag_example", // String | Filter for questions with specified tag
  'filterTagset': "filterTagset_example", // String | Filter for questions with specified tags (separated by comma)
  'filterType': "filterType_example", // String | Filter for questions with specified type
  'filterPublished': true, // Boolean | Filter for questions currenctly published or not
  'filterImportId': 789 // Number | Filter for questions from a specific import job
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTagToQuestionsBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**| The tag to add | [optional] 
 **filterSearch** | **String**| Filter for documents whose question, answers or tags contains provided string | [optional] 
 **filterIdset** | **String**| Filter for documents whose id is in the comma separated list provided | [optional] 
 **filterCategory** | **String**| Filter for questions with specified category, by id | [optional] 
 **filterTag** | **String**| Filter for questions with specified tag | [optional] 
 **filterTagset** | **String**| Filter for questions with specified tags (separated by comma) | [optional] 
 **filterType** | **String**| Filter for questions with specified type | [optional] 
 **filterPublished** | **Boolean**| Filter for questions currenctly published or not | [optional] 
 **filterImportId** | **Number**| Filter for questions from a specific import job | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createImportJob"></a>
# **createImportJob**
> ImportJobResource createImportJob(opts)

Create an import job

Set up a job to import a set of trivia questions from a cvs file at a remote url. the file will be validated asynchronously but will not be processed until started manually with the process endpoint.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.ImportJobResource() // ImportJobResource | The new import job
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createImportJob(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ImportJobResource**](ImportJobResource.md)| The new import job | [optional] 

### Return type

[**ImportJobResource**](ImportJobResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createQuestion"></a>
# **createQuestion**
> QuestionResource createQuestion(opts)

Create a question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var opts = { 
  'question': new KnetikPlatformApiDocumentationLatest.QuestionResource() // QuestionResource | The new question
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createQuestion(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **question** | [**QuestionResource**](QuestionResource.md)| The new question | [optional] 

### Return type

[**QuestionResource**](QuestionResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createQuestionTemplate"></a>
# **createQuestionTemplate**
> QuestionTemplateResource createQuestionTemplate(opts)

Create a question template

Question templates define a type of question and the properties they have

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var opts = { 
  'questionTemplateResource': new KnetikPlatformApiDocumentationLatest.QuestionTemplateResource() // QuestionTemplateResource | The question template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createQuestionTemplate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionTemplateResource** | [**QuestionTemplateResource**](QuestionTemplateResource.md)| The question template resource object | [optional] 

### Return type

[**QuestionTemplateResource**](QuestionTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteImportJob"></a>
# **deleteImportJob**
> deleteImportJob(id)

Delete an import job

Also deletes all questions that were imported by it

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = 789; // Number | The id of the job


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteImportJob(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the job | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteQuestion"></a>
# **deleteQuestion**
> deleteQuestion(id)

Delete a question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = "id_example"; // String | The id of the question


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteQuestion(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the question | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteQuestionAnswers"></a>
# **deleteQuestionAnswers**
> deleteQuestionAnswers(questionId, id)

Remove an answer from a question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var questionId = "questionId_example"; // String | The id of the question

var id = "id_example"; // String | The id of the answer


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteQuestionAnswers(questionId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | **String**| The id of the question | 
 **id** | **String**| The id of the answer | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteQuestionTemplate"></a>
# **deleteQuestionTemplate**
> deleteQuestionTemplate(id, opts)

Delete a question template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

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
apiInstance.deleteQuestionTemplate(id, opts, callback);
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

<a name="getImportJob"></a>
# **getImportJob**
> ImportJobResource getImportJob(id)

Get an import job

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = 789; // Number | The id of the job


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImportJob(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the job | 

### Return type

[**ImportJobResource**](ImportJobResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImportJobs"></a>
# **getImportJobs**
> PageResourceImportJobResource getImportJobs(opts)

Get a list of import job

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var opts = { 
  'filterVendor': "filterVendor_example", // String | Filter for jobs by vendor id
  'filterCategory': "filterCategory_example", // String | Filter for jobs by category id
  'filterName': "filterName_example", // String | Filter for jobs which name *STARTS* with the given string
  'filterStatus': "filterStatus_example", // String | Filter for jobs that are in a specific set of statuses (comma separated)
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
apiInstance.getImportJobs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterVendor** | **String**| Filter for jobs by vendor id | [optional] 
 **filterCategory** | **String**| Filter for jobs by category id | [optional] 
 **filterName** | **String**| Filter for jobs which name *STARTS* with the given string | [optional] 
 **filterStatus** | **String**| Filter for jobs that are in a specific set of statuses (comma separated) | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceImportJobResource**](PageResourceImportJobResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuestion"></a>
# **getQuestion**
> QuestionResource getQuestion(id)

Get a single question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = "id_example"; // String | The id of the question


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQuestion(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the question | 

### Return type

[**QuestionResource**](QuestionResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuestionAnswer"></a>
# **getQuestionAnswer**
> AnswerResource getQuestionAnswer(questionId, id)

Get an answer for a question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var questionId = "questionId_example"; // String | The id of the question

var id = "id_example"; // String | The id of the answer


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQuestionAnswer(questionId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | **String**| The id of the question | 
 **id** | **String**| The id of the answer | 

### Return type

[**AnswerResource**](AnswerResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuestionAnswers"></a>
# **getQuestionAnswers**
> [AnswerResource] getQuestionAnswers(questionId)

List the answers available for a question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var questionId = "questionId_example"; // String | The id of the question


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQuestionAnswers(questionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | **String**| The id of the question | 

### Return type

[**[AnswerResource]**](AnswerResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuestionDeltas"></a>
# **getQuestionDeltas**
> [DeltaResource] getQuestionDeltas(opts)

List question deltas in ascending order of updated date

The &#39;since&#39; parameter is important to avoid getting a full list of all questions. Implementors should make sure they pass the updated date of the last resource loaded, not the date of the last request, in order to avoid gaps

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var opts = { 
  'since': 789 // Number | Timestamp in seconds
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQuestionDeltas(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **Number**| Timestamp in seconds | [optional] 

### Return type

[**[DeltaResource]**](DeltaResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuestionTags"></a>
# **getQuestionTags**
> [&#39;String&#39;] getQuestionTags(id)

List the tags for a question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = "id_example"; // String | The id of the question


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQuestionTags(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the question | 

### Return type

**[&#39;String&#39;]**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuestionTemplate"></a>
# **getQuestionTemplate**
> QuestionTemplateResource getQuestionTemplate(id)

Get a single question template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = "id_example"; // String | The id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQuestionTemplate(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 

### Return type

[**QuestionTemplateResource**](QuestionTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuestionTemplates"></a>
# **getQuestionTemplates**
> PageResourceQuestionTemplateResource getQuestionTemplates(opts)

List and search question templates

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

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
apiInstance.getQuestionTemplates(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceQuestionTemplateResource**](PageResourceQuestionTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuestions"></a>
# **getQuestions**
> PageResourceQuestionResource getQuestions(opts)

List and search questions

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC", // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
  'filterSearch': "filterSearch_example", // String | Filter for documents whose question, answers or tags contains provided string
  'filterIdset': "filterIdset_example", // String | Filter for documents whose id is in the comma separated list provided
  'filterCategory': "filterCategory_example", // String | Filter for questions with specified category, by id
  'filterTagset': "filterTagset_example", // String | Filter for questions with specified tags (separated by comma)
  'filterTag': "filterTag_example", // String | Filter for questions with specified tag
  'filterType': "filterType_example", // String | Filter for questions with specified type.  Allowable values: ('TEXT', 'IMAGE', 'VIDEO', 'AUDIO')
  'filterPublished': true, // Boolean | Filter for questions currenctly published or not
  'filterImportId': 789 // Number | Filter for questions from a specific import job
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQuestions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]
 **filterSearch** | **String**| Filter for documents whose question, answers or tags contains provided string | [optional] 
 **filterIdset** | **String**| Filter for documents whose id is in the comma separated list provided | [optional] 
 **filterCategory** | **String**| Filter for questions with specified category, by id | [optional] 
 **filterTagset** | **String**| Filter for questions with specified tags (separated by comma) | [optional] 
 **filterTag** | **String**| Filter for questions with specified tag | [optional] 
 **filterType** | **String**| Filter for questions with specified type.  Allowable values: (&#39;TEXT&#39;, &#39;IMAGE&#39;, &#39;VIDEO&#39;, &#39;AUDIO&#39;) | [optional] 
 **filterPublished** | **Boolean**| Filter for questions currenctly published or not | [optional] 
 **filterImportId** | **Number**| Filter for questions from a specific import job | [optional] 

### Return type

[**PageResourceQuestionResource**](PageResourceQuestionResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuestionsCount"></a>
# **getQuestionsCount**
> &#39;Number&#39; getQuestionsCount(opts)

Count questions based on filters

This is also provided by the list endpoint so you don&#39;t need to call this for pagination purposes

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var opts = { 
  'filterSearch': "filterSearch_example", // String | Filter for documents whose question, answers or tags contains provided string
  'filterIdset': "filterIdset_example", // String | Filter for documents whose id is in the comma separated list provided
  'filterCategory': "filterCategory_example", // String | Filter for questions with specified category, by id
  'filterTag': "filterTag_example", // String | Filter for questions with specified tag
  'filterTagset': "filterTagset_example", // String | Filter for questions with specified tags (separated by comma)
  'filterType': "filterType_example", // String | Filter for questions with specified type.  Allowable values: ('TEXT', 'IMAGE', 'VIDEO', 'AUDIO')
  'filterPublished': true // Boolean | Filter for questions currenctly published or not
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQuestionsCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterSearch** | **String**| Filter for documents whose question, answers or tags contains provided string | [optional] 
 **filterIdset** | **String**| Filter for documents whose id is in the comma separated list provided | [optional] 
 **filterCategory** | **String**| Filter for questions with specified category, by id | [optional] 
 **filterTag** | **String**| Filter for questions with specified tag | [optional] 
 **filterTagset** | **String**| Filter for questions with specified tags (separated by comma) | [optional] 
 **filterType** | **String**| Filter for questions with specified type.  Allowable values: (&#39;TEXT&#39;, &#39;IMAGE&#39;, &#39;VIDEO&#39;, &#39;AUDIO&#39;) | [optional] 
 **filterPublished** | **Boolean**| Filter for questions currenctly published or not | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="processImportJob"></a>
# **processImportJob**
> ImportJobResource processImportJob(id, publishNow)

Start processing an import job

Will process the CSV file and add new questions asynchronously. The status of the job must be &#39;VALID&#39;.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = 789; // Number | The id of the job

var publishNow = true; // Boolean | Whether the new questions should be published live immediately


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.processImportJob(id, publishNow, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the job | 
 **publishNow** | **Boolean**| Whether the new questions should be published live immediately | 

### Return type

[**ImportJobResource**](ImportJobResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeQuestionTag"></a>
# **removeQuestionTag**
> removeQuestionTag(id, tag)

Remove a tag from a question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = "id_example"; // String | The id of the question

var tag = "tag_example"; // String | The tag to remove


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeQuestionTag(id, tag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the question | 
 **tag** | **String**| The tag to remove | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeTagToQuestionsBatch"></a>
# **removeTagToQuestionsBatch**
> &#39;Number&#39; removeTagToQuestionsBatch(tag, opts)

Remove a tag from a batch of questions

ll questions that have the tag and match filters will have it removed. The returned number is the number of questions updated.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var tag = "tag_example"; // String | The tag to remove

var opts = { 
  'filterSearch': "filterSearch_example", // String | Filter for documents whose question, answers or tags contains provided string
  'filterIdset': "filterIdset_example", // String | Filter for documents whose id is in the comma separated list provided
  'filterCategory': "filterCategory_example", // String | Filter for questions with specified category, by id
  'filterTag': "filterTag_example", // String | Filter for questions with specified tag
  'filterTagset': "filterTagset_example", // String | Filter for questions with specified tags (separated by comma)
  'filterType': "filterType_example", // String | Filter for questions with specified type.  Allowable values: ('TEXT', 'IMAGE', 'VIDEO', 'AUDIO')
  'filterPublished': true, // Boolean | Filter for questions currenctly published or not
  'filterImportId': 789 // Number | Filter for questions from a specific import job
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeTagToQuestionsBatch(tag, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**| The tag to remove | 
 **filterSearch** | **String**| Filter for documents whose question, answers or tags contains provided string | [optional] 
 **filterIdset** | **String**| Filter for documents whose id is in the comma separated list provided | [optional] 
 **filterCategory** | **String**| Filter for questions with specified category, by id | [optional] 
 **filterTag** | **String**| Filter for questions with specified tag | [optional] 
 **filterTagset** | **String**| Filter for questions with specified tags (separated by comma) | [optional] 
 **filterType** | **String**| Filter for questions with specified type.  Allowable values: (&#39;TEXT&#39;, &#39;IMAGE&#39;, &#39;VIDEO&#39;, &#39;AUDIO&#39;) | [optional] 
 **filterPublished** | **Boolean**| Filter for questions currenctly published or not | [optional] 
 **filterImportId** | **Number**| Filter for questions from a specific import job | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchQuestionTags"></a>
# **searchQuestionTags**
> Collectionstring searchQuestionTags(opts)

List and search tags by the beginning of the string

For performance reasons, search &amp; category filters are mutually exclusive. If category is specified, search filter will be ignored in order to do fast matches for typeahead.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var opts = { 
  'filterSearch': "filterSearch_example", // String | Filter for tags starting with the given text
  'filterCategory': "filterCategory_example", // String | Filter for tags on questions from a specific category
  'filterImportId': 789 // Number | Filter for tags on questions from a specific import job
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchQuestionTags(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterSearch** | **String**| Filter for tags starting with the given text | [optional] 
 **filterCategory** | **String**| Filter for tags on questions from a specific category | [optional] 
 **filterImportId** | **Number**| Filter for tags on questions from a specific import job | [optional] 

### Return type

[**Collectionstring**](Collectionstring.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateImportJob"></a>
# **updateImportJob**
> ImportJobResource updateImportJob(id, opts)

Update an import job

Changes should be made before process is started for there to be any effect.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = 789; // Number | The id of the job

var opts = { 
  'request': new KnetikPlatformApiDocumentationLatest.ImportJobResource() // ImportJobResource | The updated job
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateImportJob(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the job | 
 **request** | [**ImportJobResource**](ImportJobResource.md)| The updated job | [optional] 

### Return type

[**ImportJobResource**](ImportJobResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateQuestion"></a>
# **updateQuestion**
> QuestionResource updateQuestion(id, opts)

Update a question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = "id_example"; // String | The id of the question

var opts = { 
  'question': new KnetikPlatformApiDocumentationLatest.QuestionResource() // QuestionResource | The updated question
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateQuestion(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the question | 
 **question** | [**QuestionResource**](QuestionResource.md)| The updated question | [optional] 

### Return type

[**QuestionResource**](QuestionResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateQuestionAnswer"></a>
# **updateQuestionAnswer**
> updateQuestionAnswer(questionId, id, opts)

Update an answer for a question

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var questionId = "questionId_example"; // String | The id of the question

var id = "id_example"; // String | The id of the answer

var opts = { 
  'answer': new KnetikPlatformApiDocumentationLatest.AnswerResource() // AnswerResource | The updated answer
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateQuestionAnswer(questionId, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | **String**| The id of the question | 
 **id** | **String**| The id of the answer | 
 **answer** | [**AnswerResource**](AnswerResource.md)| The updated answer | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateQuestionTemplate"></a>
# **updateQuestionTemplate**
> QuestionTemplateResource updateQuestionTemplate(id, opts)

Update a question template

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var id = "id_example"; // String | The id of the template

var opts = { 
  'questionTemplateResource': new KnetikPlatformApiDocumentationLatest.QuestionTemplateResource() // QuestionTemplateResource | The question template resource object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateQuestionTemplate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **questionTemplateResource** | [**QuestionTemplateResource**](QuestionTemplateResource.md)| The question template resource object | [optional] 

### Return type

[**QuestionTemplateResource**](QuestionTemplateResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateQuestionsInBulk"></a>
# **updateQuestionsInBulk**
> &#39;Number&#39; updateQuestionsInBulk(opts)

Bulk update questions

Will update all questions that match filters used (or all questions in system if no filters used). Body should match a question resource with only those properties you wish to set. Null values will be ignored. Returned number is how many were updated.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.GamificationTriviaApi();

var opts = { 
  'question': new KnetikPlatformApiDocumentationLatest.QuestionResource(), // QuestionResource | New values for a set of question fields
  'filterSearch': "filterSearch_example", // String | Filter for documents whose question, answers or tags contains provided string
  'filterIdset': "filterIdset_example", // String | Filter for documents whose id is in the comma separated list provided
  'filterCategory': "filterCategory_example", // String | Filter for questions with specified category, by id
  'filterTagset': "filterTagset_example", // String | Filter for questions with specified tags (separated by comma)
  'filterType': "filterType_example", // String | Filter for questions with specified type.  Allowable values: ('TEXT', 'IMAGE', 'VIDEO', 'AUDIO')
  'filterPublished': true, // Boolean | Filter for questions currenctly published or not
  'filterImportId': 789 // Number | Filter for questions from a specific import job
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateQuestionsInBulk(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **question** | [**QuestionResource**](QuestionResource.md)| New values for a set of question fields | [optional] 
 **filterSearch** | **String**| Filter for documents whose question, answers or tags contains provided string | [optional] 
 **filterIdset** | **String**| Filter for documents whose id is in the comma separated list provided | [optional] 
 **filterCategory** | **String**| Filter for questions with specified category, by id | [optional] 
 **filterTagset** | **String**| Filter for questions with specified tags (separated by comma) | [optional] 
 **filterType** | **String**| Filter for questions with specified type.  Allowable values: (&#39;TEXT&#39;, &#39;IMAGE&#39;, &#39;VIDEO&#39;, &#39;AUDIO&#39;) | [optional] 
 **filterPublished** | **Boolean**| Filter for questions currenctly published or not | [optional] 
 **filterImportId** | **Number**| Filter for questions from a specific import job | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

