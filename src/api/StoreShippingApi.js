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
    define(['ApiClient', 'model/ItemTemplateResource', 'model/PageResourceItemTemplateResource', 'model/ShippingItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemTemplateResource'), require('../model/PageResourceItemTemplateResource'), require('../model/ShippingItem'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.StoreShippingApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ItemTemplateResource, root.KnetikPlatformApiDocumentationLatest.PageResourceItemTemplateResource, root.KnetikPlatformApiDocumentationLatest.ShippingItem);
  }
}(this, function(ApiClient, ItemTemplateResource, PageResourceItemTemplateResource, ShippingItem) {
  'use strict';

  /**
   * StoreShipping service.
   * @module api/StoreShippingApi
   * @version Latest
   */

  /**
   * Constructs a new StoreShippingApi. 
   * @alias module:api/StoreShippingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createShippingItemUsingPOST operation.
     * @callback module:api/StoreShippingApi~createShippingItemUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShippingItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a shipping item
     * A shipping item represents a shipping option and cost. SKUs have to be unique in the entire store.
     * @param {Object} opts Optional parameters
     * @param {module:model/ShippingItem} opts.shippingItem The shipping item object
     * @param {module:api/StoreShippingApi~createShippingItemUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShippingItem}
     */
    this.createShippingItemUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['shippingItem'];


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
      var returnType = ShippingItem;

      return this.apiClient.callApi(
        '/store/shipping', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createShippingTemplateUsingPOST operation.
     * @callback module:api/StoreShippingApi~createShippingTemplateUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a shipping template
     * Shipping Templates define a type of shipping and the properties they have.
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.shippingTemplateResource The new shipping template
     * @param {module:api/StoreShippingApi~createShippingTemplateUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemTemplateResource}
     */
    this.createShippingTemplateUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['shippingTemplateResource'];


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
        '/store/shipping/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteShippingItemUsingDELETE operation.
     * @callback module:api/StoreShippingApi~deleteShippingItemUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a shipping item
     * @param {Number} id The id of the shipping item
     * @param {module:api/StoreShippingApi~deleteShippingItemUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteShippingItemUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteShippingItemUsingDELETE");
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
        '/store/shipping/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteShippingTemplateUsingDELETE operation.
     * @callback module:api/StoreShippingApi~deleteShippingTemplateUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a shipping template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @param {module:api/StoreShippingApi~deleteShippingTemplateUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteShippingTemplateUsingDELETE = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteShippingTemplateUsingDELETE");
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
        '/store/shipping/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShippingItemUsingGET operation.
     * @callback module:api/StoreShippingApi~getShippingItemUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShippingItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single shipping item
     * @param {Number} id The id of the shipping item
     * @param {module:api/StoreShippingApi~getShippingItemUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShippingItem}
     */
    this.getShippingItemUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getShippingItemUsingGET");
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
      var returnType = ShippingItem;

      return this.apiClient.callApi(
        '/store/shipping/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShippingTemplateUsingGET operation.
     * @callback module:api/StoreShippingApi~getShippingTemplateUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single shipping template
     * Shipping Templates define a type of shipping and the properties they have.
     * @param {String} id The id of the template
     * @param {module:api/StoreShippingApi~getShippingTemplateUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemTemplateResource}
     */
    this.getShippingTemplateUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getShippingTemplateUsingGET");
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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/shipping/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShippingTemplatesUsingGET operation.
     * @callback module:api/StoreShippingApi~getShippingTemplatesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search shipping templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreShippingApi~getShippingTemplatesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceItemTemplateResource}
     */
    this.getShippingTemplatesUsingGET = function(opts, callback) {
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceItemTemplateResource;

      return this.apiClient.callApi(
        '/store/shipping/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateShippingItemUsingPUT operation.
     * @callback module:api/StoreShippingApi~updateShippingItemUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a shipping item
     * @param {Number} id The id of the shipping item
     * @param {Object} opts Optional parameters
     * @param {module:model/ShippingItem} opts.shippingItem The shipping item object
     * @param {module:api/StoreShippingApi~updateShippingItemUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateShippingItemUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['shippingItem'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateShippingItemUsingPUT");
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
        '/store/shipping/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateShippingTemplateUsingPUT operation.
     * @callback module:api/StoreShippingApi~updateShippingTemplateUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a shipping template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.shippingTemplateResource The shipping template resource object
     * @param {module:api/StoreShippingApi~updateShippingTemplateUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateShippingTemplateUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['shippingTemplateResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateShippingTemplateUsingPUT");
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
        '/store/shipping/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
