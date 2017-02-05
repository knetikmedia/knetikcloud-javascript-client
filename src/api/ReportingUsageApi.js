/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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
    define(['ApiClient', 'model/PageResourceUsageInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceUsageInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ReportingUsageApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceUsageInfo);
  }
}(this, function(ApiClient, PageResourceUsageInfo) {
  'use strict';

  /**
   * ReportingUsage service.
   * @module api/ReportingUsageApi
   * @version latest

   */

  /**
   * Constructs a new ReportingUsageApi. 
   * @alias module:api/ReportingUsageApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUsageByDayUsingGET operation.
     * @callback module:api/ReportingUsageApi~getUsageByDayUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUsageInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns aggregated endpoint usage information by the day
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingUsageApi~getUsageByDayUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByDayUsingGET = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw new Error("Missing the required parameter 'startDate' when calling getUsageByDayUsingGET");
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw new Error("Missing the required parameter 'endDate' when calling getUsageByDayUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'combine_endpoints': opts['combineEndpoints'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/day', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsageByHourUsingGET operation.
     * @callback module:api/ReportingUsageApi~getUsageByHourUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUsageInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns aggregated endpoint usage information by hour
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingUsageApi~getUsageByHourUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByHourUsingGET = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw new Error("Missing the required parameter 'startDate' when calling getUsageByHourUsingGET");
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw new Error("Missing the required parameter 'endDate' when calling getUsageByHourUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'combine_endpoints': opts['combineEndpoints'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/hour', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsageByMinuteUsingGET operation.
     * @callback module:api/ReportingUsageApi~getUsageByMinuteUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUsageInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns aggregated endpoint usage information by minute
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingUsageApi~getUsageByMinuteUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByMinuteUsingGET = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw new Error("Missing the required parameter 'startDate' when calling getUsageByMinuteUsingGET");
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw new Error("Missing the required parameter 'endDate' when calling getUsageByMinuteUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'combine_endpoints': opts['combineEndpoints'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/minute', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsageByMonthUsingGET operation.
     * @callback module:api/ReportingUsageApi~getUsageByMonthUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUsageInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns aggregated endpoint usage information by month
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingUsageApi~getUsageByMonthUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByMonthUsingGET = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw new Error("Missing the required parameter 'startDate' when calling getUsageByMonthUsingGET");
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw new Error("Missing the required parameter 'endDate' when calling getUsageByMonthUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'combine_endpoints': opts['combineEndpoints'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/month', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsageByYearUsingGET operation.
     * @callback module:api/ReportingUsageApi~getUsageByYearUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUsageInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns aggregated endpoint usage information by year
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingUsageApi~getUsageByYearUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByYearUsingGET = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw new Error("Missing the required parameter 'startDate' when calling getUsageByYearUsingGET");
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw new Error("Missing the required parameter 'endDate' when calling getUsageByYearUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'combine_endpoints': opts['combineEndpoints'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/year', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
