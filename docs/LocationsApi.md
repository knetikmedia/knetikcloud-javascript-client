# KnetikPlatformApiDocumentationLatest.LocationsApi

All URIs are relative to *https://integration.knetikcloud.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**citiesUsingGET**](LocationsApi.md#citiesUsingGET) | **GET** /location/countries/{country_code_iso3}/states/{state_code}/cities | Get a list of a state&#39;s cities
[**countriesUsingGET**](LocationsApi.md#countriesUsingGET) | **GET** /location/countries | Get a list of countries
[**getCurrencyByGeoLocationUsingGET**](LocationsApi.md#getCurrencyByGeoLocationUsingGET) | **GET** /location/geolocation/currency | Get the currency information of your country
[**getGeoLocationCountryUsingGET**](LocationsApi.md#getGeoLocationCountryUsingGET) | **GET** /location/geolocation/country | Get the iso3 code of your country
[**statesUsingGET**](LocationsApi.md#statesUsingGET) | **GET** /location/countries/{country_code_iso3}/states | Get a list of a country&#39;s states


<a name="citiesUsingGET"></a>
# **citiesUsingGET**
> [CityResource] citiesUsingGET(countryCodeIso3, stateCode)

Get a list of a state&#39;s cities

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LocationsApi();

var countryCodeIso3 = "countryCodeIso3_example"; // String | The iso3 code of the country

var stateCode = "stateCode_example"; // String | The code of the state


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.citiesUsingGET(countryCodeIso3, stateCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 
 **stateCode** | **String**| The code of the state | 

### Return type

[**[CityResource]**](CityResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="countriesUsingGET"></a>
# **countriesUsingGET**
> [CountryResource] countriesUsingGET()

Get a list of countries

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LocationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.countriesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CountryResource]**](CountryResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrencyByGeoLocationUsingGET"></a>
# **getCurrencyByGeoLocationUsingGET**
> CurrencyResource getCurrencyByGeoLocationUsingGET()

Get the currency information of your country

Determined by geo ip location, currency to country mapping and a fallback setting

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LocationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrencyByGeoLocationUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CurrencyResource**](CurrencyResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGeoLocationCountryUsingGET"></a>
# **getGeoLocationCountryUsingGET**
> &#39;String&#39; getGeoLocationCountryUsingGET()

Get the iso3 code of your country

Determined by geo ip location

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LocationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGeoLocationCountryUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="statesUsingGET"></a>
# **statesUsingGET**
> [StateResource] statesUsingGET(countryCodeIso3)

Get a list of a country&#39;s states

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');

var apiInstance = new KnetikPlatformApiDocumentationLatest.LocationsApi();

var countryCodeIso3 = "countryCodeIso3_example"; // String | The iso3 code of the country


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statesUsingGET(countryCodeIso3, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCodeIso3** | **String**| The iso3 code of the country | 

### Return type

[**[StateResource]**](StateResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

