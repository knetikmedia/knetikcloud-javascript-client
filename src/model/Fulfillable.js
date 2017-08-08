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
import Behavior from './Behavior';





/**
* The Fulfillable model module.
* @module model/Fulfillable
* @version 3.0.7
*/
export default class Fulfillable {
    /**
    * Constructs a new <code>Fulfillable</code>.
    * @alias module:model/Fulfillable
    * @class
    * @extends module:model/Behavior
    * @param typeName {String} The name of the fulfillment type that describes how the item should be fulfilled.  Examples: inventory, wallet, amazon
    */

    constructor(typeName) {
        

        Behavior.call(this);
        

        this['type_name'] = typeName;

        
    }

    /**
    * Constructs a <code>Fulfillable</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Fulfillable} obj Optional instance to populate.
    * @return {module:model/Fulfillable} The populated <code>Fulfillable</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Fulfillable();

            

            Behavior.constructFromObject(data, obj);
            

            if (data.hasOwnProperty('type_name')) {
                obj['type_name'] = ApiClient.convertToType(data['type_name'], 'String');
            }
        }
        return obj;
    }

    /**
    * The name of the fulfillment type that describes how the item should be fulfilled.  Examples: inventory, wallet, amazon
    * @member {String} type_name
    */
    type_name = undefined;








}


