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
    define(['ApiClient', 'model/Property', 'model/SubscriptionPlanResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'), require('./SubscriptionPlanResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.SubscriptionResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Property, root.KnetikPlatformApiDocumentationLatest.SubscriptionPlanResource);
  }
}(this, function(ApiClient, Property, SubscriptionPlanResource) {
  'use strict';




  /**
   * The SubscriptionResource model module.
   * @module model/SubscriptionResource
   * @version latest

   */

  /**
   * Constructs a new <code>SubscriptionResource</code>.
   * @alias module:model/SubscriptionResource
   * @class
   * @param name {String} The name of the item
   * @param vendorId {Number} The vendor who provides the item
   */
  var exports = function(name, vendorId) {
    var _this = this;










    _this['name'] = name;









    _this['vendor_id'] = vendorId;
  };

  /**
   * Constructs a <code>SubscriptionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionResource} obj Optional instance to populate.
   * @return {module:model/SubscriptionResource} The populated <code>SubscriptionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('availability')) {
        obj['availability'] = ApiClient.convertToType(data['availability'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('consolidation_day_of_month')) {
        obj['consolidation_day_of_month'] = ApiClient.convertToType(data['consolidation_day_of_month'], 'Number');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
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
      if (data.hasOwnProperty('plans')) {
        obj['plans'] = ApiClient.convertToType(data['plans'], [SubscriptionPlanResource]);
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
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
   * A map of item additional properties, keyed on the property name. Must match the names and types defined in the template for this item type.
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * Who can purchase this subscription
   * @member {module:model/SubscriptionResource.AvailabilityEnum} availability
   */
  exports.prototype['availability'] = undefined;
  /**
   * A category for filtering items
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The day of the month 1..31 this subscription will renew
   * @member {Number} consolidation_day_of_month
   */
  exports.prototype['consolidation_day_of_month'] = undefined;
  /**
   * The date the item was created, unix timestamp in seconds
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * A list of country iso3 codes to include in the blacklist/whitelist geo policy
   * @member {Array.<String>} geo_country_list
   */
  exports.prototype['geo_country_list'] = undefined;
  /**
   * Whether to use the geo_country_list as a black list or white list for item geographical availability
   * @member {module:model/SubscriptionResource.GeoPolicyTypeEnum} geo_policy_type
   */
  exports.prototype['geo_policy_type'] = undefined;
  /**
   * The id of the item
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A long description of the subscription
   * @member {String} long_description
   */
  exports.prototype['long_description'] = undefined;
  /**
   * The name of the item
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The billing options for this subscription
   * @member {Array.<module:model/SubscriptionPlanResource>} plans
   */
  exports.prototype['plans'] = undefined;
  /**
   * A short description of the subscription.  Max 255 characters
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * A number to use in sorting items.  Default 500
   * @member {Number} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * Used to schedule removal from store.  Null means the subscription will never be removed
   * @member {Number} store_end
   */
  exports.prototype['store_end'] = undefined;
  /**
   * Used to schedule appearance in store.  Null means the subscription will appear now
   * @member {Number} store_start
   */
  exports.prototype['store_start'] = undefined;
  /**
   * List of tags used for filtering items
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * An item template this item is validated against. May be null and no validation of additional properties will be done.
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The unique key for the item
   * @member {String} unique_key
   */
  exports.prototype['unique_key'] = undefined;
  /**
   * The date the item was last updated
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The vendor who provides the item
   * @member {Number} vendor_id
   */
  exports.prototype['vendor_id'] = undefined;


  /**
   * Allowed values for the <code>availability</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AvailabilityEnum = {
    /**
     * value: "all"
     * @const
     */
    "all": "all",
    /**
     * value: "new_subscribers"
     * @const
     */
    "new_subscribers": "new_subscribers"  };

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


