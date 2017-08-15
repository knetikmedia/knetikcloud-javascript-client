# KnetikCloud.MediaArtistsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addArtist**](MediaArtistsApi.md#addArtist) | **POST** /media/artists | Adds a new artist in the system
[**createArtistTemplate**](MediaArtistsApi.md#createArtistTemplate) | **POST** /media/artists/templates | Create an artist template
[**deleteArtist**](MediaArtistsApi.md#deleteArtist) | **DELETE** /media/artists/{id} | Removes an artist from the system IF no resources are attached to it
[**deleteArtistTemplate**](MediaArtistsApi.md#deleteArtistTemplate) | **DELETE** /media/artists/templates/{id} | Delete an artist template
[**getArtist**](MediaArtistsApi.md#getArtist) | **GET** /media/artists/{id} | Loads a specific artist details
[**getArtistTemplate**](MediaArtistsApi.md#getArtistTemplate) | **GET** /media/artists/templates/{id} | Get a single artist template
[**getArtistTemplates**](MediaArtistsApi.md#getArtistTemplates) | **GET** /media/artists/templates | List and search artist templates
[**getArtists**](MediaArtistsApi.md#getArtists) | **GET** /media/artists | Search for artists
[**updateArtist**](MediaArtistsApi.md#updateArtist) | **PUT** /media/artists/{id} | Modifies an artist details
[**updateArtistTemplate**](MediaArtistsApi.md#updateArtistTemplate) | **PUT** /media/artists/templates/{id} | Update an artist template


<a name="addArtist"></a>
# **addArtist**
> ArtistResource addArtist(opts)

Adds a new artist in the system

Adds a new artist in the system. Use specific media contributions endpoint to add contributions

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.MediaArtistsApi();

let opts = { 
  'artistResource': new KnetikCloud.ArtistResource() // ArtistResource | The new artist
};
apiInstance.addArtist(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artistResource** | [**ArtistResource**](ArtistResource.md)| The new artist | [optional] 

### Return type

[**ArtistResource**](ArtistResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createArtistTemplate"></a>
# **createArtistTemplate**
> TemplateResource createArtistTemplate(opts)

Create an artist template

Artist Templates define a type of artist and the properties they have

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.MediaArtistsApi();

let opts = { 
  'artistTemplateResource': new KnetikCloud.TemplateResource() // TemplateResource | The artist template resource object
};
apiInstance.createArtistTemplate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artistTemplateResource** | [**TemplateResource**](TemplateResource.md)| The artist template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteArtist"></a>
# **deleteArtist**
> deleteArtist(id)

Removes an artist from the system IF no resources are attached to it

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.MediaArtistsApi();

let id = 789; // Number | The artist id

apiInstance.deleteArtist(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The artist id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteArtistTemplate"></a>
# **deleteArtistTemplate**
> deleteArtistTemplate(id, opts)

Delete an artist template

If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.MediaArtistsApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'cascade': "cascade_example" // String | The value needed to delete used templates
};
apiInstance.deleteArtistTemplate(id, opts).then(() => {
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

<a name="getArtist"></a>
# **getArtist**
> ArtistResource getArtist(id, opts)

Loads a specific artist details

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.MediaArtistsApi();

let id = 789; // Number | The artist id

let opts = { 
  'showContributions': 56 // Number | The number of contributions to show fetch
};
apiInstance.getArtist(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The artist id | 
 **showContributions** | **Number**| The number of contributions to show fetch | [optional] 

### Return type

[**ArtistResource**](ArtistResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArtistTemplate"></a>
# **getArtistTemplate**
> TemplateResource getArtistTemplate(id)

Get a single artist template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.MediaArtistsApi();

let id = "id_example"; // String | The id of the template

apiInstance.getArtistTemplate(id).then((data) => {
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

<a name="getArtistTemplates"></a>
# **getArtistTemplates**
> PageResourceTemplateResource getArtistTemplates(opts)

List and search artist templates

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.MediaArtistsApi();

let opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getArtistTemplates(opts).then((data) => {
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

<a name="getArtists"></a>
# **getArtists**
> PageResourceArtistResource getArtists(opts)

Search for artists

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.MediaArtistsApi();

let opts = { 
  'filterArtistsByName': "filterArtistsByName_example", // String | Filter for artists which name *STARTS* with the given string
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getArtists(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterArtistsByName** | **String**| Filter for artists which name *STARTS* with the given string | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceArtistResource**](PageResourceArtistResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateArtist"></a>
# **updateArtist**
> updateArtist(id, opts)

Modifies an artist details

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.MediaArtistsApi();

let id = 789; // Number | The artist id

let opts = { 
  'artistResource': new KnetikCloud.ArtistResource() // ArtistResource | The new artist
};
apiInstance.updateArtist(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The artist id | 
 **artistResource** | [**ArtistResource**](ArtistResource.md)| The new artist | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateArtistTemplate"></a>
# **updateArtistTemplate**
> TemplateResource updateArtistTemplate(id, opts)

Update an artist template

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.MediaArtistsApi();

let id = "id_example"; // String | The id of the template

let opts = { 
  'artistTemplateResource': new KnetikCloud.TemplateResource() // TemplateResource | The artist template resource object
};
apiInstance.updateArtistTemplate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the template | 
 **artistTemplateResource** | [**TemplateResource**](TemplateResource.md)| The artist template resource object | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

