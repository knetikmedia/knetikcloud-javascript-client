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
    define(['ApiClient', 'model/PageUserRelationshipResource', 'model/UserRelationshipResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageUserRelationshipResource'), require('../model/UserRelationshipResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UsersRelationshipsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageUserRelationshipResource, root.KnetikPlatformApiDocumentationLatest.UserRelationshipResource);
  }
}(this, function(ApiClient, PageUserRelationshipResource, UserRelationshipResource) {
  'use strict';

  /**
   * UsersRelationships service.
   * @module api/UsersRelationshipsApi
   * @version Latest
   */

  /**
   * Constructs a new UsersRelationshipsApi. 
   * @alias module:api/UsersRelationshipsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addRelationshipUsingPOST operation.
     * @callback module:api/UsersRelationshipsApi~addRelationshipUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRelationshipResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user relationship
     * @param {Object} opts Optional parameters
     * @param {module:model/UserRelationshipResource} opts.relationship The new relationship
     * @param {module:api/UsersRelationshipsApi~addRelationshipUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserRelationshipResource}
     */
    this.addRelationshipUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['relationship'];


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
      var returnType = UserRelationshipResource;

      return this.apiClient.callApi(
        '/users/relationships', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRelationshipUsingDELETE operation.
     * @callback module:api/UsersRelationshipsApi~deleteRelationshipUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user relationship
     * @param {Number} id The id of the relationship
     * @param {module:api/UsersRelationshipsApi~deleteRelationshipUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRelationshipUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRelationshipUsingDELETE");
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
        '/users/relationships/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRelationshipUsingGET operation.
     * @callback module:api/UsersRelationshipsApi~getRelationshipUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRelationshipResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user relationship
     * @param {Number} id The id of the relationship
     * @param {module:api/UsersRelationshipsApi~getRelationshipUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserRelationshipResource}
     */
    this.getRelationshipUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getRelationshipUsingGET");
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
      var returnType = UserRelationshipResource;

      return this.apiClient.callApi(
        '/users/relationships/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRelationshipsUsingGET operation.
     * @callback module:api/UsersRelationshipsApi~getRelationshipsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageUserRelationshipResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of user relationships
     * @param {module:api/UsersRelationshipsApi~getRelationshipsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageUserRelationshipResource}
     */
    this.getRelationshipsUsingGET = function(callback) {
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
      var returnType = PageUserRelationshipResource;

      return this.apiClient.callApi(
        '/users/relationships', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRelationshipUsingPUT operation.
     * @callback module:api/UsersRelationshipsApi~updateRelationshipUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRelationshipResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user relationship
     * @param {Number} id The id of the relationship
     * @param {Object} opts Optional parameters
     * @param {module:model/UserRelationshipResource} opts.relationship The new relationship
     * @param {module:api/UsersRelationshipsApi~updateRelationshipUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserRelationshipResource}
     */
    this.updateRelationshipUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['relationship'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateRelationshipUsingPUT");
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
      var returnType = UserRelationshipResource;

      return this.apiClient.callApi(
        '/users/relationships/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
