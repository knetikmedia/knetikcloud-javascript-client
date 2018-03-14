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
    define(['ApiClient', 'model/PropertyFieldListResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PropertyFieldListResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.Templates_PropertiesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PropertyFieldListResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, PropertyFieldListResource, Result) {
  'use strict';

  /**
   * Templates_Properties service.
   * @module api/Templates_PropertiesApi
   * @version 3.0.9
   */

  /**
   * Constructs a new Templates_PropertiesApi. 
   * @alias module:api/Templates_PropertiesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get details for a template property type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} type type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PropertyFieldListResource} and HTTP response
     */
    this.getTemplatePropertyTypeWithHttpInfo = function(type) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getTemplatePropertyType");
      }


      var pathParams = {
        'type': type
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PropertyFieldListResource;

      return this.apiClient.callApi(
        '/templates/properties/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details for a template property type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} type type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PropertyFieldListResource}
     */
    this.getTemplatePropertyType = function(type) {
      return this.getTemplatePropertyTypeWithHttpInfo(type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List template property types
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PropertyFieldListResource>} and HTTP response
     */
    this.getTemplatePropertyTypesWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PropertyFieldListResource];

      return this.apiClient.callApi(
        '/templates/properties', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List template property types
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PropertyFieldListResource>}
     */
    this.getTemplatePropertyTypes = function() {
      return this.getTemplatePropertyTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));