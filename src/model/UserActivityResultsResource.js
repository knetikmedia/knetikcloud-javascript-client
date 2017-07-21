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
    root.KnetikPlatformApiDocumentationLatest.UserActivityResultsResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserActivityResultsResource model module.
   * @module model/UserActivityResultsResource
   * @version latest

   */

  /**
   * Constructs a new <code>UserActivityResultsResource</code>.
   * @alias module:model/UserActivityResultsResource
   * @class
   * @param userId {Number} The id of the player
   */
  var exports = function(userId) {
    var _this = this;



    _this['user_id'] = userId;
  };

  /**
   * Constructs a <code>UserActivityResultsResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserActivityResultsResource} obj Optional instance to populate.
   * @return {module:model/UserActivityResultsResource} The populated <code>UserActivityResultsResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The raw score. Null means non-compete or disqualification
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;
  /**
   * Any tags for the metric. Each unique tag will translate into a unique leaderboard. Maximum 5 tags and 50 characters each
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * The id of the player
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


