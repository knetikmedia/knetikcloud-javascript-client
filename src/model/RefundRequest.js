/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.RefundRequest = factory(root.KnetikcloudSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RefundRequest model module.
   * @module model/RefundRequest
   * @version 3.0.6
   */

  /**
   * Constructs a new <code>RefundRequest</code>.
   * @alias module:model/RefundRequest
   * @class
   * @param notes {String} Notes about or reason for the refund
   */
  var exports = function(notes) {
    var _this = this;



    _this['notes'] = notes;

  };

  /**
   * Constructs a <code>RefundRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RefundRequest} obj Optional instance to populate.
   * @return {module:model/RefundRequest} The populated <code>RefundRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('bundle_sku')) {
        obj['bundle_sku'] = ApiClient.convertToType(data['bundle_sku'], 'String');
      }
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
    }
    return obj;
  }

  /**
   * The amount to refund. If left off, will refund the remaining balance of the transaction or specific item balance (if SKU provided), whichever is less.
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * The SKU of a bundle item from the invoice that the target item is within.
   * @member {String} bundle_sku
   */
  exports.prototype['bundle_sku'] = undefined;
  /**
   * Notes about or reason for the refund
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;
  /**
   * The SKU of a specific item from the invoice to refund. Affects the maximum refund amount (not to exceed the price of this item times quantity on invoice). Transaction must be tied to an invoice if used.
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;



  return exports;
}));


