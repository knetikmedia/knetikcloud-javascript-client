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
    define(['ApiClient', 'model/ItemBehaviorDefinitionResource', 'model/PropertyDefinitionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemBehaviorDefinitionResource'), require('./PropertyDefinitionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ItemTemplateResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ItemBehaviorDefinitionResource, root.KnetikPlatformApiDocumentationLatest.PropertyDefinitionResource);
  }
}(this, function(ApiClient, ItemBehaviorDefinitionResource, PropertyDefinitionResource) {
  'use strict';




  /**
   * The ItemTemplateResource model module.
   * @module model/ItemTemplateResource
   * @version latest

   */

  /**
   * Constructs a new <code>ItemTemplateResource</code>.
   * @alias module:model/ItemTemplateResource
   * @class
   * @param name {String} The name of the template
   */
  var exports = function(name) {
    var _this = this;




    _this['name'] = name;


  };

  /**
   * Constructs a <code>ItemTemplateResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemTemplateResource} obj Optional instance to populate.
   * @return {module:model/ItemTemplateResource} The populated <code>ItemTemplateResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('behaviors')) {
        obj['behaviors'] = ApiClient.convertToType(data['behaviors'], [ItemBehaviorDefinitionResource]);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], [PropertyDefinitionResource]);
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The customized behaviors that are required or default for this type of item
   * @member {Array.<module:model/ItemBehaviorDefinitionResource>} behaviors
   */
  exports.prototype['behaviors'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The id of the template
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the template
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The customized properties that are present
   * @member {Array.<module:model/PropertyDefinitionResource>} properties
   */
  exports.prototype['properties'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


