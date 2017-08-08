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
import OAuth2Resource from '../model/OAuth2Resource';

/**
* AccessToken service.
* @module api/AccessTokenApi
* @version 3.0.7
*/
export default class AccessTokenApi {

    /**
    * Constructs a new AccessTokenApi. 
    * @alias module:api/AccessTokenApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get access token
     * @param {module:model/String} grantType Grant type
     * @param {String} clientId The id of the client
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientSecret The secret key of the client.  Used only with a grant_type of client_credentials
     * @param {String} opts.username The username of the client.  Used only with a grant_type of password
     * @param {String} opts.password The password of the client.  Used only with a grant_type of password
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OAuth2Resource} and HTTP response
     */
    getOAuthTokenWithHttpInfo(grantType, clientId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'grantType' is set
      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling getOAuthToken");
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getOAuthToken");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'grant_type': grantType,
        'client_id': clientId,
        'client_secret': opts['clientSecret'],
        'username': opts['username'],
        'password': opts['password']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = OAuth2Resource;

      return this.apiClient.callApi(
        '/oauth/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get access token
     * @param {module:model/String} grantType Grant type
     * @param {String} clientId The id of the client
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientSecret The secret key of the client.  Used only with a grant_type of client_credentials
     * @param {String} opts.username The username of the client.  Used only with a grant_type of password
     * @param {String} opts.password The password of the client.  Used only with a grant_type of password
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OAuth2Resource}
     */
    getOAuthToken(grantType, clientId, opts) {
      return this.getOAuthTokenWithHttpInfo(grantType, clientId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
