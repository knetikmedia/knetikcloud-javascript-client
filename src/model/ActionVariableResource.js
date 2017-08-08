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


import ApiClient from '../ApiClient';





/**
* The ActionVariableResource model module.
* @module model/ActionVariableResource
* @version 3.0.7
*/
export default class ActionVariableResource {
    /**
    * Constructs a new <code>ActionVariableResource</code>.
    * @alias module:model/ActionVariableResource
    * @class
    * @param name {String} The name of the variable
    * @param optional {Boolean} Whether this variable is optional and can be left out/null
    * @param type {String} The type of the variable (see variable type endpoint for list)
    */

    constructor(name, optional, type) {
        

        
        

        this['name'] = name;this['optional'] = optional;this['type'] = type;

        
    }

    /**
    * Constructs a <code>ActionVariableResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ActionVariableResource} obj Optional instance to populate.
    * @return {module:model/ActionVariableResource} The populated <code>ActionVariableResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionVariableResource();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('optional')) {
                obj['optional'] = ApiClient.convertToType(data['optional'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * The name of the variable
    * @member {String} name
    */
    name = undefined;
    /**
    * Whether this variable is optional and can be left out/null
    * @member {Boolean} optional
    */
    optional = undefined;
    /**
    * The type of the variable (see variable type endpoint for list)
    * @member {String} type
    */
    type = undefined;








}


