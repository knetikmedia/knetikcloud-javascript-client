# KnetikCloud.LocationsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCountries**](LocationsApi.md#getCountries) | **GET** /location/countries | Get a list of countries
[**getCountryByGeoLocation**](LocationsApi.md#getCountryByGeoLocation) | **GET** /location/geolocation/country | Get the iso3 code of your country
[**getCountryStates**](LocationsApi.md#getCountryStates) | **GET** /location/countries/{country_code_iso3}/states | Get a list of a country&#39;s states
[**getCurrencyByGeoLocation**](LocationsApi.md#getCurrencyByGeoLocation) | **GET** /location/geolocation/currency | Get the currency information of your country


<a name="getCountries"></a>
# **getCountries**
> [CountryResource] getCountries()

Get a list of countries

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.LocationsApi();
apiInstance.getCountries().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="getCountryByGeoLocation"></a>
# **getCountryByGeoLocation**
> &#39;String&#39; getCountryByGeoLocation()

Get the iso3 code of your country

Determined by geo ip location

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.LocationsApi();
apiInstance.getCountryByGeoLocation().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="getCountryStates"></a>
# **getCountryStates**
> [StateResource] getCountryStates(countryCodeIso3)

Get a list of a country&#39;s states

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.LocationsApi();

let countryCodeIso3 = "countryCodeIso3_example"; // String | The iso3 code of the country

apiInstance.getCountryStates(countryCodeIso3).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="getCurrencyByGeoLocation"></a>
# **getCurrencyByGeoLocation**
> CurrencyResource getCurrencyByGeoLocation()

Get the currency information of your country

Determined by geo ip location, currency to country mapping and a fallback setting

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.LocationsApi();
apiInstance.getCurrencyByGeoLocation().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

