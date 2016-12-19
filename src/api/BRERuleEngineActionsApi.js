/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    define(['ApiClient', 'model/ActionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ActionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.BRERuleEngineActionsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ActionResource);
  }
}(this, function(ApiClient, ActionResource) {
  'use strict';

  /**
   * BRERuleEngineActions service.
   * @module api/BRERuleEngineActionsApi
   * @version Latest
   */

  /**
   * Constructs a new BRERuleEngineActionsApi. 
   * @alias module:api/BRERuleEngineActionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getActionsUsingGET operation.
     * @callback module:api/BRERuleEngineActionsApi~getActionsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ActionResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of available actions
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filterCategory Filter for actions that are within a specific category
     * @param {String} opts.filterName Filter for actions that have names containing the given string
     * @param {module:api/BRERuleEngineActionsApi~getActionsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ActionResource>}
     */
    this.getActionsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_category': opts['filterCategory'],
        'filter_name': opts['filterName']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [ActionResource];

      return this.apiClient.callApi(
        '/bre/actions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
