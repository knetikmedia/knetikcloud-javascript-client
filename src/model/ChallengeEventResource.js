/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    root.KnetikPlatformApiDocumentationLatest.ChallengeEventResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChallengeEventResource model module.
   * @module model/ChallengeEventResource
   * @version latest

   */

  /**
   * Constructs a new <code>ChallengeEventResource</code>.
   * @alias module:model/ChallengeEventResource
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ChallengeEventResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChallengeEventResource} obj Optional instance to populate.
   * @return {module:model/ChallengeEventResource} The populated <code>ChallengeEventResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('challenge_id')) {
        obj['challenge_id'] = ApiClient.convertToType(data['challenge_id'], 'Number');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('reward_status')) {
        obj['reward_status'] = ApiClient.convertToType(data['reward_status'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The id of the challenge
   * @member {Number} challenge_id
   */
  exports.prototype['challenge_id'] = undefined;
  /**
   * The end date in seconds
   * @member {Number} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * The id of the challenge event
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Indicate if the rewards have been given out already 
   * @member {module:model/ChallengeEventResource.RewardStatusEnum} reward_status
   */
  exports.prototype['reward_status'] = undefined;
  /**
   * The start date in seconds
   * @member {Number} start_date
   */
  exports.prototype['start_date'] = undefined;


  /**
   * Allowed values for the <code>reward_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RewardStatusEnum = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",
    /**
     * value: "complete"
     * @const
     */
    "complete": "complete",
    /**
     * value: "partial"
     * @const
     */
    "partial": "partial"  };


  return exports;
}));


