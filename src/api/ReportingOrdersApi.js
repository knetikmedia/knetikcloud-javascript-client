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


import ApiClient from "../ApiClient";
import PageResourceAggregateInvoiceReportResource from '../model/PageResourceAggregateInvoiceReportResource';
import Result from '../model/Result';

/**
* ReportingOrders service.
* @module api/ReportingOrdersApi
* @version 3.0.7
*/
export default class ReportingOrdersApi {

    /**
    * Constructs a new ReportingOrdersApi. 
    * @alias module:api/ReportingOrdersApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieve invoice counts aggregated by time ranges
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.granularity The time duration to aggregate by (default to day)
     * @param {String} opts.filterPaymentStatus A payment status to filter results by, can be a comma separated list
     * @param {String} opts.filterFulfillmentStatus An invoice fulfillment status to filter results by, can be a comma separated list
     * @param {Number} opts.startDate The start of the time range to return, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to return, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceAggregateInvoiceReportResource} and HTTP response
     */
    getInvoiceReportsWithHttpInfo(currencyCode, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode === undefined || currencyCode === null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling getInvoiceReports");
      }


      let pathParams = {
        'currency_code': currencyCode
      };
      let queryParams = {
        'granularity': opts['granularity'],
        'filter_payment_status': opts['filterPaymentStatus'],
        'filter_fulfillment_status': opts['filterFulfillmentStatus'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'size': opts['size'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourceAggregateInvoiceReportResource;

      return this.apiClient.callApi(
        '/reporting/orders/count/{currency_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve invoice counts aggregated by time ranges
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.granularity The time duration to aggregate by (default to day)
     * @param {String} opts.filterPaymentStatus A payment status to filter results by, can be a comma separated list
     * @param {String} opts.filterFulfillmentStatus An invoice fulfillment status to filter results by, can be a comma separated list
     * @param {Number} opts.startDate The start of the time range to return, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to return, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceAggregateInvoiceReportResource}
     */
    getInvoiceReports(currencyCode, opts) {
      return this.getInvoiceReportsWithHttpInfo(currencyCode, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
