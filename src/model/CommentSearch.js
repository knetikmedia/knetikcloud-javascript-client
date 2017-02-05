/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.CommentSearch = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CommentSearch model module.
   * @module model/CommentSearch
   * @version latest

   */

  /**
   * Constructs a new <code>CommentSearch</code>.
   * @alias module:model/CommentSearch
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>CommentSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentSearch} obj Optional instance to populate.
   * @return {module:model/CommentSearch} The populated <code>CommentSearch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], 'String');
      }
      if (data.hasOwnProperty('context_id')) {
        obj['context_id'] = ApiClient.convertToType(data['context_id'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('owner_id')) {
        obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');
      }
      if (data.hasOwnProperty('owner_username')) {
        obj['owner_username'] = ApiClient.convertToType(data['owner_username'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {String} context
   */
  exports.prototype['context'] = undefined;
  /**
   * @member {Number} context_id
   */
  exports.prototype['context_id'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} owner_id
   */
  exports.prototype['owner_id'] = undefined;
  /**
   * @member {String} owner_username
   */
  exports.prototype['owner_username'] = undefined;



  return exports;
}));


