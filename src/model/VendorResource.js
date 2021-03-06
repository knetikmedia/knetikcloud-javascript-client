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
    root.KnetikCloud.VendorResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The VendorResource model module.
   * @module model/VendorResource
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>VendorResource</code>.
   * @alias module:model/VendorResource
   * @class
   * @param name {String} The name of the vendor
   */
  var exports = function(name) {
    var _this = this;








    _this['name'] = name;








  };

  /**
   * Constructs a <code>VendorResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VendorResource} obj Optional instance to populate.
   * @return {module:model/VendorResource} The populated <code>VendorResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('image_url')) {
        obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
      }
      if (data.hasOwnProperty('manual_approval')) {
        obj['manual_approval'] = ApiClient.convertToType(data['manual_approval'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('primary_contact_email')) {
        obj['primary_contact_email'] = ApiClient.convertToType(data['primary_contact_email'], 'String');
      }
      if (data.hasOwnProperty('primary_contact_name')) {
        obj['primary_contact_name'] = ApiClient.convertToType(data['primary_contact_name'], 'String');
      }
      if (data.hasOwnProperty('primary_contact_phone')) {
        obj['primary_contact_phone'] = ApiClient.convertToType(data['primary_contact_phone'], 'String');
      }
      if (data.hasOwnProperty('sales_email')) {
        obj['sales_email'] = ApiClient.convertToType(data['sales_email'], 'String');
      }
      if (data.hasOwnProperty('support_email')) {
        obj['support_email'] = ApiClient.convertToType(data['support_email'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Number');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
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
  
  var discriminatorValue = 'VendorResource';


  /**
   * Whether the vendor is active.  Default = true
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * A map of additional properties, keyed on the property name (private). Must match the names and types defined in the template for this user type, or be an extra not from the template
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The date the vendor was added. Unix timestamp in seconds
   * @member {Number} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * A description of the vendor
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The id of the vendor
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The url of an image for the vendor
   * @member {String} image_url
   */
  exports.prototype['image_url'] = undefined;
  /**
   * Whether the vendor needs to manually approve invoices before they are paid.  A separate checkout flow is required in this case.  Default: false
   * @member {Boolean} manual_approval
   */
  exports.prototype['manual_approval'] = undefined;
  /**
   * The name of the vendor
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The primary email address for the vendor
   * @member {String} primary_contact_email
   */
  exports.prototype['primary_contact_email'] = undefined;
  /**
   * The name of the primary contact for the vendor
   * @member {String} primary_contact_name
   */
  exports.prototype['primary_contact_name'] = undefined;
  /**
   * The primary phone number for the vendor
   * @member {String} primary_contact_phone
   */
  exports.prototype['primary_contact_phone'] = undefined;
  /**
   * The email address for sale inquiries for the vendor
   * @member {String} sales_email
   */
  exports.prototype['sales_email'] = undefined;
  /**
   * The email address for support inquiries for the vendor
   * @member {String} support_email
   */
  exports.prototype['support_email'] = undefined;
  /**
   * A user template this user is validated against (private). May be null and no validation of properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The date the vendor was last updated. Unix timestamp in seconds
   * @member {Number} update_date
   */
  exports.prototype['update_date'] = undefined;
  /**
   * The url for the vendor's site
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


