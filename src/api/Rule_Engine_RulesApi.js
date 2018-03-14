/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BooleanResource', 'model/BreRule', 'model/Expressionobject', 'model/PageResourceBreRule', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BooleanResource'), require('../model/BreRule'), require('../model/Expressionobject'), require('../model/PageResourceBreRule'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.Rule_Engine_RulesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BooleanResource, root.KnetikCloud.BreRule, root.KnetikCloud.Expressionobject, root.KnetikCloud.PageResourceBreRule, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, BooleanResource, BreRule, Expressionobject, PageResourceBreRule, Result) {
  'use strict';

  /**
   * Rule_Engine_Rules service.
   * @module api/Rule_Engine_RulesApi
   * @version 3.0.9
   */

  /**
   * Constructs a new Rule_Engine_RulesApi. 
   * @alias module:api/Rule_Engine_RulesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a rule
     * Rules define which actions to run when a given event verifies the specified condition. Full list of predicates and other type of expressions can be found at GET /bre/expressions/. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/BreRule} opts.breRule The BRE rule object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BreRule} and HTTP response
     */
    this.createBRERuleWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['breRule'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BreRule;

      return this.apiClient.callApi(
        '/bre/rules', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a rule
     * Rules define which actions to run when a given event verifies the specified condition. Full list of predicates and other type of expressions can be found at GET /bre/expressions/. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/BreRule} opts.breRule The BRE rule object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BreRule}
     */
    this.createBRERule = function(opts) {
      return this.createBRERuleWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a rule
     * May fail if there are existing rules against it. Cannot delete core rules. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {String} id The id of the rule
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteBRERuleWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBRERule");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/bre/rules/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a rule
     * May fail if there are existing rules against it. Cannot delete core rules. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {String} id The id of the rule
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteBRERule = function(id) {
      return this.deleteBRERuleWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a string representation of the provided expression
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/Expressionobject} opts.expression The expression
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getBREExpressionAsStringWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['expression'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/bre/rules/expression-as-string', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a string representation of the provided expression
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/Expressionobject} opts.expression The expression
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getBREExpressionAsString = function(opts) {
      return this.getBREExpressionAsStringWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single rule
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {String} id The id of the rule
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BreRule} and HTTP response
     */
    this.getBRERuleWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBRERule");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BreRule;

      return this.apiClient.callApi(
        '/bre/rules/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single rule
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {String} id The id of the rule
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BreRule}
     */
    this.getBRERule = function(id) {
      return this.getBRERuleWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List rules
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for rules containing the given name
     * @param {Boolean} opts.filterEnabled Filter for rules by active status, null for both (default to null)
     * @param {Boolean} opts.filterSystem Filter for rules that are system rules when true, or not when false. Leave off for both mixed
     * @param {String} opts.filterTrigger Filter for rules that are for the trigger with the given name
     * @param {String} opts.filterAction Filter for rules that use the action with the given name
     * @param {String} opts.filterCondition Filter for rules that have a condition containing the given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceBreRule} and HTTP response
     */
    this.getBRERulesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_name': opts['filterName'],
        'filter_enabled': opts['filterEnabled'],
        'filter_system': opts['filterSystem'],
        'filter_trigger': opts['filterTrigger'],
        'filter_action': opts['filterAction'],
        'filter_condition': opts['filterCondition'],
        'size': opts['size'],
        'page': opts['page'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageResourceBreRule;

      return this.apiClient.callApi(
        '/bre/rules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List rules
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for rules containing the given name
     * @param {Boolean} opts.filterEnabled Filter for rules by active status, null for both (default to null)
     * @param {Boolean} opts.filterSystem Filter for rules that are system rules when true, or not when false. Leave off for both mixed
     * @param {String} opts.filterTrigger Filter for rules that are for the trigger with the given name
     * @param {String} opts.filterAction Filter for rules that use the action with the given name
     * @param {String} opts.filterCondition Filter for rules that have a condition containing the given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceBreRule}
     */
    this.getBRERules = function(opts) {
      return this.getBRERulesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Enable or disable a rule
     * This is helpful for turning off systems rules which cannot be deleted or modified otherwise. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {String} id The id of the rule
     * @param {Object} opts Optional parameters
     * @param {module:model/BooleanResource} opts.enabled The boolean value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setBRERuleWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['enabled'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setBRERule");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/bre/rules/{id}/enabled', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Enable or disable a rule
     * This is helpful for turning off systems rules which cannot be deleted or modified otherwise. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {String} id The id of the rule
     * @param {Object} opts Optional parameters
     * @param {module:model/BooleanResource} opts.enabled The boolean value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setBRERule = function(id, opts) {
      return this.setBRERuleWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a rule
     * Cannot update system rules. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {String} id The id of the rule
     * @param {Object} opts Optional parameters
     * @param {module:model/BreRule} opts.breRule The BRE rule object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BreRule} and HTTP response
     */
    this.updateBRERuleWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['breRule'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBRERule");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BreRule;

      return this.apiClient.callApi(
        '/bre/rules/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a rule
     * Cannot update system rules. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_RULES_ADMIN
     * @param {String} id The id of the rule
     * @param {Object} opts Optional parameters
     * @param {module:model/BreRule} opts.breRule The BRE rule object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BreRule}
     */
    this.updateBRERule = function(id, opts) {
      return this.updateBRERuleWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));