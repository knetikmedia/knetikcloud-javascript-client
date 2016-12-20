/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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
    define(['ApiClient', 'model/Localizer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Localizer'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.TemplateSMSResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Localizer);
  }
}(this, function(ApiClient, Localizer) {
  'use strict';




  /**
   * The TemplateSMSResource model module.
   * @module model/TemplateSMSResource
   * @version Latest
   */

  /**
   * Constructs a new <code>TemplateSMSResource</code>.
   * @alias module:model/TemplateSMSResource
   * @class
   * @param recipients {Array.<Number>} A list of user ids to send the message to.
   * @param templateKey {String} The key for the template.
   */
  var exports = function(recipients, templateKey) {
    var _this = this;



    _this['recipients'] = recipients;
    _this['template_key'] = templateKey;

  };

  /**
   * Constructs a <code>TemplateSMSResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateSMSResource} obj Optional instance to populate.
   * @return {module:model/TemplateSMSResource} The populated <code>TemplateSMSResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('localizer')) {
        obj['localizer'] = Localizer.constructFromObject(data['localizer']);
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], ['Number']);
      }
      if (data.hasOwnProperty('template_key')) {
        obj['template_key'] = ApiClient.convertToType(data['template_key'], 'String');
      }
      if (data.hasOwnProperty('template_vars')) {
        obj['template_vars'] = ApiClient.convertToType(data['template_vars'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The phone number to attribute the outgoing message to. Optional if the config text.out_number is set.
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {module:model/Localizer} localizer
   */
  exports.prototype['localizer'] = undefined;
  /**
   * A list of user ids to send the message to.
   * @member {Array.<Number>} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * The key for the template.
   * @member {String} template_key
   */
  exports.prototype['template_key'] = undefined;
  /**
   * A list of values to fill in the template. Order matters.
   * @member {Array.<String>} template_vars
   */
  exports.prototype['template_vars'] = undefined;



  return exports;
}));


