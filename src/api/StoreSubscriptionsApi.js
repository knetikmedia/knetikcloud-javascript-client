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
    define(['ApiClient', 'model/PageResourceSubscriptionResource', 'model/PageResourceSubscriptionTemplateResource', 'model/Result', 'model/SubscriptionResource', 'model/SubscriptionTemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceSubscriptionResource'), require('../model/PageResourceSubscriptionTemplateResource'), require('../model/Result'), require('../model/SubscriptionResource'), require('../model/SubscriptionTemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceSubscriptionResource, root.KnetikPlatformApiDocumentationLatest.PageResourceSubscriptionTemplateResource, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.SubscriptionResource, root.KnetikPlatformApiDocumentationLatest.SubscriptionTemplateResource);
  }
}(this, function(ApiClient, PageResourceSubscriptionResource, PageResourceSubscriptionTemplateResource, Result, SubscriptionResource, SubscriptionTemplateResource) {
  'use strict';

  /**
   * StoreSubscriptions service.
   * @module api/StoreSubscriptionsApi
   * @version latest

   */

  /**
   * Constructs a new StoreSubscriptionsApi. 
   * @alias module:api/StoreSubscriptionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createSubscription operation.
     * @callback module:api/StoreSubscriptionsApi~createSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a subscription item and associated plans
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionResource} opts.subscriptionResource The subscription to be created
     * @param {module:api/StoreSubscriptionsApi~createSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionResource}
     */
    this.createSubscription = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['subscriptionResource'];


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
      var returnType = SubscriptionResource;

      return this.apiClient.callApi(
        '/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSubscriptionTemplate operation.
     * @callback module:api/StoreSubscriptionsApi~createSubscriptionTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a subscription template
     * Subscription Templates define a type of subscription and the properties they have.
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionTemplateResource} opts.subscriptionTemplateResource The new subscription template
     * @param {module:api/StoreSubscriptionsApi~createSubscriptionTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionTemplateResource}
     */
    this.createSubscriptionTemplate = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['subscriptionTemplateResource'];


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
      var returnType = SubscriptionTemplateResource;

      return this.apiClient.callApi(
        '/subscriptions/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSubscription operation.
     * @callback module:api/StoreSubscriptionsApi~deleteSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a subscription plan
     * Must not be locked or a migration target
     * @param {Number} id The id of the subscription
     * @param {String} planId The id of the plan
     * @param {module:api/StoreSubscriptionsApi~deleteSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSubscription = function(id, planId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSubscription");
      }

      // verify the required parameter 'planId' is set
      if (planId === undefined || planId === null) {
        throw new Error("Missing the required parameter 'planId' when calling deleteSubscription");
      }


      var pathParams = {
        'id': id,
        'plan_id': planId
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
        '/subscriptions/{id}/plans/{plan_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSubscriptionTemplate operation.
     * @callback module:api/StoreSubscriptionsApi~deleteSubscriptionTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a subscription template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @param {module:api/StoreSubscriptionsApi~deleteSubscriptionTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSubscriptionTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSubscriptionTemplate");
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
        '/subscriptions/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscription operation.
     * @callback module:api/StoreSubscriptionsApi~getSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a single subscription item and associated plans
     * @param {Number} id The id of the subscription
     * @param {module:api/StoreSubscriptionsApi~getSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionResource}
     */
    this.getSubscription = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubscription");
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
      var returnType = SubscriptionResource;

      return this.apiClient.callApi(
        '/subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscriptionTemplate operation.
     * @callback module:api/StoreSubscriptionsApi~getSubscriptionTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single subscription template
     * Subscription Templates define a type of subscription and the properties they have.
     * @param {String} id The id of the template
     * @param {module:api/StoreSubscriptionsApi~getSubscriptionTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionTemplateResource}
     */
    this.getSubscriptionTemplate = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubscriptionTemplate");
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
      var returnType = SubscriptionTemplateResource;

      return this.apiClient.callApi(
        '/subscriptions/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscriptionTemplates operation.
     * @callback module:api/StoreSubscriptionsApi~getSubscriptionTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceSubscriptionTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search subscription templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreSubscriptionsApi~getSubscriptionTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceSubscriptionTemplateResource}
     */
    this.getSubscriptionTemplates = function(opts, callback) {
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
      var returnType = PageResourceSubscriptionTemplateResource;

      return this.apiClient.callApi(
        '/subscriptions/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscriptions operation.
     * @callback module:api/StoreSubscriptionsApi~getSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceSubscriptionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List available subscription items and associated plans
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreSubscriptionsApi~getSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceSubscriptionResource}
     */
    this.getSubscriptions = function(opts, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceSubscriptionResource;

      return this.apiClient.callApi(
        '/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the processSubscriptions operation.
     * @callback module:api/StoreSubscriptionsApi~processSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Processes subscriptions and charge dues
     * @param {module:api/StoreSubscriptionsApi~processSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.processSubscriptions = function(callback) {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/subscriptions/process', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSubscription operation.
     * @callback module:api/StoreSubscriptionsApi~updateSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a subscription item and associated plans
     * Will not remove plans left out
     * @param {Number} id The id of the subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionResource} opts.subscriptionResource The subscription resource object
     * @param {module:api/StoreSubscriptionsApi~updateSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSubscription = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['subscriptionResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSubscription");
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
        '/subscriptions/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSubscriptionTemplate operation.
     * @callback module:api/StoreSubscriptionsApi~updateSubscriptionTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a subscription template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionTemplateResource} opts.subscriptionTemplateResource The subscription template resource object
     * @param {module:api/StoreSubscriptionsApi~updateSubscriptionTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionTemplateResource}
     */
    this.updateSubscriptionTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['subscriptionTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSubscriptionTemplate");
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
      var returnType = SubscriptionTemplateResource;

      return this.apiClient.callApi(
        '/subscriptions/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
