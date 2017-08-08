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
import SimpleReferenceResourcelong from './SimpleReferenceResourcelong';





/**
* The VideoRelationshipResource model module.
* @module model/VideoRelationshipResource
* @version 3.0.7
*/
export default class VideoRelationshipResource {
    /**
    * Constructs a new <code>VideoRelationshipResource</code>.
    * @alias module:model/VideoRelationshipResource
    * @class
    * @param relationshipDetails {String} Details about the relationship such as type or other information. Max length 10 characters
    * @param to {module:model/SimpleReferenceResourcelong} The target of the relationship.
    */

    constructor(relationshipDetails, to) {
        

        
        

        this['relationship_details'] = relationshipDetails;this['to'] = to;

        
    }

    /**
    * Constructs a <code>VideoRelationshipResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VideoRelationshipResource} obj Optional instance to populate.
    * @return {module:model/VideoRelationshipResource} The populated <code>VideoRelationshipResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoRelationshipResource();

            
            
            

            if (data.hasOwnProperty('from')) {
                obj['from'] = SimpleReferenceResourcelong.constructFromObject(data['from']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('relationship_details')) {
                obj['relationship_details'] = ApiClient.convertToType(data['relationship_details'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = SimpleReferenceResourcelong.constructFromObject(data['to']);
            }
        }
        return obj;
    }

    /**
    * The owner of the relationship
    * @member {module:model/SimpleReferenceResourcelong} from
    */
    from = undefined;
    /**
    * The id of the relationship
    * @member {Number} id
    */
    id = undefined;
    /**
    * Details about the relationship such as type or other information. Max length 10 characters
    * @member {String} relationship_details
    */
    relationship_details = undefined;
    /**
    * The target of the relationship.
    * @member {module:model/SimpleReferenceResourcelong} to
    */
    to = undefined;








}


