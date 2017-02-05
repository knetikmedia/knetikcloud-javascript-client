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
    define(['ApiClient', 'model/BreEventLog', 'model/ForwardLog', 'model/PageResourceBreEventLog', 'model/PageResourceForwardLog', 'model/PageResourceUserActionLog', 'model/UserActionLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BreEventLog'), require('../model/ForwardLog'), require('../model/PageResourceBreEventLog'), require('../model/PageResourceForwardLog'), require('../model/PageResourceUserActionLog'), require('../model/UserActionLog'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.LogsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.BreEventLog, root.KnetikPlatformApiDocumentationLatest.ForwardLog, root.KnetikPlatformApiDocumentationLatest.PageResourceBreEventLog, root.KnetikPlatformApiDocumentationLatest.PageResourceForwardLog, root.KnetikPlatformApiDocumentationLatest.PageResourceUserActionLog, root.KnetikPlatformApiDocumentationLatest.UserActionLog);
  }
}(this, function(ApiClient, BreEventLog, ForwardLog, PageResourceBreEventLog, PageResourceForwardLog, PageResourceUserActionLog, UserActionLog) {
  'use strict';

  /**
   * Logs service.
   * @module api/LogsApi
   * @version latest

   */

  /**
   * Constructs a new LogsApi. 
   * @alias module:api/LogsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addUserLogUsingPOST operation.
     * @callback module:api/LogsApi~addUserLogUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new user log entry
     * @param {Object} opts Optional parameters
     * @param {module:model/UserActionLog} opts.logEntry The user log entry to be added
     * @param {module:api/LogsApi~addUserLogUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addUserLogUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['logEntry'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/audit/logs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEventLogUsingGET operation.
     * @callback module:api/LogsApi~getEventLogUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BreEventLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an existing BRE event log entry by id
     * @param {String} id The BRE event log entry id
     * @param {module:api/LogsApi~getEventLogUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BreEventLog}
     */
    this.getEventLogUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getEventLogUsingGET");
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
      var returnType = BreEventLog;

      return this.apiClient.callApi(
        '/bre/logs/event-log/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEventsLogsUsingGET operation.
     * @callback module:api/LogsApi~getEventsLogsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceBreEventLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of BRE event log entries
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the event log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param {String} opts.filterEventName Filter event logs by event name
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:DESC)
     * @param {module:api/LogsApi~getEventsLogsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceBreEventLog}
     */
    this.getEventsLogsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_start_date': opts['filterStartDate'],
        'filter_event_name': opts['filterEventName'],
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
      var returnType = PageResourceBreEventLog;

      return this.apiClient.callApi(
        '/bre/logs/event-log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getForwardLogUsingGET operation.
     * @callback module:api/LogsApi~getForwardLogUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ForwardLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an existing forward log entry by id
     * @param {String} id The forward log entry id
     * @param {module:api/LogsApi~getForwardLogUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ForwardLog}
     */
    this.getForwardLogUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getForwardLogUsingGET");
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
      var returnType = ForwardLog;

      return this.apiClient.callApi(
        '/bre/logs/forward-log/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getForwardLogsUsingGET operation.
     * @callback module:api/LogsApi~getForwardLogsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceForwardLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of forward log entries
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param {String} opts.filterEndDate A comma separated string without spaces.  First value is the operator to search on, second value is the log end date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param {Number} opts.filterStatusCode Filter forward logs by http status code
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:DESC)
     * @param {module:api/LogsApi~getForwardLogsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceForwardLog}
     */
    this.getForwardLogsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_start_date': opts['filterStartDate'],
        'filter_end_date': opts['filterEndDate'],
        'filter_status_code': opts['filterStatusCode'],
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
      var returnType = PageResourceForwardLog;

      return this.apiClient.callApi(
        '/bre/logs/forward-log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserLogsUsingGET operation.
     * @callback module:api/LogsApi~getUserLogsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserActionLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a user log entry by id
     * @param {String} id The user log entry id
     * @param {module:api/LogsApi~getUserLogsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserActionLog}
     */
    this.getUserLogsUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getUserLogsUsingGET");
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
      var returnType = UserActionLog;

      return this.apiClient.callApi(
        '/audit/logs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserLogsUsingGET1 operation.
     * @callback module:api/LogsApi~getUserLogsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUserActionLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a page of user logs entries
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterUser Filter for actions taken by a specific user by id
     * @param {String} opts.filterActionName Filter for actions of a specific name
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/LogsApi~getUserLogsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUserActionLog}
     */
    this.getUserLogsUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_user': opts['filterUser'],
        'filter_action_name': opts['filterActionName'],
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
      var returnType = PageResourceUserActionLog;

      return this.apiClient.callApi(
        '/audit/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
