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
    define(['ApiClient', 'model/Behavior'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ItemBehaviorDefinitionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Behavior);
  }
}(this, function(ApiClient, Behavior) {
  'use strict';




  /**
   * The ItemBehaviorDefinitionResource model module.
   * @module model/ItemBehaviorDefinitionResource
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>ItemBehaviorDefinitionResource</code>.
   * @alias module:model/ItemBehaviorDefinitionResource
   * @class
   * @param behavior {module:model/Behavior} The default version of the behavior
   * @param modifiable {Boolean} Whether the behavior's values can be modified
   * @param required {Boolean} Whether the behavior can be removed
   */
  var exports = function(behavior, modifiable, required) {
    var _this = this;

    _this['behavior'] = behavior;
    _this['modifiable'] = modifiable;
    _this['required'] = required;
  };

  /**
   * Constructs a <code>ItemBehaviorDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemBehaviorDefinitionResource} obj Optional instance to populate.
   * @return {module:model/ItemBehaviorDefinitionResource} The populated <code>ItemBehaviorDefinitionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('behavior')) {
        obj['behavior'] = Behavior.constructFromObject(data['behavior']);
      }
      if (data.hasOwnProperty('modifiable')) {
        obj['modifiable'] = ApiClient.convertToType(data['modifiable'], 'Boolean');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
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
  
  var discriminatorValue = 'ItemBehaviorDefinitionResource';


  /**
   * The default version of the behavior
   * @member {module:model/Behavior} behavior
   */
  exports.prototype['behavior'] = undefined;
  /**
   * Whether the behavior's values can be modified
   * @member {Boolean} modifiable
   */
  exports.prototype['modifiable'] = undefined;
  /**
   * Whether the behavior can be removed
   * @member {Boolean} required
   */
  exports.prototype['required'] = undefined;



  return exports;
}));


