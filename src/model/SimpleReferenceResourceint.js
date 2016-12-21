/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.SimpleReferenceResourceint = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SimpleReferenceResourceint model module.
   * @module model/SimpleReferenceResourceint
   * @version Latest
   */

  /**
   * Constructs a new <code>SimpleReferenceResourceint</code>.
   * @alias module:model/SimpleReferenceResourceint
   * @class
   * @param id {Number} The id of the referenced object
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;

  };

  /**
   * Constructs a <code>SimpleReferenceResourceint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimpleReferenceResourceint} obj Optional instance to populate.
   * @return {module:model/SimpleReferenceResourceint} The populated <code>SimpleReferenceResourceint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of the referenced object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the referenced object
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


