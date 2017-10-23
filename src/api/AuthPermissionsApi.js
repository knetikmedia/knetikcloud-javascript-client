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
    define(['ApiClient', 'model/PageResourcePermissionResource', 'model/PermissionResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourcePermissionResource'), require('../model/PermissionResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AuthPermissionsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourcePermissionResource, root.KnetikCloud.PermissionResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, PageResourcePermissionResource, PermissionResource, Result) {
  'use strict';

  /**
   * AuthPermissions service.
   * @module api/AuthPermissionsApi
   * @version 3.0.8
   */

  /**
   * Constructs a new AuthPermissionsApi. 
   * @alias module:api/AuthPermissionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new permission
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PermissionResource} and HTTP response
     */
    this.createPermissionWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['permissionResource'];


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
      var returnType = PermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new permission
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PermissionResource}
     */
    this.createPermission = function(opts) {
      return this.createPermissionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, removes permission assigned to roles
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deletePermissionWithHttpInfo = function(permission, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'permission' is set
      if (permission === undefined || permission === null) {
        throw new Error("Missing the required parameter 'permission' when calling deletePermission");
      }


      var pathParams = {
        'permission': permission
      };
      var queryParams = {
        'force': opts['force'],
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
        '/auth/permissions/{permission}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, removes permission assigned to roles
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deletePermission = function(permission, opts) {
      return this.deletePermissionWithHttpInfo(permission, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single permission
     * @param {String} permission The permission value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PermissionResource} and HTTP response
     */
    this.getPermissionWithHttpInfo = function(permission) {
      var postBody = null;

      // verify the required parameter 'permission' is set
      if (permission === undefined || permission === null) {
        throw new Error("Missing the required parameter 'permission' when calling getPermission");
      }


      var pathParams = {
        'permission': permission
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
      var returnType = PermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions/{permission}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single permission
     * @param {String} permission The permission value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PermissionResource}
     */
    this.getPermission = function(permission) {
      return this.getPermissionWithHttpInfo(permission)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search permissions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to permission:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourcePermissionResource} and HTTP response
     */
    this.getPermissionsWithHttpInfo = function(opts) {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourcePermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search permissions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to permission:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourcePermissionResource}
     */
    this.getPermissions = function(opts) {
      return this.getPermissionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PermissionResource} and HTTP response
     */
    this.updatePermissionWithHttpInfo = function(permission, opts) {
      opts = opts || {};
      var postBody = opts['permissionResource'];

      // verify the required parameter 'permission' is set
      if (permission === undefined || permission === null) {
        throw new Error("Missing the required parameter 'permission' when calling updatePermission");
      }


      var pathParams = {
        'permission': permission
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
      var returnType = PermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions/{permission}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PermissionResource}
     */
    this.updatePermission = function(permission, opts) {
      return this.updatePermissionWithHttpInfo(permission, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
