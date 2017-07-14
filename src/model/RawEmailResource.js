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
    root.KnetikPlatformApiDocumentationLatest.RawEmailResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RawEmailResource model module.
   * @module model/RawEmailResource
   * @version latest

   */

  /**
   * Constructs a new <code>RawEmailResource</code>.
   * @alias module:model/RawEmailResource
   * @class
   * @param body {String} The body of the outgoing message.
   * @param recipients {Array.<Number>} A list of user ids to send the message to.
   * @param subject {String} The subject of the outgoing message.
   */
  var exports = function(body, recipients, subject) {
    var _this = this;

    _this['body'] = body;


    _this['recipients'] = recipients;
    _this['subject'] = subject;
  };

  /**
   * Constructs a <code>RawEmailResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RawEmailResource} obj Optional instance to populate.
   * @return {module:model/RawEmailResource} The populated <code>RawEmailResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], 'Boolean');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], ['Number']);
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
    }
    return obj;
  }

  /**
   * The body of the outgoing message.
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * Address to attribute the outgoing message to. Optional if the config email.out_address is set.
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * Whether the body is to be treated as html. Default false.
   * @member {Boolean} html
   */
  exports.prototype['html'] = undefined;
  /**
   * A list of user ids to send the message to.
   * @member {Array.<Number>} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * The subject of the outgoing message.
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;



  return exports;
}));


