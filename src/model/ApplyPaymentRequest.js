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
* The ApplyPaymentRequest model module.
* @module model/ApplyPaymentRequest
* @version 3.0.7
*/
export default class ApplyPaymentRequest {
    /**
    * Constructs a new <code>ApplyPaymentRequest</code>.
    * @alias module:model/ApplyPaymentRequest
    * @class
    * @param invoiceId {Number} The id of the local invoice being paid.
    * @param receipt {String} The encoded receipt string from Apple's services.
    * @param transactionId {String} The id of the specific transaction from Apple's services.
    */

    constructor(invoiceId, receipt, transactionId) {
        

        
        

        this['invoice_id'] = invoiceId;this['receipt'] = receipt;this['transaction_id'] = transactionId;

        
    }

    /**
    * Constructs a <code>ApplyPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ApplyPaymentRequest} obj Optional instance to populate.
    * @return {module:model/ApplyPaymentRequest} The populated <code>ApplyPaymentRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplyPaymentRequest();

            
            
            

            if (data.hasOwnProperty('invoice_id')) {
                obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
            }
            if (data.hasOwnProperty('receipt')) {
                obj['receipt'] = ApiClient.convertToType(data['receipt'], 'String');
            }
            if (data.hasOwnProperty('transaction_id')) {
                obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * The id of the local invoice being paid.
    * @member {Number} invoice_id
    */
    invoice_id = undefined;
    /**
    * The encoded receipt string from Apple's services.
    * @member {String} receipt
    */
    receipt = undefined;
    /**
    * The id of the specific transaction from Apple's services.
    * @member {String} transaction_id
    */
    transaction_id = undefined;








}


