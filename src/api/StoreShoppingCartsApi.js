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
    define(['ApiClient', 'model/Cart', 'model/CartItemRequest', 'model/CartShippableResponse', 'model/CartShippingAddressRequest', 'model/PageResourceCartSummary', 'model/SampleCountriesResponse', 'model/SkuRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Cart'), require('../model/CartItemRequest'), require('../model/CartShippableResponse'), require('../model/CartShippingAddressRequest'), require('../model/PageResourceCartSummary'), require('../model/SampleCountriesResponse'), require('../model/SkuRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.StoreShoppingCartsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Cart, root.KnetikPlatformApiDocumentationLatest.CartItemRequest, root.KnetikPlatformApiDocumentationLatest.CartShippableResponse, root.KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest, root.KnetikPlatformApiDocumentationLatest.PageResourceCartSummary, root.KnetikPlatformApiDocumentationLatest.SampleCountriesResponse, root.KnetikPlatformApiDocumentationLatest.SkuRequest);
  }
}(this, function(ApiClient, Cart, CartItemRequest, CartShippableResponse, CartShippingAddressRequest, PageResourceCartSummary, SampleCountriesResponse, SkuRequest) {
  'use strict';

  /**
   * StoreShoppingCarts service.
   * @module api/StoreShoppingCartsApi
   * @version latest

   */

  /**
   * Constructs a new StoreShoppingCartsApi. 
   * @alias module:api/StoreShoppingCartsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addDiscountUsingPOST operation.
     * @callback module:api/StoreShoppingCartsApi~addDiscountUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a coupon to the cart
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/SkuRequest} opts.skuRequest The request of the sku
     * @param {module:api/StoreShoppingCartsApi~addDiscountUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addDiscountUsingPOST = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['skuRequest'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling addDiscountUsingPOST");
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
        '/carts/{id}/discounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemUsingPOST operation.
     * @callback module:api/StoreShoppingCartsApi~addItemUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an item to the cart
     * Currently, carts cannot contain virtual and real currency items at the same time. Furthermore, the API only support a single virtual item at the moment
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartItemRequest} opts.cartItemRequest The cart item request object
     * @param {module:api/StoreShoppingCartsApi~addItemUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemUsingPOST = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['cartItemRequest'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling addItemUsingPOST");
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
        '/carts/{id}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the assignCartUsingPUT operation.
     * @callback module:api/StoreShoppingCartsApi~assignCartUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets the owner of a cart if none is set already
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The id of the user
     * @param {module:api/StoreShoppingCartsApi~assignCartUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.assignCartUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['userId'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling assignCartUsingPUT");
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
        '/carts/{id}/owner', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkShippableUsingGET operation.
     * @callback module:api/StoreShoppingCartsApi~checkShippableUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartShippableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns whether a cart requires shipping
     * @param {String} id The id of the cart
     * @param {module:api/StoreShoppingCartsApi~checkShippableUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CartShippableResponse}
     */
    this.checkShippableUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling checkShippableUsingGET");
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
      var returnType = CartShippableResponse;

      return this.apiClient.callApi(
        '/carts/{id}/shippable', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCartUsingPOST operation.
     * @callback module:api/StoreShoppingCartsApi~createCartUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new cart from scratch
     * You don&#39;t have to have a user to create a cart but the API requires authentication to checkout
     * @param {Object} opts Optional parameters
     * @param {Number} opts.owner Set the owner of a cart. If not specified, defaults to the calling user&#39;s id. If specified and is not the calling user&#39;s id, SHOPPING_CARTS_ADMIN permission is required
     * @param {String} opts.currencyCode Set the currency for the cart, by currency code. May be disallowed by site settings.
     * @param {module:api/StoreShoppingCartsApi~createCartUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.createCartUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'owner': opts['owner'],
        'currency_code': opts['currencyCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/carts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartUsingGET operation.
     * @callback module:api/StoreShoppingCartsApi~getCartUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cart} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the cart with the given GUID
     * @param {String} id The id of the cart
     * @param {module:api/StoreShoppingCartsApi~getCartUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Cart}
     */
    this.getCartUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getCartUsingGET");
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
      var returnType = Cart;

      return this.apiClient.callApi(
        '/carts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCountriesUsingGET operation.
     * @callback module:api/StoreShoppingCartsApi~getCountriesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SampleCountriesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of available shipping countries per vendor
     * Since a cart can have multiple vendors with different shipping options, the countries are broken down by vendors. Please see notes about the response object as the fields are variable.
     * @param {String} id The id of the cart
     * @param {module:api/StoreShoppingCartsApi~getCountriesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SampleCountriesResponse}
     */
    this.getCountriesUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getCountriesUsingGET");
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
      var returnType = SampleCountriesResponse;

      return this.apiClient.callApi(
        '/carts/{id}/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyShippingAddressUsingPUT operation.
     * @callback module:api/StoreShoppingCartsApi~modifyShippingAddressUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies or sets the order shipping address
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartShippingAddressRequest} opts.cartShippingAddressRequest The cart shipping address request object
     * @param {module:api/StoreShoppingCartsApi~modifyShippingAddressUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.modifyShippingAddressUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['cartShippingAddressRequest'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling modifyShippingAddressUsingPUT");
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
        '/carts/{id}/shipping-address', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeDiscountUsingDELETE operation.
     * @callback module:api/StoreShoppingCartsApi~removeDiscountUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a coupon from the cart
     * @param {String} id The id of the cart
     * @param {String} code The SKU code of the coupon to remove
     * @param {module:api/StoreShoppingCartsApi~removeDiscountUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeDiscountUsingDELETE = function(id, code, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling removeDiscountUsingDELETE");
      }

      // verify the required parameter 'code' is set
      if (code == undefined || code == null) {
        throw new Error("Missing the required parameter 'code' when calling removeDiscountUsingDELETE");
      }


      var pathParams = {
        'id': id,
        'code': code
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
        '/carts/{id}/discounts/{code}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchCartsUsingGET operation.
     * @callback module:api/StoreShoppingCartsApi~searchCartsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceCartSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of carts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterOwnerId Filter by the id of the owner
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreShoppingCartsApi~searchCartsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceCartSummary}
     */
    this.searchCartsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_owner_id': opts['filterOwnerId'],
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
      var returnType = PageResourceCartSummary;

      return this.apiClient.callApi(
        '/carts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setCartCurrencyUsingPUT operation.
     * @callback module:api/StoreShoppingCartsApi~setCartCurrencyUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets the currency to use for the cart
     * May be disallowed by site settings.
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {String} opts.currencyCode The code of the currency
     * @param {module:api/StoreShoppingCartsApi~setCartCurrencyUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setCartCurrencyUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['currencyCode'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling setCartCurrencyUsingPUT");
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
        '/carts/{id}/currency', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemUsingPUT operation.
     * @callback module:api/StoreShoppingCartsApi~updateItemUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Changes the quantity of an item already in the cart
     * A quantity of zero will remove the item from the cart altogether.
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartItemRequest} opts.cartItemRequest The cart item request object
     * @param {module:api/StoreShoppingCartsApi~updateItemUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['cartItemRequest'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateItemUsingPUT");
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
        '/carts/{id}/items', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
