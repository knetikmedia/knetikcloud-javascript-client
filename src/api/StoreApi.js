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
    define(['ApiClient', 'model/BehaviorDefinitionResource', 'model/InvoiceResource', 'model/PageResourceStoreItem', 'model/PageResourceStoreItemTemplateResource', 'model/QuickBuyRequest', 'model/Result', 'model/StoreItem', 'model/StoreItemTemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BehaviorDefinitionResource'), require('../model/InvoiceResource'), require('../model/PageResourceStoreItem'), require('../model/PageResourceStoreItemTemplateResource'), require('../model/QuickBuyRequest'), require('../model/Result'), require('../model/StoreItem'), require('../model/StoreItemTemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.StoreApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BehaviorDefinitionResource, root.KnetikCloud.InvoiceResource, root.KnetikCloud.PageResourceStoreItem, root.KnetikCloud.PageResourceStoreItemTemplateResource, root.KnetikCloud.QuickBuyRequest, root.KnetikCloud.Result, root.KnetikCloud.StoreItem, root.KnetikCloud.StoreItemTemplateResource);
  }
}(this, function(ApiClient, BehaviorDefinitionResource, InvoiceResource, PageResourceStoreItem, PageResourceStoreItemTemplateResource, QuickBuyRequest, Result, StoreItem, StoreItemTemplateResource) {
  'use strict';

  /**
   * Store service.
   * @module api/StoreApi
   * @version 3.0.8
   */

  /**
   * Constructs a new StoreApi. 
   * @alias module:api/StoreApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create an item template
     * Item Templates define a type of item and the properties they have.
     * @param {Object} opts Optional parameters
     * @param {module:model/StoreItemTemplateResource} opts.itemTemplateResource The new item template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StoreItemTemplateResource} and HTTP response
     */
    this.createItemTemplateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['itemTemplateResource'];


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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StoreItemTemplateResource;

      return this.apiClient.callApi(
        '/store/items/templates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an item template
     * Item Templates define a type of item and the properties they have.
     * @param {Object} opts Optional parameters
     * @param {module:model/StoreItemTemplateResource} opts.itemTemplateResource The new item template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoreItemTemplateResource}
     */
    this.createItemTemplate = function(opts) {
      return this.createItemTemplateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a store item
     * SKUs have to be unique in the entire store. If a duplicate SKU is found, a 400 error is generated and the response will have a \&quot;parameters\&quot; field that is a list of duplicates. A duplicate is an object like {item_id, offending_sku_list}. Ex:&lt;br /&gt; {..., parameters: [[{item: 1, skus: [\&quot;SKU-1\&quot;]}]]}&lt;br /&gt; If an item is brand new and has duplicate SKUs within itself, the item ID will be 0.  Item subclasses are not allowed here, you will have to use their respective endpoints.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/StoreItem} opts.storeItem The store item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StoreItem} and HTTP response
     */
    this.createStoreItemWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['storeItem'];


      var pathParams = {
      };
      var queryParams = {
        'cascade': opts['cascade'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StoreItem;

      return this.apiClient.callApi(
        '/store/items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a store item
     * SKUs have to be unique in the entire store. If a duplicate SKU is found, a 400 error is generated and the response will have a \&quot;parameters\&quot; field that is a list of duplicates. A duplicate is an object like {item_id, offending_sku_list}. Ex:&lt;br /&gt; {..., parameters: [[{item: 1, skus: [\&quot;SKU-1\&quot;]}]]}&lt;br /&gt; If an item is brand new and has duplicate SKUs within itself, the item ID will be 0.  Item subclasses are not allowed here, you will have to use their respective endpoints.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/StoreItem} opts.storeItem The store item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoreItem}
     */
    this.createStoreItem = function(opts) {
      return this.createStoreItemWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an item template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteItemTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteItemTemplate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/store/items/templates/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an item template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteItemTemplate = function(id, opts) {
      return this.deleteItemTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a store item
     * @param {Number} id The id of the item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteStoreItemWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteStoreItem");
      }


      var pathParams = {
        'id': id
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/store/items/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a store item
     * @param {Number} id The id of the item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteStoreItem = function(id) {
      return this.deleteStoreItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List available item behaviors
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BehaviorDefinitionResource>} and HTTP response
     */
    this.getBehaviorsWithHttpInfo = function() {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [BehaviorDefinitionResource];

      return this.apiClient.callApi(
        '/store/items/behaviors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List available item behaviors
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BehaviorDefinitionResource>}
     */
    this.getBehaviors = function() {
      return this.getBehaviorsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single item template
     * Item Templates define a type of item and the properties they have.
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StoreItemTemplateResource} and HTTP response
     */
    this.getItemTemplateWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getItemTemplate");
      }


      var pathParams = {
        'id': id
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StoreItemTemplateResource;

      return this.apiClient.callApi(
        '/store/items/templates/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single item template
     * Item Templates define a type of item and the properties they have.
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoreItemTemplateResource}
     */
    this.getItemTemplate = function(id) {
      return this.getItemTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search item templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceStoreItemTemplateResource} and HTTP response
     */
    this.getItemTemplatesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceStoreItemTemplateResource;

      return this.apiClient.callApi(
        '/store/items/templates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search item templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceStoreItemTemplateResource}
     */
    this.getItemTemplates = function(opts) {
      return this.getItemTemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single store item
     * @param {Number} id The id of the item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StoreItem} and HTTP response
     */
    this.getStoreItemWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getStoreItem");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StoreItem;

      return this.apiClient.callApi(
        '/store/items/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single store item
     * @param {Number} id The id of the item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoreItem}
     */
    this.getStoreItem = function(id) {
      return this.getStoreItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search store items
     * If called without permission STORE_ADMIN the only items marked displayable, whose start and end date are null or appropriate to the current date, and whose geo policy allows the caller&#39;s country will be returned. Similarly skus will be filtered, possibly resulting in an item returned with no skus the user can purchase.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterNameSearch Filter for items whose name starts with a given string.
     * @param {String} opts.filterUniqueKey Filter for items whose unique_key is a given string.
     * @param {Boolean} opts.filterPublished Filter for skus that have been published.
     * @param {Boolean} opts.filterDisplayable Filter for items that are displayable.
     * @param {String} opts.filterStart A comma separated string without spaces.  First value is the operator to search on, second value is the store start date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterEnd A comma separated string without spaces.  First value is the operator to search on, second value is the store end date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the sku start date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterStopDate A comma separated string without spaces.  First value is the operator to search on, second value is the sku end date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterSku Filter for skus whose name starts with a given string.
     * @param {String} opts.filterPrice A colon separated string without spaces.  First value is the operator to search on, second value is the price of a sku.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterTag A comma separated list without spaces of the names of tags. Will only return items with at least one of the tags.
     * @param {String} opts.filterItemsByType Filter for item type based on its type hint.
     * @param {String} opts.filterBundledSkus Filter for skus inside bundles whose name starts with a given string.  Used only when type hint is &#39;bundle_item&#39;
     * @param {Number} opts.filterVendor Filter for items from a given vendor, by id.
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceStoreItem} and HTTP response
     */
    this.getStoreItemsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_name_search': opts['filterNameSearch'],
        'filter_unique_key': opts['filterUniqueKey'],
        'filter_published': opts['filterPublished'],
        'filter_displayable': opts['filterDisplayable'],
        'filter_start': opts['filterStart'],
        'filter_end': opts['filterEnd'],
        'filter_start_date': opts['filterStartDate'],
        'filter_stop_date': opts['filterStopDate'],
        'filter_sku': opts['filterSku'],
        'filter_price': opts['filterPrice'],
        'filter_tag': opts['filterTag'],
        'filter_items_by_type': opts['filterItemsByType'],
        'filter_bundled_skus': opts['filterBundledSkus'],
        'filter_vendor': opts['filterVendor'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceStoreItem;

      return this.apiClient.callApi(
        '/store/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search store items
     * If called without permission STORE_ADMIN the only items marked displayable, whose start and end date are null or appropriate to the current date, and whose geo policy allows the caller&#39;s country will be returned. Similarly skus will be filtered, possibly resulting in an item returned with no skus the user can purchase.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterNameSearch Filter for items whose name starts with a given string.
     * @param {String} opts.filterUniqueKey Filter for items whose unique_key is a given string.
     * @param {Boolean} opts.filterPublished Filter for skus that have been published.
     * @param {Boolean} opts.filterDisplayable Filter for items that are displayable.
     * @param {String} opts.filterStart A comma separated string without spaces.  First value is the operator to search on, second value is the store start date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterEnd A comma separated string without spaces.  First value is the operator to search on, second value is the store end date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the sku start date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterStopDate A comma separated string without spaces.  First value is the operator to search on, second value is the sku end date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterSku Filter for skus whose name starts with a given string.
     * @param {String} opts.filterPrice A colon separated string without spaces.  First value is the operator to search on, second value is the price of a sku.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterTag A comma separated list without spaces of the names of tags. Will only return items with at least one of the tags.
     * @param {String} opts.filterItemsByType Filter for item type based on its type hint.
     * @param {String} opts.filterBundledSkus Filter for skus inside bundles whose name starts with a given string.  Used only when type hint is &#39;bundle_item&#39;
     * @param {Number} opts.filterVendor Filter for items from a given vendor, by id.
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceStoreItem}
     */
    this.getStoreItems = function(opts) {
      return this.getStoreItemsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * One-step purchase and pay for a single SKU item from a user&#39;s wallet
     * Used to create and automatically pay an invoice for a single unit of a single SKU from a user&#39;s wallet. SKU must be priced in virtual currency and must not be an item that requires shipping. PAYMENTS_ADMIN permission is required if user ID is specified and is not the ID of the currently logged in user. If invoice price does not match expected price, purchase is aborted
     * @param {Object} opts Optional parameters
     * @param {module:model/QuickBuyRequest} opts.quickBuyRequest Quick buy details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoiceResource} and HTTP response
     */
    this.quickBuyWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['quickBuyRequest'];


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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InvoiceResource;

      return this.apiClient.callApi(
        '/store/quick-buy', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * One-step purchase and pay for a single SKU item from a user&#39;s wallet
     * Used to create and automatically pay an invoice for a single unit of a single SKU from a user&#39;s wallet. SKU must be priced in virtual currency and must not be an item that requires shipping. PAYMENTS_ADMIN permission is required if user ID is specified and is not the ID of the currently logged in user. If invoice price does not match expected price, purchase is aborted
     * @param {Object} opts Optional parameters
     * @param {module:model/QuickBuyRequest} opts.quickBuyRequest Quick buy details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoiceResource}
     */
    this.quickBuy = function(opts) {
      return this.quickBuyWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an item template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/StoreItemTemplateResource} opts.itemTemplateResource The item template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StoreItemTemplateResource} and HTTP response
     */
    this.updateItemTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['itemTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateItemTemplate");
      }


      var pathParams = {
        'id': id
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StoreItemTemplateResource;

      return this.apiClient.callApi(
        '/store/items/templates/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an item template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/StoreItemTemplateResource} opts.itemTemplateResource The item template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoreItemTemplateResource}
     */
    this.updateItemTemplate = function(id, opts) {
      return this.updateItemTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a store item
     * @param {Number} id The id of the item
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/StoreItem} opts.storeItem The store item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StoreItem} and HTTP response
     */
    this.updateStoreItemWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['storeItem'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateStoreItem");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StoreItem;

      return this.apiClient.callApi(
        '/store/items/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a store item
     * @param {Number} id The id of the item
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/StoreItem} opts.storeItem The store item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoreItem}
     */
    this.updateStoreItem = function(id, opts) {
      return this.updateStoreItemWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
