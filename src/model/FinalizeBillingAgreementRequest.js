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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.FinalizeBillingAgreementRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FinalizeBillingAgreementRequest model module.
   * @module model/FinalizeBillingAgreementRequest
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>FinalizeBillingAgreementRequest</code>.
   * @alias module:model/FinalizeBillingAgreementRequest
   * @class
   * @param token {String} The token from PayPal (passed as a parameter in the return URL)
   */
  var exports = function(token) {
    var _this = this;




    _this['token'] = token;

  };

  /**
   * Constructs a <code>FinalizeBillingAgreementRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinalizeBillingAgreementRequest} obj Optional instance to populate.
   * @return {module:model/FinalizeBillingAgreementRequest} The populated <code>FinalizeBillingAgreementRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('new_default')) {
        obj['new_default'] = ApiClient.convertToType(data['new_default'], 'Boolean');
      }
      if (data.hasOwnProperty('payer_id')) {
        obj['payer_id'] = ApiClient.convertToType(data['payer_id'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
    }
    return obj;
  }

  exports.registerChild = function(child, discriminatorValue) {
	  child.discriminatorField = exports.discriminatorField;
	  child.discriminatorValue = discriminatorValue;
	  child.parent = exports;
	  if(exports.children == null)
		  exports.children = {};
	  exports.children[discriminatorValue] = child;
	  if(exports.parent != null)
		  exports.parent.registerChild(child, discriminatorValue);
  }
  
  var discriminatorValue = 'FinalizeBillingAgreementRequest';


  /**
   * The ID of the invoice being paid along with the creation of this agreement
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * Whether the new payment method created should be the user's default
   * @member {Boolean} new_default
   */
  exports.prototype['new_default'] = undefined;
  /**
   * The payer ID from PayPal (passed as a parameter in the return URL). Only required if an invoice ID was included
   * @member {String} payer_id
   */
  exports.prototype['payer_id'] = undefined;
  /**
   * The token from PayPal (passed as a parameter in the return URL)
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * The ID of the user. Defaults to the logged in user
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


