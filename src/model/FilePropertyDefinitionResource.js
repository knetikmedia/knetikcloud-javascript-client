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
import PropertyFieldListResource from './PropertyFieldListResource';





/**
* The FilePropertyDefinitionResource model module.
* @module model/FilePropertyDefinitionResource
* @version 3.0.7
*/
export default class FilePropertyDefinitionResource {
    /**
    * Constructs a new <code>FilePropertyDefinitionResource</code>.
    * @alias module:model/FilePropertyDefinitionResource
    * @class
    * @extends module:model/PropertyDefinitionResource
    * @param name {String} The name of the property
    * @param required {Boolean} Whether the property is required
    * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
    */

    constructor(name, required, type) {
        

        PropertyDefinitionResource.call(this, name, required, type);
        

        

        
    }

    /**
    * Constructs a <code>FilePropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FilePropertyDefinitionResource} obj Optional instance to populate.
    * @return {module:model/FilePropertyDefinitionResource} The populated <code>FilePropertyDefinitionResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilePropertyDefinitionResource();

            

            PropertyDefinitionResource.constructFromObject(data, obj);
            

            if (data.hasOwnProperty('file_type')) {
                obj['file_type'] = ApiClient.convertToType(data['file_type'], 'String');
            }
            if (data.hasOwnProperty('max_file_size')) {
                obj['max_file_size'] = ApiClient.convertToType(data['max_file_size'], 'Number');
            }
        }
        return obj;
    }

    /**
    * If provided, a file type that the property must match
    * @member {String} file_type
    */
    file_type = undefined;
    /**
    * If provided, the maximum allowed file size in bytes
    * @member {Number} max_file_size
    */
    max_file_size = undefined;








}


