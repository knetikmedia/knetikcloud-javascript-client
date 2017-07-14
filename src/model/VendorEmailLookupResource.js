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
    define(['ApiClient', 'model/ExpressionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExpressionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.VendorEmailLookupResource = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.ExpressionResource);
  }
}(this, function(ApiClient, ExpressionResource) {
  'use strict';




  /**
   * The VendorEmailLookupResource model module.
   * @module model/VendorEmailLookupResource
   * @version 3.0.6
   */

  /**
   * Constructs a new <code>VendorEmailLookupResource</code>.
   * @alias module:model/VendorEmailLookupResource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>VendorEmailLookupResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VendorEmailLookupResource} obj Optional instance to populate.
   * @return {module:model/VendorEmailLookupResource} The populated <code>VendorEmailLookupResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lookup_key')) {
        obj['lookup_key'] = ExpressionResource.constructFromObject(data['lookup_key']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('value_type')) {
        obj['value_type'] = ApiClient.convertToType(data['value_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ExpressionResource} lookup_key
   */
  exports.prototype['lookup_key'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} value_type
   */
  exports.prototype['value_type'] = undefined;



  return exports;
}));


