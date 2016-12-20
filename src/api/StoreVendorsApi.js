/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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
    define(['ApiClient', 'model/PageResourceVendorResource', 'model/VendorResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceVendorResource'), require('../model/VendorResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.StoreVendorsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceVendorResource, root.KnetikPlatformApiDocumentationLatest.VendorResource);
  }
}(this, function(ApiClient, PageResourceVendorResource, VendorResource) {
  'use strict';

  /**
   * StoreVendors service.
   * @module api/StoreVendorsApi
   * @version Latest
   */

  /**
   * Constructs a new StoreVendorsApi. 
   * @alias module:api/StoreVendorsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createVendorUsingPOST operation.
     * @callback module:api/StoreVendorsApi~createVendorUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VendorResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a vendor
     * @param {Object} opts Optional parameters
     * @param {module:model/VendorResource} opts.vendor The vendor
     * @param {module:api/StoreVendorsApi~createVendorUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VendorResource}
     */
    this.createVendorUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['vendor'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VendorResource;

      return this.apiClient.callApi(
        '/vendors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVendorUsingDELETE operation.
     * @callback module:api/StoreVendorsApi~deleteVendorUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a vendor
     * @param {Number} id The id of the vendor
     * @param {module:api/StoreVendorsApi~deleteVendorUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteVendorUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteVendorUsingDELETE");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/vendors/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendorUsingGET operation.
     * @callback module:api/StoreVendorsApi~getVendorUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VendorResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single vendor
     * @param {Number} id The id of the vendor
     * @param {module:api/StoreVendorsApi~getVendorUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VendorResource}
     */
    this.getVendorUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getVendorUsingGET");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VendorResource;

      return this.apiClient.callApi(
        '/vendors/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendorsUsingGET operation.
     * @callback module:api/StoreVendorsApi~getVendorsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceVendorResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search vendors
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filters vendors by name starting with the text provided in the filter
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreVendorsApi~getVendorsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceVendorResource}
     */
    this.getVendorsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_name': opts['filterName'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceVendorResource;

      return this.apiClient.callApi(
        '/vendors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVendorUsingPUT operation.
     * @callback module:api/StoreVendorsApi~updateVendorUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a vendor
     * @param {Number} id The id of the vendor
     * @param {Object} opts Optional parameters
     * @param {module:model/VendorResource} opts.vendor The vendor
     * @param {module:api/StoreVendorsApi~updateVendorUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateVendorUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['vendor'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateVendorUsingPUT");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/vendors/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
