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
    define(['ApiClient', 'model/SimpleReferenceResourcelong'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleReferenceResourcelong'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ContributionResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.SimpleReferenceResourcelong);
  }
}(this, function(ApiClient, SimpleReferenceResourcelong) {
  'use strict';




  /**
   * The ContributionResource model module.
   * @module model/ContributionResource
   * @version latest

   */

  /**
   * Constructs a new <code>ContributionResource</code>.
   * @alias module:model/ContributionResource
   * @class
   * @param artist {module:model/SimpleReferenceResourcelong} A reference to the contributing artist
   * @param media {module:model/SimpleReferenceResourcelong} A reference to the media being contributed to
   * @param role {String} The nature of the contribution (role of the artist as in 'producer', 'performer', etc)
   */
  var exports = function(artist, media, role) {
    var _this = this;

    _this['artist'] = artist;
    _this['media'] = media;
    _this['role'] = role;
  };

  /**
   * Constructs a <code>ContributionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContributionResource} obj Optional instance to populate.
   * @return {module:model/ContributionResource} The populated <code>ContributionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('artist')) {
        obj['artist'] = SimpleReferenceResourcelong.constructFromObject(data['artist']);
      }
      if (data.hasOwnProperty('media')) {
        obj['media'] = SimpleReferenceResourcelong.constructFromObject(data['media']);
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
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
  
  var discriminatorValue = 'ContributionResource';


  /**
   * A reference to the contributing artist
   * @member {module:model/SimpleReferenceResourcelong} artist
   */
  exports.prototype['artist'] = undefined;
  /**
   * A reference to the media being contributed to
   * @member {module:model/SimpleReferenceResourcelong} media
   */
  exports.prototype['media'] = undefined;
  /**
   * The nature of the contribution (role of the artist as in 'producer', 'performer', etc)
   * @member {String} role
   */
  exports.prototype['role'] = undefined;



  return exports;
}));


