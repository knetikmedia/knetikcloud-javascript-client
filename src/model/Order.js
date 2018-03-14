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
    root.KnetikCloud.Order = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Order model module.
   * @module model/Order
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>Order</code>.
   * @alias module:model/Order
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ascending')) {
        obj['ascending'] = ApiClient.convertToType(data['ascending'], 'Boolean');
      }
      if (data.hasOwnProperty('descending')) {
        obj['descending'] = ApiClient.convertToType(data['descending'], 'Boolean');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('ignore_case')) {
        obj['ignore_case'] = ApiClient.convertToType(data['ignore_case'], 'Boolean');
      }
      if (data.hasOwnProperty('null_handling')) {
        obj['null_handling'] = ApiClient.convertToType(data['null_handling'], 'String');
      }
      if (data.hasOwnProperty('property')) {
        obj['property'] = ApiClient.convertToType(data['property'], 'String');
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
  
  var discriminatorValue = 'Order';


  /**
   * @member {Boolean} ascending
   */
  exports.prototype['ascending'] = undefined;
  /**
   * @member {Boolean} descending
   */
  exports.prototype['descending'] = undefined;
  /**
   * @member {module:model/Order.DirectionEnum} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * @member {Boolean} ignore_case
   */
  exports.prototype['ignore_case'] = undefined;
  /**
   * @member {module:model/Order.NullHandlingEnum} null_handling
   */
  exports.prototype['null_handling'] = undefined;
  /**
   * @member {String} property
   */
  exports.prototype['property'] = undefined;


  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "ASC"
     * @const
     */
    "ASC": "ASC",
    /**
     * value: "DESC"
     * @const
     */
    "DESC": "DESC"  };

  /**
   * Allowed values for the <code>null_handling</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NullHandlingEnum = {
    /**
     * value: "NATIVE"
     * @const
     */
    "NATIVE": "NATIVE",
    /**
     * value: "NULLS_FIRST"
     * @const
     */
    "NULLS_FIRST": "NULLS_FIRST",
    /**
     * value: "NULLS_LAST"
     * @const
     */
    "NULLS_LAST": "NULLS_LAST"  };


  return exports;
}));


