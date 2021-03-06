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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.SqlDatabaseConfig = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SqlDatabaseConfig model module.
   * @module model/SqlDatabaseConfig
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>SqlDatabaseConfig</code>.
   * @alias module:model/SqlDatabaseConfig
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>SqlDatabaseConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SqlDatabaseConfig} obj Optional instance to populate.
   * @return {module:model/SqlDatabaseConfig} The populated <code>SqlDatabaseConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('connection_pool_size')) {
        obj['connection_pool_size'] = ApiClient.convertToType(data['connection_pool_size'], 'Number');
      }
      if (data.hasOwnProperty('db_name')) {
        obj['db_name'] = ApiClient.convertToType(data['db_name'], 'String');
      }
      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Number');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
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
  
  var discriminatorValue = 'SqlDatabaseConfig';


  /**
   * @member {Number} connection_pool_size
   */
  exports.prototype['connection_pool_size'] = undefined;
  /**
   * @member {String} db_name
   */
  exports.prototype['db_name'] = undefined;
  /**
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {Number} port
   */
  exports.prototype['port'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


