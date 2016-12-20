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
    root.KnetikPlatformApiDocumentationLatest.SelectedSettingResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SelectedSettingResource model module.
   * @module model/SelectedSettingResource
   * @version Latest
   */

  /**
   * Constructs a new <code>SelectedSettingResource</code>.
   * @alias module:model/SelectedSettingResource
   * @class
   * @param key {String} The unique ID for the setting
   * @param keyName {String} The textual name of the setting
   * @param value {String} The unique ID for the option
   * @param valueName {String} The textual name of the option
   */
  var exports = function(key, keyName, value, valueName) {
    var _this = this;

    _this['key'] = key;
    _this['key_name'] = keyName;
    _this['value'] = value;
    _this['value_name'] = valueName;
  };

  /**
   * Constructs a <code>SelectedSettingResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SelectedSettingResource} obj Optional instance to populate.
   * @return {module:model/SelectedSettingResource} The populated <code>SelectedSettingResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('key_name')) {
        obj['key_name'] = ApiClient.convertToType(data['key_name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('value_name')) {
        obj['value_name'] = ApiClient.convertToType(data['value_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique ID for the setting
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * The textual name of the setting
   * @member {String} key_name
   */
  exports.prototype['key_name'] = undefined;
  /**
   * The unique ID for the option
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * The textual name of the option
   * @member {String} value_name
   */
  exports.prototype['value_name'] = undefined;



  return exports;
}));


