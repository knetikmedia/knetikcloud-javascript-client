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
* The ExpressionResource model module.
* @module model/ExpressionResource
* @version 3.0.7
*/
export default class ExpressionResource {
    /**
    * Constructs a new <code>ExpressionResource</code>.
    * @alias module:model/ExpressionResource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ExpressionResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ExpressionResource} obj Optional instance to populate.
    * @return {module:model/ExpressionResource} The populated <code>ExpressionResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExpressionResource();

            
            
            

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} type
    */
    type = undefined;








}


