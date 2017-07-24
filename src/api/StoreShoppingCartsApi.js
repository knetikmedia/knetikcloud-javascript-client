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
    define(['ApiClient', 'model/Cart', 'model/CartItemRequest', 'model/CartShippableResponse', 'model/CartShippingAddressRequest', 'model/CouponDefinition', 'model/PageResourceCartSummary', 'model/Result', 'model/SampleCountriesResponse', 'model/SkuRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Cart'), require('../model/CartItemRequest'), require('../model/CartShippableResponse'), require('../model/CartShippingAddressRequest'), require('../model/CouponDefinition'), require('../model/PageResourceCartSummary'), require('../model/Result'), require('../model/SampleCountriesResponse'), require('../model/SkuRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.StoreShoppingCartsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Cart, root.KnetikPlatformApiDocumentationLatest.CartItemRequest, root.KnetikPlatformApiDocumentationLatest.CartShippableResponse, root.KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest, root.KnetikPlatformApiDocumentationLatest.CouponDefinition, root.KnetikPlatformApiDocumentationLatest.PageResourceCartSummary, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.SampleCountriesResponse, root.KnetikPlatformApiDocumentationLatest.SkuRequest);
  }
}(this, function(ApiClient, Cart, CartItemRequest, CartShippableResponse, CartShippingAddressRequest, CouponDefinition, PageResourceCartSummary, Result, SampleCountriesResponse, SkuRequest) {
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
     * Callback function to receive the result of the addCustomDiscount operation.
     * @callback module:api/StoreShoppingCartsApi~addCustomDiscountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a custom discount to the cart
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CouponDefinition} opts.customDiscount The details of the discount to add
     * @param {module:api/StoreShoppingCartsApi~addCustomDiscountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCustomDiscount = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['customDiscount'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addCustomDiscount");
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
        '/carts/{id}/custom-discounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addDiscountToCart operation.
     * @callback module:api/StoreShoppingCartsApi~addDiscountToCartCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a discount coupon to the cart
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/SkuRequest} opts.skuRequest The request of the sku
     * @param {module:api/StoreShoppingCartsApi~addDiscountToCartCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addDiscountToCart = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['skuRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addDiscountToCart");
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
        '/carts/{id}/discounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemToCart operation.
     * @callback module:api/StoreShoppingCartsApi~addItemToCartCallback
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
     * @param {module:api/StoreShoppingCartsApi~addItemToCartCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemToCart = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['cartItemRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addItemToCart");
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
        '/carts/{id}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCart operation.
     * @callback module:api/StoreShoppingCartsApi~createCartCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a cart
     * You don&#39;t have to have a user to create a cart but the API requires authentication to checkout
     * @param {Object} opts Optional parameters
     * @param {Number} opts.owner Set the owner of a cart. If not specified, defaults to the calling user&#39;s id. If specified and is not the calling user&#39;s id, SHOPPING_CARTS_ADMIN permission is required
     * @param {String} opts.currencyCode Set the currency for the cart, by currency code. May be disallowed by site settings.
     * @param {module:api/StoreShoppingCartsApi~createCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.createCart = function(opts, callback) {
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

      var authNames = ['OAuth2'];
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
     * Callback function to receive the result of the getCart operation.
     * @callback module:api/StoreShoppingCartsApi~getCartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cart} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the cart with the given GUID
     * @param {String} id The id of the cart
     * @param {module:api/StoreShoppingCartsApi~getCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Cart}
     */
    this.getCart = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCart");
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
      var returnType = Cart;

      return this.apiClient.callApi(
        '/carts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCarts operation.
     * @callback module:api/StoreShoppingCartsApi~getCartsCallback
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
     * @param {module:api/StoreShoppingCartsApi~getCartsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceCartSummary}
     */
    this.getCarts = function(opts, callback) {
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

      var authNames = ['OAuth2'];
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
     * Callback function to receive the result of the getShippable operation.
     * @callback module:api/StoreShoppingCartsApi~getShippableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartShippableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns whether a cart requires shipping
     * @param {String} id The id of the cart
     * @param {module:api/StoreShoppingCartsApi~getShippableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CartShippableResponse}
     */
    this.getShippable = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getShippable");
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
      var returnType = CartShippableResponse;

      return this.apiClient.callApi(
        '/carts/{id}/shippable', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShippingCountries operation.
     * @callback module:api/StoreShoppingCartsApi~getShippingCountriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SampleCountriesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of available shipping countries per vendor
     * Since a cart can have multiple vendors with different shipping options, the countries are broken down by vendors. Please see notes about the response object as the fields are variable.
     * @param {String} id The id of the cart
     * @param {module:api/StoreShoppingCartsApi~getShippingCountriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SampleCountriesResponse}
     */
    this.getShippingCountries = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getShippingCountries");
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
      var returnType = SampleCountriesResponse;

      return this.apiClient.callApi(
        '/carts/{id}/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeDiscountFromCart operation.
     * @callback module:api/StoreShoppingCartsApi~removeDiscountFromCartCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a discount coupon from the cart
     * @param {String} id The id of the cart
     * @param {String} code The SKU code of the coupon to remove
     * @param {module:api/StoreShoppingCartsApi~removeDiscountFromCartCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeDiscountFromCart = function(id, code, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeDiscountFromCart");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling removeDiscountFromCart");
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

      var authNames = ['OAuth2'];
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
     * Callback function to receive the result of the setCartCurrency operation.
     * @callback module:api/StoreShoppingCartsApi~setCartCurrencyCallback
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
     * @param {module:api/StoreShoppingCartsApi~setCartCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setCartCurrency = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['currencyCode'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setCartCurrency");
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
        '/carts/{id}/currency', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setCartOwner operation.
     * @callback module:api/StoreShoppingCartsApi~setCartOwnerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets the owner of a cart if none is set already
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The id of the user
     * @param {module:api/StoreShoppingCartsApi~setCartOwnerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setCartOwner = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['userId'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setCartOwner");
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
        '/carts/{id}/owner', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemInCart operation.
     * @callback module:api/StoreShoppingCartsApi~updateItemInCartCallback
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
     * @param {module:api/StoreShoppingCartsApi~updateItemInCartCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemInCart = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['cartItemRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateItemInCart");
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
        '/carts/{id}/items', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateShippingAddress operation.
     * @callback module:api/StoreShoppingCartsApi~updateShippingAddressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies or sets the order shipping address
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartShippingAddressRequest} opts.cartShippingAddressRequest The cart shipping address request object
     * @param {module:api/StoreShoppingCartsApi~updateShippingAddressCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateShippingAddress = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['cartShippingAddressRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateShippingAddress");
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
        '/carts/{id}/shipping-address', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
