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
    root.KnetikPlatformApiDocumentationLatest.LocationLogResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LocationLogResource model module.
   * @module model/LocationLogResource
   * @version latest

   */

  /**
   * Constructs a new <code>LocationLogResource</code>.
   * @alias module:model/LocationLogResource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>LocationLogResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocationLogResource} obj Optional instance to populate.
   * @return {module:model/LocationLogResource} The populated <code>LocationLogResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;



  return exports;
}));


