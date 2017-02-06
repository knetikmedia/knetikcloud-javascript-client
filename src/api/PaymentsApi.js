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
    define(['ApiClient', 'model/PaymentAuthorizationResource', 'model/PaymentMethodResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PaymentAuthorizationResource'), require('../model/PaymentMethodResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.PaymentsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PaymentAuthorizationResource, root.KnetikPlatformApiDocumentationLatest.PaymentMethodResource);
  }
}(this, function(ApiClient, PaymentAuthorizationResource, PaymentMethodResource) {
  'use strict';

  /**
   * Payments service.
   * @module api/PaymentsApi
   * @version latest

   */

  /**
   * Constructs a new PaymentsApi. 
   * @alias module:api/PaymentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPaymentMethod operation.
     * @callback module:api/PaymentsApi~createPaymentMethodCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentMethodResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new payment method for a user
     * @param {Number} userId ID of the user for whom the payment method is being created
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentMethodResource} opts.paymentMethod Payment method being created
     * @param {module:api/PaymentsApi~createPaymentMethodCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentMethodResource}
     */
    this.createPaymentMethod = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['paymentMethod'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling createPaymentMethod");
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
      var returnType = PaymentMethodResource;

      return this.apiClient.callApi(
        '/users/{user_id}/payment-methods', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePaymentMethod operation.
     * @callback module:api/PaymentsApi~deletePaymentMethodCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing payment method for a user
     * @param {Number} userId ID of the user for whom the payment method is being updated
     * @param {Number} id ID of the payment method being deleted
     * @param {module:api/PaymentsApi~deletePaymentMethodCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePaymentMethod = function(userId, id, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling deletePaymentMethod");
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deletePaymentMethod");
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
        '/users/{user_id}/payment-methods/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentMethod operation.
     * @callback module:api/PaymentsApi~getPaymentMethodCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentMethodResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single payment method for a user
     * @param {Number} userId ID of the user for whom the payment method is being retrieved
     * @param {Number} id ID of the payment method being retrieved
     * @param {module:api/PaymentsApi~getPaymentMethodCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentMethodResource}
     */
    this.getPaymentMethod = function(userId, id, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getPaymentMethod");
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getPaymentMethod");
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
      var returnType = PaymentMethodResource;

      return this.apiClient.callApi(
        '/users/{user_id}/payment-methods/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentMethods operation.
     * @callback module:api/PaymentsApi~getPaymentMethodsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PaymentMethodResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all payment methods for a user
     * @param {Number} userId ID of the user for whom the payment methods are being retrieved
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/PaymentsApi~getPaymentMethodsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PaymentMethodResource>}
     */
    this.getPaymentMethods = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getPaymentMethods");
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
      var returnType = [PaymentMethodResource];

      return this.apiClient.callApi(
        '/users/{user_id}/payment-methods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentAuthorization operation.
     * @callback module:api/PaymentsApi~paymentAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentAuthorizationResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authorize payment of an invoice for later capture
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentAuthorizationResource} opts.request Payment authorization request
     * @param {module:api/PaymentsApi~paymentAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentAuthorizationResource}
     */
    this.paymentAuthorization = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['request'];


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
      var returnType = PaymentAuthorizationResource;

      return this.apiClient.callApi(
        '/payment/authorizations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentCapture operation.
     * @callback module:api/PaymentsApi~paymentCaptureCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Capture an existing invoice payment authorization
     * @param {Number} id ID of the payment authorization to capture
     * @param {module:api/PaymentsApi~paymentCaptureCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.paymentCapture = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling paymentCapture");
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
        '/payment/authorizations/{id}/capture', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePaymentMethod operation.
     * @callback module:api/PaymentsApi~updatePaymentMethodCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing payment method for a user
     * @param {Number} userId ID of the user for whom the payment method is being updated
     * @param {Number} id ID of the payment method being updated
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentMethodResource} opts.paymentMethod The updated payment method data
     * @param {module:api/PaymentsApi~updatePaymentMethodCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatePaymentMethod = function(userId, id, opts, callback) {
      opts = opts || {};
      var postBody = opts['paymentMethod'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling updatePaymentMethod");
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updatePaymentMethod");
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
        '/users/{user_id}/payment-methods/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
