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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.PayBySavedMethodRequest = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PayBySavedMethodRequest model module.
   * @module model/PayBySavedMethodRequest
   * @version latest

   */

  /**
   * Constructs a new <code>PayBySavedMethodRequest</code>.
   * @alias module:model/PayBySavedMethodRequest
   * @class
   * @param paymentMethod {Number} The id of the payment method to use. Must belong to the caller, be public or have PAYMENTS_ADMIN permission
   */
  var exports = function(paymentMethod) {
    var _this = this;

    _this['payment_method'] = paymentMethod;
  };

  /**
   * Constructs a <code>PayBySavedMethodRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PayBySavedMethodRequest} obj Optional instance to populate.
   * @return {module:model/PayBySavedMethodRequest} The populated <code>PayBySavedMethodRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('payment_method')) {
        obj['payment_method'] = ApiClient.convertToType(data['payment_method'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The id of the payment method to use. Must belong to the caller, be public or have PAYMENTS_ADMIN permission
   * @member {Number} payment_method
   */
  exports.prototype['payment_method'] = undefined;



  return exports;
}));


