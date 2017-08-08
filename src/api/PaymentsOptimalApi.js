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
import OptimalPaymentRequest from '../model/OptimalPaymentRequest';
import Result from '../model/Result';

/**
* PaymentsOptimal service.
* @module api/PaymentsOptimalApi
* @version 3.0.7
*/
export default class PaymentsOptimalApi {

    /**
    * Constructs a new PaymentsOptimalApi. 
    * @alias module:api/PaymentsOptimalApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Initiate silent post with Optimal
     * Will return the url for a hosted payment endpoint to post to. See Optimal documentation for details.
     * @param {Object} opts Optional parameters
     * @param {module:model/OptimalPaymentRequest} opts.request The payment request to initiate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    silentPostOptimalWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['request'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/payment/provider/optimal/silent', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Initiate silent post with Optimal
     * Will return the url for a hosted payment endpoint to post to. See Optimal documentation for details.
     * @param {Object} opts Optional parameters
     * @param {module:model/OptimalPaymentRequest} opts.request The payment request to initiate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    silentPostOptimal(opts) {
      return this.silentPostOptimalWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
