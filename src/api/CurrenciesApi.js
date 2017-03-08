/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
 *
 * OpenAPI spec version: latest 
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
    define(['ApiClient', 'model/CurrencyResource', 'model/PageResourceCurrencyResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CurrencyResource'), require('../model/PageResourceCurrencyResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.CurrenciesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.CurrencyResource, root.KnetikPlatformApiDocumentationLatest.PageResourceCurrencyResource, root.KnetikPlatformApiDocumentationLatest.Result);
  }
}(this, function(ApiClient, CurrencyResource, PageResourceCurrencyResource, Result) {
  'use strict';

  /**
   * Currencies service.
   * @module api/CurrenciesApi
   * @version latest

   */

  /**
   * Constructs a new CurrenciesApi. 
   * @alias module:api/CurrenciesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCurrency operation.
     * @callback module:api/CurrenciesApi~createCurrencyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrencyResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a currency
     * @param {Object} opts Optional parameters
     * @param {module:model/CurrencyResource} opts.currency The currency object
     * @param {module:api/CurrenciesApi~createCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrencyResource}
     */
    this.createCurrency = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['currency'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CurrencyResource;

      return this.apiClient.callApi(
        '/currencies', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCurrency operation.
     * @callback module:api/CurrenciesApi~deleteCurrencyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a currency
     * @param {String} code The currency code
     * @param {module:api/CurrenciesApi~deleteCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCurrency = function(code, callback) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling deleteCurrency");
      }


      var pathParams = {
        'code': code
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/currencies/{code}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrencies operation.
     * @callback module:api/CurrenciesApi~getCurrenciesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceCurrencyResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search currencies
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterEnabledCurrencies Filter for alternate currencies setup explicitely in system config
     * @param {String} opts.filterType Filter currencies by type.  Allowable values: (&#39;virtual&#39;, &#39;real&#39;)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @param {module:api/CurrenciesApi~getCurrenciesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceCurrencyResource}
     */
    this.getCurrencies = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_enabled_currencies': opts['filterEnabledCurrencies'],
        'filter_type': opts['filterType'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceCurrencyResource;

      return this.apiClient.callApi(
        '/currencies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrency operation.
     * @callback module:api/CurrenciesApi~getCurrencyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrencyResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single currency
     * @param {String} code The currency code
     * @param {module:api/CurrenciesApi~getCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrencyResource}
     */
    this.getCurrency = function(code, callback) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getCurrency");
      }


      var pathParams = {
        'code': code
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
        '/currencies/{code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCurrency operation.
     * @callback module:api/CurrenciesApi~updateCurrencyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a currency
     * @param {String} code The currency code
     * @param {Object} opts Optional parameters
     * @param {module:model/CurrencyResource} opts.currency The currency object
     * @param {module:api/CurrenciesApi~updateCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCurrency = function(code, opts, callback) {
      opts = opts || {};
      var postBody = opts['currency'];

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling updateCurrency");
      }


      var pathParams = {
        'code': code
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/currencies/{code}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
