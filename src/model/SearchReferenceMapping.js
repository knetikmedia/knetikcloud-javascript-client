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
* The SearchReferenceMapping model module.
* @module model/SearchReferenceMapping
* @version 3.0.7
*/
export default class SearchReferenceMapping {
    /**
    * Constructs a new <code>SearchReferenceMapping</code>.
    * @alias module:model/SearchReferenceMapping
    * @class
    * @param id {String} Unique identifier for the mapping to protect against duplicates
    * @param refIdField {String} The field within the type that contains the id from the refType
    * @param refType {String} The index type that the mapping pulls data from
    * @param sourceFieldToDestinationField {Object.<String, String>} A map whose keys are the field names in the refType and values are the field name in the type
    * @param type {String} The index type that the mapping is for
    */

    constructor(id, refIdField, refType, sourceFieldToDestinationField, type) {
        

        
        

        this['id'] = id;this['ref_id_field'] = refIdField;this['ref_type'] = refType;this['source_field_to_destination_field'] = sourceFieldToDestinationField;this['type'] = type;

        
    }

    /**
    * Constructs a <code>SearchReferenceMapping</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SearchReferenceMapping} obj Optional instance to populate.
    * @return {module:model/SearchReferenceMapping} The populated <code>SearchReferenceMapping</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchReferenceMapping();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('ref_id_field')) {
                obj['ref_id_field'] = ApiClient.convertToType(data['ref_id_field'], 'String');
            }
            if (data.hasOwnProperty('ref_type')) {
                obj['ref_type'] = ApiClient.convertToType(data['ref_type'], 'String');
            }
            if (data.hasOwnProperty('source_field_to_destination_field')) {
                obj['source_field_to_destination_field'] = ApiClient.convertToType(data['source_field_to_destination_field'], {'String': 'String'});
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * Unique identifier for the mapping to protect against duplicates
    * @member {String} id
    */
    id = undefined;
    /**
    * The field within the type that contains the id from the refType
    * @member {String} ref_id_field
    */
    ref_id_field = undefined;
    /**
    * The index type that the mapping pulls data from
    * @member {String} ref_type
    */
    ref_type = undefined;
    /**
    * A map whose keys are the field names in the refType and values are the field name in the type
    * @member {Object.<String, String>} source_field_to_destination_field
    */
    source_field_to_destination_field = undefined;
    /**
    * The index type that the mapping is for
    * @member {String} type
    */
    type = undefined;








}


