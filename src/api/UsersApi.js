/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import NewPasswordRequest from '../model/NewPasswordRequest';
import PageResourceTemplateResource from '../model/PageResourceTemplateResource';
import PageResourceUserBaseResource from '../model/PageResourceUserBaseResource';
import PasswordResetRequest from '../model/PasswordResetRequest';
import Result from '../model/Result';
import StringWrapper from '../model/StringWrapper';
import TemplateResource from '../model/TemplateResource';
import UserResource from '../model/UserResource';

/**
* Users service.
* @module api/UsersApi
* @version 3.0.7
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a tag to a user
     * @param {Number} userId The id of the user
     * @param {module:model/StringWrapper} tag tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addUserTagWithHttpInfo(userId, tag) {
      let postBody = tag;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addUserTag");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling addUserTag");
      }


      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a tag to a user
     * @param {Number} userId The id of the user
     * @param {module:model/StringWrapper} tag tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addUserTag(userId, tag) {
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
    createUserTemplateWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['userTemplateResource'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TemplateResource;

      return this.apiClient.callApi(
        '/users/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    createUserTemplate(opts) {
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
    deleteUserTemplateWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUserTemplate");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'cascade': opts['cascade']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/users/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    deleteUserTemplate(id, opts) {
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
    getUserWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUser");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserResource;

      return this.apiClient.callApi(
        '/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single user
     * Additional private info is included as USERS_ADMIN
     * @param {String} id The id of the user or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResource}
     */
    getUser(id) {
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
    getUserTagsWithHttpInfo(userId) {
      let postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserTags");
      }


      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ['String'];

      return this.apiClient.callApi(
        '/users/{user_id}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List tags for a user
     * @param {Number} userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<'String'>}
     */
    getUserTags(userId) {
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
    getUserTemplateWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserTemplate");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TemplateResource;

      return this.apiClient.callApi(
        '/users/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single user template
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    getUserTemplate(id) {
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
    getUserTemplatesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourceTemplateResource;

      return this.apiClient.callApi(
        '/users/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getUserTemplates(opts) {
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
    getUsersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
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
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourceUserBaseResource;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getUsers(opts) {
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
    passwordResetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['newPasswordRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling passwordReset");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/users/{id}/password-reset', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    passwordReset(id, opts) {
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
    registerUserWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['userResource'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserResource;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    registerUser(opts) {
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
    removeUserTagWithHttpInfo(userId, tag) {
      let postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUserTag");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling removeUserTag");
      }


      let pathParams = {
        'user_id': userId,
        'tag': tag
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/tags/{tag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove a tag from a user
     * @param {Number} userId The id of the user
     * @param {String} tag The tag to remove
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeUserTag(userId, tag) {
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
    setPasswordWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['password'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setPassword");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/users/{id}/password', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    setPassword(id, opts) {
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
    startPasswordResetWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling startPasswordReset");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/users/{id}/password-reset', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Reset a user&#39;s password
     * A reset code will be generated and a &#39;forgot_password&#39; BRE event will be fired with that code.  The default system rule will send an email to the selected user if an email service has been setup. You can modify that rule in BRE to send an SMS instead or any other type of notification as you see fit
     * @param {Number} id The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    startPasswordReset(id) {
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
    submitPasswordResetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['passwordReset'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/users/password-reset', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    submitPasswordReset(opts) {
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
    updateUserWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['userResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateUser");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/users/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    updateUser(id, opts) {
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
    updateUserTemplateWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['userTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateUserTemplate");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TemplateResource;

      return this.apiClient.callApi(
        '/users/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    updateUserTemplate(id, opts) {
      return this.updateUserTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
