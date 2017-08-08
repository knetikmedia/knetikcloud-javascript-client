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
import PropertyDefinitionResource from './PropertyDefinitionResource';
import PropertyFieldListResource from './PropertyFieldListResource';





/**
* The BooleanPropertyDefinitionResource model module.
* @module model/BooleanPropertyDefinitionResource
* @version 3.0.7
*/
export default class BooleanPropertyDefinitionResource {
    /**
    * Constructs a new <code>BooleanPropertyDefinitionResource</code>.
    * @alias module:model/BooleanPropertyDefinitionResource
    * @class
    * @extends module:model/PropertyDefinitionResource
    * @param name {String} The name of the property
    * @param required {Boolean} Whether the property is required
    * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
    */

    constructor(name, required, type) {
        

        PropertyDefinitionResource.call(this, name, required, type);
        

        

        
    }

    /**
    * Constructs a <code>BooleanPropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BooleanPropertyDefinitionResource} obj Optional instance to populate.
    * @return {module:model/BooleanPropertyDefinitionResource} The populated <code>BooleanPropertyDefinitionResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BooleanPropertyDefinitionResource();

            

            PropertyDefinitionResource.constructFromObject(data, obj);
            

        }
        return obj;
    }









}


