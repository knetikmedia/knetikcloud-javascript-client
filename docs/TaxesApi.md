# KnetikPlatformApiDocumentationLatest.TaxesApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCountryTax**](TaxesApi.md#createCountryTax) | **POST** /tax/countries | Create a country tax
[**createStateTax**](TaxesApi.md#createStateTax) | **POST** /tax/countries/{country_code_iso3}/states | Create a state tax
[**deleteCountryTax**](TaxesApi.md#deleteCountryTax) | **DELETE** /tax/countries/{country_code_iso3} | Delete an existing tax
[**deleteStateTax**](TaxesApi.md#deleteStateTax) | **DELETE** /tax/countries/{country_code_iso3}/states/{state_code} | Delete an existing state tax
[**getCountryTax**](TaxesApi.md#getCountryTax) | **GET** /tax/countries/{country_code_iso3} | Get a single tax
[**getCountryTaxes**](TaxesApi.md#getCountryTaxes) | **GET** /tax/countries | List and search taxes
[**getStateTax**](TaxesApi.md#getStateTax) | **GET** /tax/countries/{country_code_iso3}/states/{state_code} | Get a single state tax
[**getStateTaxesForCountries**](TaxesApi.md#getStateTaxesForCountries) | **GET** /tax/states | List and search taxes across all countries
[**getStateTaxesForCountry**](TaxesApi.md#getStateTaxesForCountry) | **GET** /tax/countries/{country_code_iso3}/states | List and search taxes within a country
[**updateCountryTax**](TaxesApi.md#updateCountryTax) | **PUT** /tax/countries/{country_code_iso3} | Create or update a tax
[**updateStateTax**](TaxesApi.md#updateStateTax) | **PUT** /tax/countries/{country_code_iso3}/states/{state_code} | Create or update a state tax


<a name="createCountryTax"></a>
# **createCountryTax**
> CountryTaxResource createCountryTax(opts)

Create a country tax

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
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCountryTax(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxResource** | [**CountryTaxResource**](CountryTaxResource.md)| The tax object | [optional] 

### Return type

[**CountryTaxResource**](CountryTaxResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createStateTax"></a>
# **createStateTax**
> StateTaxResource createStateTax(countryCodeIso3, opts)

Create a state tax

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
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createStateTax(countryCodeIso3, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 
 **taxResource** | [**StateTaxResource**](StateTaxResource.md)| The tax object | [optional] 

### Return type

[**StateTaxResource**](StateTaxResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCountryTax"></a>
# **deleteCountryTax**
> deleteCountryTax(countryCodeIso3)

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
apiInstance.deleteCountryTax(countryCodeIso3, callback);
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

<a name="deleteStateTax"></a>
# **deleteStateTax**
> deleteStateTax(countryCodeIso3, stateCode)

Delete an existing state tax

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
apiInstance.deleteStateTax(countryCodeIso3, stateCode, callback);
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

<a name="getCountryTax"></a>
# **getCountryTax**
> CountryTaxResource getCountryTax(countryCodeIso3)

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
apiInstance.getCountryTax(countryCodeIso3, callback);
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

<a name="getCountryTaxes"></a>
# **getCountryTaxes**
> PageResourceCountryTaxResource getCountryTaxes(opts)

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
apiInstance.getCountryTaxes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to name:ASC]

### Return type

[**PageResourceCountryTaxResource**](PageResourceCountryTaxResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStateTax"></a>
# **getStateTax**
> StateTaxResource getStateTax(countryCodeIso3, stateCode)

Get a single state tax

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
apiInstance.getStateTax(countryCodeIso3, stateCode, callback);
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

<a name="getStateTaxesForCountries"></a>
# **getStateTaxesForCountries**
> PageResourceStateTaxResource getStateTaxesForCountries(opts)

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
apiInstance.getStateTaxesForCountries(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to name:ASC]

### Return type

[**PageResourceStateTaxResource**](PageResourceStateTaxResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStateTaxesForCountry"></a>
# **getStateTaxesForCountry**
> PageResourceStateTaxResource getStateTaxesForCountry(countryCodeIso3, opts)

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
apiInstance.getStateTaxesForCountry(countryCodeIso3, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to name:ASC]

### Return type

[**PageResourceStateTaxResource**](PageResourceStateTaxResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCountryTax"></a>
# **updateCountryTax**
> CountryTaxResource updateCountryTax(countryCodeIso3, opts)

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
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCountryTax(countryCodeIso3, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 
 **taxResource** | [**CountryTaxResource**](CountryTaxResource.md)| The tax object | [optional] 

### Return type

[**CountryTaxResource**](CountryTaxResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateStateTax"></a>
# **updateStateTax**
> StateTaxResource updateStateTax(countryCodeIso3, stateCode, opts)

Create or update a state tax

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
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateStateTax(countryCodeIso3, stateCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 
 **stateCode** | **String**| The code of the state | 
 **taxResource** | [**StateTaxResource**](StateTaxResource.md)| The tax object | [optional] 

### Return type

[**StateTaxResource**](StateTaxResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

