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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UserLevelingResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserLevelingResource model module.
   * @module model/UserLevelingResource
   * @version 3.0.8
   */

  /**
   * Constructs a new <code>UserLevelingResource</code>.
   * @alias module:model/UserLevelingResource
   * @class
   * @param lastTierName {String} The name of the last tier the user has qualified for
   * @param lastTierProgress {Number} The progress level of the last tier the user has qualified for
   * @param levelName {String} The name of the level schema
   * @param nextTierName {String} The name of the next tier the user can qualify for
   * @param nextTierProgress {Number} The progress needed to qualify for the next tier
   * @param progress {Number} The amount of progress the user has
   * @param tierNames {Array.<String>} The names of the tiers the user has qualified for
   * @param userId {Number} The ID of the user
   */
  var exports = function(lastTierName, lastTierProgress, levelName, nextTierName, nextTierProgress, progress, tierNames, userId) {
    var _this = this;

    _this['last_tier_name'] = lastTierName;
    _this['last_tier_progress'] = lastTierProgress;
    _this['level_name'] = levelName;
    _this['next_tier_name'] = nextTierName;
    _this['next_tier_progress'] = nextTierProgress;
    _this['progress'] = progress;
    _this['tier_names'] = tierNames;
    _this['user_id'] = userId;
  };

  /**
   * Constructs a <code>UserLevelingResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserLevelingResource} obj Optional instance to populate.
   * @return {module:model/UserLevelingResource} The populated <code>UserLevelingResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('last_tier_name')) {
        obj['last_tier_name'] = ApiClient.convertToType(data['last_tier_name'], 'String');
      }
      if (data.hasOwnProperty('last_tier_progress')) {
        obj['last_tier_progress'] = ApiClient.convertToType(data['last_tier_progress'], 'Number');
      }
      if (data.hasOwnProperty('level_name')) {
        obj['level_name'] = ApiClient.convertToType(data['level_name'], 'String');
      }
      if (data.hasOwnProperty('next_tier_name')) {
        obj['next_tier_name'] = ApiClient.convertToType(data['next_tier_name'], 'String');
      }
      if (data.hasOwnProperty('next_tier_progress')) {
        obj['next_tier_progress'] = ApiClient.convertToType(data['next_tier_progress'], 'Number');
      }
      if (data.hasOwnProperty('progress')) {
        obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
      }
      if (data.hasOwnProperty('tier_names')) {
        obj['tier_names'] = ApiClient.convertToType(data['tier_names'], ['String']);
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
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
  
  var discriminatorValue = 'UserLevelingResource';


  /**
   * The name of the last tier the user has qualified for
   * @member {String} last_tier_name
   */
  exports.prototype['last_tier_name'] = undefined;
  /**
   * The progress level of the last tier the user has qualified for
   * @member {Number} last_tier_progress
   */
  exports.prototype['last_tier_progress'] = undefined;
  /**
   * The name of the level schema
   * @member {String} level_name
   */
  exports.prototype['level_name'] = undefined;
  /**
   * The name of the next tier the user can qualify for
   * @member {String} next_tier_name
   */
  exports.prototype['next_tier_name'] = undefined;
  /**
   * The progress needed to qualify for the next tier
   * @member {Number} next_tier_progress
   */
  exports.prototype['next_tier_progress'] = undefined;
  /**
   * The amount of progress the user has
   * @member {Number} progress
   */
  exports.prototype['progress'] = undefined;
  /**
   * The names of the tiers the user has qualified for
   * @member {Array.<String>} tier_names
   */
  exports.prototype['tier_names'] = undefined;
  /**
   * The ID of the user
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


