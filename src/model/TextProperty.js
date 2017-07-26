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
    define(['ApiClient', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.TextProperty = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The TextProperty model module.
   * @module model/TextProperty
   * @version latest

   */

  /**
   * Constructs a new <code>TextProperty</code>.
   * @alias module:model/TextProperty
   * @class
   * @extends module:model/Property
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   */
  var exports = function(type) {
    var _this = this;
    Property.call(_this, type);

  };

  /**
   * Constructs a <code>TextProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TextProperty} obj Optional instance to populate.
   * @return {module:model/TextProperty} The populated <code>TextProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Property.constructFromObject(data, obj);
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  exports.registerChild = function(child, discriminatorValue) {
	  child.discriminatorField = exports.discriminatorField;
	  child.discriminatorValue = discriminatorValue;
	  child.parent = exports;
	  if(exports.children === null || exports.children === undefined)
		  exports.children = {};
	  exports.children[discriminatorValue] = child;
	  if(exports.parent !== null || exports.parent !== undefined)
		  exports.parent.registerChild(child, discriminatorValue);
  }
  Property.registerChild(exports, 'text');

  exports.prototype = Object.create(Property.prototype);
  exports.prototype.constructor = exports;

  /**
   * The value
   * @member {String} value
   */
  exports.prototype['value'] = undefined;


  ApiClient.registerInheritance(Property, exports, 'text');


  return exports;
}));


