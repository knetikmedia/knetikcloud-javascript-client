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
    define(['ApiClient', 'model/FileProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ImageProperty = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.FileProperty);
  }
}(this, function(ApiClient, FileProperty) {
  'use strict';




  /**
   * The ImageProperty model module.
   * @module model/ImageProperty
   * @version latest

   */

  /**
   * Constructs a new <code>ImageProperty</code>.
   * @alias module:model/ImageProperty
   * @class
   * @extends module:model/FileProperty
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   */
  var exports = function(type) {
    var _this = this;
    FileProperty.call(_this, type);
  };

  /**
   * Constructs a <code>ImageProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageProperty} obj Optional instance to populate.
   * @return {module:model/ImageProperty} The populated <code>ImageProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      FileProperty.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(FileProperty.prototype);
  exports.prototype.constructor = exports;



  ApiClient.registerInheritance(FileProperty, exports, 'image');


  return exports;
}));


