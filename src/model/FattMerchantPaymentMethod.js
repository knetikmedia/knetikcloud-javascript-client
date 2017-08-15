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
* The FattMerchantPaymentMethod model module.
* @module model/FattMerchantPaymentMethod
* @version 3.0.7
*/
export default class FattMerchantPaymentMethod {
    /**
    * Constructs a new <code>FattMerchantPaymentMethod</code>.
    * @alias module:model/FattMerchantPaymentMethod
    * @class
    * @param cardLastFour {String} Last four digits of the credit card
    * @param customerId {String} Unique FattMerchant customer ID
    * @param nickname {String} Nickname given to the FattMerchant payment method
    */

    constructor(cardLastFour, customerId, nickname) {
        

        
        

        this['card_last_four'] = cardLastFour;this['customer_id'] = customerId;this['nickname'] = nickname;

        
    }

    /**
    * Constructs a <code>FattMerchantPaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FattMerchantPaymentMethod} obj Optional instance to populate.
    * @return {module:model/FattMerchantPaymentMethod} The populated <code>FattMerchantPaymentMethod</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FattMerchantPaymentMethod();

            
            
            

            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
            }
            if (data.hasOwnProperty('address_city')) {
                obj['address_city'] = ApiClient.convertToType(data['address_city'], 'String');
            }
            if (data.hasOwnProperty('address_country')) {
                obj['address_country'] = ApiClient.convertToType(data['address_country'], 'String');
            }
            if (data.hasOwnProperty('address_state')) {
                obj['address_state'] = ApiClient.convertToType(data['address_state'], 'String');
            }
            if (data.hasOwnProperty('address_zip')) {
                obj['address_zip'] = ApiClient.convertToType(data['address_zip'], 'String');
            }
            if (data.hasOwnProperty('card_last_four')) {
                obj['card_last_four'] = ApiClient.convertToType(data['card_last_four'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('nickname')) {
                obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} address1
    */
    address1 = undefined;
    /**
    * @member {String} address2
    */
    address2 = undefined;
    /**
    * @member {String} address_city
    */
    address_city = undefined;
    /**
    * @member {String} address_country
    */
    address_country = undefined;
    /**
    * @member {String} address_state
    */
    address_state = undefined;
    /**
    * @member {String} address_zip
    */
    address_zip = undefined;
    /**
    * Last four digits of the credit card
    * @member {String} card_last_four
    */
    card_last_four = undefined;
    /**
    * @member {String} created_at
    */
    created_at = undefined;
    /**
    * Unique FattMerchant customer ID
    * @member {String} customer_id
    */
    customer_id = undefined;
    /**
    * @member {String} deleted_at
    */
    deleted_at = undefined;
    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * Nickname given to the FattMerchant payment method
    * @member {String} nickname
    */
    nickname = undefined;
    /**
    * @member {String} updated_at
    */
    updated_at = undefined;








}

