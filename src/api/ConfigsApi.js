/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
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
    define(['ApiClient', 'model/Config', 'model/PageResourceConfig', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Config'), require('../model/PageResourceConfig'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ConfigsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Config, root.KnetikPlatformApiDocumentationLatest.PageResourceConfig, root.KnetikPlatformApiDocumentationLatest.Result);
  }
}(this, function(ApiClient, Config, PageResourceConfig, Result) {
  'use strict';

  /**
   * Configs service.
   * @module api/ConfigsApi
   * @version latest

   */

  /**
   * Constructs a new ConfigsApi. 
   * @alias module:api/ConfigsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createConfig operation.
     * @callback module:api/ConfigsApi~createConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Config} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new config
     * @param {Object} opts Optional parameters
     * @param {module:model/Config} opts.config The config object
     * @param {module:api/ConfigsApi~createConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Config}
     */
    this.createConfig = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['config'];


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
      var returnType = Config;

      return this.apiClient.callApi(
        '/configs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteConfig operation.
     * @callback module:api/ConfigsApi~deleteConfigCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing config
     * @param {String} name The config name
     * @param {module:api/ConfigsApi~deleteConfigCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteConfig = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteConfig");
      }


      var pathParams = {
        'name': name
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
        '/configs/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getConfig operation.
     * @callback module:api/ConfigsApi~getConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Config} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single config
     * Only configs that are public readable will be shown without admin access
     * @param {String} name The config name
     * @param {module:api/ConfigsApi~getConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Config}
     */
    this.getConfig = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getConfig");
      }


      var pathParams = {
        'name': name
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
      var returnType = Config;

      return this.apiClient.callApi(
        '/configs/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getConfigs operation.
     * @callback module:api/ConfigsApi~getConfigsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search configs
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterSearch Filter for configs whose name contains the given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to 1)
     * @param {module:api/ConfigsApi~getConfigsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceConfig}
     */
    this.getConfigs = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_search': opts['filterSearch'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceConfig;

      return this.apiClient.callApi(
        '/configs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateConfig operation.
     * @callback module:api/ConfigsApi~updateConfigCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing config
     * @param {String} name The config name
     * @param {Object} opts Optional parameters
     * @param {module:model/Config} opts.config The config object
     * @param {module:api/ConfigsApi~updateConfigCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateConfig = function(name, opts, callback) {
      opts = opts || {};
      var postBody = opts['config'];

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling updateConfig");
      }


      var pathParams = {
        'name': name
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
        '/configs/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
