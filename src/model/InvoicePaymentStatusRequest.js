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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.InvoicePaymentStatusRequest = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InvoicePaymentStatusRequest model module.
   * @module model/InvoicePaymentStatusRequest
   * @version Latest
   */

  /**
   * Constructs a new <code>InvoicePaymentStatusRequest</code>.
   * @alias module:model/InvoicePaymentStatusRequest
   * @class
   * @param status {String} The new status for the invoice. Additional options may be available based on configuration.  Allowable values: 'new', 'paid', 'hold', 'canceled', 'payment failed', 'partial refund', 'refund'
   */
  var exports = function(status) {
    var _this = this;


    _this['status'] = status;
  };

  /**
   * Constructs a <code>InvoicePaymentStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoicePaymentStatusRequest} obj Optional instance to populate.
   * @return {module:model/InvoicePaymentStatusRequest} The populated <code>InvoicePaymentStatusRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('payment_method_id')) {
        obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * If included, will set the payment method used on the invoice
   * @member {Number} payment_method_id
   */
  exports.prototype['payment_method_id'] = undefined;
  /**
   * The new status for the invoice. Additional options may be available based on configuration.  Allowable values: 'new', 'paid', 'hold', 'canceled', 'payment failed', 'partial refund', 'refund'
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


