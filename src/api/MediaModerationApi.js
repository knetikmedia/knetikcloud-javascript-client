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
    define(['ApiClient', 'model/FlagReportResource', 'model/PageResourceFlagReportResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FlagReportResource'), require('../model/PageResourceFlagReportResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.MediaModerationApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.FlagReportResource, root.KnetikPlatformApiDocumentationLatest.PageResourceFlagReportResource);
  }
}(this, function(ApiClient, FlagReportResource, PageResourceFlagReportResource) {
  'use strict';

  /**
   * MediaModeration service.
   * @module api/MediaModerationApi
   * @version latest

   */

  /**
   * Constructs a new MediaModerationApi. 
   * @alias module:api/MediaModerationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getModerationReport operation.
     * @callback module:api/MediaModerationApi~getModerationReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a flag report
     * @param {Number} id The flag report id
     * @param {module:api/MediaModerationApi~getModerationReportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getModerationReport = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getModerationReport");
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
        '/moderation/reports/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getModerationReports operation.
     * @callback module:api/MediaModerationApi~getModerationReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceFlagReportResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a page of flag reports
     * Context can be either a free-form string or a pre-defined context name
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.excludeResolved Ignore resolved context (default to true)
     * @param {String} opts.filterContext Filter by moderation context
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/MediaModerationApi~getModerationReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceFlagReportResource}
     */
    this.getModerationReports = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'exclude_resolved': opts['excludeResolved'],
        'filter_context': opts['filterContext'],
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
      var returnType = PageResourceFlagReportResource;

      return this.apiClient.callApi(
        '/moderation/reports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateModerationReport operation.
     * @callback module:api/MediaModerationApi~updateModerationReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a flag report
     * Lets you set the resolution of a report. Resolution types is {banned,ignore} in case of &#39;banned&#39; you will need to pass the reason.
     * @param {Number} id The flag report id
     * @param {Object} opts Optional parameters
     * @param {module:model/FlagReportResource} opts.flagReportResource The new flag report
     * @param {module:api/MediaModerationApi~updateModerationReportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateModerationReport = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['flagReportResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateModerationReport");
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
        '/moderation/reports/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
