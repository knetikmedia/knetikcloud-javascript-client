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
    root.KnetikPlatformApiDocumentationLatest.LimitedGettableGroup = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LimitedGettableGroup model module.
   * @module model/LimitedGettableGroup
   * @version latest

   */

  /**
   * Constructs a new <code>LimitedGettableGroup</code>.
   * @alias module:model/LimitedGettableGroup
   * @class
   * @param activeOnly {Boolean} Whether to get active items only
   * @param ownedLimit {Number} The max number of items that can be purchased
   */
  var exports = function(activeOnly, ownedLimit) {
    var _this = this;

    _this['active_only'] = activeOnly;

    _this['owned_limit'] = ownedLimit;
  };

  /**
   * Constructs a <code>LimitedGettableGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LimitedGettableGroup} obj Optional instance to populate.
   * @return {module:model/LimitedGettableGroup} The populated <code>LimitedGettableGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active_only')) {
        obj['active_only'] = ApiClient.convertToType(data['active_only'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('owned_limit')) {
        obj['owned_limit'] = ApiClient.convertToType(data['owned_limit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Whether to get active items only
   * @member {Boolean} active_only
   */
  exports.prototype['active_only'] = undefined;
  /**
   * The name of the group. Multiple items with the same group name will be limited together, leave null to be assigned a random unique name. It is typical that owned_limit and active_only will be the same for all, but this is not enforced and the item being recieved will use its settings.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The max number of items that can be purchased
   * @member {Number} owned_limit
   */
  exports.prototype['owned_limit'] = undefined;



  return exports;
}));


