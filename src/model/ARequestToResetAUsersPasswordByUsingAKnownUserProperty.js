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
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ARequestToResetAUsersPasswordByUsingAKnownUserProperty = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ARequestToResetAUsersPasswordByUsingAKnownUserProperty model module.
   * @module model/ARequestToResetAUsersPasswordByUsingAKnownUserProperty
   * @version latest

   */

  /**
   * Constructs a new <code>ARequestToResetAUsersPasswordByUsingAKnownUserProperty</code>.
   * @alias module:model/ARequestToResetAUsersPasswordByUsingAKnownUserProperty
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ARequestToResetAUsersPasswordByUsingAKnownUserProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ARequestToResetAUsersPasswordByUsingAKnownUserProperty} obj Optional instance to populate.
   * @return {module:model/ARequestToResetAUsersPasswordByUsingAKnownUserProperty} The populated <code>ARequestToResetAUsersPasswordByUsingAKnownUserProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('mobile_number')) {
        obj['mobile_number'] = ApiClient.convertToType(data['mobile_number'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * The user's email address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The user's mobile phone number
   * @member {String} mobile_number
   */
  exports.prototype['mobile_number'] = undefined;
  /**
   * The user's username
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


