/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
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
    root.KnetikPlatformApiDocumentationLatest.StoreListRequest = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StoreListRequest model module.
   * @module model/StoreListRequest
   * @version Latest
   */

  /**
   * Constructs a new <code>StoreListRequest</code>.
   * @alias module:model/StoreListRequest
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>StoreListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreListRequest} obj Optional instance to populate.
   * @return {module:model/StoreListRequest} The populated <code>StoreListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ignore_location')) {
        obj['ignore_location'] = ApiClient.convertToType(data['ignore_location'], 'Boolean');
      }
      if (data.hasOwnProperty('in_stock_only')) {
        obj['in_stock_only'] = ApiClient.convertToType(data['in_stock_only'], 'Boolean');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('use_catalog')) {
        obj['use_catalog'] = ApiClient.convertToType(data['use_catalog'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Whether the location is ignored
   * @member {Boolean} ignore_location
   */
  exports.prototype['ignore_location'] = undefined;
  /**
   * Whether the item is in stock
   * @member {Boolean} in_stock_only
   */
  exports.prototype['in_stock_only'] = undefined;
  /**
   * The amount of items returned
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * The page of the request
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * Whether the catalog is used
   * @member {Boolean} use_catalog
   */
  exports.prototype['use_catalog'] = undefined;



  return exports;
}));


