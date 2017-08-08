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
* The StateResource model module.
* @module model/StateResource
* @version 3.0.7
*/
export default class StateResource {
    /**
    * Constructs a new <code>StateResource</code>.
    * @alias module:model/StateResource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>StateResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StateResource} obj Optional instance to populate.
    * @return {module:model/StateResource} The populated <code>StateResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StateResource();

            
            
            

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('country_code_iso3')) {
                obj['country_code_iso3'] = ApiClient.convertToType(data['country_code_iso3'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * The code of the state
    * @member {String} code
    */
    code = undefined;
    /**
    * The iso3 of the country this state is in
    * @member {String} country_code_iso3
    */
    country_code_iso3 = undefined;
    /**
    * The unique ID for the state
    * @member {Number} id
    */
    id = undefined;
    /**
    * The name of the state
    * @member {String} name
    */
    name = undefined;








}


