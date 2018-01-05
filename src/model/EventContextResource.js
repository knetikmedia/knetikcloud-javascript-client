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
    define(['ApiClient', 'model/ExpressionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExpressionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.EventContextResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ExpressionResource);
  }
}(this, function(ApiClient, ExpressionResource) {
  'use strict';




  /**
   * The EventContextResource model module.
   * @module model/EventContextResource
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>EventContextResource</code>.
   * Expressions are instructions for the rule engine to resolve certain values. For example instead of &#x60;user 1&#x60; it&#39;d state &#x60;user provided by the event&#x60;. Full list and definitions available at GET /bre/expressions.
   * @alias module:model/EventContextResource
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>EventContextResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventContextResource} obj Optional instance to populate.
   * @return {module:model/EventContextResource} The populated <code>EventContextResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('definition')) {
        obj['definition'] = ApiClient.convertToType(data['definition'], 'String');
      }
      if (data.hasOwnProperty('event_name')) {
        obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], {'String': ExpressionResource});
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
  
  var discriminatorValue = 'EventContextResource';


  /**
   * @member {String} definition
   */
  exports.prototype['definition'] = undefined;
  /**
   * @member {String} event_name
   */
  exports.prototype['event_name'] = undefined;
  /**
   * @member {Object.<String, module:model/ExpressionResource>} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


