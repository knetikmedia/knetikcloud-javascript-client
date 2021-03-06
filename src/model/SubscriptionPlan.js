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
    define(['ApiClient', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.SubscriptionPlan = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The SubscriptionPlan model module.
   * @module model/SubscriptionPlan
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>SubscriptionPlan</code>.
   * @alias module:model/SubscriptionPlan
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>SubscriptionPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionPlan} obj Optional instance to populate.
   * @return {module:model/SubscriptionPlan} The populated <code>SubscriptionPlan</code> instance.
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
      if (data.hasOwnProperty('bill_grace_days')) {
        obj['bill_grace_days'] = ApiClient.convertToType(data['bill_grace_days'], 'Number');
      }
      if (data.hasOwnProperty('consolidated')) {
        obj['consolidated'] = ApiClient.convertToType(data['consolidated'], 'Boolean');
      }
      if (data.hasOwnProperty('first_bill')) {
        obj['first_bill'] = ApiClient.convertToType(data['first_bill'], 'Number');
      }
      if (data.hasOwnProperty('first_bill_unit_of_time')) {
        obj['first_bill_unit_of_time'] = ApiClient.convertToType(data['first_bill_unit_of_time'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('late_payment_sku')) {
        obj['late_payment_sku'] = ApiClient.convertToType(data['late_payment_sku'], 'String');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
      }
      if (data.hasOwnProperty('max_auto_renew')) {
        obj['max_auto_renew'] = ApiClient.convertToType(data['max_auto_renew'], 'Number');
      }
      if (data.hasOwnProperty('max_bill_attempts')) {
        obj['max_bill_attempts'] = ApiClient.convertToType(data['max_bill_attempts'], 'Number');
      }
      if (data.hasOwnProperty('migration_plan')) {
        obj['migration_plan'] = ApiClient.convertToType(data['migration_plan'], 'String');
      }
      if (data.hasOwnProperty('minimum_term')) {
        obj['minimum_term'] = ApiClient.convertToType(data['minimum_term'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('primary_sku')) {
        obj['primary_sku'] = ApiClient.convertToType(data['primary_sku'], 'String');
      }
      if (data.hasOwnProperty('reactivation_sku')) {
        obj['reactivation_sku'] = ApiClient.convertToType(data['reactivation_sku'], 'String');
      }
      if (data.hasOwnProperty('recurring_sku')) {
        obj['recurring_sku'] = ApiClient.convertToType(data['recurring_sku'], 'String');
      }
      if (data.hasOwnProperty('renew_period')) {
        obj['renew_period'] = ApiClient.convertToType(data['renew_period'], 'Number');
      }
      if (data.hasOwnProperty('renew_period_unit_of_time')) {
        obj['renew_period_unit_of_time'] = ApiClient.convertToType(data['renew_period_unit_of_time'], 'String');
      }
      if (data.hasOwnProperty('subscription_id')) {
        obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'Number');
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
  
  var discriminatorValue = 'SubscriptionPlan';


  /**
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * @member {module:model/SubscriptionPlan.AvailabilityEnum} availability
   */
  exports.prototype['availability'] = undefined;
  /**
   * @member {Number} bill_grace_days
   */
  exports.prototype['bill_grace_days'] = undefined;
  /**
   * @member {Boolean} consolidated
   */
  exports.prototype['consolidated'] = undefined;
  /**
   * @member {Number} first_bill
   */
  exports.prototype['first_bill'] = undefined;
  /**
   * @member {module:model/SubscriptionPlan.FirstBillUnitOfTimeEnum} first_bill_unit_of_time
   */
  exports.prototype['first_bill_unit_of_time'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} late_payment_sku
   */
  exports.prototype['late_payment_sku'] = undefined;
  /**
   * @member {Boolean} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * @member {Number} max_auto_renew
   */
  exports.prototype['max_auto_renew'] = undefined;
  /**
   * @member {Number} max_bill_attempts
   */
  exports.prototype['max_bill_attempts'] = undefined;
  /**
   * @member {String} migration_plan
   */
  exports.prototype['migration_plan'] = undefined;
  /**
   * @member {Number} minimum_term
   */
  exports.prototype['minimum_term'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} primary_sku
   */
  exports.prototype['primary_sku'] = undefined;
  /**
   * @member {String} reactivation_sku
   */
  exports.prototype['reactivation_sku'] = undefined;
  /**
   * @member {String} recurring_sku
   */
  exports.prototype['recurring_sku'] = undefined;
  /**
   * @member {Number} renew_period
   */
  exports.prototype['renew_period'] = undefined;
  /**
   * @member {module:model/SubscriptionPlan.RenewPeriodUnitOfTimeEnum} renew_period_unit_of_time
   */
  exports.prototype['renew_period_unit_of_time'] = undefined;
  /**
   * @member {Number} subscription_id
   */
  exports.prototype['subscription_id'] = undefined;


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
   * Allowed values for the <code>first_bill_unit_of_time</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FirstBillUnitOfTimeEnum = {
    /**
     * value: "millisecond"
     * @const
     */
    "millisecond": "millisecond",
    /**
     * value: "second"
     * @const
     */
    "second": "second",
    /**
     * value: "minute"
     * @const
     */
    "minute": "minute",
    /**
     * value: "hour"
     * @const
     */
    "hour": "hour",
    /**
     * value: "day"
     * @const
     */
    "day": "day",
    /**
     * value: "week"
     * @const
     */
    "week": "week",
    /**
     * value: "month"
     * @const
     */
    "month": "month",
    /**
     * value: "year"
     * @const
     */
    "year": "year"  };

  /**
   * Allowed values for the <code>renew_period_unit_of_time</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RenewPeriodUnitOfTimeEnum = {
    /**
     * value: "millisecond"
     * @const
     */
    "millisecond": "millisecond",
    /**
     * value: "second"
     * @const
     */
    "second": "second",
    /**
     * value: "minute"
     * @const
     */
    "minute": "minute",
    /**
     * value: "hour"
     * @const
     */
    "hour": "hour",
    /**
     * value: "day"
     * @const
     */
    "day": "day",
    /**
     * value: "week"
     * @const
     */
    "week": "week",
    /**
     * value: "month"
     * @const
     */
    "month": "month",
    /**
     * value: "year"
     * @const
     */
    "year": "year"  };


  return exports;
}));


