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
import BatchRequest from './BatchRequest';





/**
* The Batch model module.
* @module model/Batch
* @version 3.0.7
*/
export default class Batch {
    /**
    * Constructs a new <code>Batch</code>.
    * @alias module:model/Batch
    * @class
    * @param batch {Array.<module:model/BatchRequest>} The list of batch requests
    * @param timeout {Number} The amount of time before a request token is returned instead of the batch result.  Default is 60.  Range is 0-300
    */

    constructor(batch, timeout) {
        

        
        

        this['batch'] = batch;this['timeout'] = timeout;

        
    }

    /**
    * Constructs a <code>Batch</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Batch} obj Optional instance to populate.
    * @return {module:model/Batch} The populated <code>Batch</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Batch();

            
            
            

            if (data.hasOwnProperty('batch')) {
                obj['batch'] = ApiClient.convertToType(data['batch'], [BatchRequest]);
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The list of batch requests
    * @member {Array.<module:model/BatchRequest>} batch
    */
    batch = undefined;
    /**
    * The amount of time before a request token is returned instead of the batch result.  Default is 60.  Range is 0-300
    * @member {Number} timeout
    */
    timeout = undefined;








}


