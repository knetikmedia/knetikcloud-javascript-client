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
* The LongPropertyDefinitionResource model module.
* @module model/LongPropertyDefinitionResource
* @version 3.0.7
*/
export default class LongPropertyDefinitionResource {
    /**
    * Constructs a new <code>LongPropertyDefinitionResource</code>.
    * @alias module:model/LongPropertyDefinitionResource
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
    * Constructs a <code>LongPropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LongPropertyDefinitionResource} obj Optional instance to populate.
    * @return {module:model/LongPropertyDefinitionResource} The populated <code>LongPropertyDefinitionResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LongPropertyDefinitionResource();

            

            PropertyDefinitionResource.constructFromObject(data, obj);
            

            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'Number');
            }
            if (data.hasOwnProperty('min')) {
                obj['min'] = ApiClient.convertToType(data['min'], 'Number');
            }
        }
        return obj;
    }

    /**
    * If provided, the maximum value
    * @member {Number} max
    */
    max = undefined;
    /**
    * If provided, the minimum value
    * @member {Number} min
    */
    min = undefined;








}


