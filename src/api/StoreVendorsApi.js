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
    define(['ApiClient', 'model/ItemTemplateResource', 'model/PageResourceItemTemplateResource', 'model/PageResourceVendorResource', 'model/Result', 'model/VendorResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemTemplateResource'), require('../model/PageResourceItemTemplateResource'), require('../model/PageResourceVendorResource'), require('../model/Result'), require('../model/VendorResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.StoreVendorsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ItemTemplateResource, root.KnetikPlatformApiDocumentationLatest.PageResourceItemTemplateResource, root.KnetikPlatformApiDocumentationLatest.PageResourceVendorResource, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.VendorResource);
  }
}(this, function(ApiClient, ItemTemplateResource, PageResourceItemTemplateResource, PageResourceVendorResource, Result, VendorResource) {
  'use strict';

  /**
   * StoreVendors service.
   * @module api/StoreVendorsApi
   * @version latest

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
     * Callback function to receive the result of the createVendor operation.
     * @callback module:api/StoreVendorsApi~createVendorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VendorResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a vendor
     * @param {Object} opts Optional parameters
     * @param {module:model/VendorResource} opts.vendor The vendor
     * @param {module:api/StoreVendorsApi~createVendorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VendorResource}
     */
    this.createVendor = function(opts, callback) {
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
     * Callback function to receive the result of the createVendorTemplate operation.
     * @callback module:api/StoreVendorsApi~createVendorTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a vendor template
     * Vendor Templates define a type of vendor and the properties they have.
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.vendorTemplateResource The new vendor template
     * @param {module:api/StoreVendorsApi~createVendorTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemTemplateResource}
     */
    this.createVendorTemplate = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['vendorTemplateResource'];


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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/vendors/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVendor operation.
     * @callback module:api/StoreVendorsApi~deleteVendorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a vendor
     * @param {Number} id The id of the vendor
     * @param {module:api/StoreVendorsApi~deleteVendorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteVendor = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteVendor");
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
     * Callback function to receive the result of the deleteVendorTemplate operation.
     * @callback module:api/StoreVendorsApi~deleteVendorTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a vendor template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @param {module:api/StoreVendorsApi~deleteVendorTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteVendorTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteVendorTemplate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade']
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
        '/vendors/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendor operation.
     * @callback module:api/StoreVendorsApi~getVendorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VendorResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single vendor
     * @param {Number} id The id of the vendor
     * @param {module:api/StoreVendorsApi~getVendorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VendorResource}
     */
    this.getVendor = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVendor");
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
     * Callback function to receive the result of the getVendorTemplate operation.
     * @callback module:api/StoreVendorsApi~getVendorTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single vendor template
     * Vendor Templates define a type of vendor and the properties they have.
     * @param {String} id The id of the template
     * @param {module:api/StoreVendorsApi~getVendorTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemTemplateResource}
     */
    this.getVendorTemplate = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVendorTemplate");
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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/vendors/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendorTemplates operation.
     * @callback module:api/StoreVendorsApi~getVendorTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search vendor templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to 1)
     * @param {module:api/StoreVendorsApi~getVendorTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceItemTemplateResource}
     */
    this.getVendorTemplates = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceItemTemplateResource;

      return this.apiClient.callApi(
        '/vendors/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendors operation.
     * @callback module:api/StoreVendorsApi~getVendorsCallback
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
     * @param {module:api/StoreVendorsApi~getVendorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceVendorResource}
     */
    this.getVendors = function(opts, callback) {
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
     * Callback function to receive the result of the updateVendor operation.
     * @callback module:api/StoreVendorsApi~updateVendorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VendorResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a vendor
     * @param {Number} id The id of the vendor
     * @param {Object} opts Optional parameters
     * @param {module:model/VendorResource} opts.vendor The vendor
     * @param {module:api/StoreVendorsApi~updateVendorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VendorResource}
     */
    this.updateVendor = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['vendor'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateVendor");
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
      var returnType = VendorResource;

      return this.apiClient.callApi(
        '/vendors/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVendorTemplate operation.
     * @callback module:api/StoreVendorsApi~updateVendorTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a vendor template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.vendorTemplateResource The vendor template resource object
     * @param {module:api/StoreVendorsApi~updateVendorTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemTemplateResource}
     */
    this.updateVendorTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['vendorTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateVendorTemplate");
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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/vendors/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
