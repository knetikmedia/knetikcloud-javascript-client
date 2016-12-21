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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.SearchReferenceMapping = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SearchReferenceMapping model module.
   * @module model/SearchReferenceMapping
   * @version Latest
   */

  /**
   * Constructs a new <code>SearchReferenceMapping</code>.
   * @alias module:model/SearchReferenceMapping
   * @class
   * @param id {String} Unique identifier for the mapping to protect against duplicates
   * @param refIdField {String} The field within the type that contains the id from the refType
   * @param refType {String} The index type that the mapping pulls data from
   * @param sourceFieldToDestinationField {Object.<String, String>} A map whose keys are the field names in the refType and values are the field name in the type
   * @param type {String} The index type that the mapping is for
   */
  var exports = function(id, refIdField, refType, sourceFieldToDestinationField, type) {
    var _this = this;

    _this['id'] = id;
    _this['ref_id_field'] = refIdField;
    _this['ref_type'] = refType;
    _this['source_field_to_destination_field'] = sourceFieldToDestinationField;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>SearchReferenceMapping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchReferenceMapping} obj Optional instance to populate.
   * @return {module:model/SearchReferenceMapping} The populated <code>SearchReferenceMapping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('ref_id_field')) {
        obj['ref_id_field'] = ApiClient.convertToType(data['ref_id_field'], 'String');
      }
      if (data.hasOwnProperty('ref_type')) {
        obj['ref_type'] = ApiClient.convertToType(data['ref_type'], 'String');
      }
      if (data.hasOwnProperty('source_field_to_destination_field')) {
        obj['source_field_to_destination_field'] = ApiClient.convertToType(data['source_field_to_destination_field'], {'String': 'String'});
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the mapping to protect against duplicates
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The field within the type that contains the id from the refType
   * @member {String} ref_id_field
   */
  exports.prototype['ref_id_field'] = undefined;
  /**
   * The index type that the mapping pulls data from
   * @member {String} ref_type
   */
  exports.prototype['ref_type'] = undefined;
  /**
   * A map whose keys are the field names in the refType and values are the field name in the type
   * @member {Object.<String, String>} source_field_to_destination_field
   */
  exports.prototype['source_field_to_destination_field'] = undefined;
  /**
   * The index type that the mapping is for
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


