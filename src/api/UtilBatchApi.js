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
    define(['ApiClient', 'model/Batch', 'model/BatchReturn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Batch'), require('../model/BatchReturn'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UtilBatchApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Batch, root.KnetikPlatformApiDocumentationLatest.BatchReturn);
  }
}(this, function(ApiClient, Batch, BatchReturn) {
  'use strict';

  /**
   * UtilBatch service.
   * @module api/UtilBatchApi
   * @version Latest
   */

  /**
   * Constructs a new UtilBatchApi. 
   * @alias module:api/UtilBatchApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBatchPOSTUsingPOST operation.
     * @callback module:api/UtilBatchApi~getBatchPOSTUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request to run API call given the method, content type, path url, and body of request
     * @param {Object} opts Optional parameters
     * @param {module:model/Batch} opts.batch The batch object
     * @param {module:api/UtilBatchApi~getBatchPOSTUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBatchPOSTUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['batch'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/batch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
