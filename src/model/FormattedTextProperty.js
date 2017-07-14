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
    define(['ApiClient', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.FormattedTextProperty = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The FormattedTextProperty model module.
   * @module model/FormattedTextProperty
   * @version 3.0.6
   */

  /**
   * Constructs a new <code>FormattedTextProperty</code>.
   * @alias module:model/FormattedTextProperty
   * @class
   * @extends module:model/Property
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   */
  var exports = function(type) {
    var _this = this;
    Property.call(_this, type);

  };

  /**
   * Constructs a <code>FormattedTextProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormattedTextProperty} obj Optional instance to populate.
   * @return {module:model/FormattedTextProperty} The populated <code>FormattedTextProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Property.constructFromObject(data, obj);
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(Property.prototype);
  exports.prototype.constructor = exports;

  /**
   * The value
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


