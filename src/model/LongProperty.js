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
import Property from './Property';





/**
* The LongProperty model module.
* @module model/LongProperty
* @version 3.0.7
*/
export default class LongProperty {
    /**
    * Constructs a new <code>LongProperty</code>.
    * @alias module:model/LongProperty
    * @class
    * @extends module:model/Property
    * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
    */

    constructor(type) {
        

        Property.call(this, type);
        

        

        
    }

    /**
    * Constructs a <code>LongProperty</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LongProperty} obj Optional instance to populate.
    * @return {module:model/LongProperty} The populated <code>LongProperty</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LongProperty();

            

            Property.constructFromObject(data, obj);
            

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The value
    * @member {Number} value
    */
    value = undefined;








}


