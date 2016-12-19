/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: Latest
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
    define(['ApiClient', 'model/PageSimpleWallet', 'model/PageWalletTotalResponse', 'model/PageWalletTransactionResource', 'model/SimpleWallet', 'model/WalletAlterRequest', 'model/WalletTransactionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageSimpleWallet'), require('../model/PageWalletTotalResponse'), require('../model/PageWalletTransactionResource'), require('../model/SimpleWallet'), require('../model/WalletAlterRequest'), require('../model/WalletTransactionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.PaymentsWalletsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageSimpleWallet, root.KnetikPlatformApiDocumentationLatest.PageWalletTotalResponse, root.KnetikPlatformApiDocumentationLatest.PageWalletTransactionResource, root.KnetikPlatformApiDocumentationLatest.SimpleWallet, root.KnetikPlatformApiDocumentationLatest.WalletAlterRequest, root.KnetikPlatformApiDocumentationLatest.WalletTransactionResource);
  }
}(this, function(ApiClient, PageSimpleWallet, PageWalletTotalResponse, PageWalletTransactionResource, SimpleWallet, WalletAlterRequest, WalletTransactionResource) {
  'use strict';

  /**
   * PaymentsWallets service.
   * @module api/PaymentsWalletsApi
   * @version Latest
   */

  /**
   * Constructs a new PaymentsWalletsApi. 
   * @alias module:api/PaymentsWalletsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getWalletTotalsUsingGET operation.
     * @callback module:api/PaymentsWalletsApi~getWalletTotalsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageWalletTotalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a summation of wallet balances by currency code
     * @param {module:api/PaymentsWalletsApi~getWalletTotalsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageWalletTotalResponse}
     */
    this.getWalletTotalsUsingGET = function(callback) {
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
      var accepts = ['*/*'];
      var returnType = PageWalletTotalResponse;

      return this.apiClient.callApi(
        '/wallets/totals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWalletUsingGET operation.
     * @callback module:api/PaymentsWalletsApi~getWalletUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleWallet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the user&#39;s wallet for the given currency code
     * @param {Number} userId The ID of the user for whom wallet is being retrieved
     * @param {String} currencyCode Currency code of the user&#39;s wallet
     * @param {module:api/PaymentsWalletsApi~getWalletUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleWallet}
     */
    this.getWalletUsingGET = function(userId, currencyCode, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getWalletUsingGET");
      }

      // verify the required parameter 'currencyCode' is set
      if (currencyCode == undefined || currencyCode == null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling getWalletUsingGET");
      }


      var pathParams = {
        'user_id': userId,
        'currency_code': currencyCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = SimpleWallet;

      return this.apiClient.callApi(
        '/users/{user_id}/wallets/{currency_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWalletsUsingGET operation.
     * @callback module:api/PaymentsWalletsApi~getWalletsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleWallet>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all of a user&#39;s wallets
     * @param {Number} userId The ID of the user for whom wallets are being retrieved
     * @param {module:api/PaymentsWalletsApi~getWalletsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleWallet>}
     */
    this.getWalletsUsingGET = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getWalletsUsingGET");
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
      var accepts = ['*/*'];
      var returnType = [SimpleWallet];

      return this.apiClient.callApi(
        '/users/{user_id}/wallets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWalletsUsingGET1 operation.
     * @callback module:api/PaymentsWalletsApi~getWalletsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageSimpleWallet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of wallets across the system
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to 1)
     * @param {module:api/PaymentsWalletsApi~getWalletsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageSimpleWallet}
     */
    this.getWalletsUsingGET1 = function(opts, callback) {
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
      var accepts = ['*/*'];
      var returnType = PageSimpleWallet;

      return this.apiClient.callApi(
        '/wallets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transactionHistoryUsingGET operation.
     * @callback module:api/PaymentsWalletsApi~transactionHistoryUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageWalletTransactionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve wallet transactions across the system
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterInvoice Filter for transactions from a specific invoice
     * @param {String} opts.filterType Filter for transactions with specified type
     * @param {Number} opts.filterMaxDate Filter for transactions from no earlier than the specified date as a unix timestamp in seconds
     * @param {Number} opts.filterMinDate Filter for transactions from no later than the specified date as a unix timestamp in seconds
     * @param {module:model/String} opts.filterSign Filter for transactions with amount with the given sign
     * @param {Number} opts.filterUserId Filter for transactions for specific userId
     * @param {String} opts.filterUsername Filter for transactions for specific username that start with the given string
     * @param {String} opts.filterDetails Filter for transactions for specific details that start with the given string
     * @param {String} opts.filterCurrencyCode Filter for transactions for specific currency code
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to 1)
     * @param {module:api/PaymentsWalletsApi~transactionHistoryUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageWalletTransactionResource}
     */
    this.transactionHistoryUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_invoice': opts['filterInvoice'],
        'filter_type': opts['filterType'],
        'filter_max_date': opts['filterMaxDate'],
        'filter_min_date': opts['filterMinDate'],
        'filter_sign': opts['filterSign'],
        'filter_user_id': opts['filterUserId'],
        'filter_username': opts['filterUsername'],
        'filter_details': opts['filterDetails'],
        'filter_currency_code': opts['filterCurrencyCode'],
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
      var accepts = ['*/*'];
      var returnType = PageWalletTransactionResource;

      return this.apiClient.callApi(
        '/wallets/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBalanceUsingPUT operation.
     * @callback module:api/PaymentsWalletsApi~updateBalanceUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletTransactionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the balance for a user&#39;s wallet
     * @param {Number} userId The ID of the user for whom wallet is being modified
     * @param {String} currencyCode Currency code of the user&#39;s wallet
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletAlterRequest} opts.request The requested balance modification to be made to the user&#39;s wallet
     * @param {module:api/PaymentsWalletsApi~updateBalanceUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletTransactionResource}
     */
    this.updateBalanceUsingPUT = function(userId, currencyCode, opts, callback) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling updateBalanceUsingPUT");
      }

      // verify the required parameter 'currencyCode' is set
      if (currencyCode == undefined || currencyCode == null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling updateBalanceUsingPUT");
      }


      var pathParams = {
        'user_id': userId,
        'currency_code': currencyCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = WalletTransactionResource;

      return this.apiClient.callApi(
        '/users/{user_id}/wallets/{currency_code}/balance', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userTransactionHistoryUsingGET operation.
     * @callback module:api/PaymentsWalletsApi~userTransactionHistoryUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageWalletTransactionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a user&#39;s wallet transactions
     * @param {Number} userId The ID of the user for whom wallet transactions are being retrieved
     * @param {String} currencyCode Currency code of the user&#39;s wallet
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterType Filter for transactions with specified type
     * @param {Number} opts.filterMaxDate Filter for transactions from no earlier than the specified date as a unix timestamp in seconds
     * @param {Number} opts.filterMinDate Filter for transactions from no later than the specified date as a unix timestamp in seconds
     * @param {String} opts.filterSign Filter for transactions with amount with the given sign.  Allowable values: (&#39;positive&#39;, &#39;negative&#39;)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to 1)
     * @param {module:api/PaymentsWalletsApi~userTransactionHistoryUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageWalletTransactionResource}
     */
    this.userTransactionHistoryUsingGET = function(userId, currencyCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling userTransactionHistoryUsingGET");
      }

      // verify the required parameter 'currencyCode' is set
      if (currencyCode == undefined || currencyCode == null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling userTransactionHistoryUsingGET");
      }


      var pathParams = {
        'user_id': userId,
        'currency_code': currencyCode
      };
      var queryParams = {
        'filter_type': opts['filterType'],
        'filter_max_date': opts['filterMaxDate'],
        'filter_min_date': opts['filterMinDate'],
        'filter_sign': opts['filterSign'],
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
      var accepts = ['*/*'];
      var returnType = PageWalletTransactionResource;

      return this.apiClient.callApi(
        '/users/{user_id}/wallets/{currency_code}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
