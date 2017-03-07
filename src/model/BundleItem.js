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
    define(['ApiClient', 'model/Behavior', 'model/BundledSku', 'model/Property', 'model/Sku'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'), require('./BundledSku'), require('./Property'), require('./Sku'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.BundleItem = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Behavior, root.KnetikPlatformApiDocumentationLatest.BundledSku, root.KnetikPlatformApiDocumentationLatest.Property, root.KnetikPlatformApiDocumentationLatest.Sku);
  }
}(this, function(ApiClient, Behavior, BundledSku, Property, Sku) {
  'use strict';




  /**
   * The BundleItem model module.
   * @module model/BundleItem
   * @version latest

   */

  /**
   * Constructs a new <code>BundleItem</code>.
   * @alias module:model/BundleItem
   * @class
   * @param bundledSkus {Array.<module:model/BundledSku>} The skus of items to be included in this bundle, and how they influence the bundle total price.  Must have at least one SKU
   * @param name {String} The name of the item
   * @param skus {Array.<module:model/Sku>} The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart
   * @param typeHint {String} The type of the item
   * @param vendorId {Number} The vendor who provides the item
   */
  var exports = function(bundledSkus, name, skus, typeHint, vendorId) {
    var _this = this;



    _this['bundled_skus'] = bundledSkus;







    _this['name'] = name;


    _this['skus'] = skus;





    _this['type_hint'] = typeHint;


    _this['vendor_id'] = vendorId;
  };

  /**
   * Constructs a <code>BundleItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BundleItem} obj Optional instance to populate.
   * @return {module:model/BundleItem} The populated <code>BundleItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('behaviors')) {
        obj['behaviors'] = ApiClient.convertToType(data['behaviors'], [Behavior]);
      }
      if (data.hasOwnProperty('bundled_skus')) {
        obj['bundled_skus'] = ApiClient.convertToType(data['bundled_skus'], [BundledSku]);
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('displayable')) {
        obj['displayable'] = ApiClient.convertToType(data['displayable'], 'Boolean');
      }
      if (data.hasOwnProperty('geo_country_list')) {
        obj['geo_country_list'] = ApiClient.convertToType(data['geo_country_list'], ['String']);
      }
      if (data.hasOwnProperty('geo_policy_type')) {
        obj['geo_policy_type'] = ApiClient.convertToType(data['geo_policy_type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('long_description')) {
        obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('shipping_tier')) {
        obj['shipping_tier'] = ApiClient.convertToType(data['shipping_tier'], 'Number');
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
      if (data.hasOwnProperty('skus')) {
        obj['skus'] = ApiClient.convertToType(data['skus'], [Sku]);
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'Number');
      }
      if (data.hasOwnProperty('store_end')) {
        obj['store_end'] = ApiClient.convertToType(data['store_end'], 'Number');
      }
      if (data.hasOwnProperty('store_start')) {
        obj['store_start'] = ApiClient.convertToType(data['store_start'], 'Number');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('type_hint')) {
        obj['type_hint'] = ApiClient.convertToType(data['type_hint'], 'String');
      }
      if (data.hasOwnProperty('unique_key')) {
        obj['unique_key'] = ApiClient.convertToType(data['unique_key'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('vendor_id')) {
        obj['vendor_id'] = ApiClient.convertToType(data['vendor_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type, or be an extra not from the template
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The behaviors linked to the item, describing various options and interactions. May not be included in item lists
   * @member {Array.<module:model/Behavior>} behaviors
   */
  exports.prototype['behaviors'] = undefined;
  /**
   * The skus of items to be included in this bundle, and how they influence the bundle total price.  Must have at least one SKU
   * @member {Array.<module:model/BundledSku>} bundled_skus
   */
  exports.prototype['bundled_skus'] = undefined;
  /**
   * A category for filtering items
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The date the item was created, unix timestamp in seconds
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * Whether or not the item is currently displayable.  Default = true
   * @member {Boolean} displayable
   */
  exports.prototype['displayable'] = undefined;
  /**
   * A list of country ID to include in the blacklist/whitelist geo policy
   * @member {Array.<String>} geo_country_list
   */
  exports.prototype['geo_country_list'] = undefined;
  /**
   * Whether to use the geo_country_list as a black list or white list for item geographical availability
   * @member {module:model/BundleItem.GeoPolicyTypeEnum} geo_policy_type
   */
  exports.prototype['geo_policy_type'] = undefined;
  /**
   * The id of the item
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A long description of the item
   * @member {String} long_description
   */
  exports.prototype['long_description'] = undefined;
  /**
   * The name of the item
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Provides the abstract shipping needs if this item is physical and can be shipped.  A value of zero means no shipping needed.  Default = 0
   * @member {Number} shipping_tier
   */
  exports.prototype['shipping_tier'] = undefined;
  /**
   * A short description of the item, max 255 chars
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart
   * @member {Array.<module:model/Sku>} skus
   */
  exports.prototype['skus'] = undefined;
  /**
   * A number to use in sorting items.  Default 500
   * @member {Number} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * The date the item will leave the store, unix timestamp in seconds.  If set to null, item will never leave the store
   * @member {Number} store_end
   */
  exports.prototype['store_end'] = undefined;
  /**
   * The date the item will appear in the store, unix timestamp in seconds.  If set to null, item will appear in store immediately
   * @member {Number} store_start
   */
  exports.prototype['store_start'] = undefined;
  /**
   * List of tags used for filtering items
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * An item template this item is validated against.  May be null and no validation of additional_properties will be done.  Default = null
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The type of the item
   * @member {String} type_hint
   */
  exports.prototype['type_hint'] = undefined;
  /**
   * The unique key for the item
   * @member {String} unique_key
   */
  exports.prototype['unique_key'] = undefined;
  /**
   * The date the item was last updated, unix timestamp in seconds
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The vendor who provides the item
   * @member {Number} vendor_id
   */
  exports.prototype['vendor_id'] = undefined;


  /**
   * Allowed values for the <code>geo_policy_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GeoPolicyTypeEnum = {
    /**
     * value: "whitelist"
     * @const
     */
    "whitelist": "whitelist",
    /**
     * value: "blacklist"
     * @const
     */
    "blacklist": "blacklist"  };


  return exports;
}));

