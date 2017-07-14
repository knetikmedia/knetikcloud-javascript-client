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
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.GroupResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The GroupResource model module.
   * @module model/GroupResource
   * @version latest

   */

  /**
   * Constructs a new <code>GroupResource</code>.
   * @alias module:model/GroupResource
   * @class
   * @param name {String} The name of the group. Max 50 characters
   * @param status {module:model/GroupResource.StatusEnum} The status which describes whether other users can freely join the group or not
   * @param uniqueName {String} Unique name used in url and references. Uppercase, lowercase, numbers and hyphens only. Max 50 characters. Cannot be altered once created
   */
  var exports = function(name, status, uniqueName) {
    var _this = this;





    _this['name'] = name;

    _this['status'] = status;


    _this['unique_name'] = uniqueName;
  };

  /**
   * Constructs a <code>GroupResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupResource} obj Optional instance to populate.
   * @return {module:model/GroupResource} The populated <code>GroupResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('member_count')) {
        obj['member_count'] = ApiClient.convertToType(data['member_count'], 'Number');
      }
      if (data.hasOwnProperty('message_of_the_day')) {
        obj['message_of_the_day'] = ApiClient.convertToType(data['message_of_the_day'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('sub_member_count')) {
        obj['sub_member_count'] = ApiClient.convertToType(data['sub_member_count'], 'Number');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('unique_name')) {
        obj['unique_name'] = ApiClient.convertToType(data['unique_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * A description of the group. Max 250 characters
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The number of users in the group
   * @member {Number} member_count
   */
  exports.prototype['member_count'] = undefined;
  /**
   * A message of the day for members of the group
   * @member {String} message_of_the_day
   */
  exports.prototype['message_of_the_day'] = undefined;
  /**
   * The name of the group. Max 50 characters
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The unique name of another group that this group is a subset of
   * @member {String} parent
   */
  exports.prototype['parent'] = undefined;
  /**
   * The status which describes whether other users can freely join the group or not
   * @member {module:model/GroupResource.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The number of users in child groups
   * @member {Number} sub_member_count
   */
  exports.prototype['sub_member_count'] = undefined;
  /**
   * A group template this group is validated against. May be null and no validation of additional_properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * Unique name used in url and references. Uppercase, lowercase, numbers and hyphens only. Max 50 characters. Cannot be altered once created
   * @member {String} unique_name
   */
  exports.prototype['unique_name'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "open"
     * @const
     */
    "open": "open",
    /**
     * value: "closed"
     * @const
     */
    "closed": "closed"  };


  return exports;
}));


