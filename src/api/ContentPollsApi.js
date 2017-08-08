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
import PageResourcePollResource from '../model/PageResourcePollResource';
import PageResourceTemplateResource from '../model/PageResourceTemplateResource';
import PollResource from '../model/PollResource';
import PollResponseResource from '../model/PollResponseResource';
import Result from '../model/Result';
import StringWrapper from '../model/StringWrapper';
import TemplateResource from '../model/TemplateResource';

/**
* ContentPolls service.
* @module api/ContentPollsApi
* @version 3.0.7
*/
export default class ContentPollsApi {

    /**
    * Constructs a new ContentPollsApi. 
    * @alias module:api/ContentPollsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add your vote to a poll
     * @param {String} id The poll id
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.answerKey The answer key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PollResponseResource} and HTTP response
     */
    answerPollWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['answerKey'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling answerPoll");
      }


      let pathParams = {
        'id': id
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
      let returnType = PollResponseResource;

      return this.apiClient.callApi(
        '/media/polls/{id}/response', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    answerPoll(id, opts) {
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
    createPollWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['pollResource'];


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
      let returnType = PollResource;

      return this.apiClient.callApi(
        '/media/polls', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    createPoll(opts) {
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
    createPollTemplateWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['pollTemplateResource'];


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
      let returnType = TemplateResource;

      return this.apiClient.callApi(
        '/media/polls/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    createPollTemplate(opts) {
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
    deletePollWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePoll");
      }


      let pathParams = {
        'id': id
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
      let returnType = null;

      return this.apiClient.callApi(
        '/media/polls/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing poll
     * @param {String} id The poll id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePoll(id) {
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
    deletePollTemplateWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePollTemplate");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'cascade': opts['cascade']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/media/polls/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    deletePollTemplate(id, opts) {
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
    getPollWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPoll");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PollResource;

      return this.apiClient.callApi(
        '/media/polls/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single poll
     * @param {String} id The poll id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PollResource}
     */
    getPoll(id) {
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
    getPollAnswerWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPollAnswer");
      }


      let pathParams = {
        'id': id
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
      let returnType = PollResponseResource;

      return this.apiClient.callApi(
        '/media/polls/{id}/response', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get poll answer
     * @param {String} id The poll id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PollResponseResource}
     */
    getPollAnswer(id) {
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
    getPollTemplateWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPollTemplate");
      }


      let pathParams = {
        'id': id
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
      let returnType = TemplateResource;

      return this.apiClient.callApi(
        '/media/polls/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single poll template
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    getPollTemplate(id) {
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
    getPollTemplatesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourceTemplateResource;

      return this.apiClient.callApi(
        '/media/polls/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getPollTemplates(opts) {
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
    getPollsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'filter_category': opts['filterCategory'],
        'filter_tagset': opts['filterTagset'],
        'filter_text': opts['filterText'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourcePollResource;

      return this.apiClient.callApi(
        '/media/polls', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getPolls(opts) {
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
    updatePollWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['pollResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePoll");
      }


      let pathParams = {
        'id': id
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
      let returnType = PollResource;

      return this.apiClient.callApi(
        '/media/polls/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    updatePoll(id, opts) {
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
    updatePollTemplateWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['pollTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePollTemplate");
      }


      let pathParams = {
        'id': id
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
      let returnType = TemplateResource;

      return this.apiClient.callApi(
        '/media/polls/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    updatePollTemplate(id, opts) {
      return this.updatePollTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
