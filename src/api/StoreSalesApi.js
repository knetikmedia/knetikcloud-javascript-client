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
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CatalogSale', 'model/PageResourceCatalogSale', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CatalogSale'), require('../model/PageResourceCatalogSale'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.StoreSalesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.CatalogSale, root.KnetikPlatformApiDocumentationLatest.PageResourceCatalogSale, root.KnetikPlatformApiDocumentationLatest.Result);
  }
}(this, function(ApiClient, CatalogSale, PageResourceCatalogSale, Result) {
  'use strict';

  /**
   * StoreSales service.
   * @module api/StoreSalesApi
   * @version latest

   */

  /**
   * Constructs a new StoreSalesApi. 
   * @alias module:api/StoreSalesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCatalogSale operation.
     * @callback module:api/StoreSalesApi~createCatalogSaleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogSale} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a sale
     * @param {Object} opts Optional parameters
     * @param {module:model/CatalogSale} opts.catalogSale The catalog sale object
     * @param {module:api/StoreSalesApi~createCatalogSaleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogSale}
     */
    this.createCatalogSale = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['catalogSale'];


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
      var returnType = CatalogSale;

      return this.apiClient.callApi(
        '/store/sales', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCatalogSale operation.
     * @callback module:api/StoreSalesApi~deleteCatalogSaleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a sale
     * @param {Number} id The id of the sale
     * @param {module:api/StoreSalesApi~deleteCatalogSaleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCatalogSale = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCatalogSale");
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
        '/store/sales/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCatalogSale operation.
     * @callback module:api/StoreSalesApi~getCatalogSaleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogSale} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single sale
     * @param {Number} id The id of the sale
     * @param {module:api/StoreSalesApi~getCatalogSaleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogSale}
     */
    this.getCatalogSale = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCatalogSale");
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
      var returnType = CatalogSale;

      return this.apiClient.callApi(
        '/store/sales/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCatalogSales operation.
     * @callback module:api/StoreSalesApi~getCatalogSalesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceCatalogSale} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search sales
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreSalesApi~getCatalogSalesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceCatalogSale}
     */
    this.getCatalogSales = function(opts, callback) {
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
      var returnType = PageResourceCatalogSale;

      return this.apiClient.callApi(
        '/store/sales', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCatalogSale operation.
     * @callback module:api/StoreSalesApi~updateCatalogSaleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogSale} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a sale
     * @param {Number} id The id of the sale
     * @param {Object} opts Optional parameters
     * @param {module:model/CatalogSale} opts.catalogSale The catalog sale object
     * @param {module:api/StoreSalesApi~updateCatalogSaleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogSale}
     */
    this.updateCatalogSale = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['catalogSale'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCatalogSale");
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
      var returnType = CatalogSale;

      return this.apiClient.callApi(
        '/store/sales/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
