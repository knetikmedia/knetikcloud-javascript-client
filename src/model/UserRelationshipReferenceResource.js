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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UserRelationshipReferenceResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserRelationshipReferenceResource model module.
   * @module model/UserRelationshipReferenceResource
   * @version latest

   */

  /**
   * Constructs a new <code>UserRelationshipReferenceResource</code>.
   * @alias module:model/UserRelationshipReferenceResource
   * @class
   * @param id {Number} The id of the user
   */
  var exports = function(id) {
    var _this = this;




    _this['id'] = id;


  };

  /**
   * Constructs a <code>UserRelationshipReferenceResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserRelationshipReferenceResource} obj Optional instance to populate.
   * @return {module:model/UserRelationshipReferenceResource} The populated <code>UserRelationshipReferenceResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('avatar_url')) {
        obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('relationship_id')) {
        obj['relationship_id'] = ApiClient.convertToType(data['relationship_id'], 'Number');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * The url of the user's avatar image
   * @member {String} avatar_url
   */
  exports.prototype['avatar_url'] = undefined;
  /**
   * The context of the relationship
   * @member {String} context
   */
  exports.prototype['context'] = undefined;
  /**
   * The public username of the user
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * The id of the user
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the relationship
   * @member {Number} relationship_id
   */
  exports.prototype['relationship_id'] = undefined;
  /**
   * The username of the user
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


