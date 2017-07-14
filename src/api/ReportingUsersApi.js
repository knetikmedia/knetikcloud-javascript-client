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
    define(['ApiClient', 'model/PageResourceAggregateCountResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceAggregateCountResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ReportingUsersApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceAggregateCountResource, root.KnetikPlatformApiDocumentationLatest.Result);
  }
}(this, function(ApiClient, PageResourceAggregateCountResource, Result) {
  'use strict';

  /**
   * ReportingUsers service.
   * @module api/ReportingUsersApi
   * @version latest

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
     * Get user registration info
     * Get user registration counts grouped by time range
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.granularity The time duration to aggregate by (default to day)
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceAggregateCountResource} and HTTP response
     */
    this.getUserRegistrationsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'granularity': opts['granularity'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceAggregateCountResource;

      return this.apiClient.callApi(
        '/reporting/users/registrations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get user registration info
     * Get user registration counts grouped by time range
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.granularity The time duration to aggregate by (default to day)
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceAggregateCountResource}
     */
    this.getUserRegistrations = function(opts) {
      return this.getUserRegistrationsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
