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
    define(['ApiClient', 'model/ClientResource', 'model/GrantTypeResource', 'model/PageResourceClientResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClientResource'), require('../model/GrantTypeResource'), require('../model/PageResourceClientResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AuthClientsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ClientResource, root.KnetikCloud.GrantTypeResource, root.KnetikCloud.PageResourceClientResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, ClientResource, GrantTypeResource, PageResourceClientResource, Result) {
  'use strict';

  /**
   * AuthClients service.
   * @module api/AuthClientsApi
   * @version 3.0.8
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
     * Create a new client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/ClientResource} opts.clientResource The client resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientResource} and HTTP response
     */
    this.createClientWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['clientResource'];


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = ClientResource;

      return this.apiClient.callApi(
        '/auth/clients', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/ClientResource} opts.clientResource The client resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientResource}
     */
    this.createClient = function(opts) {
      return this.createClientWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {String} clientKey The key of the client
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteClientWithHttpInfo = function(clientKey) {
      var postBody = null;

      // verify the required parameter 'clientKey' is set
      if (clientKey === undefined || clientKey === null) {
        throw new Error("Missing the required parameter 'clientKey' when calling deleteClient");
      }


      var pathParams = {
        'client_key': clientKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {String} clientKey The key of the client
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteClient = function(clientKey) {
      return this.deleteClientWithHttpInfo(clientKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {String} clientKey The key of the client
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientResource} and HTTP response
     */
    this.getClientWithHttpInfo = function(clientKey) {
      var postBody = null;

      // verify the required parameter 'clientKey' is set
      if (clientKey === undefined || clientKey === null) {
        throw new Error("Missing the required parameter 'clientKey' when calling getClient");
      }


      var pathParams = {
        'client_key': clientKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClientResource;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {String} clientKey The key of the client
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientResource}
     */
    this.getClient = function(clientKey) {
      return this.getClientWithHttpInfo(clientKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List available client grant types
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GrantTypeResource>} and HTTP response
     */
    this.getClientGrantTypesWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GrantTypeResource];

      return this.apiClient.callApi(
        '/auth/clients/grant-types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List available client grant types
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GrantTypeResource>}
     */
    this.getClientGrantTypes = function() {
      return this.getClientGrantTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search clients
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceClientResource} and HTTP response
     */
    this.getClientsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageResourceClientResource;

      return this.apiClient.callApi(
        '/auth/clients', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search clients
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceClientResource}
     */
    this.getClients = function(opts) {
      return this.getClientsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set grant types for a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.grantList A list of unique grant types
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setClientGrantTypesWithHttpInfo = function(clientKey, opts) {
      opts = opts || {};
      var postBody = opts['grantList'];

      // verify the required parameter 'clientKey' is set
      if (clientKey === undefined || clientKey === null) {
        throw new Error("Missing the required parameter 'clientKey' when calling setClientGrantTypes");
      }


      var pathParams = {
        'client_key': clientKey
      };
      var queryParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}/grant-types', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set grant types for a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.grantList A list of unique grant types
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setClientGrantTypes = function(clientKey, opts) {
      return this.setClientGrantTypesWithHttpInfo(clientKey, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set redirect uris for a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.redirectList A list of unique redirect uris
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setClientRedirectUrisWithHttpInfo = function(clientKey, opts) {
      opts = opts || {};
      var postBody = opts['redirectList'];

      // verify the required parameter 'clientKey' is set
      if (clientKey === undefined || clientKey === null) {
        throw new Error("Missing the required parameter 'clientKey' when calling setClientRedirectUris");
      }


      var pathParams = {
        'client_key': clientKey
      };
      var queryParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}/redirect-uris', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set redirect uris for a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.redirectList A list of unique redirect uris
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setClientRedirectUris = function(clientKey, opts) {
      return this.setClientRedirectUrisWithHttpInfo(clientKey, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {module:model/ClientResource} opts.clientResource The client resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientResource} and HTTP response
     */
    this.updateClientWithHttpInfo = function(clientKey, opts) {
      opts = opts || {};
      var postBody = opts['clientResource'];

      // verify the required parameter 'clientKey' is set
      if (clientKey === undefined || clientKey === null) {
        throw new Error("Missing the required parameter 'clientKey' when calling updateClient");
      }


      var pathParams = {
        'client_key': clientKey
      };
      var queryParams = {
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
      var returnType = ClientResource;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CLIENTS_ADMIN
     * @param {String} clientKey The key of the client
     * @param {Object} opts Optional parameters
     * @param {module:model/ClientResource} opts.clientResource The client resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientResource}
     */
    this.updateClient = function(clientKey, opts) {
      return this.updateClientWithHttpInfo(clientKey, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
