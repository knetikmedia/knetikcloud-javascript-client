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
    root.KnetikPlatformApiDocumentationLatest.ErrorResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ErrorResource model module.
   * @module model/ErrorResource
   * @version latest

   */

  /**
   * Constructs a new <code>ErrorResource</code>.
   * @alias module:model/ErrorResource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ErrorResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorResource} obj Optional instance to populate.
   * @return {module:model/ErrorResource} The populated <code>ErrorResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], Object);
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], Object);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
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
  
  var discriminatorValue = 'ErrorResource';


  /**
   * Extra details about the error, if needed
   * @member {Object} details
   */
  exports.prototype['details'] = undefined;
  /**
   * The JSON key the message pertains to
   * @member {Object} field
   */
  exports.prototype['field'] = undefined;
  /**
   * The message explaining the error
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


