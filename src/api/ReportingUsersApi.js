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
    define(['ApiClient', 'model/PageAggregateCountResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageAggregateCountResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ReportingUsersApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageAggregateCountResource);
  }
}(this, function(ApiClient, PageAggregateCountResource) {
  'use strict';

  /**
   * ReportingUsers service.
   * @module api/ReportingUsersApi
   * @version Latest
   */

  /**
   * Constructs a new ReportingUsersApi. 
   * @alias module:api/ReportingUsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the executiveRevenueItemSalesUsingGET1 operation.
     * @callback module:api/ReportingUsersApi~executiveRevenueItemSalesUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAggregateCountResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user registration info
     * Get user registration counts grouped by time range
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.granularity The time duration to aggregate by (default to day)
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {module:api/ReportingUsersApi~executiveRevenueItemSalesUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageAggregateCountResource}
     */
    this.executiveRevenueItemSalesUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'granularity': opts['granularity'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = PageAggregateCountResource;

      return this.apiClient.callApi(
        '/reporting/users/registrations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
