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
    root.KnetikCloud.ChatMessageResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChatMessageResource model module.
   * @module model/ChatMessageResource
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>ChatMessageResource</code>.
   * @alias module:model/ChatMessageResource
   * @class
   * @param content {Object} The content of the message
   * @param messageType {String} The type of the message set by the client
   * @param recipientId {String} The id of the recipient: user id or topic id
   * @param recipientType {module:model/ChatMessageResource.RecipientTypeEnum} The recipient type of the message
   */
  var exports = function(content, messageType, recipientId, recipientType) {
    var _this = this;

    _this['content'] = content;



    _this['message_type'] = messageType;
    _this['recipient_id'] = recipientId;
    _this['recipient_type'] = recipientType;



  };

  /**
   * Constructs a <code>ChatMessageResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChatMessageResource} obj Optional instance to populate.
   * @return {module:model/ChatMessageResource} The populated <code>ChatMessageResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], Object);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('edited')) {
        obj['edited'] = ApiClient.convertToType(data['edited'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('message_type')) {
        obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
      }
      if (data.hasOwnProperty('recipient_id')) {
        obj['recipient_id'] = ApiClient.convertToType(data['recipient_id'], 'String');
      }
      if (data.hasOwnProperty('recipient_type')) {
        obj['recipient_type'] = ApiClient.convertToType(data['recipient_type'], 'String');
      }
      if (data.hasOwnProperty('sender_id')) {
        obj['sender_id'] = ApiClient.convertToType(data['sender_id'], 'Number');
      }
      if (data.hasOwnProperty('thread_id')) {
        obj['thread_id'] = ApiClient.convertToType(data['thread_id'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
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
  
  var discriminatorValue = 'ChatMessageResource';


  /**
   * The content of the message
   * @member {Object} content
   */
  exports.prototype['content'] = undefined;
  /**
   * The date the chat message was created
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * Whether the message has been edited
   * @member {Boolean} edited
   */
  exports.prototype['edited'] = undefined;
  /**
   * The id for this message
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The type of the message set by the client
   * @member {String} message_type
   */
  exports.prototype['message_type'] = undefined;
  /**
   * The id of the recipient: user id or topic id
   * @member {String} recipient_id
   */
  exports.prototype['recipient_id'] = undefined;
  /**
   * The recipient type of the message
   * @member {module:model/ChatMessageResource.RecipientTypeEnum} recipient_type
   */
  exports.prototype['recipient_type'] = undefined;
  /**
   * The id of the sender
   * @member {Number} sender_id
   */
  exports.prototype['sender_id'] = undefined;
  /**
   * The id of the thread
   * @member {String} thread_id
   */
  exports.prototype['thread_id'] = undefined;
  /**
   * The date the chat message was updated
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;


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


