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
import PropertyFieldListResource from './PropertyFieldListResource';





/**
* The PropertyDefinitionResource model module.
* @module model/PropertyDefinitionResource
* @version 3.0.7
*/
export default class PropertyDefinitionResource {
    /**
    * Constructs a new <code>PropertyDefinitionResource</code>.
    * @alias module:model/PropertyDefinitionResource
    * @class
    * @param name {String} The name of the property
    * @param required {Boolean} Whether the property is required
    * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
    */

    constructor(name, required, type) {
        

        
        

        this['name'] = name;this['required'] = required;this['type'] = type;

        
    }

    /**
    * Constructs a <code>PropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PropertyDefinitionResource} obj Optional instance to populate.
    * @return {module:model/PropertyDefinitionResource} The populated <code>PropertyDefinitionResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertyDefinitionResource();

            
            
            

            if (data.hasOwnProperty('field_list')) {
                obj['field_list'] = PropertyFieldListResource.constructFromObject(data['field_list']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * A list of the fields on both the property definition and property of this type
    * @member {module:model/PropertyFieldListResource} field_list
    */
    field_list = undefined;
    /**
    * The name of the property
    * @member {String} name
    */
    name = undefined;
    /**
    * Whether the property is required
    * @member {Boolean} required
    */
    required = undefined;
    /**
    * The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
    * @member {String} type
    */
    type = undefined;








}


