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


import ApiClient from "../ApiClient";
import FlagReportResource from '../model/FlagReportResource';
import PageResourceFlagReportResource from '../model/PageResourceFlagReportResource';
import Result from '../model/Result';

/**
* MediaModeration service.
* @module api/MediaModerationApi
* @version 3.0.7
*/
export default class MediaModerationApi {

    /**
    * Constructs a new MediaModerationApi. 
    * @alias module:api/MediaModerationApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a flag report
     * @param {Number} id The flag report id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FlagReportResource} and HTTP response
     */
    getModerationReportWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getModerationReport");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = FlagReportResource;

      return this.apiClient.callApi(
        '/moderation/reports/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a flag report
     * @param {Number} id The flag report id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FlagReportResource}
     */
    getModerationReport(id) {
      return this.getModerationReportWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a page of flag reports
     * Context can be either a free-form string or a pre-defined context name
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.excludeResolved Ignore resolved context (default to true)
     * @param {String} opts.filterContext Filter by moderation context
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceFlagReportResource} and HTTP response
     */
    getModerationReportsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'exclude_resolved': opts['excludeResolved'],
        'filter_context': opts['filterContext'],
        'size': opts['size'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourceFlagReportResource;

      return this.apiClient.callApi(
        '/moderation/reports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a page of flag reports
     * Context can be either a free-form string or a pre-defined context name
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.excludeResolved Ignore resolved context (default to true)
     * @param {String} opts.filterContext Filter by moderation context
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceFlagReportResource}
     */
    getModerationReports(opts) {
      return this.getModerationReportsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a flag report
     * Lets you set the resolution of a report. Resolution types is {banned,ignore} in case of &#39;banned&#39; you will need to pass the reason.
     * @param {Number} id The flag report id
     * @param {Object} opts Optional parameters
     * @param {module:model/FlagReportResource} opts.flagReportResource The new flag report
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateModerationReportWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['flagReportResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateModerationReport");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/moderation/reports/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a flag report
     * Lets you set the resolution of a report. Resolution types is {banned,ignore} in case of &#39;banned&#39; you will need to pass the reason.
     * @param {Number} id The flag report id
     * @param {Object} opts Optional parameters
     * @param {module:model/FlagReportResource} opts.flagReportResource The new flag report
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateModerationReport(id, opts) {
      return this.updateModerationReportWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
