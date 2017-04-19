/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    define(['ApiClient', 'model/SimpleReferenceResourcelong'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleReferenceResourcelong'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.VideoRelationshipResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.SimpleReferenceResourcelong);
  }
}(this, function(ApiClient, SimpleReferenceResourcelong) {
  'use strict';




  /**
   * The VideoRelationshipResource model module.
   * @module model/VideoRelationshipResource
   * @version latest

   */

  /**
   * Constructs a new <code>VideoRelationshipResource</code>.
   * @alias module:model/VideoRelationshipResource
   * @class
   * @param relationshipDetails {String} Details about the relationship such as type or other information. Max length 10 characters
   * @param to {module:model/SimpleReferenceResourcelong} The target of the relationship.
   */
  var exports = function(relationshipDetails, to) {
    var _this = this;



    _this['relationship_details'] = relationshipDetails;
    _this['to'] = to;
  };

  /**
   * Constructs a <code>VideoRelationshipResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoRelationshipResource} obj Optional instance to populate.
   * @return {module:model/VideoRelationshipResource} The populated <code>VideoRelationshipResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('from')) {
        obj['from'] = SimpleReferenceResourcelong.constructFromObject(data['from']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('relationship_details')) {
        obj['relationship_details'] = ApiClient.convertToType(data['relationship_details'], 'String');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = SimpleReferenceResourcelong.constructFromObject(data['to']);
      }
    }
    return obj;
  }

  /**
   * The owner of the relationship
   * @member {module:model/SimpleReferenceResourcelong} from
   */
  exports.prototype['from'] = undefined;
  /**
   * The id of the relationship
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Details about the relationship such as type or other information. Max length 10 characters
   * @member {String} relationship_details
   */
  exports.prototype['relationship_details'] = undefined;
  /**
   * The target of the relationship.
   * @member {module:model/SimpleReferenceResourcelong} to
   */
  exports.prototype['to'] = undefined;



  return exports;
}));


