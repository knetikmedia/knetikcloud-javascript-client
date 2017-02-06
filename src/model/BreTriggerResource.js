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
    define(['ApiClient', 'model/BreTriggerParameterDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BreTriggerParameterDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.BreTriggerResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.BreTriggerParameterDefinition);
  }
}(this, function(ApiClient, BreTriggerParameterDefinition) {
  'use strict';




  /**
   * The BreTriggerResource model module.
   * @module model/BreTriggerResource
   * @version latest

   */

  /**
   * Constructs a new <code>BreTriggerResource</code>.
   * @alias module:model/BreTriggerResource
   * @class
   * @param eventName {String} The unique name for the event. This serves as the unique identifier. Cannot be changed after creation
   * @param triggerDescription {String} A description of the trigger
   * @param triggerName {String} A human readable name for this trigger
   */
  var exports = function(eventName, triggerDescription, triggerName) {
    var _this = this;


    _this['event_name'] = eventName;


    _this['trigger_description'] = triggerDescription;
    _this['trigger_name'] = triggerName;
  };

  /**
   * Constructs a <code>BreTriggerResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BreTriggerResource} obj Optional instance to populate.
   * @return {module:model/BreTriggerResource} The populated <code>BreTriggerResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('event_name')) {
        obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], [BreTriggerParameterDefinition]);
      }
      if (data.hasOwnProperty('system_trigger')) {
        obj['system_trigger'] = ApiClient.convertToType(data['system_trigger'], 'Boolean');
      }
      if (data.hasOwnProperty('trigger_description')) {
        obj['trigger_description'] = ApiClient.convertToType(data['trigger_description'], 'String');
      }
      if (data.hasOwnProperty('trigger_name')) {
        obj['trigger_name'] = ApiClient.convertToType(data['trigger_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The category this trigger belongs to. See endpoints for related asset information. All new triggers are in category 'custom'
   * @member {module:model/BreTriggerResource.CategoryEnum} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The unique name for the event. This serves as the unique identifier. Cannot be changed after creation
   * @member {String} event_name
   */
  exports.prototype['event_name'] = undefined;
  /**
   * A list af parameters that will be sent with the event when the trigger is fired. These must be included in the event and match the described types
   * @member {Array.<module:model/BreTriggerParameterDefinition>} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * Where this trigger came from. System triggers cannot be removed or updated
   * @member {Boolean} system_trigger
   */
  exports.prototype['system_trigger'] = undefined;
  /**
   * A description of the trigger
   * @member {String} trigger_description
   */
  exports.prototype['trigger_description'] = undefined;
  /**
   * A human readable name for this trigger
   * @member {String} trigger_name
   */
  exports.prototype['trigger_name'] = undefined;


  /**
   * Allowed values for the <code>category</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CategoryEnum = {
    /**
     * value: "achievement"
     * @const
     */
    "achievement": "achievement",
    /**
     * value: "behavior"
     * @const
     */
    "behavior": "behavior",
    /**
     * value: "comment"
     * @const
     */
    "comment": "comment",
    /**
     * value: "disposition"
     * @const
     */
    "disposition": "disposition",
    /**
     * value: "entitlement"
     * @const
     */
    "entitlement": "entitlement",
    /**
     * value: "friends"
     * @const
     */
    "friends": "friends",
    /**
     * value: "fulfillment"
     * @const
     */
    "fulfillment": "fulfillment",
    /**
     * value: "gamification"
     * @const
     */
    "gamification": "gamification",
    /**
     * value: "inventory"
     * @const
     */
    "inventory": "inventory",
    /**
     * value: "invoice"
     * @const
     */
    "invoice": "invoice",
    /**
     * value: "media"
     * @const
     */
    "media": "media",
    /**
     * value: "scheduler"
     * @const
     */
    "scheduler": "scheduler",
    /**
     * value: "store"
     * @const
     */
    "store": "store",
    /**
     * value: "subscription"
     * @const
     */
    "subscription": "subscription",
    /**
     * value: "user"
     * @const
     */
    "user": "user",
    /**
     * value: "wallet"
     * @const
     */
    "wallet": "wallet",
    /**
     * value: "custom"
     * @const
     */
    "custom": "custom",
    /**
     * value: "challenge"
     * @const
     */
    "challenge": "challenge",
    /**
     * value: "activity"
     * @const
     */
    "activity": "activity",
    /**
     * value: "campaign"
     * @const
     */
    "campaign": "campaign",
    /**
     * value: "event"
     * @const
     */
    "event": "event"  };


  return exports;
}));

