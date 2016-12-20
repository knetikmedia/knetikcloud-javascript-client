/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CityResource', 'model/CountryResource', 'model/CurrencyResource', 'model/StateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CityResource'), require('../model/CountryResource'), require('../model/CurrencyResource'), require('../model/StateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.LocationsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.CityResource, root.KnetikPlatformApiDocumentationLatest.CountryResource, root.KnetikPlatformApiDocumentationLatest.CurrencyResource, root.KnetikPlatformApiDocumentationLatest.StateResource);
  }
}(this, function(ApiClient, CityResource, CountryResource, CurrencyResource, StateResource) {
  'use strict';

  /**
   * Locations service.
   * @module api/LocationsApi
   * @version Latest
   */

  /**
   * Constructs a new LocationsApi. 
   * @alias module:api/LocationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the citiesUsingGET operation.
     * @callback module:api/LocationsApi~citiesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CityResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of a state&#39;s cities
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @param {module:api/LocationsApi~citiesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CityResource>}
     */
    this.citiesUsingGET = function(countryCodeIso3, stateCode, callback) {
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 == undefined || countryCodeIso3 == null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling citiesUsingGET");
      }

      // verify the required parameter 'stateCode' is set
      if (stateCode == undefined || stateCode == null) {
        throw new Error("Missing the required parameter 'stateCode' when calling citiesUsingGET");
      }


      var pathParams = {
        'country_code_iso3': countryCodeIso3,
        'state_code': stateCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [CityResource];

      return this.apiClient.callApi(
        '/location/countries/{country_code_iso3}/states/{state_code}/cities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the countriesUsingGET operation.
     * @callback module:api/LocationsApi~countriesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CountryResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of countries
     * @param {module:api/LocationsApi~countriesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CountryResource>}
     */
    this.countriesUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [CountryResource];

      return this.apiClient.callApi(
        '/location/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrencyByGeoLocationUsingGET operation.
     * @callback module:api/LocationsApi~getCurrencyByGeoLocationUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrencyResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the currency information of your country
     * Determined by geo ip location, currency to country mapping and a fallback setting
     * @param {module:api/LocationsApi~getCurrencyByGeoLocationUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrencyResource}
     */
    this.getCurrencyByGeoLocationUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CurrencyResource;

      return this.apiClient.callApi(
        '/location/geolocation/currency', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGeoLocationCountryUsingGET operation.
     * @callback module:api/LocationsApi~getGeoLocationCountryUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the iso3 code of your country
     * Determined by geo ip location
     * @param {module:api/LocationsApi~getGeoLocationCountryUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getGeoLocationCountryUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/location/geolocation/country', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the statesUsingGET operation.
     * @callback module:api/LocationsApi~statesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/StateResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of a country&#39;s states
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {module:api/LocationsApi~statesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/StateResource>}
     */
    this.statesUsingGET = function(countryCodeIso3, callback) {
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 == undefined || countryCodeIso3 == null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling statesUsingGET");
      }


      var pathParams = {
        'country_code_iso3': countryCodeIso3
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [StateResource];

      return this.apiClient.callApi(
        '/location/countries/{country_code_iso3}/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
