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
* The UsageInfo model module.
* @module model/UsageInfo
* @version 3.0.7
*/
export default class UsageInfo {
    /**
    * Constructs a new <code>UsageInfo</code>.
    * @alias module:model/UsageInfo
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>UsageInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UsageInfo} obj Optional instance to populate.
    * @return {module:model/UsageInfo} The populated <code>UsageInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsageInfo();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Number');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
    * The number of requests within the range
    * @member {Number} count
    */
    count = undefined;
    /**
    * The date at the start of the range (see granularity)
    * @member {Number} date
    */
    date = undefined;
    /**
    * The http method
    * @member {String} method
    */
    method = undefined;
    /**
    * The url path
    * @member {String} url
    */
    url = undefined;








}


