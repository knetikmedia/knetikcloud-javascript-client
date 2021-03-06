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
    root.KnetikCloud.NotificationResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NotificationResource model module.
   * @module model/NotificationResource
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>NotificationResource</code>.
   * @alias module:model/NotificationResource
   * @class
   * @param notificationTypeId {String} The id of the notification type which will define message templates
   * @param recipient {String} The id of the recipient, dependent on the recipient_type. The user's id or the topic's id
   * @param recipientType {module:model/NotificationResource.RecipientTypeEnum} The type of recipient for the notification. Either a user, or all users in a topic
   */
  var exports = function(notificationTypeId, recipient, recipientType) {
    var _this = this;



    _this['notification_type_id'] = notificationTypeId;
    _this['recipient'] = recipient;
    _this['recipient_type'] = recipientType;

  };

  /**
   * Constructs a <code>NotificationResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationResource} obj Optional instance to populate.
   * @return {module:model/NotificationResource} The populated <code>NotificationResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
      if (data.hasOwnProperty('notification_id')) {
        obj['notification_id'] = ApiClient.convertToType(data['notification_id'], 'String');
      }
      if (data.hasOwnProperty('notification_type_id')) {
        obj['notification_type_id'] = ApiClient.convertToType(data['notification_type_id'], 'String');
      }
      if (data.hasOwnProperty('recipient')) {
        obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
      }
      if (data.hasOwnProperty('recipient_type')) {
        obj['recipient_type'] = ApiClient.convertToType(data['recipient_type'], 'String');
      }
      if (data.hasOwnProperty('send_date')) {
        obj['send_date'] = ApiClient.convertToType(data['send_date'], 'Number');
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
  
  var discriminatorValue = 'NotificationResource';


  /**
   * The data to send to websockets. Also used to fill in the templates
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;
  /**
   * The id of this individual notification. Default: random
   * @member {String} notification_id
   */
  exports.prototype['notification_id'] = undefined;
  /**
   * The id of the notification type which will define message templates
   * @member {String} notification_type_id
   */
  exports.prototype['notification_type_id'] = undefined;
  /**
   * The id of the recipient, dependent on the recipient_type. The user's id or the topic's id
   * @member {String} recipient
   */
  exports.prototype['recipient'] = undefined;
  /**
   * The type of recipient for the notification. Either a user, or all users in a topic
   * @member {module:model/NotificationResource.RecipientTypeEnum} recipient_type
   */
  exports.prototype['recipient_type'] = undefined;
  /**
   * The date this notification was sent
   * @member {Number} send_date
   */
  exports.prototype['send_date'] = undefined;


  /**
   * Allowed values for the <code>recipient_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RecipientTypeEnum = {
    /**
     * value: "user"
     * @const
     */
    "user": "user",
    /**
     * value: "topic"
     * @const
     */
    "topic": "topic"  };


  return exports;
}));


