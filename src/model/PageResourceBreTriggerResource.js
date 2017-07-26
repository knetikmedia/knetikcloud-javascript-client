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
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BreTriggerResource', 'model/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BreTriggerResource'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.PageResourceBreTriggerResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.BreTriggerResource, root.KnetikPlatformApiDocumentationLatest.Order);
  }
}(this, function(ApiClient, BreTriggerResource, Order) {
  'use strict';




  /**
   * The PageResourceBreTriggerResource model module.
   * @module model/PageResourceBreTriggerResource
   * @version latest

   */

  /**
   * Constructs a new <code>PageResourceBreTriggerResource</code>.
   * @alias module:model/PageResourceBreTriggerResource
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>PageResourceBreTriggerResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageResourceBreTriggerResource} obj Optional instance to populate.
   * @return {module:model/PageResourceBreTriggerResource} The populated <code>PageResourceBreTriggerResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [BreTriggerResource]);
      }
      if (data.hasOwnProperty('first')) {
        obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Number');
      }
      if (data.hasOwnProperty('number_of_elements')) {
        obj['number_of_elements'] = ApiClient.convertToType(data['number_of_elements'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], [Order]);
      }
      if (data.hasOwnProperty('total_elements')) {
        obj['total_elements'] = ApiClient.convertToType(data['total_elements'], 'Number');
      }
      if (data.hasOwnProperty('total_pages')) {
        obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Number');
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
  
  var discriminatorValue = 'PageResource«BreTriggerResource»';


  /**
   * @member {Array.<module:model/BreTriggerResource>} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Boolean} first
   */
  exports.prototype['first'] = undefined;
  /**
   * @member {Boolean} last
   */
  exports.prototype['last'] = undefined;
  /**
   * @member {Number} number
   */
  exports.prototype['number'] = undefined;
  /**
   * @member {Number} number_of_elements
   */
  exports.prototype['number_of_elements'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {Array.<module:model/Order>} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * @member {Number} total_elements
   */
  exports.prototype['total_elements'] = undefined;
  /**
   * @member {Number} total_pages
   */
  exports.prototype['total_pages'] = undefined;



  return exports;
}));


