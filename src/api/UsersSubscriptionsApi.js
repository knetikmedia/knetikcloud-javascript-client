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
    define(['ApiClient', 'model/InventorySubscriptionResource', 'model/InvoiceResource', 'model/ReactivateSubscriptionRequest', 'model/Result', 'model/SubscriptionPriceOverrideRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InventorySubscriptionResource'), require('../model/InvoiceResource'), require('../model/ReactivateSubscriptionRequest'), require('../model/Result'), require('../model/SubscriptionPriceOverrideRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.UsersSubscriptionsApi = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.InventorySubscriptionResource, root.KnetikcloudSdk.InvoiceResource, root.KnetikcloudSdk.ReactivateSubscriptionRequest, root.KnetikcloudSdk.Result, root.KnetikcloudSdk.SubscriptionPriceOverrideRequest);
  }
}(this, function(ApiClient, InventorySubscriptionResource, InvoiceResource, ReactivateSubscriptionRequest, Result, SubscriptionPriceOverrideRequest) {
  'use strict';

  /**
   * UsersSubscriptions service.
   * @module api/UsersSubscriptionsApi
   * @version 3.0.6
   */

  /**
   * Constructs a new UsersSubscriptionsApi. 
   * @alias module:api/UsersSubscriptionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get details about a user&#39;s subscription
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InventorySubscriptionResource} and HTTP response
     */
    this.getUserSubscriptionDetailsWithHttpInfo = function(userId, inventoryId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserSubscriptionDetails");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId === undefined || inventoryId === null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling getUserSubscriptionDetails");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
      var returnType = InventorySubscriptionResource;

      return this.apiClient.callApi(
        '/users/{user_id}/subscriptions/{inventory_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details about a user&#39;s subscription
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InventorySubscriptionResource}
     */
    this.getUserSubscriptionDetails = function(userId, inventoryId) {
      return this.getUserSubscriptionDetailsWithHttpInfo(userId, inventoryId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get details about a user&#39;s subscriptions
     * @param {Number} userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InventorySubscriptionResource>} and HTTP response
     */
    this.getUsersSubscriptionDetailsWithHttpInfo = function(userId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUsersSubscriptionDetails");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [InventorySubscriptionResource];

      return this.apiClient.callApi(
        '/users/{user_id}/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details about a user&#39;s subscriptions
     * @param {Number} userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InventorySubscriptionResource>}
     */
    this.getUsersSubscriptionDetails = function(userId) {
      return this.getUsersSubscriptionDetailsWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reactivate a subscription and charge fee
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Object} opts Optional parameters
     * @param {module:model/ReactivateSubscriptionRequest} opts.reactivateSubscriptionRequest The reactivate subscription request object inventory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoiceResource} and HTTP response
     */
    this.reactivateUserSubscriptionWithHttpInfo = function(userId, inventoryId, opts) {
      opts = opts || {};
      var postBody = opts['reactivateSubscriptionRequest'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling reactivateUserSubscription");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId === undefined || inventoryId === null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling reactivateUserSubscription");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
      var returnType = InvoiceResource;

      return this.apiClient.callApi(
        '/users/{user_id}/subscriptions/{inventory_id}/reactivate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Reactivate a subscription and charge fee
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Object} opts Optional parameters
     * @param {module:model/ReactivateSubscriptionRequest} opts.reactivateSubscriptionRequest The reactivate subscription request object inventory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoiceResource}
     */
    this.reactivateUserSubscription = function(userId, inventoryId, opts) {
      return this.reactivateUserSubscriptionWithHttpInfo(userId, inventoryId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set a new date to bill a subscription on
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Number} billDate The new bill date. Unix timestamp in seconds
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setSubscriptionBillDateWithHttpInfo = function(userId, inventoryId, billDate) {
      var postBody = billDate;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling setSubscriptionBillDate");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId === undefined || inventoryId === null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling setSubscriptionBillDate");
      }

      // verify the required parameter 'billDate' is set
      if (billDate === undefined || billDate === null) {
        throw new Error("Missing the required parameter 'billDate' when calling setSubscriptionBillDate");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
        '/users/{user_id}/subscriptions/{inventory_id}/bill-date', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set a new date to bill a subscription on
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Number} billDate The new bill date. Unix timestamp in seconds
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setSubscriptionBillDate = function(userId, inventoryId, billDate) {
      return this.setSubscriptionBillDateWithHttpInfo(userId, inventoryId, billDate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set the payment method to use for a subscription
     * May send null to use floating default
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Object} opts Optional parameters
     * @param {Number} opts.paymentMethodId The id of the payment method
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setSubscriptionPaymentMethodWithHttpInfo = function(userId, inventoryId, opts) {
      opts = opts || {};
      var postBody = opts['paymentMethodId'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling setSubscriptionPaymentMethod");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId === undefined || inventoryId === null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling setSubscriptionPaymentMethod");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
        '/users/{user_id}/subscriptions/{inventory_id}/payment-method', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set the payment method to use for a subscription
     * May send null to use floating default
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Object} opts Optional parameters
     * @param {Number} opts.paymentMethodId The id of the payment method
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setSubscriptionPaymentMethod = function(userId, inventoryId, opts) {
      return this.setSubscriptionPaymentMethodWithHttpInfo(userId, inventoryId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set the status of a subscription
     * The body is a json string (put in quotes) that should match a desired invoice status type. Note that the new status may be blocked if the system is not configured to allow the current status to be changed to the new, to enforce proper flow. The default options for statuses are shown below but may be altered for special use cases
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {String} status The new status for the subscription. Actual options may differ from the indicated set if the invoice status type data has been altered.  Allowable values: (&#39;current&#39;, &#39;canceled&#39;, &#39;stopped&#39;, &#39;payment_failed&#39;, &#39;suspended&#39;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setSubscriptionStatusWithHttpInfo = function(userId, inventoryId, status) {
      var postBody = status;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling setSubscriptionStatus");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId === undefined || inventoryId === null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling setSubscriptionStatus");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling setSubscriptionStatus");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
        '/users/{user_id}/subscriptions/{inventory_id}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set the status of a subscription
     * The body is a json string (put in quotes) that should match a desired invoice status type. Note that the new status may be blocked if the system is not configured to allow the current status to be changed to the new, to enforce proper flow. The default options for statuses are shown below but may be altered for special use cases
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {String} status The new status for the subscription. Actual options may differ from the indicated set if the invoice status type data has been altered.  Allowable values: (&#39;current&#39;, &#39;canceled&#39;, &#39;stopped&#39;, &#39;payment_failed&#39;, &#39;suspended&#39;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setSubscriptionStatus = function(userId, inventoryId, status) {
      return this.setSubscriptionStatusWithHttpInfo(userId, inventoryId, status)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set a new subscription plan for a user
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Object} opts Optional parameters
     * @param {String} opts.planId The id of the new plan. Must be from the same subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setUserSubscriptionPlanWithHttpInfo = function(userId, inventoryId, opts) {
      opts = opts || {};
      var postBody = opts['planId'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling setUserSubscriptionPlan");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId === undefined || inventoryId === null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling setUserSubscriptionPlan");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
        '/users/{user_id}/subscriptions/{inventory_id}/plan', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set a new subscription plan for a user
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Object} opts Optional parameters
     * @param {String} opts.planId The id of the new plan. Must be from the same subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setUserSubscriptionPlan = function(userId, inventoryId, opts) {
      return this.setUserSubscriptionPlanWithHttpInfo(userId, inventoryId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set a new subscription price for a user
     * This new price will be what the user is charged at the begining of each new period. This override is specific to the current subscription and will not carry over if they end and later re-subscribe. It will persist if the plan is changed using the setUserSubscriptionPlan endpoint.
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionPriceOverrideRequest} opts.theOverrideDetails override
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setUserSubscriptionPriceWithHttpInfo = function(userId, inventoryId, opts) {
      opts = opts || {};
      var postBody = opts['theOverrideDetails'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling setUserSubscriptionPrice");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId === undefined || inventoryId === null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling setUserSubscriptionPrice");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
        '/users/{user_id}/subscriptions/{inventory_id}/price-override', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set a new subscription price for a user
     * This new price will be what the user is charged at the begining of each new period. This override is specific to the current subscription and will not carry over if they end and later re-subscribe. It will persist if the plan is changed using the setUserSubscriptionPlan endpoint.
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionPriceOverrideRequest} opts.theOverrideDetails override
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setUserSubscriptionPrice = function(userId, inventoryId, opts) {
      return this.setUserSubscriptionPriceWithHttpInfo(userId, inventoryId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
