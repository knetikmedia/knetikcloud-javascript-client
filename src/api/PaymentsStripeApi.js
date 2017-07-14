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
    define(['ApiClient', 'model/PaymentMethodResource', 'model/Result', 'model/StripeCreatePaymentMethod', 'model/StripePaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PaymentMethodResource'), require('../model/Result'), require('../model/StripeCreatePaymentMethod'), require('../model/StripePaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.PaymentsStripeApi = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.PaymentMethodResource, root.KnetikcloudSdk.Result, root.KnetikcloudSdk.StripeCreatePaymentMethod, root.KnetikcloudSdk.StripePaymentRequest);
  }
}(this, function(ApiClient, PaymentMethodResource, Result, StripeCreatePaymentMethod, StripePaymentRequest) {
  'use strict';

  /**
   * PaymentsStripe service.
   * @module api/PaymentsStripeApi
   * @version 3.0.6
   */

  /**
   * Constructs a new PaymentsStripeApi. 
   * @alias module:api/PaymentsStripeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a Stripe payment method for a user
     * Stores customer information and creates a payment method that can be used to pay invoices through the payments endpoints.
     * @param {Object} opts Optional parameters
     * @param {module:model/StripeCreatePaymentMethod} opts.request The request to create a Stripe customer with payment info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethodResource} and HTTP response
     */
    this.createStripePaymentMethodWithHttpInfo = function(opts) {
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PaymentMethodResource;

      return this.apiClient.callApi(
        '/payment/provider/stripe/payment-methods', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Stripe payment method for a user
     * Stores customer information and creates a payment method that can be used to pay invoices through the payments endpoints.
     * @param {Object} opts Optional parameters
     * @param {module:model/StripeCreatePaymentMethod} opts.request The request to create a Stripe customer with payment info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethodResource}
     */
    this.createStripePaymentMethod = function(opts) {
      return this.createStripePaymentMethodWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Pay with a single use token
     * @param {Object} opts Optional parameters
     * @param {module:model/StripePaymentRequest} opts.request The request to pay an invoice
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.payStripeInvoiceWithHttpInfo = function(opts) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/payment/provider/stripe/payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Pay with a single use token
     * @param {Object} opts Optional parameters
     * @param {module:model/StripePaymentRequest} opts.request The request to pay an invoice
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.payStripeInvoice = function(opts) {
      return this.payStripeInvoiceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
