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
    define(['ApiClient', 'model/BroadcastableEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BroadcastableEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.CacheClearEvent = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.BroadcastableEvent);
  }
}(this, function(ApiClient, BroadcastableEvent) {
  'use strict';




  /**
   * The CacheClearEvent model module.
   * @module model/CacheClearEvent
   * @version 3.0.6
   */

  /**
   * Constructs a new <code>CacheClearEvent</code>.
   * @alias module:model/CacheClearEvent
   * @class
   * @extends module:model/BroadcastableEvent
   * @param type {String} The type of the event. Used for polymorphic type recognition and thus must match an expected type
   */
  var exports = function(type) {
    var _this = this;
    BroadcastableEvent.call(_this, type);


  };

  /**
   * Constructs a <code>CacheClearEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CacheClearEvent} obj Optional instance to populate.
   * @return {module:model/CacheClearEvent} The populated <code>CacheClearEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BroadcastableEvent.constructFromObject(data, obj);
      if (data.hasOwnProperty('customer_setup')) {
        obj['customer_setup'] = ApiClient.convertToType(data['customer_setup'], 'Boolean');
      }
      if (data.hasOwnProperty('customer_teardown')) {
        obj['customer_teardown'] = ApiClient.convertToType(data['customer_teardown'], 'Boolean');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BroadcastableEvent.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {Boolean} customer_setup
   */
  exports.prototype['customer_setup'] = undefined;
  /**
   * @member {Boolean} customer_teardown
   */
  exports.prototype['customer_teardown'] = undefined;



  return exports;
}));


