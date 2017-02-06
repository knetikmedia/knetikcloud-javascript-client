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
    define(['ApiClient', 'model/ClientResource', 'model/GrantTypeResource', 'model/PageResourceClientResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClientResource'), require('../model/GrantTypeResource'), require('../model/PageResourceClientResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.AuthClientsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ClientResource, root.KnetikPlatformApiDocumentationLatest.GrantTypeResource, root.KnetikPlatformApiDocumentationLatest.PageResourceClientResource);
  }
}(this, function(ApiClient, ClientResource, GrantTypeResource, PageResourceClientResource) {
  'use strict';

  /**
   * AuthClients service.
   * @module api/AuthClientsApi
   * @version latest

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
     * Callback function to receive the result of the createClient operation.
     * @callback module:api/AuthClientsApi~createClientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new client
     * @param {Object} opts Optional parameters
     * @param {module:model/ClientResource} opts.clientResource The client resource object
     * @param {module:api/AuthClientsApi~createClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClientResource}
     */
    this.createClient = function(opts, callback) {
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ClientResource;

      return this.apiClient.callApi(
        '/auth/clients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClient operation.
     * @callback module:api/AuthClientsApi~deleteClientCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a client
     * @param {String} clientKey The key of the client
     * @param {module:api/AuthClientsApi~deleteClientCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteClient = function(clientKey, callback) {
      var postBody = null;

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling deleteClient");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClient operation.
     * @callback module:api/AuthClientsApi~getClientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single client
     * @param {String} clientKey The key of the client
     * @param {module:api/AuthClientsApi~getClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClientResource}
     */
    this.getClient = function(clientKey, callback) {
      var postBody = null;

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling getClient");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ClientResource;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientGrantTypes operation.
     * @callback module:api/AuthClientsApi~getClientGrantTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GrantTypeResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List available client grant types
     * @param {module:api/AuthClientsApi~getClientGrantTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GrantTypeResource>}
     */
    this.getClientGrantTypes = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GrantTypeResource];

      return this.apiClient.callApi(
        '/auth/clients/grant-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClients operation.
     * @callback module:api/AuthClientsApi~getClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceClientResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search clients
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/AuthClientsApi~getClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceClientResource}
     */
    this.getClients = function(opts, callback) {
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceClientResource;

      return this.apiClient.callApi(
        '/auth/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setClientGrantTypes operation.
     * @callback module:api/AuthClientsApi~setClientGrantTypesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set grant types for a client
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.grantList A list of unique grant types
     * @param {module:api/AuthClientsApi~setClientGrantTypesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setClientGrantTypes = function(clientKey, opts, callback) {
      opts = opts || {};
      var postBody = opts['grantList'];

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling setClientGrantTypes");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}/grant-types', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setClientRedirectUris operation.
     * @callback module:api/AuthClientsApi~setClientRedirectUrisCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set redirect uris for a client
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.redirectList A list of unique redirect uris
     * @param {module:api/AuthClientsApi~setClientRedirectUrisCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setClientRedirectUris = function(clientKey, opts, callback) {
      opts = opts || {};
      var postBody = opts['redirectList'];

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling setClientRedirectUris");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}/redirect-uris', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClient operation.
     * @callback module:api/AuthClientsApi~updateClientCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a client
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {module:model/ClientResource} opts.clientResource The client resource object
     * @param {module:api/AuthClientsApi~updateClientCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateClient = function(clientKey, opts, callback) {
      opts = opts || {};
      var postBody = opts['clientResource'];

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling updateClient");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
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