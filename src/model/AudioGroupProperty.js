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
    define(['ApiClient', 'model/FileGroupProperty', 'model/FileProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileGroupProperty'), require('./FileProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.AudioGroupProperty = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.FileGroupProperty, root.KnetikPlatformApiDocumentationLatest.FileProperty);
  }
}(this, function(ApiClient, FileGroupProperty, FileProperty) {
  'use strict';




  /**
   * The AudioGroupProperty model module.
   * @module model/AudioGroupProperty
   * @version latest

   */

  /**
   * Constructs a new <code>AudioGroupProperty</code>.
   * @alias module:model/AudioGroupProperty
   * @class
   * @extends module:model/FileGroupProperty
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   */
  var exports = function(type) {
    var _this = this;
    FileGroupProperty.call(_this, type);
  };

  /**
   * Constructs a <code>AudioGroupProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioGroupProperty} obj Optional instance to populate.
   * @return {module:model/AudioGroupProperty} The populated <code>AudioGroupProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      FileGroupProperty.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(FileGroupProperty.prototype);
  exports.prototype.constructor = exports;




  return exports;
}));


