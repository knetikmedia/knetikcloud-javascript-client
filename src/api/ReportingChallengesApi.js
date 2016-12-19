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
    define(['ApiClient', 'model/PageChallengeEventParticipantResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageChallengeEventParticipantResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ReportingChallengesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageChallengeEventParticipantResource);
  }
}(this, function(ApiClient, PageChallengeEventParticipantResource) {
  'use strict';

  /**
   * ReportingChallenges service.
   * @module api/ReportingChallengesApi
   * @version Latest
   */

  /**
   * Constructs a new ReportingChallengesApi. 
   * @alias module:api/ReportingChallengesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getChallengeEventLeaderboardUsingGET operation.
     * @callback module:api/ReportingChallengesApi~getChallengeEventLeaderboardUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageChallengeEventParticipantResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a challenge event leaderboard details
     * Lists all leaderboard entries with additional user details
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterEvent A sepecific challenge event id
     * @param {module:api/ReportingChallengesApi~getChallengeEventLeaderboardUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageChallengeEventParticipantResource}
     */
    this.getChallengeEventLeaderboardUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_event': opts['filterEvent']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = PageChallengeEventParticipantResource;

      return this.apiClient.callApi(
        '/reporting/events/leaderboard', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getChallengeEventParticipantsUsingGET operation.
     * @callback module:api/ReportingChallengesApi~getChallengeEventParticipantsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageChallengeEventParticipantResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a challenge event participant details
     * Lists all user submitted scores sorted by value, including those that do not apear in the leaderboard due to value or aggregation
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterEvent A sepecific challenge event id
     * @param {module:api/ReportingChallengesApi~getChallengeEventParticipantsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageChallengeEventParticipantResource}
     */
    this.getChallengeEventParticipantsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_event': opts['filterEvent']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = PageChallengeEventParticipantResource;

      return this.apiClient.callApi(
        '/reporting/events/participants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
