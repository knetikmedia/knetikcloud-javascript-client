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
    define(['ApiClient', 'model/BundleItem', 'model/ItemTemplateResource', 'model/PageResourceItemTemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BundleItem'), require('../model/ItemTemplateResource'), require('../model/PageResourceItemTemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.StoreBundlesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.BundleItem, root.KnetikPlatformApiDocumentationLatest.ItemTemplateResource, root.KnetikPlatformApiDocumentationLatest.PageResourceItemTemplateResource);
  }
}(this, function(ApiClient, BundleItem, ItemTemplateResource, PageResourceItemTemplateResource) {
  'use strict';

  /**
   * StoreBundles service.
   * @module api/StoreBundlesApi
   * @version latest

   */

  /**
   * Constructs a new StoreBundlesApi. 
   * @alias module:api/StoreBundlesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createBundleItemUsingPOST operation.
     * @callback module:api/StoreBundlesApi~createBundleItemUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BundleItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a bundle item
     * The SKU for the bundle itself must be unique and there can only be one SKU.  Extra notes for price_override:  The price of all the items (multiplied by the quantity) must equal the price of the bundle.  With individual prices set, items will be processed individually and can be refunded as such.  However, if all prices are set to null, the price of the bundle will be used and will be treated as one item.
     * @param {Object} opts Optional parameters
     * @param {module:model/BundleItem} opts.bundleItem The bundle item object
     * @param {module:api/StoreBundlesApi~createBundleItemUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BundleItem}
     */
    this.createBundleItemUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['bundleItem'];


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
      var returnType = BundleItem;

      return this.apiClient.callApi(
        '/store/bundles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createBundleTemplateUsingPOST operation.
     * @callback module:api/StoreBundlesApi~createBundleTemplateUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a bundle template
     * Bundle Templates define a type of bundle and the properties they have.
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.bundleTemplateResource The new bundle template
     * @param {module:api/StoreBundlesApi~createBundleTemplateUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemTemplateResource}
     */
    this.createBundleTemplateUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['bundleTemplateResource'];


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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/bundles/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBundleTemplateUsingDELETE operation.
     * @callback module:api/StoreBundlesApi~deleteBundleTemplateUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a bundle template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @param {module:api/StoreBundlesApi~deleteBundleTemplateUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBundleTemplateUsingDELETE = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBundleTemplateUsingDELETE");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/store/bundles/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteStoreItemUsingDELETE operation.
     * @callback module:api/StoreBundlesApi~deleteStoreItemUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a bundle item
     * @param {Number} id The id of the bundle
     * @param {module:api/StoreBundlesApi~deleteStoreItemUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteStoreItemUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteStoreItemUsingDELETE");
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
        '/store/bundles/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBundleTemplateUsingGET operation.
     * @callback module:api/StoreBundlesApi~getBundleTemplateUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single bundle template
     * Bundle Templates define a type of bundle and the properties they have.
     * @param {String} id The id of the template
     * @param {module:api/StoreBundlesApi~getBundleTemplateUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemTemplateResource}
     */
    this.getBundleTemplateUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getBundleTemplateUsingGET");
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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/bundles/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBundleTemplatesUsingGET operation.
     * @callback module:api/StoreBundlesApi~getBundleTemplatesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search bundle templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreBundlesApi~getBundleTemplatesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceItemTemplateResource}
     */
    this.getBundleTemplatesUsingGET = function(opts, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceItemTemplateResource;

      return this.apiClient.callApi(
        '/store/bundles/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStoreItemUsingGET operation.
     * @callback module:api/StoreBundlesApi~getStoreItemUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BundleItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single bundle item
     * @param {Number} id The id of the bundle
     * @param {module:api/StoreBundlesApi~getStoreItemUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BundleItem}
     */
    this.getStoreItemUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getStoreItemUsingGET");
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
      var returnType = BundleItem;

      return this.apiClient.callApi(
        '/store/bundles/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBundleItemUsingPUT operation.
     * @callback module:api/StoreBundlesApi~updateBundleItemUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a bundle item
     * @param {Number} id The id of the bundle
     * @param {Object} opts Optional parameters
     * @param {module:model/BundleItem} opts.bundleItem The bundle item object
     * @param {module:api/StoreBundlesApi~updateBundleItemUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBundleItemUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['bundleItem'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateBundleItemUsingPUT");
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
        '/store/bundles/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBundleTemplateUsingPUT operation.
     * @callback module:api/StoreBundlesApi~updateBundleTemplateUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a bundle template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.bundleTemplateResource The bundle template resource object
     * @param {module:api/StoreBundlesApi~updateBundleTemplateUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBundleTemplateUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['bundleTemplateResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateBundleTemplateUsingPUT");
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
        '/store/bundles/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
