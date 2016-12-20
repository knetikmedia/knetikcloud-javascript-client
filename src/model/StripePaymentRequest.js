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
    root.KnetikPlatformApiDocumentationLatest.StripePaymentRequest = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StripePaymentRequest model module.
   * @module model/StripePaymentRequest
   * @version Latest
   */

  /**
   * Constructs a new <code>StripePaymentRequest</code>.
   * @alias module:model/StripePaymentRequest
   * @class
   * @param invoiceId {Number} The id of the invoice to pay
   * @param token {String} A token from Stripe to identify payment info to be tied to the customer
   */
  var exports = function(invoiceId, token) {
    var _this = this;

    _this['invoice_id'] = invoiceId;
    _this['token'] = token;
  };

  /**
   * Constructs a <code>StripePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StripePaymentRequest} obj Optional instance to populate.
   * @return {module:model/StripePaymentRequest} The populated <code>StripePaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of the invoice to pay
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * A token from Stripe to identify payment info to be tied to the customer
   * @member {String} token
   */
  exports.prototype['token'] = undefined;



  return exports;
}));


