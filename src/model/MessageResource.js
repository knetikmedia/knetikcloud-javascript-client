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
    define(['ApiClient', 'model/MessageContentResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageContentResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MessageResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.MessageContentResource);
  }
}(this, function(ApiClient, MessageContentResource) {
  'use strict';




  /**
   * The MessageResource model module.
   * @module model/MessageResource
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>MessageResource</code>.
   * @alias module:model/MessageResource
   * @class
   * @param content {module:model/MessageContentResource} The content of the message in various formats
   */
  var exports = function(content) {
    var _this = this;

    _this['content'] = content;




  };

  /**
   * Constructs a <code>MessageResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageResource} obj Optional instance to populate.
   * @return {module:model/MessageResource} The populated <code>MessageResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = MessageContentResource.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('recipient')) {
        obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
      }
      if (data.hasOwnProperty('recipient_type')) {
        obj['recipient_type'] = ApiClient.convertToType(data['recipient_type'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
  
  var discriminatorValue = 'MessageResource';


  /**
   * The content of the message in various formats
   * @member {module:model/MessageContentResource} content
   */
  exports.prototype['content'] = undefined;
  /**
   * The id of the recipient, dependent on the recipient_type. The user's id or the topic's id. Required if sending directly to messaging service
   * @member {String} recipient
   */
  exports.prototype['recipient'] = undefined;
  /**
   * The type of recipient for the message. Either a user, or all users in a topic. Required if sending directly to messaging service
   * @member {module:model/MessageResource.RecipientTypeEnum} recipient_type
   */
  exports.prototype['recipient_type'] = undefined;
  /**
   * The subject of the message. Required for email messages
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * The type of message for websocket type hinting. will be added to the payload with the key _type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;


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


