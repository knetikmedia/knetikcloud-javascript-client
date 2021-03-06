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
    define(['ApiClient', 'model/DatabaseConfig', 'model/S3Config'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DatabaseConfig'), require('./S3Config'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.CustomerConfig = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.DatabaseConfig, root.KnetikCloud.S3Config);
  }
}(this, function(ApiClient, DatabaseConfig, S3Config) {
  'use strict';




  /**
   * The CustomerConfig model module.
   * @module model/CustomerConfig
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>CustomerConfig</code>.
   * @alias module:model/CustomerConfig
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CustomerConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerConfig} obj Optional instance to populate.
   * @return {module:model/CustomerConfig} The populated <code>CustomerConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aliases')) {
        obj['aliases'] = ApiClient.convertToType(data['aliases'], 'String');
      }
      if (data.hasOwnProperty('database')) {
        obj['database'] = DatabaseConfig.constructFromObject(data['database']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('s3_config')) {
        obj['s3_config'] = S3Config.constructFromObject(data['s3_config']);
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
  
  var discriminatorValue = 'CustomerConfig';


  /**
   * @member {String} aliases
   */
  exports.prototype['aliases'] = undefined;
  /**
   * @member {module:model/DatabaseConfig} database
   */
  exports.prototype['database'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/S3Config} s3_config
   */
  exports.prototype['s3_config'] = undefined;



  return exports;
}));


