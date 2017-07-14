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
    root.KnetikPlatformApiDocumentationLatest.RevenueReportResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RevenueReportResource model module.
   * @module model/RevenueReportResource
   * @version latest

   */

  /**
   * Constructs a new <code>RevenueReportResource</code>.
   * @alias module:model/RevenueReportResource
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>RevenueReportResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RevenueReportResource} obj Optional instance to populate.
   * @return {module:model/RevenueReportResource} The populated <code>RevenueReportResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customer_count')) {
        obj['customer_count'] = ApiClient.convertToType(data['customer_count'], 'Number');
      }
      if (data.hasOwnProperty('sale_count')) {
        obj['sale_count'] = ApiClient.convertToType(data['sale_count'], 'Number');
      }
      if (data.hasOwnProperty('sales_average')) {
        obj['sales_average'] = ApiClient.convertToType(data['sales_average'], 'Number');
      }
      if (data.hasOwnProperty('sales_total')) {
        obj['sales_total'] = ApiClient.convertToType(data['sales_total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} customer_count
   */
  exports.prototype['customer_count'] = undefined;
  /**
   * @member {Number} sale_count
   */
  exports.prototype['sale_count'] = undefined;
  /**
   * @member {Number} sales_average
   */
  exports.prototype['sales_average'] = undefined;
  /**
   * @member {Number} sales_total
   */
  exports.prototype['sales_total'] = undefined;



  return exports;
}));


