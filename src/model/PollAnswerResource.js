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
* The PollAnswerResource model module.
* @module model/PollAnswerResource
* @version 3.0.7
*/
export default class PollAnswerResource {
    /**
    * Constructs a new <code>PollAnswerResource</code>.
    * @alias module:model/PollAnswerResource
    * @class
    * @param key {String} The key to the answer (for code reference)
    * @param text {String} The text of the answer (for user display)
    */

    constructor(key, text) {
        

        
        

        this['key'] = key;this['text'] = text;

        
    }

    /**
    * Constructs a <code>PollAnswerResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PollAnswerResource} obj Optional instance to populate.
    * @return {module:model/PollAnswerResource} The populated <code>PollAnswerResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PollAnswerResource();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }

    /**
    * The number of users that selected this answer
    * @member {Number} count
    */
    count = undefined;
    /**
    * The key to the answer (for code reference)
    * @member {String} key
    */
    key = undefined;
    /**
    * The text of the answer (for user display)
    * @member {String} text
    */
    text = undefined;








}


