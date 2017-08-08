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
* The RevenueReportResource model module.
* @module model/RevenueReportResource
* @version 3.0.7
*/
export default class RevenueReportResource {
    /**
    * Constructs a new <code>RevenueReportResource</code>.
    * @alias module:model/RevenueReportResource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RevenueReportResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RevenueReportResource} obj Optional instance to populate.
    * @return {module:model/RevenueReportResource} The populated <code>RevenueReportResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RevenueReportResource();

            
            
            

            if (data.hasOwnProperty('customer_count')) {
                obj['customer_count'] = ApiClient.convertToType(data['customer_count'], 'Number');
            }
            if (data.hasOwnProperty('sale_count')) {
                obj['sale_count'] = ApiClient.convertToType(data['sale_count'], 'Number');
            }
            if (data.hasOwnProperty('sales_average')) {
                obj['sales_average'] = ApiClient.convertToType(data['sales_average'], 'Number');
            }
            if (data.hasOwnProperty('sales_total')) {
                obj['sales_total'] = ApiClient.convertToType(data['sales_total'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} customer_count
    */
    customer_count = undefined;
    /**
    * @member {Number} sale_count
    */
    sale_count = undefined;
    /**
    * @member {Number} sales_average
    */
    sales_average = undefined;
    /**
    * @member {Number} sales_total
    */
    sales_total = undefined;








}


