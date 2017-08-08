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
import UserActivityResults from './UserActivityResults';





/**
* The ActivityOccurrenceResults model module.
* @module model/ActivityOccurrenceResults
* @version 3.0.7
*/
export default class ActivityOccurrenceResults {
    /**
    * Constructs a new <code>ActivityOccurrenceResults</code>.
    * @alias module:model/ActivityOccurrenceResults
    * @class
    * @param users {Array.<module:model/UserActivityResults>} The game results for each user. Include all users that played (paid to get in) even if they were eliminated without a result. A null metric is allowed
    */

    constructor(users) {
        

        
        

        this['users'] = users;

        
    }

    /**
    * Constructs a <code>ActivityOccurrenceResults</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ActivityOccurrenceResults} obj Optional instance to populate.
    * @return {module:model/ActivityOccurrenceResults} The populated <code>ActivityOccurrenceResults</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityOccurrenceResults();

            
            
            

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [UserActivityResults]);
            }
        }
        return obj;
    }

    /**
    * The game results for each user. Include all users that played (paid to get in) even if they were eliminated without a result. A null metric is allowed
    * @member {Array.<module:model/UserActivityResults>} users
    */
    users = undefined;








}


