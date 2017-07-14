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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BreTriggerResource', 'model/LevelingResource', 'model/PageResourceLevelingResource', 'model/PageResourceUserLevelingResource', 'model/Result', 'model/UserLevelingResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BreTriggerResource'), require('../model/LevelingResource'), require('../model/PageResourceLevelingResource'), require('../model/PageResourceUserLevelingResource'), require('../model/Result'), require('../model/UserLevelingResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.GamificationLevelingApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.BreTriggerResource, root.KnetikPlatformApiDocumentationLatest.LevelingResource, root.KnetikPlatformApiDocumentationLatest.PageResourceLevelingResource, root.KnetikPlatformApiDocumentationLatest.PageResourceUserLevelingResource, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.UserLevelingResource);
  }
}(this, function(ApiClient, BreTriggerResource, LevelingResource, PageResourceLevelingResource, PageResourceUserLevelingResource, Result, UserLevelingResource) {
  'use strict';

  /**
   * GamificationLeveling service.
   * @module api/GamificationLevelingApi
   * @version latest

   */

  /**
   * Constructs a new GamificationLevelingApi. 
   * @alias module:api/GamificationLevelingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a level schema
     * @param {Object} opts Optional parameters
     * @param {module:model/LevelingResource} opts.level The level schema definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LevelingResource} and HTTP response
     */
    this.createLevelWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['level'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LevelingResource;

      return this.apiClient.callApi(
        '/leveling', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a level schema
     * @param {Object} opts Optional parameters
     * @param {module:model/LevelingResource} opts.level The level schema definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LevelingResource}
     */
    this.createLevel = function(opts) {
      return this.createLevelWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a level
     * @param {String} name The level schema name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteLevelWithHttpInfo = function(name) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteLevel");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/leveling/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a level
     * @param {String} name The level schema name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteLevel = function(name) {
      return this.deleteLevelWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a level
     * @param {String} name The level schema name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LevelingResource} and HTTP response
     */
    this.getLevelWithHttpInfo = function(name) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getLevel");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LevelingResource;

      return this.apiClient.callApi(
        '/leveling/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a level
     * @param {String} name The level schema name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LevelingResource}
     */
    this.getLevel = function(name) {
      return this.getLevelWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the list of triggers that can be used to trigger a leveling progress update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BreTriggerResource>} and HTTP response
     */
    this.getLevelTriggersWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [BreTriggerResource];

      return this.apiClient.callApi(
        '/leveling/triggers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the list of triggers that can be used to trigger a leveling progress update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BreTriggerResource>}
     */
    this.getLevelTriggers = function() {
      return this.getLevelTriggersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search levels
     * Get a list of levels schemas with optional filtering
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for level schemas whose name contains a given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceLevelingResource} and HTTP response
     */
    this.getLevelsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_name': opts['filterName'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceLevelingResource;

      return this.apiClient.callApi(
        '/leveling', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search levels
     * Get a list of levels schemas with optional filtering
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for level schemas whose name contains a given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceLevelingResource}
     */
    this.getLevels = function(opts) {
      return this.getLevelsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a user&#39;s progress for a given level schema
     * @param {Number} userId The id of the user
     * @param {String} name The level schema name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserLevelingResource} and HTTP response
     */
    this.getUserLevelWithHttpInfo = function(userId, name) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserLevel");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getUserLevel");
      }


      var pathParams = {
        'user_id': userId,
        'name': name
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserLevelingResource;

      return this.apiClient.callApi(
        '/users/{user_id}/leveling/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a user&#39;s progress for a given level schema
     * @param {Number} userId The id of the user
     * @param {String} name The level schema name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserLevelingResource}
     */
    this.getUserLevel = function(userId, name) {
      return this.getUserLevelWithHttpInfo(userId, name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a user&#39;s progress for all level schemas
     * Filtering and sorting is based on the LevelingResource object, not the UserLevelingResource that is returned here.
     * @param {Number} userId The id of the user
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for level schemas whose name contains a given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceUserLevelingResource} and HTTP response
     */
    this.getUserLevelsWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserLevels");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'filter_name': opts['filterName'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceUserLevelingResource;

      return this.apiClient.callApi(
        '/users/{user_id}/leveling', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a user&#39;s progress for all level schemas
     * Filtering and sorting is based on the LevelingResource object, not the UserLevelingResource that is returned here.
     * @param {Number} userId The id of the user
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for level schemas whose name contains a given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceUserLevelingResource}
     */
    this.getUserLevels = function(userId, opts) {
      return this.getUserLevelsWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update or create a leveling progress record for a user
     * If no progress record yet exists for the user, it will be created. Otherwise the provided value will be added to it. May be negative. If progress meets or exceeds the level&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.
     * @param {Number} userId The id of the user
     * @param {String} name The level schema name
     * @param {Object} opts Optional parameters
     * @param {Number} opts.progress The amount of progress to add
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.incrementProgressWithHttpInfo = function(userId, name, opts) {
      opts = opts || {};
      var postBody = opts['progress'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling incrementProgress");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling incrementProgress");
      }


      var pathParams = {
        'user_id': userId,
        'name': name
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/leveling/{name}/progress', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update or create a leveling progress record for a user
     * If no progress record yet exists for the user, it will be created. Otherwise the provided value will be added to it. May be negative. If progress meets or exceeds the level&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.
     * @param {Number} userId The id of the user
     * @param {String} name The level schema name
     * @param {Object} opts Optional parameters
     * @param {Number} opts.progress The amount of progress to add
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.incrementProgress = function(userId, name, opts) {
      return this.incrementProgressWithHttpInfo(userId, name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set leveling progress for a user
     * If no progress record yet exists for the user, it will be created. Otherwise it will be updated to the provided value. If progress meets or exceeds the level&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.
     * @param {Number} userId The id of the user
     * @param {String} name The level schema name
     * @param {Object} opts Optional parameters
     * @param {Number} opts.progress The new progress amount
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setProgressWithHttpInfo = function(userId, name, opts) {
      opts = opts || {};
      var postBody = opts['progress'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling setProgress");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling setProgress");
      }


      var pathParams = {
        'user_id': userId,
        'name': name
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/leveling/{name}/progress', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set leveling progress for a user
     * If no progress record yet exists for the user, it will be created. Otherwise it will be updated to the provided value. If progress meets or exceeds the level&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.
     * @param {Number} userId The id of the user
     * @param {String} name The level schema name
     * @param {Object} opts Optional parameters
     * @param {Number} opts.progress The new progress amount
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setProgress = function(userId, name, opts) {
      return this.setProgressWithHttpInfo(userId, name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a level
     * @param {String} name The level schema name
     * @param {Object} opts Optional parameters
     * @param {module:model/LevelingResource} opts.newLevel The level schema definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LevelingResource} and HTTP response
     */
    this.updateLevelWithHttpInfo = function(name, opts) {
      opts = opts || {};
      var postBody = opts['newLevel'];

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling updateLevel");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LevelingResource;

      return this.apiClient.callApi(
        '/leveling/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a level
     * @param {String} name The level schema name
     * @param {Object} opts Optional parameters
     * @param {module:model/LevelingResource} opts.newLevel The level schema definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LevelingResource}
     */
    this.updateLevel = function(name, opts) {
      return this.updateLevelWithHttpInfo(name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
