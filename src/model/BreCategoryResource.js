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
    root.KnetikPlatformApiDocumentationLatest.BreCategoryResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The BreCategoryResource model module.
   * @module model/BreCategoryResource
   * @version latest

   */

  /**
   * Constructs a new <code>BreCategoryResource</code>.
   * @alias module:model/BreCategoryResource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>BreCategoryResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BreCategoryResource} obj Optional instance to populate.
   * @return {module:model/BreCategoryResource} The populated <code>BreCategoryResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
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
  
  var discriminatorValue = 'BreCategoryResource';


  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The name of the category. Serves as the unique id
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A template this BRE category is validated against (private). May be null and no validation of additional_properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;



  return exports;
}));


