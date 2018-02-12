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
    define(['ApiClient', 'model/CommentResource', 'model/ContributionResource', 'model/Property', 'model/SimpleReferenceResourcelong', 'model/SimpleReferenceResourcestring', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommentResource'), require('./ContributionResource'), require('./Property'), require('./SimpleReferenceResourcelong'), require('./SimpleReferenceResourcestring'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.VideoResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.CommentResource, root.KnetikCloud.ContributionResource, root.KnetikCloud.Property, root.KnetikCloud.SimpleReferenceResourcelong, root.KnetikCloud.SimpleReferenceResourcestring, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, CommentResource, ContributionResource, Property, SimpleReferenceResourcelong, SimpleReferenceResourcestring, SimpleUserResource) {
  'use strict';




  /**
   * The VideoResource model module.
   * @module model/VideoResource
   * @version 3.0.8
   */

  /**
   * Constructs a new <code>VideoResource</code>.
   * @alias module:model/VideoResource
   * @class
   * @param category {module:model/SimpleReferenceResourcestring} The category of the video
   * @param extension {String} The file extension of the media file. 1-5 characters
   * @param height {Number} The height of the video in px
   * @param length {Number} The length of the video in seconds
   * @param location {String} The country of the media. Typically a url. Cannot be blank
   * @param name {String} The user friendly name of that resource
   * @param width {Number} The width of the video in px
   */
  var exports = function(category, extension, height, length, location, name, width) {
    var _this = this;






    _this['category'] = category;




    _this['extension'] = extension;
    _this['height'] = height;

    _this['length'] = length;
    _this['location'] = location;


    _this['name'] = name;











    _this['width'] = width;
  };

  /**
   * Constructs a <code>VideoResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoResource} obj Optional instance to populate.
   * @return {module:model/VideoResource} The populated <code>VideoResource</code> instance.
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
      if (data.hasOwnProperty('author')) {
        obj['author'] = SimpleReferenceResourcelong.constructFromObject(data['author']);
      }
      if (data.hasOwnProperty('authored')) {
        obj['authored'] = ApiClient.convertToType(data['authored'], 'Number');
      }
      if (data.hasOwnProperty('banned')) {
        obj['banned'] = ApiClient.convertToType(data['banned'], 'Boolean');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = SimpleReferenceResourcestring.constructFromObject(data['category']);
      }
      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], [CommentResource]);
      }
      if (data.hasOwnProperty('contributors')) {
        obj['contributors'] = ApiClient.convertToType(data['contributors'], [ContributionResource]);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('embed')) {
        obj['embed'] = ApiClient.convertToType(data['embed'], 'String');
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('long_description')) {
        obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
      }
      if (data.hasOwnProperty('mime_type')) {
        obj['mime_type'] = ApiClient.convertToType(data['mime_type'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
      }
      if (data.hasOwnProperty('privacy')) {
        obj['privacy'] = ApiClient.convertToType(data['privacy'], 'String');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('uploader')) {
        obj['uploader'] = SimpleUserResource.constructFromObject(data['uploader']);
      }
      if (data.hasOwnProperty('views')) {
        obj['views'] = ApiClient.convertToType(data['views'], 'Number');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
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
  
  var discriminatorValue = 'VideoResource';


  /**
   * Whether the video is available, based on various factors
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The original artist of the media
   * @member {module:model/SimpleReferenceResourcelong} author
   */
  exports.prototype['author'] = undefined;
  /**
   * The date the media was created as a unix timestamp in seconds
   * @member {Number} authored
   */
  exports.prototype['authored'] = undefined;
  /**
   * Whether the video has been banned or not
   * @member {Boolean} banned
   */
  exports.prototype['banned'] = undefined;
  /**
   * The category of the video
   * @member {module:model/SimpleReferenceResourcestring} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The comments of the video
   * @member {Array.<module:model/CommentResource>} comments
   */
  exports.prototype['comments'] = undefined;
  /**
   * Artists that contributed to the creation. See separate endpoint to add to list
   * @member {Array.<module:model/ContributionResource>} contributors
   */
  exports.prototype['contributors'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The country of an embedable version
   * @member {String} embed
   */
  exports.prototype['embed'] = undefined;
  /**
   * The file extension of the media file. 1-5 characters
   * @member {String} extension
   */
  exports.prototype['extension'] = undefined;
  /**
   * The height of the video in px
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * The unique ID for that resource
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The length of the video in seconds
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;
  /**
   * The country of the media. Typically a url. Cannot be blank
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * The user friendly name of that resource. Defaults to blank string
   * @member {String} long_description
   */
  exports.prototype['long_description'] = undefined;
  /**
   * The mime-type of the media
   * @member {String} mime_type
   */
  exports.prototype['mime_type'] = undefined;
  /**
   * The user friendly name of that resource
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The sort order of the video. default: 100
   * @member {Number} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * The privacy setting. default: private
   * @member {module:model/VideoResource.PrivacyEnum} privacy
   */
  exports.prototype['privacy'] = undefined;
  /**
   * Whether the video has been made public. Default true
   * @member {Boolean} published
   */
  exports.prototype['published'] = undefined;
  /**
   * The user friendly name of that resource. Defaults to blank string
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * The size of the media. Minimum 0 if supplied
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * The tags for the video
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * A video template this video is validated against (private). May be null and no validation of additional_properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The country of a thumbnail version. Typically a url
   * @member {String} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The user the media was uploaded by. May be null for system uploaded media. May only be set to a user other than the current caller if VIDEOS_ADMIN permission. Null will mean the caller is the uploader unless the caller has VIDEOS_ADMIN permission, in which case it will be set to null
   * @member {module:model/SimpleUserResource} uploader
   */
  exports.prototype['uploader'] = undefined;
  /**
   * The view count of the video
   * @member {Number} views
   */
  exports.prototype['views'] = undefined;
  /**
   * The width of the video in px
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;


  /**
   * Allowed values for the <code>privacy</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PrivacyEnum = {
    /**
     * value: "private"
     * @const
     */
    "private": "private",
    /**
     * value: "friends"
     * @const
     */
    "friends": "friends",
    /**
     * value: "public"
     * @const
     */
    "public": "public"  };


  return exports;
}));


