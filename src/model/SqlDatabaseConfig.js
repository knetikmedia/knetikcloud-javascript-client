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
* The SqlDatabaseConfig model module.
* @module model/SqlDatabaseConfig
* @version 3.0.7
*/
export default class SqlDatabaseConfig {
    /**
    * Constructs a new <code>SqlDatabaseConfig</code>.
    * @alias module:model/SqlDatabaseConfig
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SqlDatabaseConfig</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SqlDatabaseConfig} obj Optional instance to populate.
    * @return {module:model/SqlDatabaseConfig} The populated <code>SqlDatabaseConfig</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SqlDatabaseConfig();

            
            
            

            if (data.hasOwnProperty('connection_pool_size')) {
                obj['connection_pool_size'] = ApiClient.convertToType(data['connection_pool_size'], 'Number');
            }
            if (data.hasOwnProperty('db_name')) {
                obj['db_name'] = ApiClient.convertToType(data['db_name'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} connection_pool_size
    */
    connection_pool_size = undefined;
    /**
    * @member {String} db_name
    */
    db_name = undefined;
    /**
    * @member {String} hostname
    */
    hostname = undefined;
    /**
    * @member {String} password
    */
    password = undefined;
    /**
    * @member {Number} port
    */
    port = undefined;
    /**
    * @member {String} username
    */
    username = undefined;








}


