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
    root.KnetikCloud.RewardCurrencyResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RewardCurrencyResource model module.
   * @module model/RewardCurrencyResource
   * @version 3.0.8
   */

  /**
   * Constructs a new <code>RewardCurrencyResource</code>.
   * @alias module:model/RewardCurrencyResource
   * @class
   * @param currencyCode {String} The code of the currency type to give
   * @param maxRank {Number} The highest number (worst) rank to give the reward to. Must be greater than or equal to minRank
   * @param minRank {Number} The lowest number (best) rank to give the reward to. Must be greater than zero
   * @param percent {Boolean} True if the value is actually a percentage of the intake
   * @param value {Number} The amount of currency to give. For percentage values, 0.5 is 50%
   */
  var exports = function(currencyCode, maxRank, minRank, percent, value) {
    var _this = this;

    _this['currency_code'] = currencyCode;

    _this['max_rank'] = maxRank;
    _this['min_rank'] = minRank;
    _this['percent'] = percent;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>RewardCurrencyResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RewardCurrencyResource} obj Optional instance to populate.
   * @return {module:model/RewardCurrencyResource} The populated <code>RewardCurrencyResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('currency_name')) {
        obj['currency_name'] = ApiClient.convertToType(data['currency_name'], 'String');
      }
      if (data.hasOwnProperty('max_rank')) {
        obj['max_rank'] = ApiClient.convertToType(data['max_rank'], 'Number');
      }
      if (data.hasOwnProperty('min_rank')) {
        obj['min_rank'] = ApiClient.convertToType(data['min_rank'], 'Number');
      }
      if (data.hasOwnProperty('percent')) {
        obj['percent'] = ApiClient.convertToType(data['percent'], 'Boolean');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
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
  
  var discriminatorValue = 'RewardCurrencyResource';


  /**
   * The code of the currency type to give
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * The name of the currency reward to give.  Set by currency_code)
   * @member {String} currency_name
   */
  exports.prototype['currency_name'] = undefined;
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
   * True if the value is actually a percentage of the intake
   * @member {Boolean} percent
   */
  exports.prototype['percent'] = undefined;
  /**
   * The amount of currency to give. For percentage values, 0.5 is 50%
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


