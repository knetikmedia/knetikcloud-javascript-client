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
    define(['ApiClient', 'model/PropertyDefinitionResource', 'model/PropertyFieldListResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyDefinitionResource'), require('./PropertyFieldListResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AudioPropertyDefinitionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PropertyDefinitionResource, root.KnetikCloud.PropertyFieldListResource);
  }
}(this, function(ApiClient, PropertyDefinitionResource, PropertyFieldListResource) {
  'use strict';




  /**
   * The AudioPropertyDefinitionResource model module.
   * @module model/AudioPropertyDefinitionResource
   * @version 3.0.8
   */

  /**
   * Constructs a new <code>AudioPropertyDefinitionResource</code>.
   * @alias module:model/AudioPropertyDefinitionResource
   * @class
   * @extends module:model/PropertyDefinitionResource
   * @param name {String} The name of the property
   * @param required {Boolean} Whether the property is required
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   */
  var exports = function(name, required, type) {
    var _this = this;
    PropertyDefinitionResource.call(_this, name, required, type);



  };

  /**
   * Constructs a <code>AudioPropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioPropertyDefinitionResource} obj Optional instance to populate.
   * @return {module:model/AudioPropertyDefinitionResource} The populated <code>AudioPropertyDefinitionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      PropertyDefinitionResource.constructFromObject(data, obj);
      if (data.hasOwnProperty('file_type')) {
        obj['file_type'] = ApiClient.convertToType(data['file_type'], 'String');
      }
      if (data.hasOwnProperty('max_length')) {
        obj['max_length'] = ApiClient.convertToType(data['max_length'], 'Number');
      }
      if (data.hasOwnProperty('min_length')) {
        obj['min_length'] = ApiClient.convertToType(data['min_length'], 'Number');
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
  
  var discriminatorValue = 'audio';
  PropertyDefinitionResource.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(PropertyDefinitionResource.prototype);
  exports.prototype.constructor = exports;


  /**
   * If provided, a file type the property must match
   * @member {String} file_type
   */
  exports.prototype['file_type'] = undefined;
  /**
   * If provided, the maximum length of the audio
   * @member {Number} max_length
   */
  exports.prototype['max_length'] = undefined;
  /**
   * If provided, the minimum length of the audio
   * @member {Number} min_length
   */
  exports.prototype['min_length'] = undefined;



  return exports;
}));


