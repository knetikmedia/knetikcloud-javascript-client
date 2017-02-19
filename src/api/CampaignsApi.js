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
    define(['ApiClient', 'model/CampaignResource', 'model/PageResourceCampaignResource', 'model/PageResourceChallengeResource', 'model/PageResourceTemplateResource', 'model/Result', 'model/TemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CampaignResource'), require('../model/PageResourceCampaignResource'), require('../model/PageResourceChallengeResource'), require('../model/PageResourceTemplateResource'), require('../model/Result'), require('../model/TemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.CampaignsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.CampaignResource, root.KnetikPlatformApiDocumentationLatest.PageResourceCampaignResource, root.KnetikPlatformApiDocumentationLatest.PageResourceChallengeResource, root.KnetikPlatformApiDocumentationLatest.PageResourceTemplateResource, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.TemplateResource);
  }
}(this, function(ApiClient, CampaignResource, PageResourceCampaignResource, PageResourceChallengeResource, PageResourceTemplateResource, Result, TemplateResource) {
  'use strict';

  /**
   * Campaigns service.
   * @module api/CampaignsApi
   * @version latest

   */

  /**
   * Constructs a new CampaignsApi. 
   * @alias module:api/CampaignsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addChallengeToCampaign operation.
     * @callback module:api/CampaignsApi~addChallengeToCampaignCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a challenge to a campaign
     * @param {Number} id The id of the campaign
     * @param {Object} opts Optional parameters
     * @param {Number} opts.challengeId The id of the challenge
     * @param {module:api/CampaignsApi~addChallengeToCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addChallengeToCampaign = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['challengeId'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling addChallengeToCampaign");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/campaigns/{id}/challenges', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCampaign operation.
     * @callback module:api/CampaignsApi~createCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampaignResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a campaign
     * @param {Object} opts Optional parameters
     * @param {module:model/CampaignResource} opts.campaignResource The campaign resource object
     * @param {module:api/CampaignsApi~createCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CampaignResource}
     */
    this.createCampaign = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['campaignResource'];


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
      var returnType = CampaignResource;

      return this.apiClient.callApi(
        '/campaigns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCampaignTemplate operation.
     * @callback module:api/CampaignsApi~createCampaignTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a campaign template
     * Campaign Templates define a type of campaign and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.campaignTemplateResource The campaign template resource object
     * @param {module:api/CampaignsApi~createCampaignTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.createCampaignTemplate = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['campaignTemplateResource'];


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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/campaigns/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCampaign operation.
     * @callback module:api/CampaignsApi~deleteCampaignCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a campaign
     * @param {Number} id The campaign id
     * @param {module:api/CampaignsApi~deleteCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCampaign = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCampaign");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/campaigns/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCampaignTemplate operation.
     * @callback module:api/CampaignsApi~deleteCampaignTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a campaign template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @param {module:api/CampaignsApi~deleteCampaignTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCampaignTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCampaignTemplate");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/campaigns/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaign operation.
     * @callback module:api/CampaignsApi~getCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampaignResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a single campaign
     * @param {Number} id The campaign id
     * @param {module:api/CampaignsApi~getCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CampaignResource}
     */
    this.getCampaign = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getCampaign");
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
      var returnType = CampaignResource;

      return this.apiClient.callApi(
        '/campaigns/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignChallenges operation.
     * @callback module:api/CampaignsApi~getCampaignChallengesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceChallengeResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the challenges associated with a campaign
     * @param {Number} id The campaign id
     * @param {module:api/CampaignsApi~getCampaignChallengesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceChallengeResource}
     */
    this.getCampaignChallenges = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getCampaignChallenges");
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
      var returnType = PageResourceChallengeResource;

      return this.apiClient.callApi(
        '/campaigns/{id}/challenges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignTemplate operation.
     * @callback module:api/CampaignsApi~getCampaignTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single campaign template
     * @param {String} id The id of the template
     * @param {module:api/CampaignsApi~getCampaignTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.getCampaignTemplate = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getCampaignTemplate");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/campaigns/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignTemplates operation.
     * @callback module:api/CampaignsApi~getCampaignTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search campaign templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/CampaignsApi~getCampaignTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceTemplateResource}
     */
    this.getCampaignTemplates = function(opts, callback) {
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceTemplateResource;

      return this.apiClient.callApi(
        '/campaigns/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaigns operation.
     * @callback module:api/CampaignsApi~getCampaignsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceCampaignResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search campaigns
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterActive Filter for campaigns that are active
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/CampaignsApi~getCampaignsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceCampaignResource}
     */
    this.getCampaigns = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_active': opts['filterActive'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceCampaignResource;

      return this.apiClient.callApi(
        '/campaigns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeChallengeFromCampaign operation.
     * @callback module:api/CampaignsApi~removeChallengeFromCampaignCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a challenge from a campaign
     * @param {Number} campaignId The campaign id
     * @param {Number} id The challenge id
     * @param {module:api/CampaignsApi~removeChallengeFromCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeChallengeFromCampaign = function(campaignId, id, callback) {
      var postBody = null;

      // verify the required parameter 'campaignId' is set
      if (campaignId == undefined || campaignId == null) {
        throw new Error("Missing the required parameter 'campaignId' when calling removeChallengeFromCampaign");
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling removeChallengeFromCampaign");
      }


      var pathParams = {
        'campaign_id': campaignId,
        'id': id
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
        '/campaigns/{campaign_id}/challenges/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCampaign operation.
     * @callback module:api/CampaignsApi~updateCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampaignResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a campaign
     * @param {Number} id The campaign id
     * @param {Object} opts Optional parameters
     * @param {module:model/CampaignResource} opts.campaignResource The campaign resource object
     * @param {module:api/CampaignsApi~updateCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CampaignResource}
     */
    this.updateCampaign = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['campaignResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateCampaign");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CampaignResource;

      return this.apiClient.callApi(
        '/campaigns/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCampaignTemplate operation.
     * @callback module:api/CampaignsApi~updateCampaignTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an campaign template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.campaignTemplateResource The campaign template resource object
     * @param {module:api/CampaignsApi~updateCampaignTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.updateCampaignTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['campaignTemplateResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateCampaignTemplate");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/campaigns/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
