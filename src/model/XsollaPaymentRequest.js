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
* The XsollaPaymentRequest model module.
* @module model/XsollaPaymentRequest
* @version 3.0.7
*/
export default class XsollaPaymentRequest {
    /**
    * Constructs a new <code>XsollaPaymentRequest</code>.
    * @alias module:model/XsollaPaymentRequest
    * @class
    * @param invoiceId {Number} The id of an invoice to pay
    * @param returnUrl {String} The endpoint URL xsolla should forward the user to after they pay
    */

    constructor(invoiceId, returnUrl) {
        

        
        

        this['invoice_id'] = invoiceId;this['return_url'] = returnUrl;

        
    }

    /**
    * Constructs a <code>XsollaPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/XsollaPaymentRequest} obj Optional instance to populate.
    * @return {module:model/XsollaPaymentRequest} The populated <code>XsollaPaymentRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XsollaPaymentRequest();

            
            
            

            if (data.hasOwnProperty('invoice_id')) {
                obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
            }
            if (data.hasOwnProperty('return_url')) {
                obj['return_url'] = ApiClient.convertToType(data['return_url'], 'String');
            }
        }
        return obj;
    }

    /**
    * The id of an invoice to pay
    * @member {Number} invoice_id
    */
    invoice_id = undefined;
    /**
    * The endpoint URL xsolla should forward the user to after they pay
    * @member {String} return_url
    */
    return_url = undefined;








}


