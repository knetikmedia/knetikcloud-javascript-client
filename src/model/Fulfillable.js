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
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Behavior'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.Fulfillable = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Behavior);
  }
}(this, function(ApiClient, Behavior) {
  'use strict';




  /**
   * The Fulfillable model module.
   * @module model/Fulfillable
   * @version latest

   */

  /**
   * Constructs a new <code>Fulfillable</code>.
   * @alias module:model/Fulfillable
   * @class
   * @extends module:model/Behavior
   * @param typeName {String} The name of the fulfillment type that describes how the item should be fulfilled.  Examples: inventory, wallet, amazon
   */
  var exports = function(typeName) {
    var _this = this;
    Behavior.call(_this);
    _this['type_name'] = typeName;
  };

  /**
   * Constructs a <code>Fulfillable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Fulfillable} obj Optional instance to populate.
   * @return {module:model/Fulfillable} The populated <code>Fulfillable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Behavior.constructFromObject(data, obj);
      if (data.hasOwnProperty('type_name')) {
        obj['type_name'] = ApiClient.convertToType(data['type_name'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(Behavior.prototype);
  exports.prototype.constructor = exports;

  /**
   * The name of the fulfillment type that describes how the item should be fulfilled.  Examples: inventory, wallet, amazon
   * @member {String} type_name
   */
  exports.prototype['type_name'] = undefined;



  return exports;
}));


