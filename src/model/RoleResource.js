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
    define(['ApiClient', 'model/PermissionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PermissionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.RoleResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PermissionResource);
  }
}(this, function(ApiClient, PermissionResource) {
  'use strict';




  /**
   * The RoleResource model module.
   * @module model/RoleResource
   * @version Latest
   */

  /**
   * Constructs a new <code>RoleResource</code>.
   * @alias module:model/RoleResource
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>RoleResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoleResource} obj Optional instance to populate.
   * @return {module:model/RoleResource} The populated <code>RoleResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client_count')) {
        obj['client_count'] = ApiClient.convertToType(data['client_count'], 'Number');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('role_permission')) {
        obj['role_permission'] = ApiClient.convertToType(data['role_permission'], [PermissionResource]);
      }
      if (data.hasOwnProperty('user_count')) {
        obj['user_count'] = ApiClient.convertToType(data['user_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The number of clients this role is assigned to
   * @member {Number} client_count
   */
  exports.prototype['client_count'] = undefined;
  /**
   * The date the role was added. Unix timestamp in seconds
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * Whether a role is locked from being deleted
   * @member {Boolean} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * The name of the role used for display purposes
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The keyword that defines the role
   * @member {String} role
   */
  exports.prototype['role'] = undefined;
  /**
   * The list of permissions this role has
   * @member {Array.<module:model/PermissionResource>} role_permission
   */
  exports.prototype['role_permission'] = undefined;
  /**
   * The number of users this role is assigned to
   * @member {Number} user_count
   */
  exports.prototype['user_count'] = undefined;



  return exports;
}));


