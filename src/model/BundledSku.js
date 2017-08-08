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
* The BundledSku model module.
* @module model/BundledSku
* @version 3.0.7
*/
export default class BundledSku {
    /**
    * Constructs a new <code>BundledSku</code>.
    * @alias module:model/BundledSku
    * @class
    * @param quantity {Number} The quantity of this item within the bundle
    * @param sku {String} The stock keeping unit (SKU) for an item included in the bundle
    */

    constructor(quantity, sku) {
        

        
        

        this['quantity'] = quantity;this['sku'] = sku;

        
    }

    /**
    * Constructs a <code>BundledSku</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BundledSku} obj Optional instance to populate.
    * @return {module:model/BundledSku} The populated <code>BundledSku</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BundledSku();

            
            
            

            if (data.hasOwnProperty('price_override')) {
                obj['price_override'] = ApiClient.convertToType(data['price_override'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
        }
        return obj;
    }

    /**
    * The amount this item will cost inside the bundle instead of its regular price
    * @member {Number} price_override
    */
    price_override = undefined;
    /**
    * The quantity of this item within the bundle
    * @member {Number} quantity
    */
    quantity = undefined;
    /**
    * The stock keeping unit (SKU) for an item included in the bundle
    * @member {String} sku
    */
    sku = undefined;








}


