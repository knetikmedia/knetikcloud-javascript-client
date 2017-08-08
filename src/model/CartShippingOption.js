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
* The CartShippingOption model module.
* @module model/CartShippingOption
* @version 3.0.7
*/
export default class CartShippingOption {
    /**
    * Constructs a new <code>CartShippingOption</code>.
    * @alias module:model/CartShippingOption
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>CartShippingOption</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CartShippingOption} obj Optional instance to populate.
    * @return {module:model/CartShippingOption} The populated <code>CartShippingOption</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartShippingOption();

            
            
            

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('original_price')) {
                obj['original_price'] = ApiClient.convertToType(data['original_price'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('shipping_item_id')) {
                obj['shipping_item_id'] = ApiClient.convertToType(data['shipping_item_id'], 'Number');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('taxable')) {
                obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('vendor_id')) {
                obj['vendor_id'] = ApiClient.convertToType(data['vendor_id'], 'Number');
            }
            if (data.hasOwnProperty('vendor_name')) {
                obj['vendor_name'] = ApiClient.convertToType(data['vendor_name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} currency_code
    */
    currency_code = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {Number} original_price
    */
    original_price = undefined;
    /**
    * @member {Number} price
    */
    price = undefined;
    /**
    * @member {Number} shipping_item_id
    */
    shipping_item_id = undefined;
    /**
    * @member {String} sku
    */
    sku = undefined;
    /**
    * @member {Boolean} taxable
    */
    taxable = undefined;
    /**
    * @member {Number} vendor_id
    */
    vendor_id = undefined;
    /**
    * @member {String} vendor_name
    */
    vendor_name = undefined;








}


