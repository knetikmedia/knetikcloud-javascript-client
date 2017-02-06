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
    define(['ApiClient', 'model/NewPasswordRequest', 'model/PageResourceTemplateResource', 'model/PageResourceUserBaseResource', 'model/TemplateResource', 'model/UserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NewPasswordRequest'), require('../model/PageResourceTemplateResource'), require('../model/PageResourceUserBaseResource'), require('../model/TemplateResource'), require('../model/UserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UsersApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.NewPasswordRequest, root.KnetikPlatformApiDocumentationLatest.PageResourceTemplateResource, root.KnetikPlatformApiDocumentationLatest.PageResourceUserBaseResource, root.KnetikPlatformApiDocumentationLatest.TemplateResource, root.KnetikPlatformApiDocumentationLatest.UserResource);
  }
}(this, function(ApiClient, NewPasswordRequest, PageResourceTemplateResource, PageResourceUserBaseResource, TemplateResource, UserResource) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version latest

   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addUserTag operation.
     * @callback module:api/UsersApi~addUserTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a tag to a user
     * @param {Number} userId The id of the user
     * @param {String} tag tag
     * @param {module:api/UsersApi~addUserTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addUserTag = function(userId, tag, callback) {
      var postBody = tag;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling addUserTag");
      }

      // verify the required parameter 'tag' is set
      if (tag == undefined || tag == null) {
        throw new Error("Missing the required parameter 'tag' when calling addUserTag");
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
        '/users/{user_id}/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserTemplate operation.
     * @callback module:api/UsersApi~createUserTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user template
     * User Templates define a type of user and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.userTemplateResource The user template resource object
     * @param {module:api/UsersApi~createUserTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.createUserTemplate = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['userTemplateResource'];


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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/users/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserTemplate operation.
     * @callback module:api/UsersApi~deleteUserTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @param {module:api/UsersApi~deleteUserTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUserTemplate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade']
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
        '/users/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UsersApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single user
     * Additional private info is included as USERS_ADMIN
     * @param {String} id The id of the user or &#39;me&#39;
     * @param {module:api/UsersApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResource}
     */
    this.getUser = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getUser");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserResource;

      return this.apiClient.callApi(
        '/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTags operation.
     * @callback module:api/UsersApi~getUserTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List tags for a user
     * @param {Number} userId The id of the user
     * @param {module:api/UsersApi~getUserTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getUserTags = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserTags");
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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/users/{user_id}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTemplate operation.
     * @callback module:api/UsersApi~getUserTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single user template
     * @param {String} id The id of the template
     * @param {module:api/UsersApi~getUserTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.getUserTemplate = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getUserTemplate");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/users/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTemplates operation.
     * @callback module:api/UsersApi~getUserTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search user templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/UsersApi~getUserTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceTemplateResource}
     */
    this.getUserTemplates = function(opts, callback) {
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
      var returnType = PageResourceTemplateResource;

      return this.apiClient.callApi(
        '/users/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:api/UsersApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUserBaseResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search users
     * Additional private info is included as USERS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterDisplayname Filter for users whose display name starts with provided string.
     * @param {String} opts.filterEmail Filter for users whose email starts with provided string. Requires USERS_ADMIN permission
     * @param {String} opts.filterFirstname Filter for users whose first name starts with provided string. Requires USERS_ADMIN permission
     * @param {String} opts.filterFullname Filter for users whose full name starts with provided string. Requires USERS_ADMIN permission
     * @param {String} opts.filterLastname Filter for users whose last name starts with provided string. Requires USERS_ADMIN permission
     * @param {String} opts.filterUsername Filter for users whose username starts with the provided string. Requires USERS_ADMIN permission
     * @param {String} opts.filterTag Filter for users who have a given tag
     * @param {String} opts.filterGroup Filter for users in a given group, by unique name
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/UsersApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUserBaseResource}
     */
    this.getUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_displayname': opts['filterDisplayname'],
        'filter_email': opts['filterEmail'],
        'filter_firstname': opts['filterFirstname'],
        'filter_fullname': opts['filterFullname'],
        'filter_lastname': opts['filterLastname'],
        'filter_username': opts['filterUsername'],
        'filter_tag': opts['filterTag'],
        'filter_group': opts['filterGroup'],
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
      var returnType = PageResourceUserBaseResource;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the passwordReset operation.
     * @callback module:api/UsersApi~passwordResetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Choose a new password after a reset
     * Finish resetting a user&#39;s password using the secret provided from the password-reset endpoint.  Password should be in plain text and will be encrypted on receipt. Use SSL for security.
     * @param {Number} id The id of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/NewPasswordRequest} opts.newPasswordRequest The new password request object
     * @param {module:api/UsersApi~passwordResetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.passwordReset = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['newPasswordRequest'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling passwordReset");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{id}/password-reset', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registerUser operation.
     * @callback module:api/UsersApi~registerUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a new user
     * Password should be in plain text and will be encrypted on receipt. Use SSL for security
     * @param {Object} opts Optional parameters
     * @param {module:model/UserResource} opts.userResource The user resource object
     * @param {module:api/UsersApi~registerUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResource}
     */
    this.registerUser = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['userResource'];


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
      var returnType = UserResource;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeUserTag operation.
     * @callback module:api/UsersApi~removeUserTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a tag from a user
     * @param {Number} userId The id of the user
     * @param {String} tag The tag to remove
     * @param {module:api/UsersApi~removeUserTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeUserTag = function(userId, tag, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUserTag");
      }

      // verify the required parameter 'tag' is set
      if (tag == undefined || tag == null) {
        throw new Error("Missing the required parameter 'tag' when calling removeUserTag");
      }


      var pathParams = {
        'user_id': userId,
        'tag': tag
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
        '/users/{user_id}/tags/{tag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setPassword operation.
     * @callback module:api/UsersApi~setPasswordCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a user&#39;s password
     * Password should be in plain text and will be encrypted on receipt. Use SSL for security.
     * @param {Number} id The id of the user
     * @param {Object} opts Optional parameters
     * @param {String} opts.password The new plain text password
     * @param {module:api/UsersApi~setPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setPassword = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['password'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling setPassword");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{id}/password', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startPasswordReset operation.
     * @callback module:api/UsersApi~startPasswordResetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset a user&#39;s password
     * A reset code will be generated and a &#39;forgot_password&#39; BRE event will be fired with that code; this can be routed to the user as needed and submitted to the &#39;choose a new password&#39; endpoint.
     * @param {Number} id The id of the user
     * @param {module:api/UsersApi~startPasswordResetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startPasswordReset = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling startPasswordReset");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{id}/password-reset', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UsersApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user
     * Password will not be edited on this endpoint, use password specific endpoints.
     * @param {String} id The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {module:model/UserResource} opts.userResource The user resource object
     * @param {module:api/UsersApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateUser = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['userResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateUser");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserTemplate operation.
     * @callback module:api/UsersApi~updateUserTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.userTemplateResource The user template resource object
     * @param {module:api/UsersApi~updateUserTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateUserTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['userTemplateResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateUserTemplate");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
