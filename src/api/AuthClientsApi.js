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
    define(['ApiClient', 'model/ClientResource', 'model/GrantTypeResource', 'model/PageClientResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClientResource'), require('../model/GrantTypeResource'), require('../model/PageClientResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.AuthClientsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ClientResource, root.KnetikPlatformApiDocumentationLatest.GrantTypeResource, root.KnetikPlatformApiDocumentationLatest.PageClientResource);
  }
}(this, function(ApiClient, ClientResource, GrantTypeResource, PageClientResource) {
  'use strict';

  /**
   * AuthClients service.
   * @module api/AuthClientsApi
   * @version Latest
   */

  /**
   * Constructs a new AuthClientsApi. 
   * @alias module:api/AuthClientsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the assignClientGrantTypesUsingPUT operation.
     * @callback module:api/AuthClientsApi~assignClientGrantTypesUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set grant types for a client
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.grantList A list of unique grant types
     * @param {module:api/AuthClientsApi~assignClientGrantTypesUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.assignClientGrantTypesUsingPUT = function(clientKey, opts, callback) {
      opts = opts || {};
      var postBody = opts['grantList'];

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling assignClientGrantTypesUsingPUT");
      }


      var pathParams = {
        'client_key': clientKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}/grant-types', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the assignClientRedirectUrisUsingPUT operation.
     * @callback module:api/AuthClientsApi~assignClientRedirectUrisUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set redirect uris for a client
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.redirectList A list of unique redirect uris
     * @param {module:api/AuthClientsApi~assignClientRedirectUrisUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.assignClientRedirectUrisUsingPUT = function(clientKey, opts, callback) {
      opts = opts || {};
      var postBody = opts['redirectList'];

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling assignClientRedirectUrisUsingPUT");
      }


      var pathParams = {
        'client_key': clientKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}/redirect-uris', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createClientUsingPOST operation.
     * @callback module:api/AuthClientsApi~createClientUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new client
     * @param {Object} opts Optional parameters
     * @param {module:model/ClientResource} opts.clientResource The client resource object
     * @param {module:api/AuthClientsApi~createClientUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClientResource}
     */
    this.createClientUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['clientResource'];


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
      var accepts = ['*/*'];
      var returnType = ClientResource;

      return this.apiClient.callApi(
        '/auth/clients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClientUsingDELETE operation.
     * @callback module:api/AuthClientsApi~deleteClientUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a client
     * @param {String} clientKey The key of the client
     * @param {module:api/AuthClientsApi~deleteClientUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteClientUsingDELETE = function(clientKey, callback) {
      var postBody = null;

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling deleteClientUsingDELETE");
      }


      var pathParams = {
        'client_key': clientKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientUsingGET operation.
     * @callback module:api/AuthClientsApi~getClientUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single client
     * @param {String} clientKey The key of the client
     * @param {module:api/AuthClientsApi~getClientUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClientResource}
     */
    this.getClientUsingGET = function(clientKey, callback) {
      var postBody = null;

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling getClientUsingGET");
      }


      var pathParams = {
        'client_key': clientKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ClientResource;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientsUsingGET operation.
     * @callback module:api/AuthClientsApi~getClientsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageClientResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search clients
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to 1)
     * @param {module:api/AuthClientsApi~getClientsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageClientResource}
     */
    this.getClientsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var accepts = ['*/*'];
      var returnType = PageClientResource;

      return this.apiClient.callApi(
        '/auth/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAvailableGrantTypesUsingGET operation.
     * @callback module:api/AuthClientsApi~listAvailableGrantTypesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GrantTypeResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List available client grant types
     * @param {module:api/AuthClientsApi~listAvailableGrantTypesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GrantTypeResource>}
     */
    this.listAvailableGrantTypesUsingGET = function(callback) {
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
      var accepts = ['*/*'];
      var returnType = [GrantTypeResource];

      return this.apiClient.callApi(
        '/auth/clients/grant-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClientUsingPUT operation.
     * @callback module:api/AuthClientsApi~updateClientUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a client
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {module:model/ClientResource} opts.clientResource The client resource object
     * @param {module:api/AuthClientsApi~updateClientUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateClientUsingPUT = function(clientKey, opts, callback) {
      opts = opts || {};
      var postBody = opts['clientResource'];

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling updateClientUsingPUT");
      }


      var pathParams = {
        'client_key': clientKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
