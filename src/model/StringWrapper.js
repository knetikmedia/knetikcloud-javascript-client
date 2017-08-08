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
* The StringWrapper model module.
* @module model/StringWrapper
* @version 3.0.7
*/
export default class StringWrapper {
    /**
    * Constructs a new <code>StringWrapper</code>.
    * @alias module:model/StringWrapper
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>StringWrapper</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StringWrapper} obj Optional instance to populate.
    * @return {module:model/StringWrapper} The populated <code>StringWrapper</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StringWrapper();

            
            
            

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} value
    */
    value = undefined;








}


