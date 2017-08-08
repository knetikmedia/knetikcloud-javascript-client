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
* The S3Config model module.
* @module model/S3Config
* @version 3.0.7
*/
export default class S3Config {
    /**
    * Constructs a new <code>S3Config</code>.
    * @alias module:model/S3Config
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>S3Config</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/S3Config} obj Optional instance to populate.
    * @return {module:model/S3Config} The populated <code>S3Config</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new S3Config();

            
            
            

            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('cdn_url')) {
                obj['cdn_url'] = ApiClient.convertToType(data['cdn_url'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('upload_prefix')) {
                obj['upload_prefix'] = ApiClient.convertToType(data['upload_prefix'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} bucket_name
    */
    bucket_name = undefined;
    /**
    * @member {String} cdn_url
    */
    cdn_url = undefined;
    /**
    * @member {String} region
    */
    region = undefined;
    /**
    * @member {String} upload_prefix
    */
    upload_prefix = undefined;








}


