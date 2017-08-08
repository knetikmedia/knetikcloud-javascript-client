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
import PropertyDefinitionResource from './PropertyDefinitionResource';





/**
* The TemplateResource model module.
* @module model/TemplateResource
* @version 3.0.7
*/
export default class TemplateResource {
    /**
    * Constructs a new <code>TemplateResource</code>.
    * @alias module:model/TemplateResource
    * @class
    * @param name {String} The name of the template
    */

    constructor(name) {
        

        
        

        this['name'] = name;

        
    }

    /**
    * Constructs a <code>TemplateResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TemplateResource} obj Optional instance to populate.
    * @return {module:model/TemplateResource} The populated <code>TemplateResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateResource();

            
            
            

            if (data.hasOwnProperty('created_date')) {
                obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [PropertyDefinitionResource]);
            }
            if (data.hasOwnProperty('updated_date')) {
                obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The date/time this resource was created in seconds since unix epoch
    * @member {Number} created_date
    */
    created_date = undefined;
    /**
    * The id of the template
    * @member {String} id
    */
    id = undefined;
    /**
    * The name of the template
    * @member {String} name
    */
    name = undefined;
    /**
    * The customized properties that are present
    * @member {Array.<module:model/PropertyDefinitionResource>} properties
    */
    properties = undefined;
    /**
    * The date/time this resource was last updated in seconds since unix epoch
    * @member {Number} updated_date
    */
    updated_date = undefined;








}


