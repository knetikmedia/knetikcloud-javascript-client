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
import SimpleUserResource from './SimpleUserResource';





/**
* The LeaderboardEntryResource model module.
* @module model/LeaderboardEntryResource
* @version 3.0.7
*/
export default class LeaderboardEntryResource {
    /**
    * Constructs a new <code>LeaderboardEntryResource</code>.
    * @alias module:model/LeaderboardEntryResource
    * @class
    * @param user {module:model/SimpleUserResource} The player for this entry
    */

    constructor(user) {
        

        
        

        this['user'] = user;

        
    }

    /**
    * Constructs a <code>LeaderboardEntryResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LeaderboardEntryResource} obj Optional instance to populate.
    * @return {module:model/LeaderboardEntryResource} The populated <code>LeaderboardEntryResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardEntryResource();

            
            
            

            if (data.hasOwnProperty('rank')) {
                obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('updated_date')) {
                obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = SimpleUserResource.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
    * The position of the user in the leaderboard. Null means non-compete or disqualification
    * @member {Number} rank
    */
    rank = undefined;
    /**
    * The raw score in this leaderboard. Null means non-compete or disqualification
    * @member {Number} score
    */
    score = undefined;
    /**
    * The date this score was recorded or updated. Unix timestamp in seconds
    * @member {Number} updated_date
    */
    updated_date = undefined;
    /**
    * The player for this entry
    * @member {module:model/SimpleUserResource} user
    */
    user = undefined;








}


