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
    define(['ApiClient', 'model/FileProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.VideoProperty = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.FileProperty);
  }
}(this, function(ApiClient, FileProperty) {
  'use strict';




  /**
   * The VideoProperty model module.
   * @module model/VideoProperty
   * @version 3.0.8
   */

  /**
   * Constructs a new <code>VideoProperty</code>.
   * @alias module:model/VideoProperty
   * @class
   * @extends module:model/FileProperty
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   */
  var exports = function(type) {
    var _this = this;
    FileProperty.call(_this, type);
  };

  /**
   * Constructs a <code>VideoProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoProperty} obj Optional instance to populate.
   * @return {module:model/VideoProperty} The populated <code>VideoProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      FileProperty.constructFromObject(data, obj);
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
  
  var discriminatorValue = 'video';
  FileProperty.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(FileProperty.prototype);
  exports.prototype.constructor = exports;





  return exports;
}));


