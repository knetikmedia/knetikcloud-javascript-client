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
    define(['ApiClient', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.DeviceResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.SimpleUserResource);
  }
}(this, function(ApiClient, SimpleUserResource) {
  'use strict';




  /**
   * The DeviceResource model module.
   * @module model/DeviceResource
   * @version latest

   */

  /**
   * Constructs a new <code>DeviceResource</code>.
   * @alias module:model/DeviceResource
   * @class
   * @param id {Number} The unique ID for this device. Cannot be changed once created
   */
  var exports = function(id) {
    var _this = this;







    _this['id'] = id;










  };

  /**
   * Constructs a <code>DeviceResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceResource} obj Optional instance to populate.
   * @return {module:model/DeviceResource} The populated <code>DeviceResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorization')) {
        obj['authorization'] = ApiClient.convertToType(data['authorization'], 'String');
      }
      if (data.hasOwnProperty('condition')) {
        obj['condition'] = ApiClient.convertToType(data['condition'], 'String');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], {'String': 'String'});
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('device_type')) {
        obj['device_type'] = ApiClient.convertToType(data['device_type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('mac_address')) {
        obj['mac_address'] = ApiClient.convertToType(data['mac_address'], 'String');
      }
      if (data.hasOwnProperty('make')) {
        obj['make'] = ApiClient.convertToType(data['make'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('os')) {
        obj['os'] = ApiClient.convertToType(data['os'], 'String');
      }
      if (data.hasOwnProperty('serial')) {
        obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = SimpleUserResource.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * The authorization code for the device
   * @member {String} authorization
   */
  exports.prototype['authorization'] = undefined;
  /**
   * The current condition of the device (New, Defective, Reconditioned)
   * @member {module:model/DeviceResource.ConditionEnum} condition
   */
  exports.prototype['condition'] = undefined;
  /**
   * The date the device log was created
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The key/value pairs for extended data
   * @member {Object.<String, String>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * The description of the device
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The type of the device
   * @member {String} device_type
   */
  exports.prototype['device_type'] = undefined;
  /**
   * The unique ID for this device. Cannot be changed once created
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The location of the device
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * The MAC (media access control) address of the device
   * @member {String} mac_address
   */
  exports.prototype['mac_address'] = undefined;
  /**
   * The make of the device
   * @member {String} make
   */
  exports.prototype['make'] = undefined;
  /**
   * The model of the device
   * @member {String} model
   */
  exports.prototype['model'] = undefined;
  /**
   * The name of the device
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The OS (operating system) on the device
   * @member {String} os
   */
  exports.prototype['os'] = undefined;
  /**
   * The serial number of the device
   * @member {String} serial
   */
  exports.prototype['serial'] = undefined;
  /**
   * The current status the device (Active, Pending Active, Inactive, Repair
   * @member {module:model/DeviceResource.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The date the device log was updated
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The user that owns the device
   * @member {module:model/SimpleUserResource} user
   */
  exports.prototype['user'] = undefined;


  /**
   * Allowed values for the <code>condition</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ConditionEnum = {
    /**
     * value: "New"
     * @const
     */
    "New": "New",
    /**
     * value: "Defective"
     * @const
     */
    "Defective": "Defective",
    /**
     * value: "Reconditioned"
     * @const
     */
    "Reconditioned": "Reconditioned"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",
    /**
     * value: "PendingActive"
     * @const
     */
    "PendingActive": "PendingActive",
    /**
     * value: "Inactive"
     * @const
     */
    "Inactive": "Inactive",
    /**
     * value: "Repair"
     * @const
     */
    "Repair": "Repair"  };


  return exports;
}));


