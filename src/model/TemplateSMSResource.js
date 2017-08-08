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
import Localizer from './Localizer';





/**
* The TemplateSMSResource model module.
* @module model/TemplateSMSResource
* @version 3.0.7
*/
export default class TemplateSMSResource {
    /**
    * Constructs a new <code>TemplateSMSResource</code>.
    * @alias module:model/TemplateSMSResource
    * @class
    * @param recipients {Array.<Number>} A list of user ids to send the message to.
    * @param templateKey {String} The key for the template.
    */

    constructor(recipients, templateKey) {
        

        
        

        this['recipients'] = recipients;this['template_key'] = templateKey;

        
    }

    /**
    * Constructs a <code>TemplateSMSResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TemplateSMSResource} obj Optional instance to populate.
    * @return {module:model/TemplateSMSResource} The populated <code>TemplateSMSResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateSMSResource();

            
            
            

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('localizer')) {
                obj['localizer'] = Localizer.constructFromObject(data['localizer']);
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], ['Number']);
            }
            if (data.hasOwnProperty('template_key')) {
                obj['template_key'] = ApiClient.convertToType(data['template_key'], 'String');
            }
            if (data.hasOwnProperty('template_vars')) {
                obj['template_vars'] = ApiClient.convertToType(data['template_vars'], ['String']);
            }
        }
        return obj;
    }

    /**
    * The phone number to attribute the outgoing message to. Optional if the config text.out_number is set.
    * @member {String} from
    */
    from = undefined;
    /**
    * @member {module:model/Localizer} localizer
    */
    localizer = undefined;
    /**
    * A list of user ids to send the message to.
    * @member {Array.<Number>} recipients
    */
    recipients = undefined;
    /**
    * The key for the template.
    * @member {String} template_key
    */
    template_key = undefined;
    /**
    * A list of values to fill in the template. Order matters.
    * @member {Array.<String>} template_vars
    */
    template_vars = undefined;








}


