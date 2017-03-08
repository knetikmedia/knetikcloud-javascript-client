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
    define(['ApiClient', 'model/ActivityEntitlementResource', 'model/RewardSetResource', 'model/SelectedSettingResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityEntitlementResource'), require('./RewardSetResource'), require('./SelectedSettingResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ChallengeActivityResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ActivityEntitlementResource, root.KnetikPlatformApiDocumentationLatest.RewardSetResource, root.KnetikPlatformApiDocumentationLatest.SelectedSettingResource);
  }
}(this, function(ApiClient, ActivityEntitlementResource, RewardSetResource, SelectedSettingResource) {
  'use strict';




  /**
   * The ChallengeActivityResource model module.
   * @module model/ChallengeActivityResource
   * @version latest

   */

  /**
   * Constructs a new <code>ChallengeActivityResource</code>.
   * @alias module:model/ChallengeActivityResource
   * @class
   * @param activityId {Number} The id of the activity
   */
  var exports = function(activityId) {
    var _this = this;

    _this['activity_id'] = activityId;





  };

  /**
   * Constructs a <code>ChallengeActivityResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChallengeActivityResource} obj Optional instance to populate.
   * @return {module:model/ChallengeActivityResource} The populated <code>ChallengeActivityResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activity_id')) {
        obj['activity_id'] = ApiClient.convertToType(data['activity_id'], 'Number');
      }
      if (data.hasOwnProperty('challenge_id')) {
        obj['challenge_id'] = ApiClient.convertToType(data['challenge_id'], 'Number');
      }
      if (data.hasOwnProperty('entitlement')) {
        obj['entitlement'] = ActivityEntitlementResource.constructFromObject(data['entitlement']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('reward_set')) {
        obj['reward_set'] = RewardSetResource.constructFromObject(data['reward_set']);
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = ApiClient.convertToType(data['settings'], [SelectedSettingResource]);
      }
    }
    return obj;
  }

  /**
   * The id of the activity
   * @member {Number} activity_id
   */
  exports.prototype['activity_id'] = undefined;
  /**
   * The id of the challenge
   * @member {Number} challenge_id
   */
  exports.prototype['challenge_id'] = undefined;
  /**
   * The entitlement item needed to participate in the activity as part of this event. Null indicates free entry. When creating/updating only id is used. Item must be pre-existing
   * @member {module:model/ActivityEntitlementResource} entitlement
   */
  exports.prototype['entitlement'] = undefined;
  /**
   * The unique ID for this resource
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The rewards to give at the end of each occurence of the activity. When creating/updating only id is used. Reward set must be pre-existing
   * @member {module:model/RewardSetResource} reward_set
   */
  exports.prototype['reward_set'] = undefined;
  /**
   * The list of settings and the select options
   * @member {Array.<module:model/SelectedSettingResource>} settings
   */
  exports.prototype['settings'] = undefined;



  return exports;
}));


