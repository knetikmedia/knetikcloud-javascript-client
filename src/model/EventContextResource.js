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
import ExpressionResource from './ExpressionResource';





/**
* The EventContextResource model module.
* @module model/EventContextResource
* @version 3.0.7
*/
export default class EventContextResource {
    /**
    * Constructs a new <code>EventContextResource</code>.
    * @alias module:model/EventContextResource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>EventContextResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EventContextResource} obj Optional instance to populate.
    * @return {module:model/EventContextResource} The populated <code>EventContextResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventContextResource();

            
            
            

            if (data.hasOwnProperty('event_name')) {
                obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], {'String': ExpressionResource});
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} event_name
    */
    event_name = undefined;
    /**
    * @member {Object.<String, module:model/ExpressionResource>} parameters
    */
    parameters = undefined;
    /**
    * @member {String} type
    */
    type = undefined;








}


