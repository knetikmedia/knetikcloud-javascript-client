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
    define(['ApiClient', 'model/PageResourcePollResource', 'model/PageResourceTemplateResource', 'model/PollResource', 'model/PollResponseResource', 'model/Result', 'model/StringWrapper', 'model/TemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourcePollResource'), require('../model/PageResourceTemplateResource'), require('../model/PollResource'), require('../model/PollResponseResource'), require('../model/Result'), require('../model/StringWrapper'), require('../model/TemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ContentPollsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourcePollResource, root.KnetikCloud.PageResourceTemplateResource, root.KnetikCloud.PollResource, root.KnetikCloud.PollResponseResource, root.KnetikCloud.Result, root.KnetikCloud.StringWrapper, root.KnetikCloud.TemplateResource);
  }
}(this, function(ApiClient, PageResourcePollResource, PageResourceTemplateResource, PollResource, PollResponseResource, Result, StringWrapper, TemplateResource) {
  'use strict';

  /**
   * ContentPolls service.
   * @module api/ContentPollsApi
   * @version 3.0.9
   */

  /**
   * Constructs a new ContentPollsApi. 
   * @alias module:api/ContentPollsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add your vote to a poll
     * @param {String} id The poll id
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.answerKey The answer key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PollResponseResource} and HTTP response
     */
    this.answerPollWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['answerKey'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling answerPoll");
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
      var returnType = PollResponseResource;

      return this.apiClient.callApi(
        '/media/polls/{id}/response', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add your vote to a poll
     * @param {String} id The poll id
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.answerKey The answer key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PollResponseResource}
     */
    this.answerPoll = function(id, opts) {
      return this.answerPollWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new poll
     * Polls are blobs of text with titles, a category and assets. Formatting and display of the text is in the hands of the front end.
     * @param {Object} opts Optional parameters
     * @param {module:model/PollResource} opts.pollResource The poll object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PollResource} and HTTP response
     */
    this.createPollWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['pollResource'];


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
      var returnType = PollResource;

      return this.apiClient.callApi(
        '/media/polls', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new poll
     * Polls are blobs of text with titles, a category and assets. Formatting and display of the text is in the hands of the front end.
     * @param {Object} opts Optional parameters
     * @param {module:model/PollResource} opts.pollResource The poll object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PollResource}
     */
    this.createPoll = function(opts) {
      return this.createPollWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a poll template
     * Poll templates define a type of poll and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.pollTemplateResource The poll template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    this.createPollTemplateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['pollTemplateResource'];


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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/media/polls/templates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a poll template
     * Poll templates define a type of poll and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.pollTemplateResource The poll template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    this.createPollTemplate = function(opts) {
      return this.createPollTemplateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing poll
     * @param {String} id The poll id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deletePollWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePoll");
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
        '/media/polls/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing poll
     * @param {String} id The poll id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deletePoll = function(id) {
      return this.deletePollWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a poll template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deletePollTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePollTemplate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade'],
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
        '/media/polls/templates/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a poll template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deletePollTemplate = function(id, opts) {
      return this.deletePollTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single poll
     * @param {String} id The poll id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PollResource} and HTTP response
     */
    this.getPollWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPoll");
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
      var returnType = PollResource;

      return this.apiClient.callApi(
        '/media/polls/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single poll
     * @param {String} id The poll id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PollResource}
     */
    this.getPoll = function(id) {
      return this.getPollWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get poll answer
     * @param {String} id The poll id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PollResponseResource} and HTTP response
     */
    this.getPollAnswerWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPollAnswer");
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
      var returnType = PollResponseResource;

      return this.apiClient.callApi(
        '/media/polls/{id}/response', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get poll answer
     * @param {String} id The poll id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PollResponseResource}
     */
    this.getPollAnswer = function(id) {
      return this.getPollAnswerWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single poll template
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    this.getPollTemplateWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPollTemplate");
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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/media/polls/templates/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single poll template
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    this.getPollTemplate = function(id) {
      return this.getPollTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search poll templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceTemplateResource} and HTTP response
     */
    this.getPollTemplatesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order'],
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
      var returnType = PageResourceTemplateResource;

      return this.apiClient.callApi(
        '/media/polls/templates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search poll templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceTemplateResource}
     */
    this.getPollTemplates = function(opts) {
      return this.getPollTemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search polls
     * Get a list of polls with optional filtering. Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterCategory Filter for polls from a specific category by id
     * @param {String} opts.filterTagset Filter for polls with specified tags (separated by comma)
     * @param {String} opts.filterText Filter for polls whose text contains a string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourcePollResource} and HTTP response
     */
    this.getPollsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_category': opts['filterCategory'],
        'filter_tagset': opts['filterTagset'],
        'filter_text': opts['filterText'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order'],
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
      var returnType = PageResourcePollResource;

      return this.apiClient.callApi(
        '/media/polls', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search polls
     * Get a list of polls with optional filtering. Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterCategory Filter for polls from a specific category by id
     * @param {String} opts.filterTagset Filter for polls with specified tags (separated by comma)
     * @param {String} opts.filterText Filter for polls whose text contains a string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourcePollResource}
     */
    this.getPolls = function(opts) {
      return this.getPollsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an existing poll
     * @param {String} id The poll id
     * @param {Object} opts Optional parameters
     * @param {module:model/PollResource} opts.pollResource The poll object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PollResource} and HTTP response
     */
    this.updatePollWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['pollResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePoll");
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
      var returnType = PollResource;

      return this.apiClient.callApi(
        '/media/polls/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an existing poll
     * @param {String} id The poll id
     * @param {Object} opts Optional parameters
     * @param {module:model/PollResource} opts.pollResource The poll object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PollResource}
     */
    this.updatePoll = function(id, opts) {
      return this.updatePollWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a poll template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.pollTemplateResource The poll template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    this.updatePollTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['pollTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePollTemplate");
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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/media/polls/templates/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a poll template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.pollTemplateResource The poll template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    this.updatePollTemplate = function(id, opts) {
      return this.updatePollTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
