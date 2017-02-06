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
    define(['ApiClient', 'model/CommentResource', 'model/CommentSearch', 'model/PageResourceCommentResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CommentResource'), require('../model/CommentSearch'), require('../model/PageResourceCommentResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ContentCommentsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.CommentResource, root.KnetikPlatformApiDocumentationLatest.CommentSearch, root.KnetikPlatformApiDocumentationLatest.PageResourceCommentResource);
  }
}(this, function(ApiClient, CommentResource, CommentSearch, PageResourceCommentResource) {
  'use strict';

  /**
   * ContentComments service.
   * @module api/ContentCommentsApi
   * @version latest

   */

  /**
   * Constructs a new ContentCommentsApi. 
   * @alias module:api/ContentCommentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addComment operation.
     * @callback module:api/ContentCommentsApi~addCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommentResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new comment
     * @param {Object} opts Optional parameters
     * @param {module:model/CommentResource} opts.commentResource The comment to be added
     * @param {module:api/ContentCommentsApi~addCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommentResource}
     */
    this.addComment = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['commentResource'];


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
      var returnType = CommentResource;

      return this.apiClient.callApi(
        '/comments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteComment operation.
     * @callback module:api/ContentCommentsApi~deleteCommentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a comment
     * @param {Number} id The comment id
     * @param {module:api/ContentCommentsApi~deleteCommentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteComment = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteComment");
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
        '/comments/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getComment operation.
     * @callback module:api/ContentCommentsApi~getCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommentResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a comment
     * @param {Number} id The comment id
     * @param {module:api/ContentCommentsApi~getCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommentResource}
     */
    this.getComment = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getComment");
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
      var returnType = CommentResource;

      return this.apiClient.callApi(
        '/comments/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getComments operation.
     * @callback module:api/ContentCommentsApi~getCommentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceCommentResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a page of comments
     * @param {String} context Get comments by context type
     * @param {Number} contextId Get comments by context id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ContentCommentsApi~getCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceCommentResource}
     */
    this.getComments = function(context, contextId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'context' is set
      if (context == undefined || context == null) {
        throw new Error("Missing the required parameter 'context' when calling getComments");
      }

      // verify the required parameter 'contextId' is set
      if (contextId == undefined || contextId == null) {
        throw new Error("Missing the required parameter 'contextId' when calling getComments");
      }


      var pathParams = {
      };
      var queryParams = {
        'context': context,
        'context_id': contextId,
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceCommentResource;

      return this.apiClient.callApi(
        '/comments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchComments operation.
     * @callback module:api/ContentCommentsApi~searchCommentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommentSearch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search the comment index
     * The body is an ElasticSearch query json. Please see their &lt;a href&#x3D;&#39;https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html&#39;&gt;documentation&lt;/a&gt; for details on the format and search options
     * @param {Object} opts Optional parameters
     * @param {Object} opts.query The search query
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ContentCommentsApi~searchCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommentSearch}
     */
    this.searchComments = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['query'];


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CommentSearch;

      return this.apiClient.callApi(
        '/comments/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateComment operation.
     * @callback module:api/ContentCommentsApi~updateCommentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a comment
     * @param {Number} id The comment id
     * @param {Object} opts Optional parameters
     * @param {String} opts.content The comment content
     * @param {module:api/ContentCommentsApi~updateCommentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateComment = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['content'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateComment");
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
        '/comments/{id}/content', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
