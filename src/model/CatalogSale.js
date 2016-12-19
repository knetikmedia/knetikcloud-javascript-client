/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    root.KnetikPlatformApiDocumentationLatest.CatalogSale = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CatalogSale model module.
   * @module model/CatalogSale
   * @version Latest
   */

  /**
   * Constructs a new <code>CatalogSale</code>.
   * @alias module:model/CatalogSale
   * @class
   * @param currencyCode {String} The iso3 code for the currency for this discountValue.  The sku purchased will have to match for it this sale to apply
   * @param discountType {module:model/CatalogSale.DiscountTypeEnum} The way in which the price is reduced. 'value' means subtracting directly, 'percentage' means subtracting by the price times the discountValue (1.0 == 100%)
   * @param name {String} The name of the sale.  Max 40 characters
   * @param saleStartDate {Number} The date the sale begins.  Unix timestamp in seconds
   */
  var exports = function(currencyCode, discountType, name, saleStartDate) {
    var _this = this;

    _this['currency_code'] = currencyCode;
    _this['discount_type'] = discountType;




    _this['name'] = name;

    _this['sale_start_date'] = saleStartDate;



  };

  /**
   * Constructs a <code>CatalogSale</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogSale} obj Optional instance to populate.
   * @return {module:model/CatalogSale} The populated <code>CatalogSale</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('discount_type')) {
        obj['discount_type'] = ApiClient.convertToType(data['discount_type'], 'String');
      }
      if (data.hasOwnProperty('discount_value')) {
        obj['discount_value'] = ApiClient.convertToType(data['discount_value'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('item')) {
        obj['item'] = ApiClient.convertToType(data['item'], 'Number');
      }
      if (data.hasOwnProperty('long_description')) {
        obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('sale_end_date')) {
        obj['sale_end_date'] = ApiClient.convertToType(data['sale_end_date'], 'Number');
      }
      if (data.hasOwnProperty('sale_start_date')) {
        obj['sale_start_date'] = ApiClient.convertToType(data['sale_start_date'], 'Number');
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('vendor')) {
        obj['vendor'] = ApiClient.convertToType(data['vendor'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The iso3 code for the currency for this discountValue.  The sku purchased will have to match for it this sale to apply
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * The way in which the price is reduced. 'value' means subtracting directly, 'percentage' means subtracting by the price times the discountValue (1.0 == 100%)
   * @member {module:model/CatalogSale.DiscountTypeEnum} discount_type
   */
  exports.prototype['discount_type'] = undefined;
  /**
   * The amount deducted from the price, in the same currencyCode as the item
   * @member {Number} discount_value
   */
  exports.prototype['discount_value'] = undefined;
  /**
   * The id of the sale
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the item this sale applies to.  Leave null to use other filters
   * @member {Number} item
   */
  exports.prototype['item'] = undefined;
  /**
   * The long description of the sale
   * @member {String} long_description
   */
  exports.prototype['long_description'] = undefined;
  /**
   * The name of the sale.  Max 40 characters
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The date the sale ends, null for never.  Unix timestamp in seconds
   * @member {Number} sale_end_date
   */
  exports.prototype['sale_end_date'] = undefined;
  /**
   * The date the sale begins.  Unix timestamp in seconds
   * @member {Number} sale_start_date
   */
  exports.prototype['sale_start_date'] = undefined;
  /**
   * The short description of the sale.  Max 140 characters
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * The tag this sale applies to.  Leave null to skip this filter (applies to all tags)
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * The id of the vendor this sale applies to.  Leave null to skip this filter (applies to all vendors)
   * @member {Number} vendor
   */
  exports.prototype['vendor'] = undefined;


  /**
   * Allowed values for the <code>discount_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DiscountTypeEnum = {
    /**
     * value: "value"
     * @const
     */
    "value": "value",
    /**
     * value: "percentage"
     * @const
     */
    "percentage": "percentage"  };


  return exports;
}));


