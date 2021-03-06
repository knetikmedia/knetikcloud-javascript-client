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
    define(['ApiClient', 'model/RewardCurrencyResource', 'model/RewardItemResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RewardCurrencyResource'), require('./RewardItemResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.RewardSetResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.RewardCurrencyResource, root.KnetikCloud.RewardItemResource);
  }
}(this, function(ApiClient, RewardCurrencyResource, RewardItemResource) {
  'use strict';




  /**
   * The RewardSetResource model module.
   * @module model/RewardSetResource
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>RewardSetResource</code>.
   * @alias module:model/RewardSetResource
   * @class
   * @param name {String} The user friendly name for this reward set
   */
  var exports = function(name) {
    var _this = this;







    _this['name'] = name;



  };

  /**
   * Constructs a <code>RewardSetResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RewardSetResource} obj Optional instance to populate.
   * @return {module:model/RewardSetResource} The populated <code>RewardSetResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('currency_rewards')) {
        obj['currency_rewards'] = ApiClient.convertToType(data['currency_rewards'], [RewardCurrencyResource]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('item_rewards')) {
        obj['item_rewards'] = ApiClient.convertToType(data['item_rewards'], [RewardItemResource]);
      }
      if (data.hasOwnProperty('long_description')) {
        obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
      }
      if (data.hasOwnProperty('max_placing')) {
        obj['max_placing'] = ApiClient.convertToType(data['max_placing'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
      if (data.hasOwnProperty('unique_key')) {
        obj['unique_key'] = ApiClient.convertToType(data['unique_key'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
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
  
  var discriminatorValue = 'RewardSetResource';


  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The currency to give as rewards
   * @member {Array.<module:model/RewardCurrencyResource>} currency_rewards
   */
  exports.prototype['currency_rewards'] = undefined;
  /**
   * The assigned unique ID for this reward set
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The items to give as rewards
   * @member {Array.<module:model/RewardItemResource>} item_rewards
   */
  exports.prototype['item_rewards'] = undefined;
  /**
   * A longer describe the reward set, usually included in details
   * @member {String} long_description
   */
  exports.prototype['long_description'] = undefined;
  /**
   * The maximum placing that will receive a reward
   * @member {Number} max_placing
   */
  exports.prototype['max_placing'] = undefined;
  /**
   * The user friendly name for this reward set
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A short paragraph to describe the reward set, usually included in listings.  Max 255 characters
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * A provided unique key for this reward set
   * @member {String} unique_key
   */
  exports.prototype['unique_key'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


