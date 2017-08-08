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
* The IOConfig model module.
* @module model/IOConfig
* @version 3.0.7
*/
export default class IOConfig {
    /**
    * Constructs a new <code>IOConfig</code>.
    * @alias module:model/IOConfig
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>IOConfig</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IOConfig} obj Optional instance to populate.
    * @return {module:model/IOConfig} The populated <code>IOConfig</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IOConfig();

            
            
            

            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiClient.convertToType(data['customer'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ApiClient.convertToType(data['environment'], 'String');
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiClient.convertToType(data['product'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} customer
    */
    customer = undefined;
    /**
    * @member {Boolean} enabled
    */
    enabled = undefined;
    /**
    * @member {String} environment
    */
    environment = undefined;
    /**
    * @member {String} product
    */
    product = undefined;








}


