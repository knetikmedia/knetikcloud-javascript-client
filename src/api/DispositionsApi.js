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
    define(['ApiClient', 'model/DispositionCount', 'model/DispositionResource', 'model/PageDispositionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DispositionCount'), require('../model/DispositionResource'), require('../model/PageDispositionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.DispositionsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.DispositionCount, root.KnetikPlatformApiDocumentationLatest.DispositionResource, root.KnetikPlatformApiDocumentationLatest.PageDispositionResource);
  }
}(this, function(ApiClient, DispositionCount, DispositionResource, PageDispositionResource) {
  'use strict';

  /**
   * Dispositions service.
   * @module api/DispositionsApi
   * @version Latest
   */

  /**
   * Constructs a new DispositionsApi. 
   * @alias module:api/DispositionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addDispositionUsingPOST operation.
     * @callback module:api/DispositionsApi~addDispositionUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispositionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new disposition. 
     * @param {Object} opts Optional parameters
     * @param {module:model/DispositionResource} opts.disposition The new disposition record
     * @param {module:api/DispositionsApi~addDispositionUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DispositionResource}
     */
    this.addDispositionUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['disposition'];


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
      var returnType = DispositionResource;

      return this.apiClient.callApi(
        '/dispositions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDispositionUsingDELETE operation.
     * @callback module:api/DispositionsApi~deleteDispositionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a disposition
     * @param {Number} id The id of the disposition record
     * @param {module:api/DispositionsApi~deleteDispositionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDispositionUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDispositionUsingDELETE");
      }


      var pathParams = {
        'id': id
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
        '/dispositions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDispositionCountUsingGET operation.
     * @callback module:api/DispositionsApi~getDispositionCountUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DispositionCount>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of disposition counts
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterContext Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47
     * @param {String} opts.filterOwner Filter for dispositions from a specific user by id or &#39;me&#39;
     * @param {module:api/DispositionsApi~getDispositionCountUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DispositionCount>}
     */
    this.getDispositionCountUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_context': opts['filterContext'],
        'filter_owner': opts['filterOwner']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [DispositionCount];

      return this.apiClient.callApi(
        '/dispositions/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDispositionUsingGET operation.
     * @callback module:api/DispositionsApi~getDispositionUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispositionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a disposition
     * @param {Number} id The id of the disposition record
     * @param {module:api/DispositionsApi~getDispositionUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DispositionResource}
     */
    this.getDispositionUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getDispositionUsingGET");
      }


      var pathParams = {
        'id': id
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
      var returnType = DispositionResource;

      return this.apiClient.callApi(
        '/dispositions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDispositionsUsingGET operation.
     * @callback module:api/DispositionsApi~getDispositionsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageDispositionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a page of dispositions
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterContext Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47
     * @param {String} opts.filterOwner Filter for dispositions from a specific user by id or &#39;me&#39;
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/DispositionsApi~getDispositionsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageDispositionResource}
     */
    this.getDispositionsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_context': opts['filterContext'],
        'filter_owner': opts['filterOwner'],
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
      var returnType = PageDispositionResource;

      return this.apiClient.callApi(
        '/dispositions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
