# KnetikCloud.ContentArticlesApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createArticle**](ContentArticlesApi.md#createArticle) | **POST** /content/articles | Create a new article
[**createArticleTemplate**](ContentArticlesApi.md#createArticleTemplate) | **POST** /content/articles/templates | Create an article template
[**deleteArticle**](ContentArticlesApi.md#deleteArticle) | **DELETE** /content/articles/{id} | Delete an existing article
[**deleteArticleTemplate**](ContentArticlesApi.md#deleteArticleTemplate) | **DELETE** /content/articles/templates/{id} | Delete an article template
[**getArticle**](ContentArticlesApi.md#getArticle) | **GET** /content/articles/{id} | Get a single article
[**getArticleTemplate**](ContentArticlesApi.md#getArticleTemplate) | **GET** /content/articles/templates/{id} | Get a single article template
[**getArticleTemplates**](ContentArticlesApi.md#getArticleTemplates) | **GET** /content/articles/templates | List and search article templates
[**getArticles**](ContentArticlesApi.md#getArticles) | **GET** /content/articles | List and search articles
[**updateArticle**](ContentArticlesApi.md#updateArticle) | **PUT** /content/articles/{id} | Update an existing article
[**updateArticleTemplate**](ContentArticlesApi.md#updateArticleTemplate) | **PUT** /content/articles/templates/{id} | Update an article template


<a name="createArticle"></a>
# **createArticle**
> ArticleResource createArticle(opts)

Create a new article

Articles are blobs of text with titles, a category and assets. Formatting and display of the text is in the hands of the front end.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentArticlesApi();

let opts = { 
  'articleResource': new KnetikCloud.ArticleResource() // ArticleResource | The new article
};
apiInstance.createArticle(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleResource** | [**ArticleResource**](ArticleResource.md)| The new article | [optional] 

### Return type

[**ArticleResource**](ArticleResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createArticleTemplate"></a>
# **createArticleTemplate**
> TemplateResource createArticleTemplate(opts)

Create an article template

Article Templates define a type of article and the properties they have

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentArticlesApi();

let opts = { 
  'articleTemplateResource': new KnetikCloud.TemplateResource() // TemplateResource | The article template resource object
};
apiInstance.createArticleTemplate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleTemplateResource** | [**TemplateResource**](TemplateResource.md)| The article template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteArticle"></a>
# **deleteArticle**
> deleteArticle(id)

Delete an existing article

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentArticlesApi();

let id = "id_example"; // String | The article id

apiInstance.deleteArticle(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The article id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteArticleTemplate"></a>
# **deleteArticleTemplate**
> deleteArticleTemplate(id, opts)

Delete an article template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentArticlesApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'cascade': "cascade_example" // String | The value needed to delete used templates
};
apiInstance.deleteArticleTemplate(id, opts).then(() => {
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

<a name="getArticle"></a>
# **getArticle**
> ArticleResource getArticle(id)

Get a single article

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentArticlesApi();

let id = "id_example"; // String | The article id

apiInstance.getArticle(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The article id | 

### Return type

[**ArticleResource**](ArticleResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticleTemplate"></a>
# **getArticleTemplate**
> TemplateResource getArticleTemplate(id)

Get a single article template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentArticlesApi();

let id = "id_example"; // String | The id of the template

apiInstance.getArticleTemplate(id).then((data) => {
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

<a name="getArticleTemplates"></a>
# **getArticleTemplates**
> PageResourceTemplateResource getArticleTemplates(opts)

List and search article templates

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentArticlesApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getArticleTemplates(opts).then((data) => {
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

<a name="getArticles"></a>
# **getArticles**
> PageResourceArticleResource getArticles(opts)

List and search articles

Get a list of articles with optional filtering. Assets will not be filled in on the resources returned. Use &#39;Get a single article&#39; to retrieve the full resource with assets for a given item as needed.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentArticlesApi();

let opts = { 
  'filterActiveOnly': true, // Boolean | Filter for articles that are active (true) or inactive (false)
  'filterCategory': "filterCategory_example", // String | Filter for articles from a specific category by id
  'filterTagset': "filterTagset_example", // String | Filter for articles with at least one of a specified set of tags (separated by comma)
  'filterTagIntersection': "filterTagIntersection_example", // String | Filter for articles with all of a specified set of tags (separated by comma)
  'filterTagExclusion': "filterTagExclusion_example", // String | Filter for articles with none of a specified set of tags (separated by comma)
  'filterTitle': "filterTitle_example", // String | Filter for articles whose title contains a string
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getArticles(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterActiveOnly** | **Boolean**| Filter for articles that are active (true) or inactive (false) | [optional] 
 **filterCategory** | **String**| Filter for articles from a specific category by id | [optional] 
 **filterTagset** | **String**| Filter for articles with at least one of a specified set of tags (separated by comma) | [optional] 
 **filterTagIntersection** | **String**| Filter for articles with all of a specified set of tags (separated by comma) | [optional] 
 **filterTagExclusion** | **String**| Filter for articles with none of a specified set of tags (separated by comma) | [optional] 
 **filterTitle** | **String**| Filter for articles whose title contains a string | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceArticleResource**](PageResourceArticleResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateArticle"></a>
# **updateArticle**
> ArticleResource updateArticle(id, opts)

Update an existing article

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentArticlesApi();

let id = "id_example"; // String | The article id

let opts = { 
  'articleResource': new KnetikCloud.ArticleResource() // ArticleResource | The article object
};
apiInstance.updateArticle(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The article id | 
 **articleResource** | [**ArticleResource**](ArticleResource.md)| The article object | [optional] 

### Return type

[**ArticleResource**](ArticleResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateArticleTemplate"></a>
# **updateArticleTemplate**
> TemplateResource updateArticleTemplate(id, opts)

Update an article template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.ContentArticlesApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'articleTemplateResource': new KnetikCloud.TemplateResource() // TemplateResource | The article template resource object
};
apiInstance.updateArticleTemplate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **articleTemplateResource** | [**TemplateResource**](TemplateResource.md)| The article template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

