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
    define(['ApiClient', 'model/Maintenance', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Maintenance'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UtilMaintenanceApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Maintenance, root.KnetikPlatformApiDocumentationLatest.Result);
  }
}(this, function(ApiClient, Maintenance, Result) {
  'use strict';

  /**
   * UtilMaintenance service.
   * @module api/UtilMaintenanceApi
   * @version latest

   */

  /**
   * Constructs a new UtilMaintenanceApi. 
   * @alias module:api/UtilMaintenanceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteMaintenance operation.
     * @callback module:api/UtilMaintenanceApi~deleteMaintenanceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete maintenance info
     * @param {module:api/UtilMaintenanceApi~deleteMaintenanceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteMaintenance = function(callback) {
      var postBody = null;


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
      var returnType = null;

      return this.apiClient.callApi(
        '/maintenance', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMaintenance operation.
     * @callback module:api/UtilMaintenanceApi~getMaintenanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Maintenance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current maintenance info
     * Get current maintenance info. 404 if no maintenance.
     * @param {module:api/UtilMaintenanceApi~getMaintenanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Maintenance}
     */
    this.getMaintenance = function(callback) {
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
      var returnType = Maintenance;

      return this.apiClient.callApi(
        '/maintenance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setMaintenance operation.
     * @callback module:api/UtilMaintenanceApi~setMaintenanceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set current maintenance info
     * @param {Object} opts Optional parameters
     * @param {module:model/Maintenance} opts.maintenance The maintenance object
     * @param {module:api/UtilMaintenanceApi~setMaintenanceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setMaintenance = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['maintenance'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/maintenance', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMaintenance operation.
     * @callback module:api/UtilMaintenanceApi~updateMaintenanceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update current maintenance info
     * @param {Object} opts Optional parameters
     * @param {module:model/Maintenance} opts.maintenance The maintenance object
     * @param {module:api/UtilMaintenanceApi~updateMaintenanceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateMaintenance = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['maintenance'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/maintenance', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));