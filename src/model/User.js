/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    define(['ApiClient', 'model/Affiliate', 'model/Country', 'model/Currency', 'model/GroupMember', 'model/Language', 'model/Property', 'model/Role', 'model/Timezone', 'model/UserRelationship', 'model/UserTag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Affiliate'), require('./Country'), require('./Currency'), require('./GroupMember'), require('./Language'), require('./Property'), require('./Role'), require('./Timezone'), require('./UserRelationship'), require('./UserTag'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.User = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Affiliate, root.KnetikPlatformApiDocumentationLatest.Country, root.KnetikPlatformApiDocumentationLatest.Currency, root.KnetikPlatformApiDocumentationLatest.GroupMember, root.KnetikPlatformApiDocumentationLatest.Language, root.KnetikPlatformApiDocumentationLatest.Property, root.KnetikPlatformApiDocumentationLatest.Role, root.KnetikPlatformApiDocumentationLatest.Timezone, root.KnetikPlatformApiDocumentationLatest.UserRelationship, root.KnetikPlatformApiDocumentationLatest.UserTag);
  }
}(this, function(ApiClient, Affiliate, Country, Currency, GroupMember, Language, Property, Role, Timezone, UserRelationship, UserTag) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version Latest
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;













































  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('affiliate')) {
        obj['affiliate'] = Affiliate.constructFromObject(data['affiliate']);
      }
      if (data.hasOwnProperty('avatar_url')) {
        obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
      }
      if (data.hasOwnProperty('children')) {
        obj['children'] = ApiClient.convertToType(data['children'], [UserRelationship]);
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = Country.constructFromObject(data['country']);
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = Currency.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('date_created')) {
        obj['date_created'] = ApiClient.convertToType(data['date_created'], 'Number');
      }
      if (data.hasOwnProperty('date_of_birth')) {
        obj['date_of_birth'] = ApiClient.convertToType(data['date_of_birth'], 'Number');
      }
      if (data.hasOwnProperty('date_updated')) {
        obj['date_updated'] = ApiClient.convertToType(data['date_updated'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('fullname')) {
        obj['fullname'] = ApiClient.convertToType(data['fullname'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [GroupMember]);
      }
      if (data.hasOwnProperty('guest')) {
        obj['guest'] = ApiClient.convertToType(data['guest'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('invite_token')) {
        obj['invite_token'] = ApiClient.convertToType(data['invite_token'], 'String');
      }
      if (data.hasOwnProperty('lang')) {
        obj['lang'] = Language.constructFromObject(data['lang']);
      }
      if (data.hasOwnProperty('last_activity')) {
        obj['last_activity'] = ApiClient.convertToType(data['last_activity'], 'Number');
      }
      if (data.hasOwnProperty('last_login')) {
        obj['last_login'] = ApiClient.convertToType(data['last_login'], 'Number');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('lockout_attempts')) {
        obj['lockout_attempts'] = ApiClient.convertToType(data['lockout_attempts'], 'Number');
      }
      if (data.hasOwnProperty('lockout_date')) {
        obj['lockout_date'] = ApiClient.convertToType(data['lockout_date'], 'Number');
      }
      if (data.hasOwnProperty('mobile_number')) {
        obj['mobile_number'] = ApiClient.convertToType(data['mobile_number'], 'String');
      }
      if (data.hasOwnProperty('old_id')) {
        obj['old_id'] = ApiClient.convertToType(data['old_id'], 'Number');
      }
      if (data.hasOwnProperty('parents')) {
        obj['parents'] = ApiClient.convertToType(data['parents'], [UserRelationship]);
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('postal_code')) {
        obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
      }
      if (data.hasOwnProperty('properties_string')) {
        obj['properties_string'] = ApiClient.convertToType(data['properties_string'], 'String');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], [Role]);
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('tag_strings')) {
        obj['tag_strings'] = ApiClient.convertToType(data['tag_strings'], ['String']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], [UserTag]);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = Timezone.constructFromObject(data['timezone']);
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('type_hint')) {
        obj['type_hint'] = ApiClient.convertToType(data['type_hint'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * @member {module:model/Affiliate} affiliate
   */
  exports.prototype['affiliate'] = undefined;
  /**
   * @member {String} avatar_url
   */
  exports.prototype['avatar_url'] = undefined;
  /**
   * @member {Array.<module:model/UserRelationship>} children
   */
  exports.prototype['children'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {module:model/Country} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {module:model/Currency} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {Number} date_created
   */
  exports.prototype['date_created'] = undefined;
  /**
   * @member {Number} date_of_birth
   */
  exports.prototype['date_of_birth'] = undefined;
  /**
   * @member {Number} date_updated
   */
  exports.prototype['date_updated'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * @member {String} fullname
   */
  exports.prototype['fullname'] = undefined;
  /**
   * @member {String} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * @member {Array.<module:model/GroupMember>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * @member {Boolean} guest
   */
  exports.prototype['guest'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} invite_token
   */
  exports.prototype['invite_token'] = undefined;
  /**
   * @member {module:model/Language} lang
   */
  exports.prototype['lang'] = undefined;
  /**
   * @member {Number} last_activity
   */
  exports.prototype['last_activity'] = undefined;
  /**
   * @member {Number} last_login
   */
  exports.prototype['last_login'] = undefined;
  /**
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * @member {Number} lockout_attempts
   */
  exports.prototype['lockout_attempts'] = undefined;
  /**
   * @member {Number} lockout_date
   */
  exports.prototype['lockout_date'] = undefined;
  /**
   * @member {String} mobile_number
   */
  exports.prototype['mobile_number'] = undefined;
  /**
   * @member {Number} old_id
   */
  exports.prototype['old_id'] = undefined;
  /**
   * @member {Array.<module:model/UserRelationship>} parents
   */
  exports.prototype['parents'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} postal_code
   */
  exports.prototype['postal_code'] = undefined;
  /**
   * @member {String} properties_string
   */
  exports.prototype['properties_string'] = undefined;
  /**
   * @member {Array.<module:model/Role>} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<String>} tag_strings
   */
  exports.prototype['tag_strings'] = undefined;
  /**
   * @member {Array.<module:model/UserTag>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * @member {module:model/Timezone} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * @member {String} type_hint
   */
  exports.prototype['type_hint'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


