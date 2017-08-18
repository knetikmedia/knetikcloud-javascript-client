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
    define(['ApiClient', 'model/NewPasswordRequest', 'model/PageResourceTemplateResource', 'model/PageResourceUserBaseResource', 'model/PasswordResetRequest', 'model/Result', 'model/StringWrapper', 'model/TemplateResource', 'model/UserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NewPasswordRequest'), require('../model/PageResourceTemplateResource'), require('../model/PageResourceUserBaseResource'), require('../model/PasswordResetRequest'), require('../model/Result'), require('../model/StringWrapper'), require('../model/TemplateResource'), require('../model/UserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UsersApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.NewPasswordRequest, root.KnetikCloud.PageResourceTemplateResource, root.KnetikCloud.PageResourceUserBaseResource, root.KnetikCloud.PasswordResetRequest, root.KnetikCloud.Result, root.KnetikCloud.StringWrapper, root.KnetikCloud.TemplateResource, root.KnetikCloud.UserResource);
  }
}(this, function(ApiClient, NewPasswordRequest, PageResourceTemplateResource, PageResourceUserBaseResource, PasswordResetRequest, Result, StringWrapper, TemplateResource, UserResource) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 3.0.7
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
     * Add a tag to a user
     * @param {Number} userId The id of the user
     * @param {module:model/StringWrapper} tag tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addUserTagWithHttpInfo = function(userId, tag) {
      var postBody = tag;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addUserTag");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling addUserTag");
      }


      var pathParams = {
        'user_id': userId
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
        '/users/{user_id}/tags', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a tag to a user
     * @param {Number} userId The id of the user
     * @param {module:model/StringWrapper} tag tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addUserTag = function(userId, tag) {
      return this.addUserTagWithHttpInfo(userId, tag)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a user template
     * User Templates define a type of user and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.userTemplateResource The user template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    this.createUserTemplateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['userTemplateResource'];


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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/users/templates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a user template
     * User Templates define a type of user and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.userTemplateResource The user template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    this.createUserTemplate = function(opts) {
      return this.createUserTemplateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a user template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteUserTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUserTemplate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade'],
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
        '/users/templates/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a user template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteUserTemplate = function(id, opts) {
      return this.deleteUserTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single user
     * Additional private info is included as USERS_ADMIN
     * @param {String} id The id of the user or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResource} and HTTP response
     */
    this.getUserWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUser");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/users/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single user
     * Additional private info is included as USERS_ADMIN
     * @param {String} id The id of the user or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResource}
     */
    this.getUser = function(id) {
      return this.getUserWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List tags for a user
     * @param {Number} userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<'String'>} and HTTP response
     */
    this.getUserTagsWithHttpInfo = function(userId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserTags");
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/users/{user_id}/tags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List tags for a user
     * @param {Number} userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<'String'>}
     */
    this.getUserTags = function(userId) {
      return this.getUserTagsWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single user template
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    this.getUserTemplateWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserTemplate");
      }


      var pathParams = {
        'id': id
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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/users/templates/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single user template
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    this.getUserTemplate = function(id) {
      return this.getUserTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search user templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceTemplateResource} and HTTP response
     */
    this.getUserTemplatesWithHttpInfo = function(opts) {
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
      var returnType = PageResourceTemplateResource;

      return this.apiClient.callApi(
        '/users/templates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search user templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceTemplateResource}
     */
    this.getUserTemplates = function(opts) {
      return this.getUserTemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


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
     * @param {String} opts.filterRole Filter for users with a given role
     * @param {String} opts.filterSearch Filter for users whose display_name starts with the provided string, or username if display_name is null
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceUserBaseResource} and HTTP response
     */
    this.getUsersWithHttpInfo = function(opts) {
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
        'filter_role': opts['filterRole'],
        'filter_search': opts['filterSearch'],
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceUserBaseResource;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

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
     * @param {String} opts.filterRole Filter for users with a given role
     * @param {String} opts.filterSearch Filter for users whose display_name starts with the provided string, or username if display_name is null
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceUserBaseResource}
     */
    this.getUsers = function(opts) {
      return this.getUsersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Choose a new password after a reset
     * Finish resetting a user&#39;s password using the secret provided from the password-reset endpoint.  Password should be in plain text and will be encrypted on receipt. Use SSL for security.
     * @param {Number} id The id of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/NewPasswordRequest} opts.newPasswordRequest The new password request object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.passwordResetWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['newPasswordRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling passwordReset");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Choose a new password after a reset
     * Finish resetting a user&#39;s password using the secret provided from the password-reset endpoint.  Password should be in plain text and will be encrypted on receipt. Use SSL for security.
     * @param {Number} id The id of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/NewPasswordRequest} opts.newPasswordRequest The new password request object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.passwordReset = function(id, opts) {
      return this.passwordResetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register a new user
     * Password should be in plain text and will be encrypted on receipt. Use SSL for security
     * @param {Object} opts Optional parameters
     * @param {module:model/UserResource} opts.userResource The user resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResource} and HTTP response
     */
    this.registerUserWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['userResource'];


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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserResource;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Register a new user
     * Password should be in plain text and will be encrypted on receipt. Use SSL for security
     * @param {Object} opts Optional parameters
     * @param {module:model/UserResource} opts.userResource The user resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResource}
     */
    this.registerUser = function(opts) {
      return this.registerUserWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a tag from a user
     * @param {Number} userId The id of the user
     * @param {String} tag The tag to remove
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.removeUserTagWithHttpInfo = function(userId, tag) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUserTag");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling removeUserTag");
      }


      var pathParams = {
        'user_id': userId,
        'tag': tag
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
        '/users/{user_id}/tags/{tag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove a tag from a user
     * @param {Number} userId The id of the user
     * @param {String} tag The tag to remove
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.removeUserTag = function(userId, tag) {
      return this.removeUserTagWithHttpInfo(userId, tag)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set a user&#39;s password
     * Password should be in plain text and will be encrypted on receipt. Use SSL for security.
     * @param {Number} id The id of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.password The new plain text password
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setPasswordWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['password'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setPassword");
      }


      var pathParams = {
        'id': id
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
        '/users/{id}/password', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set a user&#39;s password
     * Password should be in plain text and will be encrypted on receipt. Use SSL for security.
     * @param {Number} id The id of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.password The new plain text password
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setPassword = function(id, opts) {
      return this.setPasswordWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reset a user&#39;s password
     * A reset code will be generated and a &#39;forgot_password&#39; BRE event will be fired with that code.  The default system rule will send an email to the selected user if an email service has been setup. You can modify that rule in BRE to send an SMS instead or any other type of notification as you see fit
     * @param {Number} id The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.startPasswordResetWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling startPasswordReset");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Reset a user&#39;s password
     * A reset code will be generated and a &#39;forgot_password&#39; BRE event will be fired with that code.  The default system rule will send an email to the selected user if an email service has been setup. You can modify that rule in BRE to send an SMS instead or any other type of notification as you see fit
     * @param {Number} id The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.startPasswordReset = function(id) {
      return this.startPasswordResetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reset a user&#39;s password without user id
     * A reset code will be generated and a &#39;forgot_password&#39; BRE event will be fired with that code.  The default system rule will send an email to the selected user if an email service has been setup. You can modify that rule in BRE to send an SMS instead or any other type of notification as you see fit.  Must submit their email, username, or mobile phone number
     * @param {Object} opts Optional parameters
     * @param {module:model/PasswordResetRequest} opts.passwordReset An object containing one of three methods to look up a user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.submitPasswordResetWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['passwordReset'];


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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/password-reset', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Reset a user&#39;s password without user id
     * A reset code will be generated and a &#39;forgot_password&#39; BRE event will be fired with that code.  The default system rule will send an email to the selected user if an email service has been setup. You can modify that rule in BRE to send an SMS instead or any other type of notification as you see fit.  Must submit their email, username, or mobile phone number
     * @param {Object} opts Optional parameters
     * @param {module:model/PasswordResetRequest} opts.passwordReset An object containing one of three methods to look up a user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.submitPasswordReset = function(opts) {
      return this.submitPasswordResetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a user
     * Password will not be edited on this endpoint, use password specific endpoints.
     * @param {String} id The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {module:model/UserResource} opts.userResource The user resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateUserWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['userResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateUser");
      }


      var pathParams = {
        'id': id
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
        '/users/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a user
     * Password will not be edited on this endpoint, use password specific endpoints.
     * @param {String} id The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {module:model/UserResource} opts.userResource The user resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateUser = function(id, opts) {
      return this.updateUserWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a user template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.userTemplateResource The user template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    this.updateUserTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['userTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateUserTemplate");
      }


      var pathParams = {
        'id': id
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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/users/templates/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a user template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.userTemplateResource The user template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    this.updateUserTemplate = function(id, opts) {
      return this.updateUserTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
