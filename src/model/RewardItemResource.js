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
    root.KnetikCloud.RewardItemResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RewardItemResource model module.
   * @module model/RewardItemResource
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>RewardItemResource</code>.
   * @alias module:model/RewardItemResource
   * @class
   * @param itemId {Number} The id of the item to reward
   * @param maxRank {Number} The highest number (worst) rank to give the reward to. Must be greater than or equal to minRank
   * @param minRank {Number} The lowest number (best) rank to give the reward to. Must be greater than zero
   * @param quantity {Number} How many copies to give
   */
  var exports = function(itemId, maxRank, minRank, quantity) {
    var _this = this;

    _this['item_id'] = itemId;

    _this['max_rank'] = maxRank;
    _this['min_rank'] = minRank;
    _this['quantity'] = quantity;
  };

  /**
   * Constructs a <code>RewardItemResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RewardItemResource} obj Optional instance to populate.
   * @return {module:model/RewardItemResource} The populated <code>RewardItemResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('item_id')) {
        obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
      }
      if (data.hasOwnProperty('item_name')) {
        obj['item_name'] = ApiClient.convertToType(data['item_name'], 'String');
      }
      if (data.hasOwnProperty('max_rank')) {
        obj['max_rank'] = ApiClient.convertToType(data['max_rank'], 'Number');
      }
      if (data.hasOwnProperty('min_rank')) {
        obj['min_rank'] = ApiClient.convertToType(data['min_rank'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
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
  
  var discriminatorValue = 'RewardItemResource';


  /**
   * The id of the item to reward
   * @member {Number} item_id
   */
  exports.prototype['item_id'] = undefined;
  /**
   * The name of the item to reward (read only, set by id)
   * @member {String} item_name
   */
  exports.prototype['item_name'] = undefined;
  /**
   * The highest number (worst) rank to give the reward to. Must be greater than or equal to minRank
   * @member {Number} max_rank
   */
  exports.prototype['max_rank'] = undefined;
  /**
   * The lowest number (best) rank to give the reward to. Must be greater than zero
   * @member {Number} min_rank
   */
  exports.prototype['min_rank'] = undefined;
  /**
   * How many copies to give
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;



  return exports;
}));


