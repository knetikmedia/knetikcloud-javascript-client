# KnetikPlatformApiDocumentationLatest.LocationsApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCities**](LocationsApi.md#getCities) | **GET** /location/countries/{country_code_iso3}/states/{state_code}/cities | Get a list of a state&#39;s cities
[**getCountries1**](LocationsApi.md#getCountries1) | **GET** /location/countries | Get a list of countries
[**getCountries2**](LocationsApi.md#getCountries2) | **GET** /location/countries/{country_code_iso3}/states | Get a list of a country&#39;s states
[**getCountryByGeoLocation**](LocationsApi.md#getCountryByGeoLocation) | **GET** /location/geolocation/country | Get the iso3 code of your country
[**getCurrencyByGeoLocation**](LocationsApi.md#getCurrencyByGeoLocation) | **GET** /location/geolocation/currency | Get the currency information of your country


<a name="getCities"></a>
# **getCities**
> [CityResource] getCities(countryCodeIso3, stateCode)

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
apiInstance.getCities(countryCodeIso3, stateCode, callback);
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

<a name="getCountries1"></a>
# **getCountries1**
> [CountryResource] getCountries1()

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
apiInstance.getCountries1(callback);
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

<a name="getCountries2"></a>
# **getCountries2**
> [StateResource] getCountries2(countryCodeIso3)

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
apiInstance.getCountries2(countryCodeIso3, callback);
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

<a name="getCountryByGeoLocation"></a>
# **getCountryByGeoLocation**
> &#39;String&#39; getCountryByGeoLocation()

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
apiInstance.getCountryByGeoLocation(callback);
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

<a name="getCurrencyByGeoLocation"></a>
# **getCurrencyByGeoLocation**
> CurrencyResource getCurrencyByGeoLocation()

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
apiInstance.getCurrencyByGeoLocation(callback);
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

