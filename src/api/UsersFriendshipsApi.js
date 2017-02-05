/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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
    define(['ApiClient', 'model/PageResourceSimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceSimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UsersFriendshipsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceSimpleUserResource);
  }
}(this, function(ApiClient, PageResourceSimpleUserResource) {
  'use strict';

  /**
   * UsersFriendships service.
   * @module api/UsersFriendshipsApi
   * @version latest

   */

  /**
   * Constructs a new UsersFriendshipsApi. 
   * @alias module:api/UsersFriendshipsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addFriendUsingPOST operation.
     * @callback module:api/UsersFriendshipsApi~addFriendUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a friend
     * As a user, either creates or confirm a pending request. As an admin, call this endpoint twice while inverting the IDs to create a confirmed friendship.
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @param {Number} id The id of the user to befriend
     * @param {module:api/UsersFriendshipsApi~addFriendUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addFriendUsingPOST = function(userId, id, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling addFriendUsingPOST");
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling addFriendUsingPOST");
      }


      var pathParams = {
        'user_id': userId,
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
        '/users/{user_id}/friends/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the connectUsingTokenUsingPOST operation.
     * @callback module:api/UsersFriendshipsApi~connectUsingTokenUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Redeem friendship token
     * Immediately connects the requested user with the user mapped by the provided invite token
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @param {Object} opts Optional parameters
     * @param {String} opts.token The invite token
     * @param {module:api/UsersFriendshipsApi~connectUsingTokenUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.connectUsingTokenUsingPOST = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['token'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling connectUsingTokenUsingPOST");
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
        '/users/{user_id}/friends/tokens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFriendsUsingGET operation.
     * @callback module:api/UsersFriendshipsApi~getFriendsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceSimpleUserResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get friends list
     * @param {String} userId The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/UsersFriendshipsApi~getFriendsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceSimpleUserResource}
     */
    this.getFriendsUsingGET = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getFriendsUsingGET");
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = PageResourceSimpleUserResource;

      return this.apiClient.callApi(
        '/users/{user_id}/friends', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInviteTokenUsingGET operation.
     * @callback module:api/UsersFriendshipsApi~getInviteTokenUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the invite token
     * This is a unique invite token that allows direct connection to the request user.  Exposing that token presents privacy issues if the token is leaked. Use friend request flow instead if confirmation is required
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @param {module:api/UsersFriendshipsApi~getInviteTokenUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getInviteTokenUsingGET = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getInviteTokenUsingGET");
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/users/{user_id}/invite-token', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvitesUsingGET operation.
     * @callback module:api/UsersFriendshipsApi~getInvitesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceSimpleUserResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pending invites
     * Invites that the specified user received
     * @param {String} userId The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/UsersFriendshipsApi~getInvitesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceSimpleUserResource}
     */
    this.getInvitesUsingGET = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getInvitesUsingGET");
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = PageResourceSimpleUserResource;

      return this.apiClient.callApi(
        '/users/{user_id}/invites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeFriendUsingDELETE operation.
     * @callback module:api/UsersFriendshipsApi~removeFriendUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove or decline a friend
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @param {Number} id The id of the user to befriend
     * @param {module:api/UsersFriendshipsApi~removeFriendUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeFriendUsingDELETE = function(userId, id, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling removeFriendUsingDELETE");
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling removeFriendUsingDELETE");
      }


      var pathParams = {
        'user_id': userId,
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
        '/users/{user_id}/friends/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
