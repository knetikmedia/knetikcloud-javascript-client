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
    define(['ApiClient', 'model/BreRuleLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BreRuleLog'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.BreEventLog = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.BreRuleLog);
  }
}(this, function(ApiClient, BreRuleLog) {
  'use strict';




  /**
   * The BreEventLog model module.
   * @module model/BreEventLog
   * @version latest

   */

  /**
   * Constructs a new <code>BreEventLog</code>.
   * @alias module:model/BreEventLog
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>BreEventLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BreEventLog} obj Optional instance to populate.
   * @return {module:model/BreEventLog} The populated <code>BreEventLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customer')) {
        obj['customer'] = ApiClient.convertToType(data['customer'], 'String');
      }
      if (data.hasOwnProperty('event_id')) {
        obj['event_id'] = ApiClient.convertToType(data['event_id'], 'String');
      }
      if (data.hasOwnProperty('event_name')) {
        obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
      }
      if (data.hasOwnProperty('event_start_date')) {
        obj['event_start_date'] = ApiClient.convertToType(data['event_start_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], Object);
      }
      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [BreRuleLog]);
      }
    }
    return obj;
  }

  /**
   * The customer of the BRE event log
   * @member {String} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * The event id of the BRE event log
   * @member {String} event_id
   */
  exports.prototype['event_id'] = undefined;
  /**
   * The event name of the BRE event log
   * @member {String} event_name
   */
  exports.prototype['event_name'] = undefined;
  /**
   * The event start date of the BRE event log
   * @member {Number} event_start_date
   */
  exports.prototype['event_start_date'] = undefined;
  /**
   * The id of the BRE event log
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The event paramters of the BRE event log
   * @member {Object} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * The rules of the BRE event log
   * @member {Array.<module:model/BreRuleLog>} rules
   */
  exports.prototype['rules'] = undefined;



  return exports;
}));


