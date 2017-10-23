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
    define(['ApiClient', 'model/DispositionCount', 'model/DispositionResource', 'model/PageResourceDispositionResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DispositionCount'), require('../model/DispositionResource'), require('../model/PageResourceDispositionResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.DispositionsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.DispositionCount, root.KnetikCloud.DispositionResource, root.KnetikCloud.PageResourceDispositionResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, DispositionCount, DispositionResource, PageResourceDispositionResource, Result) {
  'use strict';

  /**
   * Dispositions service.
   * @module api/DispositionsApi
   * @version 3.0.8
   */

  /**
   * Constructs a new DispositionsApi. 
   * @alias module:api/DispositionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a new disposition
     * @param {Object} opts Optional parameters
     * @param {module:model/DispositionResource} opts.disposition The new disposition record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DispositionResource} and HTTP response
     */
    this.addDispositionWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['disposition'];


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
      var returnType = DispositionResource;

      return this.apiClient.callApi(
        '/dispositions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a new disposition
     * @param {Object} opts Optional parameters
     * @param {module:model/DispositionResource} opts.disposition The new disposition record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DispositionResource}
     */
    this.addDisposition = function(opts) {
      return this.addDispositionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a disposition
     * @param {Number} id The id of the disposition record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDispositionWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDisposition");
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
        '/dispositions/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a disposition
     * @param {Number} id The id of the disposition record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDisposition = function(id) {
      return this.deleteDispositionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a disposition
     * @param {Number} id The id of the disposition record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DispositionResource} and HTTP response
     */
    this.getDispositionWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDisposition");
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
      var returnType = DispositionResource;

      return this.apiClient.callApi(
        '/dispositions/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a disposition
     * @param {Number} id The id of the disposition record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DispositionResource}
     */
    this.getDisposition = function(id) {
      return this.getDispositionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of disposition counts
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterContext Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47
     * @param {String} opts.filterOwner Filter for dispositions from a specific user by id or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DispositionCount>} and HTTP response
     */
    this.getDispositionCountsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_context': opts['filterContext'],
        'filter_owner': opts['filterOwner'],
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
      var returnType = [DispositionCount];

      return this.apiClient.callApi(
        '/dispositions/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a list of disposition counts
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterContext Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47
     * @param {String} opts.filterOwner Filter for dispositions from a specific user by id or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DispositionCount>}
     */
    this.getDispositionCounts = function(opts) {
      return this.getDispositionCountsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a page of dispositions
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterContext Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47
     * @param {String} opts.filterOwner Filter for dispositions from a specific user by id or &#39;me&#39;
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceDispositionResource} and HTTP response
     */
    this.getDispositionsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_context': opts['filterContext'],
        'filter_owner': opts['filterOwner'],
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
      var returnType = PageResourceDispositionResource;

      return this.apiClient.callApi(
        '/dispositions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a page of dispositions
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterContext Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47
     * @param {String} opts.filterOwner Filter for dispositions from a specific user by id or &#39;me&#39;
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceDispositionResource}
     */
    this.getDispositions = function(opts) {
      return this.getDispositionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
