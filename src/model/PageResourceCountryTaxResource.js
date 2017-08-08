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
import CountryTaxResource from './CountryTaxResource';
import Order from './Order';





/**
* The PageResourceCountryTaxResource model module.
* @module model/PageResourceCountryTaxResource
* @version 3.0.7
*/
export default class PageResourceCountryTaxResource {
    /**
    * Constructs a new <code>PageResourceCountryTaxResource</code>.
    * @alias module:model/PageResourceCountryTaxResource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PageResourceCountryTaxResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PageResourceCountryTaxResource} obj Optional instance to populate.
    * @return {module:model/PageResourceCountryTaxResource} The populated <code>PageResourceCountryTaxResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageResourceCountryTaxResource();

            
            
            

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], [CountryTaxResource]);
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('number_of_elements')) {
                obj['number_of_elements'] = ApiClient.convertToType(data['number_of_elements'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], [Order]);
            }
            if (data.hasOwnProperty('total_elements')) {
                obj['total_elements'] = ApiClient.convertToType(data['total_elements'], 'Number');
            }
            if (data.hasOwnProperty('total_pages')) {
                obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/CountryTaxResource>} content
    */
    content = undefined;
    /**
    * @member {Boolean} first
    */
    first = undefined;
    /**
    * @member {Boolean} last
    */
    last = undefined;
    /**
    * @member {Number} number
    */
    number = undefined;
    /**
    * @member {Number} number_of_elements
    */
    number_of_elements = undefined;
    /**
    * @member {Number} size
    */
    size = undefined;
    /**
    * @member {Array.<module:model/Order>} sort
    */
    sort = undefined;
    /**
    * @member {Number} total_elements
    */
    total_elements = undefined;
    /**
    * @member {Number} total_pages
    */
    total_pages = undefined;








}


