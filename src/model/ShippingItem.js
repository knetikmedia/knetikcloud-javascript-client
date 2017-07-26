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
    define(['ApiClient', 'model/Behavior', 'model/Property', 'model/Sku', 'model/StoreItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'), require('./Property'), require('./Sku'), require('./StoreItem'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ShippingItem = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Behavior, root.KnetikPlatformApiDocumentationLatest.Property, root.KnetikPlatformApiDocumentationLatest.Sku, root.KnetikPlatformApiDocumentationLatest.StoreItem);
  }
}(this, function(ApiClient, Behavior, Property, Sku, StoreItem) {
  'use strict';




  /**
   * The ShippingItem model module.
   * @module model/ShippingItem
   * @version latest

   */

  /**
   * Constructs a new <code>ShippingItem</code>.
   * @alias module:model/ShippingItem
   * @class
   * @extends module:model/StoreItem
   * @param name {String} The name of the item
   * @param typeHint {String} The type of the item
   * @param skus {Array.<module:model/Sku>} The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart
   * @param vendorId {Number} The vendor who provides the item
   * @param maxTierTotal {Number} An abstract max value that the values of item's shipping_tier work against to decide whether an order can be fulfilled
   */
  var exports = function(name, typeHint, skus, vendorId, maxTierTotal) {
    var _this = this;
    StoreItem.call(_this, name, typeHint, skus, vendorId);

    _this['max_tier_total'] = maxTierTotal;

  };

  /**
   * Constructs a <code>ShippingItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShippingItem} obj Optional instance to populate.
   * @return {module:model/ShippingItem} The populated <code>ShippingItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StoreItem.constructFromObject(data, obj);
      if (data.hasOwnProperty('countries')) {
        obj['countries'] = ApiClient.convertToType(data['countries'], ['String']);
      }
      if (data.hasOwnProperty('max_tier_total')) {
        obj['max_tier_total'] = ApiClient.convertToType(data['max_tier_total'], 'Number');
      }
      if (data.hasOwnProperty('taxable')) {
        obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
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
  
  var discriminatorValue = 'shipping_item';
  StoreItem.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(StoreItem.prototype);
  exports.prototype.constructor = exports;


  /**
   * A unique list of country iso3 codes that allow the shipping option
   * @member {Array.<String>} countries
   */
  exports.prototype['countries'] = undefined;
  /**
   * An abstract max value that the values of item's shipping_tier work against to decide whether an order can be fulfilled
   * @member {Number} max_tier_total
   */
  exports.prototype['max_tier_total'] = undefined;
  /**
   * Whether tax should be applied to the shipping price.  Default = false
   * @member {Boolean} taxable
   */
  exports.prototype['taxable'] = undefined;



  return exports;
}));


