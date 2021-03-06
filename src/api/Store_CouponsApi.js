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
    define(['ApiClient', 'model/CouponItem', 'model/ItemTemplateResource', 'model/PageResourceItemTemplateResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CouponItem'), require('../model/ItemTemplateResource'), require('../model/PageResourceItemTemplateResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.Store_CouponsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.CouponItem, root.KnetikCloud.ItemTemplateResource, root.KnetikCloud.PageResourceItemTemplateResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, CouponItem, ItemTemplateResource, PageResourceItemTemplateResource, Result) {
  'use strict';

  /**
   * Store_Coupons service.
   * @module api/Store_CouponsApi
   * @version 3.0.9
   */

  /**
   * Constructs a new Store_CouponsApi. 
   * @alias module:api/Store_CouponsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a coupon item
     * SKUs have to be unique in the entire store. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; COUPONS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/CouponItem} opts.couponItem The coupon item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CouponItem} and HTTP response
     */
    this.createCouponItemWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['couponItem'];


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
      var returnType = CouponItem;

      return this.apiClient.callApi(
        '/store/coupons', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a coupon item
     * SKUs have to be unique in the entire store. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; COUPONS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/CouponItem} opts.couponItem The coupon item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CouponItem}
     */
    this.createCouponItem = function(opts) {
      return this.createCouponItemWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a coupon template
     * Coupon Templates define a type of coupon and the properties they have. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.couponTemplateResource The new coupon template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemTemplateResource} and HTTP response
     */
    this.createCouponTemplateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['couponTemplateResource'];


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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/coupons/templates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a coupon template
     * Coupon Templates define a type of coupon and the properties they have. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.couponTemplateResource The new coupon template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemTemplateResource}
     */
    this.createCouponTemplate = function(opts) {
      return this.createCouponTemplateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a coupon item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COUPONS_ADMIN
     * @param {Number} id The id of the coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCouponItemWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCouponItem");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/store/coupons/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a coupon item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COUPONS_ADMIN
     * @param {Number} id The id of the coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCouponItem = function(id) {
      return this.deleteCouponItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a coupon template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCouponTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCouponTemplate");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/store/coupons/templates/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a coupon template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCouponTemplate = function(id, opts) {
      return this.deleteCouponTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single coupon item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COUPONS_ADMIN
     * @param {Number} id The id of the coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CouponItem} and HTTP response
     */
    this.getCouponItemWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCouponItem");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CouponItem;

      return this.apiClient.callApi(
        '/store/coupons/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single coupon item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COUPONS_ADMIN
     * @param {Number} id The id of the coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CouponItem}
     */
    this.getCouponItem = function(id) {
      return this.getCouponItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a coupon by sku
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} sku A sku of the coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CouponItem} and HTTP response
     */
    this.getCouponItemBySkuWithHttpInfo = function(sku) {
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling getCouponItemBySku");
      }


      var pathParams = {
        'sku': sku
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
      var returnType = CouponItem;

      return this.apiClient.callApi(
        '/store/coupons/skus/{sku}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a coupon by sku
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} sku A sku of the coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CouponItem}
     */
    this.getCouponItemBySku = function(sku) {
      return this.getCouponItemBySkuWithHttpInfo(sku)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single coupon template
     * Coupon Templates define a type of coupon and the properties they have. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN or COUPONS_ADMIN
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemTemplateResource} and HTTP response
     */
    this.getCouponTemplateWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCouponTemplate");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/coupons/templates/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single coupon template
     * Coupon Templates define a type of coupon and the properties they have. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN or COUPONS_ADMIN
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemTemplateResource}
     */
    this.getCouponTemplate = function(id) {
      return this.getCouponTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search coupon templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN or COUPONS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceItemTemplateResource} and HTTP response
     */
    this.getCouponTemplatesWithHttpInfo = function(opts) {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageResourceItemTemplateResource;

      return this.apiClient.callApi(
        '/store/coupons/templates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search coupon templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN or COUPONS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceItemTemplateResource}
     */
    this.getCouponTemplates = function(opts) {
      return this.getCouponTemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a coupon item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COUPONS_ADMIN
     * @param {Number} id The id of the coupon
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/CouponItem} opts.couponItem The coupon item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CouponItem} and HTTP response
     */
    this.updateCouponItemWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['couponItem'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCouponItem");
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
      var returnType = CouponItem;

      return this.apiClient.callApi(
        '/store/coupons/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a coupon item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COUPONS_ADMIN
     * @param {Number} id The id of the coupon
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/CouponItem} opts.couponItem The coupon item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CouponItem}
     */
    this.updateCouponItem = function(id, opts) {
      return this.updateCouponItemWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a coupon template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.couponTemplateResource The coupon template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemTemplateResource} and HTTP response
     */
    this.updateCouponTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['couponTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCouponTemplate");
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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/coupons/templates/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a coupon template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.couponTemplateResource The coupon template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemTemplateResource}
     */
    this.updateCouponTemplate = function(id, opts) {
      return this.updateCouponTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
