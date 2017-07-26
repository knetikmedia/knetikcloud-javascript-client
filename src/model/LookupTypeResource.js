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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.LookupTypeResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LookupTypeResource model module.
   * @module model/LookupTypeResource
   * @version latest

   */

  /**
   * Constructs a new <code>LookupTypeResource</code>.
   * @alias module:model/LookupTypeResource
   * @class
   * @param description {String} The description of the expression type
   * @param keyType {String} The variable type the key expression must be, or null if it's dependent (see description for explanation in this case)
   * @param name {String} The name of the expression type
   * @param valueType {String} The variable type of the value this expression returns, or null if it's dependent (see description for explanation in this case)
   */
  var exports = function(description, keyType, name, valueType) {
    var _this = this;

    _this['description'] = description;
    _this['key_type'] = keyType;
    _this['name'] = name;
    _this['value_type'] = valueType;
  };

  /**
   * Constructs a <code>LookupTypeResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookupTypeResource} obj Optional instance to populate.
   * @return {module:model/LookupTypeResource} The populated <code>LookupTypeResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('key_type')) {
        obj['key_type'] = ApiClient.convertToType(data['key_type'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value_type')) {
        obj['value_type'] = ApiClient.convertToType(data['value_type'], 'String');
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
  
  var discriminatorValue = 'LookupTypeResource';


  /**
   * The description of the expression type
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The variable type the key expression must be, or null if it's dependent (see description for explanation in this case)
   * @member {String} key_type
   */
  exports.prototype['key_type'] = undefined;
  /**
   * The name of the expression type
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The variable type of the value this expression returns, or null if it's dependent (see description for explanation in this case)
   * @member {String} value_type
   */
  exports.prototype['value_type'] = undefined;



  return exports;
}));


