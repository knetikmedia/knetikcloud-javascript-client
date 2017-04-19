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
    define(['ApiClient', 'model/PropertyFieldListResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PropertyFieldListResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.TemplatesPropertiesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PropertyFieldListResource, root.KnetikPlatformApiDocumentationLatest.Result);
  }
}(this, function(ApiClient, PropertyFieldListResource, Result) {
  'use strict';

  /**
   * TemplatesProperties service.
   * @module api/TemplatesPropertiesApi
   * @version latest

   */

  /**
   * Constructs a new TemplatesPropertiesApi. 
   * @alias module:api/TemplatesPropertiesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getTemplatePropertyType operation.
     * @callback module:api/TemplatesPropertiesApi~getTemplatePropertyTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PropertyFieldListResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details for a template property type
     * @param {String} type type
     * @param {module:api/TemplatesPropertiesApi~getTemplatePropertyTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PropertyFieldListResource}
     */
    this.getTemplatePropertyType = function(type, callback) {
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
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PropertyFieldListResource;

      return this.apiClient.callApi(
        '/templates/properties/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTemplatePropertyTypes operation.
     * @callback module:api/TemplatesPropertiesApi~getTemplatePropertyTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PropertyFieldListResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List template property types
     * @param {module:api/TemplatesPropertiesApi~getTemplatePropertyTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PropertyFieldListResource>}
     */
    this.getTemplatePropertyTypes = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [PropertyFieldListResource];

      return this.apiClient.callApi(
        '/templates/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
