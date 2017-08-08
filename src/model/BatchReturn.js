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
* The BatchReturn model module.
* @module model/BatchReturn
* @version 3.0.7
*/
export default class BatchReturn {
    /**
    * Constructs a new <code>BatchReturn</code>.
    * @alias module:model/BatchReturn
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>BatchReturn</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BatchReturn} obj Optional instance to populate.
    * @return {module:model/BatchReturn} The populated <code>BatchReturn</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchReturn();

            
            
            

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], Object);
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
        }
        return obj;
    }

    /**
    * The result body
    * @member {Object} body
    */
    body = undefined;
    /**
    * The HTTP response code
    * @member {Number} code
    */
    code = undefined;
    /**
    * Full URI of REST call
    * @member {String} uri
    */
    uri = undefined;








}


