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
    define(['ApiClient', 'model/ClientResource', 'model/PageResourceRoleResource', 'model/RoleResource', 'model/UserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClientResource'), require('../model/PageResourceRoleResource'), require('../model/RoleResource'), require('../model/UserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.AuthRolesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ClientResource, root.KnetikPlatformApiDocumentationLatest.PageResourceRoleResource, root.KnetikPlatformApiDocumentationLatest.RoleResource, root.KnetikPlatformApiDocumentationLatest.UserResource);
  }
}(this, function(ApiClient, ClientResource, PageResourceRoleResource, RoleResource, UserResource) {
  'use strict';

  /**
   * AuthRoles service.
   * @module api/AuthRolesApi
   * @version latest

   */

  /**
   * Constructs a new AuthRolesApi. 
   * @alias module:api/AuthRolesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createRole operation.
     * @callback module:api/AuthRolesApi~createRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoleResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new role
     * @param {Object} opts Optional parameters
     * @param {module:model/RoleResource} opts.roleResource The role resource object
     * @param {module:api/AuthRolesApi~createRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoleResource}
     */
    this.createRole = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['roleResource'];


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
      var returnType = RoleResource;

      return this.apiClient.callApi(
        '/auth/roles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRole operation.
     * @callback module:api/AuthRolesApi~deleteRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a role
     * @param {String} role The role value
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, removes role from users/clients
     * @param {module:api/AuthRolesApi~deleteRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRole = function(role, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'role' is set
      if (role == undefined || role == null) {
        throw new Error("Missing the required parameter 'role' when calling deleteRole");
      }


      var pathParams = {
        'role': role
      };
      var queryParams = {
        'force': opts['force']
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
        '/auth/roles/{role}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientRoles operation.
     * @callback module:api/AuthRolesApi~getClientRolesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RoleResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get roles for a client
     * @param {String} clientKey The client key
     * @param {module:api/AuthRolesApi~getClientRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RoleResource>}
     */
    this.getClientRoles = function(clientKey, callback) {
      var postBody = null;

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling getClientRoles");
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
      var returnType = [RoleResource];

      return this.apiClient.callApi(
        '/auth/clients/{client_key}/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRole operation.
     * @callback module:api/AuthRolesApi~getRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoleResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single role
     * @param {String} role The role value
     * @param {module:api/AuthRolesApi~getRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoleResource}
     */
    this.getRole = function(role, callback) {
      var postBody = null;

      // verify the required parameter 'role' is set
      if (role == undefined || role == null) {
        throw new Error("Missing the required parameter 'role' when calling getRole");
      }


      var pathParams = {
        'role': role
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
      var returnType = RoleResource;

      return this.apiClient.callApi(
        '/auth/roles/{role}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoles operation.
     * @callback module:api/AuthRolesApi~getRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceRoleResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search roles
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @param {module:api/AuthRolesApi~getRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceRoleResource}
     */
    this.getRoles = function(opts, callback) {
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
      var returnType = PageResourceRoleResource;

      return this.apiClient.callApi(
        '/auth/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserRoles operation.
     * @callback module:api/AuthRolesApi~getUserRolesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RoleResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get roles for a user
     * @param {Number} userId The user&#39;s id
     * @param {module:api/AuthRolesApi~getUserRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RoleResource>}
     */
    this.getUserRoles = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserRoles");
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = [RoleResource];

      return this.apiClient.callApi(
        '/auth/users/{user_id}/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setClientRoles operation.
     * @callback module:api/AuthRolesApi~setClientRolesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set roles for a client
     * @param {String} clientKey The client key
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.rolesList The list of unique roles
     * @param {module:api/AuthRolesApi~setClientRolesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setClientRoles = function(clientKey, opts, callback) {
      opts = opts || {};
      var postBody = opts['rolesList'];

      // verify the required parameter 'clientKey' is set
      if (clientKey == undefined || clientKey == null) {
        throw new Error("Missing the required parameter 'clientKey' when calling setClientRoles");
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
        '/auth/clients/{client_key}/roles', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setPermissionsForRole operation.
     * @callback module:api/AuthRolesApi~setPermissionsForRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set permissions for a role
     * @param {String} role The role value
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.permissionsList The list of unique permissions
     * @param {module:api/AuthRolesApi~setPermissionsForRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setPermissionsForRole = function(role, opts, callback) {
      opts = opts || {};
      var postBody = opts['permissionsList'];

      // verify the required parameter 'role' is set
      if (role == undefined || role == null) {
        throw new Error("Missing the required parameter 'role' when calling setPermissionsForRole");
      }


      var pathParams = {
        'role': role
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
        '/auth/roles/{role}/permissions', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setUserRoles operation.
     * @callback module:api/AuthRolesApi~setUserRolesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set roles for a user
     * @param {Number} userId The user&#39;s id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.rolesList The list of unique roles
     * @param {module:api/AuthRolesApi~setUserRolesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setUserRoles = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['rolesList'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling setUserRoles");
      }


      var pathParams = {
        'user_id': userId
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
        '/auth/users/{user_id}/roles', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRole operation.
     * @callback module:api/AuthRolesApi~updateRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a role
     * @param {String} role The role value
     * @param {Object} opts Optional parameters
     * @param {module:model/RoleResource} opts.roleResource The role resource object
     * @param {module:api/AuthRolesApi~updateRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateRole = function(role, opts, callback) {
      opts = opts || {};
      var postBody = opts['roleResource'];

      // verify the required parameter 'role' is set
      if (role == undefined || role == null) {
        throw new Error("Missing the required parameter 'role' when calling updateRole");
      }


      var pathParams = {
        'role': role
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
        '/auth/roles/{role}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
