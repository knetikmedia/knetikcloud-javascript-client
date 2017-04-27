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
    define(['ApiClient', 'model/AddressResource', 'model/InvoiceCreateRequest', 'model/InvoicePaymentStatusRequest', 'model/InvoiceResource', 'model/PageResourceInvoiceLogEntry', 'model/PageResourceInvoiceResource', 'model/PayBySavedMethodRequest', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddressResource'), require('../model/InvoiceCreateRequest'), require('../model/InvoicePaymentStatusRequest'), require('../model/InvoiceResource'), require('../model/PageResourceInvoiceLogEntry'), require('../model/PageResourceInvoiceResource'), require('../model/PayBySavedMethodRequest'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.InvoicesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.AddressResource, root.KnetikPlatformApiDocumentationLatest.InvoiceCreateRequest, root.KnetikPlatformApiDocumentationLatest.InvoicePaymentStatusRequest, root.KnetikPlatformApiDocumentationLatest.InvoiceResource, root.KnetikPlatformApiDocumentationLatest.PageResourceInvoiceLogEntry, root.KnetikPlatformApiDocumentationLatest.PageResourceInvoiceResource, root.KnetikPlatformApiDocumentationLatest.PayBySavedMethodRequest, root.KnetikPlatformApiDocumentationLatest.Result);
  }
}(this, function(ApiClient, AddressResource, InvoiceCreateRequest, InvoicePaymentStatusRequest, InvoiceResource, PageResourceInvoiceLogEntry, PageResourceInvoiceResource, PayBySavedMethodRequest, Result) {
  'use strict';

  /**
   * Invoices service.
   * @module api/InvoicesApi
   * @version latest

   */

  /**
   * Constructs a new InvoicesApi. 
   * @alias module:api/InvoicesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createInvoice operation.
     * @callback module:api/InvoicesApi~createInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InvoiceResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an invoice
     * Create an invoice(s) by providing a cart GUID. Note that there may be multiple invoices created, one per vendor.
     * @param {Object} opts Optional parameters
     * @param {module:model/InvoiceCreateRequest} opts.req Invoice to be created
     * @param {module:api/InvoicesApi~createInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InvoiceResource>}
     */
    this.createInvoice = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['req'];


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
      var returnType = [InvoiceResource];

      return this.apiClient.callApi(
        '/invoices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulFillmentStatuses operation.
     * @callback module:api/InvoicesApi~getFulFillmentStatusesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists available fulfillment statuses
     * @param {module:api/InvoicesApi~getFulFillmentStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getFulFillmentStatuses = function(callback) {
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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/invoices/fulfillment-statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoice operation.
     * @callback module:api/InvoicesApi~getInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an invoice
     * @param {Number} id The id of the invoice
     * @param {module:api/InvoicesApi~getInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceResource}
     */
    this.getInvoice = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInvoice");
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
      var returnType = InvoiceResource;

      return this.apiClient.callApi(
        '/invoices/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceLogs operation.
     * @callback module:api/InvoicesApi~getInvoiceLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceInvoiceLogEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List invoice logs
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/InvoicesApi~getInvoiceLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceInvoiceLogEntry}
     */
    this.getInvoiceLogs = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInvoiceLogs");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceInvoiceLogEntry;

      return this.apiClient.callApi(
        '/invoices/{id}/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoices operation.
     * @callback module:api/InvoicesApi~getInvoicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceInvoiceResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve invoices
     * Without INVOICES_ADMIN permission the results are automatically filtered for only the logged in user&#39;s invoices. It is recomended however that filter_user be added to avoid issues for admin users accidentally getting additional invoices.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterUser The id of a user to get invoices for. Automtically added if not being called with admin permissions.
     * @param {String} opts.filterEmail Filters invoices by customer&#39;s email. Admins only.
     * @param {String} opts.filterFulfillmentStatus Filters invoices by fulfillment status type. Can be a comma separated list of statuses
     * @param {String} opts.filterPaymentStatus Filters invoices by payment status type. Can be a comma separated list of statuses
     * @param {String} opts.filterItemName Filters invoices by item name containing the given string
     * @param {String} opts.filterExternalRef Filters invoices by external reference.
     * @param {String} opts.filterCreatedDate Filters invoices by creation date. Multiple values possible for range search. Format: filter_created_date&#x3D;OP,ts&amp;... where OP in (GT, LT, GOE, LOE, EQ) and ts is a unix timestamp in seconds. Ex: filter_created_date&#x3D;GT,1452154258,LT,1554254874
     * @param {String} opts.filterVendorIds Filters invoices for ones from one of the vendors whose id is in the given comma separated list
     * @param {String} opts.filterCurrency Filters invoices by currency. ISO3 currency code
     * @param {String} opts.filterShippingStateName Filters invoices by shipping address: Exact match state name
     * @param {String} opts.filterShippingCountryName Filters invoices by shipping address: Exact match country name
     * @param {String} opts.filterShipping Filters invoices by shipping price. Multiple values possible for range search. Format: filter_shipping&#x3D;OP,ts&amp;... where OP in (GT, LT, GOE, LOE, EQ). Ex: filter_shipping&#x3D;GT,14.58,LT,15.54
     * @param {String} opts.filterVendorName Filters invoices by vendor name starting with given string
     * @param {String} opts.filterSku Filters invoices by item sku
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to 1)
     * @param {module:api/InvoicesApi~getInvoicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceInvoiceResource}
     */
    this.getInvoices = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_user': opts['filterUser'],
        'filter_email': opts['filterEmail'],
        'filter_fulfillment_status': opts['filterFulfillmentStatus'],
        'filter_payment_status': opts['filterPaymentStatus'],
        'filter_item_name': opts['filterItemName'],
        'filter_external_ref': opts['filterExternalRef'],
        'filter_created_date': opts['filterCreatedDate'],
        'filter_vendor_ids': opts['filterVendorIds'],
        'filter_currency': opts['filterCurrency'],
        'filter_shipping_state_name': opts['filterShippingStateName'],
        'filter_shipping_country_name': opts['filterShippingCountryName'],
        'filter_shipping': opts['filterShipping'],
        'filter_vendor_name': opts['filterVendorName'],
        'filter_sku': opts['filterSku'],
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
      var returnType = PageResourceInvoiceResource;

      return this.apiClient.callApi(
        '/invoices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentStatuses operation.
     * @callback module:api/InvoicesApi~getPaymentStatusesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists available payment statuses
     * @param {module:api/InvoicesApi~getPaymentStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getPaymentStatuses = function(callback) {
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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/invoices/payment-statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the payInvoice operation.
     * @callback module:api/InvoicesApi~payInvoiceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trigger payment of an invoice
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/PayBySavedMethodRequest} opts.request Payment info
     * @param {module:api/InvoicesApi~payInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.payInvoice = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling payInvoice");
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
        '/invoices/{id}/payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setExternalRef operation.
     * @callback module:api/InvoicesApi~setExternalRefCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the external reference of an invoice
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {String} opts.externalRef External reference info
     * @param {module:api/InvoicesApi~setExternalRefCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setExternalRef = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['externalRef'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setExternalRef");
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
        '/invoices/{id}/external-ref', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setInvoiceItemFulfillmentStatus operation.
     * @callback module:api/InvoicesApi~setInvoiceItemFulfillmentStatusCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the fulfillment status of an invoice item
     * This allows external fulfillment systems to report success or failure. Fulfillment status changes are restricted by a specific flow determining which status can lead to which.
     * @param {Number} id The id of the invoice
     * @param {String} sku The sku of an item in the invoice
     * @param {String} status The new fulfillment status for the item. Additional options may be available based on configuration.  Allowable values:  &#39;unfulfilled&#39;, &#39;fulfilled&#39;, &#39;not fulfillable&#39;, &#39;failed&#39;, &#39;processing&#39;, &#39;failed_permanent&#39;, &#39;delayed&#39;
     * @param {module:api/InvoicesApi~setInvoiceItemFulfillmentStatusCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setInvoiceItemFulfillmentStatus = function(id, sku, status, callback) {
      var postBody = status;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setInvoiceItemFulfillmentStatus");
      }

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling setInvoiceItemFulfillmentStatus");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling setInvoiceItemFulfillmentStatus");
      }


      var pathParams = {
        'id': id,
        'sku': sku
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
        '/invoices/{id}/items/{sku}/fulfillment-status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setOrderNotes operation.
     * @callback module:api/InvoicesApi~setOrderNotesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the order notes of an invoice
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {String} opts.orderNotes Payment status info
     * @param {module:api/InvoicesApi~setOrderNotesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setOrderNotes = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['orderNotes'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setOrderNotes");
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
        '/invoices/{id}/order-notes', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setPaymentStatus operation.
     * @callback module:api/InvoicesApi~setPaymentStatusCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the payment status of an invoice
     * This may trigger fulfillment if setting the status to &#39;paid&#39;. This is mainly intended to support external payment systems that cannot be incorporated into the payment method system. Payment status changes are restricted by a specific flow determining which status can lead to which.
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/InvoicePaymentStatusRequest} opts.request Payment status info
     * @param {module:api/InvoicesApi~setPaymentStatusCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setPaymentStatus = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setPaymentStatus");
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
        '/invoices/{id}/payment-status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillingInfo operation.
     * @callback module:api/InvoicesApi~updateBillingInfoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set or update billing info
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/AddressResource} opts.billingInfoRequest Address info
     * @param {module:api/InvoicesApi~updateBillingInfoCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillingInfo = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['billingInfoRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBillingInfo");
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
        '/invoices/{id}/billing-address', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
