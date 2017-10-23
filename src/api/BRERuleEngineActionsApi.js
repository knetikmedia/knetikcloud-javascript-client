/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ActionResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ActionResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.BRERuleEngineActionsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ActionResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, ActionResource, Result) {
  'use strict';

  /**
   * BRERuleEngineActions service.
   * @module api/BRERuleEngineActionsApi
   * @version 3.0.8
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
     * Get a list of available actions
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filterCategory Filter for actions that are within a specific category
     * @param {String} opts.filterName Filter for actions that have names containing the given string
     * @param {String} opts.filterTags Filter for actions that have all of the given tags (comma separated list)
     * @param {String} opts.filterSearch Filter for actions containing the given words somewhere within name, description and tags
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ActionResource>} and HTTP response
     */
    this.getBREActionsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_category': opts['filterCategory'],
        'filter_name': opts['filterName'],
        'filter_tags': opts['filterTags'],
        'filter_search': opts['filterSearch'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ActionResource];

      return this.apiClient.callApi(
        '/bre/actions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of available actions
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filterCategory Filter for actions that are within a specific category
     * @param {String} opts.filterName Filter for actions that have names containing the given string
     * @param {String} opts.filterTags Filter for actions that have all of the given tags (comma separated list)
     * @param {String} opts.filterSearch Filter for actions containing the given words somewhere within name, description and tags
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ActionResource>}
     */
    this.getBREActions = function(opts) {
      return this.getBREActionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
