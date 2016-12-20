# KnetikPlatformApiDocumentationLatest.TaxesApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTaxUsingPOST**](TaxesApi.md#createTaxUsingPOST) | **POST** /tax/countries/{country_code_iso3}/states | Create a tax
[**deleteTaxUsingDELETE**](TaxesApi.md#deleteTaxUsingDELETE) | **DELETE** /tax/countries/{country_code_iso3} | Delete an existing tax
[**deleteTaxUsingDELETE1**](TaxesApi.md#deleteTaxUsingDELETE1) | **DELETE** /tax/countries/{country_code_iso3}/states/{state_code} | Delete an existing tax
[**getAllTaxesUsingGET**](TaxesApi.md#getAllTaxesUsingGET) | **GET** /tax/states | List and search taxes across all countries
[**getTaxUsingGET**](TaxesApi.md#getTaxUsingGET) | **GET** /tax/countries/{country_code_iso3} | Get a single tax
[**getTaxUsingGET1**](TaxesApi.md#getTaxUsingGET1) | **GET** /tax/countries/{country_code_iso3}/states/{state_code} | Get a single tax
[**getTaxesUsingGET**](TaxesApi.md#getTaxesUsingGET) | **GET** /tax/countries | List and search taxes
[**getTaxesUsingGET1**](TaxesApi.md#getTaxesUsingGET1) | **GET** /tax/countries/{country_code_iso3}/states | List and search taxes within a country
[**updateTaxUsingPOST**](TaxesApi.md#updateTaxUsingPOST) | **POST** /tax/countries | Create a tax
[**updateTaxUsingPUT**](TaxesApi.md#updateTaxUsingPUT) | **PUT** /tax/countries/{country_code_iso3} | Create or update a tax
[**updateTaxUsingPUT1**](TaxesApi.md#updateTaxUsingPUT1) | **PUT** /tax/countries/{country_code_iso3}/states/{state_code} | Create or update a tax


<a name="createTaxUsingPOST"></a>
# **createTaxUsingPOST**
> createTaxUsingPOST(countryCodeIso3, opts)

Create a tax

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.TaxesApi();

var countryCodeIso3 = "countryCodeIso3_example"; // String | The iso3 code of the country

var opts = { 
  'taxResource': new KnetikPlatformApiDocumentationLatest.StateTaxResource() // StateTaxResource | The tax object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createTaxUsingPOST(countryCodeIso3, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 
 **taxResource** | [**StateTaxResource**](StateTaxResource.md)| The tax object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTaxUsingDELETE"></a>
# **deleteTaxUsingDELETE**
> deleteTaxUsingDELETE(countryCodeIso3)

Delete an existing tax

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.TaxesApi();

var countryCodeIso3 = "countryCodeIso3_example"; // String | The iso3 code of the country


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTaxUsingDELETE(countryCodeIso3, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTaxUsingDELETE1"></a>
# **deleteTaxUsingDELETE1**
> deleteTaxUsingDELETE1(countryCodeIso3, stateCode)

Delete an existing tax

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.TaxesApi();

var countryCodeIso3 = "countryCodeIso3_example"; // String | The iso3 code of the country

var stateCode = "stateCode_example"; // String | The code of the state


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTaxUsingDELETE1(countryCodeIso3, stateCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 
 **stateCode** | **String**| The code of the state | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllTaxesUsingGET"></a>
# **getAllTaxesUsingGET**
> PageStateTaxResource getAllTaxesUsingGET(opts)

List and search taxes across all countries

Get a list of taxes

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.TaxesApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned
  'order': "name:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllTaxesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to name:ASC]

### Return type

[**PageStateTaxResource**](PageStateTaxResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaxUsingGET"></a>
# **getTaxUsingGET**
> CountryTaxResource getTaxUsingGET(countryCodeIso3)

Get a single tax

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.TaxesApi();

var countryCodeIso3 = "countryCodeIso3_example"; // String | The iso3 code of the country


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxUsingGET(countryCodeIso3, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 

### Return type

[**CountryTaxResource**](CountryTaxResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaxUsingGET1"></a>
# **getTaxUsingGET1**
> StateTaxResource getTaxUsingGET1(countryCodeIso3, stateCode)

Get a single tax

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.TaxesApi();

var countryCodeIso3 = "countryCodeIso3_example"; // String | The iso3 code of the country

var stateCode = "stateCode_example"; // String | The code of the state


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxUsingGET1(countryCodeIso3, stateCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 
 **stateCode** | **String**| The code of the state | 

### Return type

[**StateTaxResource**](StateTaxResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaxesUsingGET"></a>
# **getTaxesUsingGET**
> PageCountryTaxResource getTaxesUsingGET(opts)

List and search taxes

Get a list of taxes

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.TaxesApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned
  'order': "name:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to name:ASC]

### Return type

[**PageCountryTaxResource**](PageCountryTaxResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaxesUsingGET1"></a>
# **getTaxesUsingGET1**
> PageStateTaxResource getTaxesUsingGET1(countryCodeIso3, opts)

List and search taxes within a country

Get a list of taxes

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.TaxesApi();

var countryCodeIso3 = "countryCodeIso3_example"; // String | The iso3 code of the country

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned
  'order': "name:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxesUsingGET1(countryCodeIso3, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to name:ASC]

### Return type

[**PageStateTaxResource**](PageStateTaxResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTaxUsingPOST"></a>
# **updateTaxUsingPOST**
> updateTaxUsingPOST(opts)

Create a tax

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.TaxesApi();

var opts = { 
  'taxResource': new KnetikPlatformApiDocumentationLatest.CountryTaxResource() // CountryTaxResource | The tax object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateTaxUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxResource** | [**CountryTaxResource**](CountryTaxResource.md)| The tax object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTaxUsingPUT"></a>
# **updateTaxUsingPUT**
> updateTaxUsingPUT(countryCodeIso3, opts)

Create or update a tax

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.TaxesApi();

var countryCodeIso3 = "countryCodeIso3_example"; // String | The iso3 code of the country

var opts = { 
  'taxResource': new KnetikPlatformApiDocumentationLatest.CountryTaxResource() // CountryTaxResource | The tax object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateTaxUsingPUT(countryCodeIso3, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 
 **taxResource** | [**CountryTaxResource**](CountryTaxResource.md)| The tax object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTaxUsingPUT1"></a>
# **updateTaxUsingPUT1**
> updateTaxUsingPUT1(countryCodeIso3, stateCode, opts)

Create or update a tax

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.TaxesApi();

var countryCodeIso3 = "countryCodeIso3_example"; // String | The iso3 code of the country

var stateCode = "stateCode_example"; // String | The code of the state

var opts = { 
  'taxResource': new KnetikPlatformApiDocumentationLatest.StateTaxResource() // StateTaxResource | The tax object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateTaxUsingPUT1(countryCodeIso3, stateCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 
 **stateCode** | **String**| The code of the state | 
 **taxResource** | [**StateTaxResource**](StateTaxResource.md)| The tax object | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

