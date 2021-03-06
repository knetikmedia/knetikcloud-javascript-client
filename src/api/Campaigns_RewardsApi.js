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
    define(['ApiClient', 'model/PageResourceRewardSetResource', 'model/Result', 'model/RewardSetResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceRewardSetResource'), require('../model/Result'), require('../model/RewardSetResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.Campaigns_RewardsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceRewardSetResource, root.KnetikCloud.Result, root.KnetikCloud.RewardSetResource);
  }
}(this, function(ApiClient, PageResourceRewardSetResource, Result, RewardSetResource) {
  'use strict';

  /**
   * Campaigns_Rewards service.
   * @module api/Campaigns_RewardsApi
   * @version 3.0.9
   */

  /**
   * Constructs a new Campaigns_RewardsApi. 
   * @alias module:api/Campaigns_RewardsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a reward set
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; REWARDS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/RewardSetResource} opts.rewardSetResource The reward set resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RewardSetResource} and HTTP response
     */
    this.createRewardSetWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['rewardSetResource'];


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
      var returnType = RewardSetResource;

      return this.apiClient.callApi(
        '/rewards', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a reward set
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; REWARDS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/RewardSetResource} opts.rewardSetResource The reward set resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RewardSetResource}
     */
    this.createRewardSet = function(opts) {
      return this.createRewardSetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a reward set
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; REWARDS_ADMIN
     * @param {Number} id The reward id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteRewardSetWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRewardSet");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/rewards/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a reward set
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; REWARDS_ADMIN
     * @param {Number} id The reward id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteRewardSet = function(id) {
      return this.deleteRewardSetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single reward set
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id The reward id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RewardSetResource} and HTTP response
     */
    this.getRewardSetWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRewardSet");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RewardSetResource;

      return this.apiClient.callApi(
        '/rewards/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single reward set
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id The reward id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RewardSetResource}
     */
    this.getRewardSet = function(id) {
      return this.getRewardSetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search reward sets
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceRewardSetResource} and HTTP response
     */
    this.getRewardSetsWithHttpInfo = function(opts) {
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
      var returnType = PageResourceRewardSetResource;

      return this.apiClient.callApi(
        '/rewards', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search reward sets
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceRewardSetResource}
     */
    this.getRewardSets = function(opts) {
      return this.getRewardSetsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a reward set
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; REWARDS_ADMIN
     * @param {Number} id The reward id
     * @param {Object} opts Optional parameters
     * @param {module:model/RewardSetResource} opts.rewardSetResource The reward set resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RewardSetResource} and HTTP response
     */
    this.updateRewardSetWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['rewardSetResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateRewardSet");
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
      var returnType = RewardSetResource;

      return this.apiClient.callApi(
        '/rewards/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a reward set
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; REWARDS_ADMIN
     * @param {Number} id The reward id
     * @param {Object} opts Optional parameters
     * @param {module:model/RewardSetResource} opts.rewardSetResource The reward set resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RewardSetResource}
     */
    this.updateRewardSet = function(id, opts) {
      return this.updateRewardSetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
