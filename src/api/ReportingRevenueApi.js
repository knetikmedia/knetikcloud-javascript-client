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
    define(['ApiClient', 'model/PageResourceRevenueCountryReportResource', 'model/PageResourceRevenueProductReportResource', 'model/Result', 'model/RevenueReportResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceRevenueCountryReportResource'), require('../model/PageResourceRevenueProductReportResource'), require('../model/Result'), require('../model/RevenueReportResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ReportingRevenueApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceRevenueCountryReportResource, root.KnetikCloud.PageResourceRevenueProductReportResource, root.KnetikCloud.Result, root.KnetikCloud.RevenueReportResource);
  }
}(this, function(ApiClient, PageResourceRevenueCountryReportResource, PageResourceRevenueProductReportResource, Result, RevenueReportResource) {
  'use strict';

  /**
   * ReportingRevenue service.
   * @module api/ReportingRevenueApi
   * @version 3.0.9
   */

  /**
   * Constructs a new ReportingRevenueApi. 
   * @alias module:api/ReportingRevenueApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get item revenue info
     * Get basic info about revenue from sales of items and bundles (not subscriptions, shipping, etc), summed up within a time range
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RevenueReportResource} and HTTP response
     */
    this.getItemRevenueWithHttpInfo = function(currencyCode, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode === undefined || currencyCode === null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling getItemRevenue");
      }


      var pathParams = {
        'currency_code': currencyCode
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
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
      var returnType = RevenueReportResource;

      return this.apiClient.callApi(
        '/reporting/revenue/item-sales/{currency_code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get item revenue info
     * Get basic info about revenue from sales of items and bundles (not subscriptions, shipping, etc), summed up within a time range
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RevenueReportResource}
     */
    this.getItemRevenue = function(currencyCode, opts) {
      return this.getItemRevenueWithHttpInfo(currencyCode, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get refund revenue info
     * Get basic info about revenue loss from refunds (for all item types), summed up within a time range.
     * @param {String} currencyCode The code for a currency to get refund data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RevenueReportResource} and HTTP response
     */
    this.getRefundRevenueWithHttpInfo = function(currencyCode, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode === undefined || currencyCode === null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling getRefundRevenue");
      }


      var pathParams = {
        'currency_code': currencyCode
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
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
      var returnType = RevenueReportResource;

      return this.apiClient.callApi(
        '/reporting/revenue/refunds/{currency_code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get refund revenue info
     * Get basic info about revenue loss from refunds (for all item types), summed up within a time range.
     * @param {String} currencyCode The code for a currency to get refund data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RevenueReportResource}
     */
    this.getRefundRevenue = function(currencyCode, opts) {
      return this.getRefundRevenueWithHttpInfo(currencyCode, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get revenue info by country
     * Get basic info about revenue from sales of all types, summed up within a time range and split out by country. Sorted for largest revenue at the top
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceRevenueCountryReportResource} and HTTP response
     */
    this.getRevenueByCountryWithHttpInfo = function(currencyCode, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode === undefined || currencyCode === null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling getRevenueByCountry");
      }


      var pathParams = {
        'currency_code': currencyCode
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'size': opts['size'],
        'page': opts['page'],
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
      var returnType = PageResourceRevenueCountryReportResource;

      return this.apiClient.callApi(
        '/reporting/revenue/countries/{currency_code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get revenue info by country
     * Get basic info about revenue from sales of all types, summed up within a time range and split out by country. Sorted for largest revenue at the top
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceRevenueCountryReportResource}
     */
    this.getRevenueByCountry = function(currencyCode, opts) {
      return this.getRevenueByCountryWithHttpInfo(currencyCode, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get revenue info by item
     * Get basic info about revenue from sales of all types, summed up within a time range and split out by specific item. Sorted for largest revenue at the top
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceRevenueProductReportResource} and HTTP response
     */
    this.getRevenueByItemWithHttpInfo = function(currencyCode, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode === undefined || currencyCode === null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling getRevenueByItem");
      }


      var pathParams = {
        'currency_code': currencyCode
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'size': opts['size'],
        'page': opts['page'],
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
      var returnType = PageResourceRevenueProductReportResource;

      return this.apiClient.callApi(
        '/reporting/revenue/products/{currency_code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get revenue info by item
     * Get basic info about revenue from sales of all types, summed up within a time range and split out by specific item. Sorted for largest revenue at the top
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceRevenueProductReportResource}
     */
    this.getRevenueByItem = function(currencyCode, opts) {
      return this.getRevenueByItemWithHttpInfo(currencyCode, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get subscription revenue info
     * Get basic info about revenue from sales of new subscriptions as well as recurring payemnts, summed up within a time range
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RevenueReportResource} and HTTP response
     */
    this.getSubscriptionRevenueWithHttpInfo = function(currencyCode, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode === undefined || currencyCode === null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling getSubscriptionRevenue");
      }


      var pathParams = {
        'currency_code': currencyCode
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
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
      var returnType = RevenueReportResource;

      return this.apiClient.callApi(
        '/reporting/revenue/subscription-sales/{currency_code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get subscription revenue info
     * Get basic info about revenue from sales of new subscriptions as well as recurring payemnts, summed up within a time range
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RevenueReportResource}
     */
    this.getSubscriptionRevenue = function(currencyCode, opts) {
      return this.getSubscriptionRevenueWithHttpInfo(currencyCode, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
