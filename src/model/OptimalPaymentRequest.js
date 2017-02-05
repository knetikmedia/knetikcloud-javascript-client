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
    root.KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptimalPaymentRequest model module.
   * @module model/OptimalPaymentRequest
   * @version latest

   */

  /**
   * Constructs a new <code>OptimalPaymentRequest</code>.
   * @alias module:model/OptimalPaymentRequest
   * @class
   * @param invoiceId {Number} The id of the invoice to pay
   * @param onDecline {String} The url to redirect the user to after declining payment
   * @param onError {String} The url to redirect the user to after an error in payment
   * @param onSuccess {String} The url to redirect the user to after successful payment
   */
  var exports = function(invoiceId, onDecline, onError, onSuccess) {
    var _this = this;



    _this['invoice_id'] = invoiceId;

    _this['on_decline'] = onDecline;
    _this['on_error'] = onError;
    _this['on_success'] = onSuccess;
  };

  /**
   * Constructs a <code>OptimalPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptimalPaymentRequest} obj Optional instance to populate.
   * @return {module:model/OptimalPaymentRequest} The populated <code>OptimalPaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('on_decline')) {
        obj['on_decline'] = ApiClient.convertToType(data['on_decline'], 'String');
      }
      if (data.hasOwnProperty('on_error')) {
        obj['on_error'] = ApiClient.convertToType(data['on_error'], 'String');
      }
      if (data.hasOwnProperty('on_success')) {
        obj['on_success'] = ApiClient.convertToType(data['on_success'], 'String');
      }
    }
    return obj;
  }

  /**
   * The email address of the user
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The first name of the user
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * The id of the invoice to pay
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * The last name of the user
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * The url to redirect the user to after declining payment
   * @member {String} on_decline
   */
  exports.prototype['on_decline'] = undefined;
  /**
   * The url to redirect the user to after an error in payment
   * @member {String} on_error
   */
  exports.prototype['on_error'] = undefined;
  /**
   * The url to redirect the user to after successful payment
   * @member {String} on_success
   */
  exports.prototype['on_success'] = undefined;



  return exports;
}));


