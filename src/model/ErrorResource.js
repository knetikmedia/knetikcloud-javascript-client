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
* The ErrorResource model module.
* @module model/ErrorResource
* @version 3.0.7
*/
export default class ErrorResource {
    /**
    * Constructs a new <code>ErrorResource</code>.
    * @alias module:model/ErrorResource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ErrorResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ErrorResource} obj Optional instance to populate.
    * @return {module:model/ErrorResource} The populated <code>ErrorResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResource();

            
            
            

            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], Object);
            }
            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], Object);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
    * Extra details about the error, if needed
    * @member {Object} details
    */
    details = undefined;
    /**
    * The JSON key the message pertains to
    * @member {Object} field
    */
    field = undefined;
    /**
    * The message explaining the error
    * @member {String} message
    */
    message = undefined;








}


