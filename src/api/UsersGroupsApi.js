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
import GroupMemberResource from '../model/GroupMemberResource';
import GroupResource from '../model/GroupResource';
import PageResourceGroupMemberResource from '../model/PageResourceGroupMemberResource';
import PageResourceGroupResource from '../model/PageResourceGroupResource';
import PageResourceTemplateResource from '../model/PageResourceTemplateResource';
import Result from '../model/Result';
import TemplateResource from '../model/TemplateResource';

/**
* UsersGroups service.
* @module api/UsersGroupsApi
* @version 3.0.7
*/
export default class UsersGroupsApi {

    /**
    * Constructs a new UsersGroupsApi. 
    * @alias module:api/UsersGroupsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Adds a new member to the group
     * @param {String} uniqueName The group unique name
     * @param {module:model/GroupMemberResource} user The id and status for a user to add to the group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupMemberResource} and HTTP response
     */
    addMemberToGroupWithHttpInfo(uniqueName, user) {
      let postBody = user;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling addMemberToGroup");
      }

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling addMemberToGroup");
      }


      let pathParams = {
        'unique_name': uniqueName
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
      let returnType = GroupMemberResource;

      return this.apiClient.callApi(
        '/users/groups/{unique_name}/members', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Adds a new member to the group
     * @param {String} uniqueName The group unique name
     * @param {module:model/GroupMemberResource} user The id and status for a user to add to the group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupMemberResource}
     */
    addMemberToGroup(uniqueName, user) {
      return this.addMemberToGroupWithHttpInfo(uniqueName, user)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Adds multiple members to the group
     * @param {String} uniqueName The group unique name
     * @param {Array.<module:model/GroupMemberResource>} users The id and status for a list of users to add to the group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GroupMemberResource>} and HTTP response
     */
    addMembersToGroupWithHttpInfo(uniqueName, users) {
      let postBody = users;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling addMembersToGroup");
      }

      // verify the required parameter 'users' is set
      if (users === undefined || users === null) {
        throw new Error("Missing the required parameter 'users' when calling addMembersToGroup");
      }


      let pathParams = {
        'unique_name': uniqueName
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
      let returnType = [GroupMemberResource];

      return this.apiClient.callApi(
        '/users/groups/{unique_name}/members/batch-add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Adds multiple members to the group
     * @param {String} uniqueName The group unique name
     * @param {Array.<module:model/GroupMemberResource>} users The id and status for a list of users to add to the group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GroupMemberResource>}
     */
    addMembersToGroup(uniqueName, users) {
      return this.addMembersToGroupWithHttpInfo(uniqueName, users)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a group
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupResource} opts.groupResource The new group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupResource} and HTTP response
     */
    createGroupWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['groupResource'];


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
      let returnType = GroupResource;

      return this.apiClient.callApi(
        '/users/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a group
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupResource} opts.groupResource The new group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupResource}
     */
    createGroup(opts) {
      return this.createGroupWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a group template
     * Group Templates define a type of group and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.groupTemplateResource The group template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    createGroupTemplateWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['groupTemplateResource'];


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
        '/users/groups/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a group template
     * Group Templates define a type of group and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.groupTemplateResource The group template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    createGroupTemplate(opts) {
      return this.createGroupTemplateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Removes a group from the system IF no resources are attached to it
     * @param {String} uniqueName The group unique name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteGroupWithHttpInfo(uniqueName) {
      let postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling deleteGroup");
      }


      let pathParams = {
        'unique_name': uniqueName
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
        '/users/groups/{unique_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Removes a group from the system IF no resources are attached to it
     * @param {String} uniqueName The group unique name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteGroup(uniqueName) {
      return this.deleteGroupWithHttpInfo(uniqueName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a group template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteGroupTemplateWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteGroupTemplate");
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
        '/users/groups/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a group template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteGroupTemplate(id, opts) {
      return this.deleteGroupTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Loads a specific group&#39;s details
     * @param {String} uniqueName The group unique name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupResource} and HTTP response
     */
    getGroupWithHttpInfo(uniqueName) {
      let postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling getGroup");
      }


      let pathParams = {
        'unique_name': uniqueName
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
      let returnType = GroupResource;

      return this.apiClient.callApi(
        '/users/groups/{unique_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Loads a specific group&#39;s details
     * @param {String} uniqueName The group unique name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupResource}
     */
    getGroup(uniqueName) {
      return this.getGroupWithHttpInfo(uniqueName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a user from a group
     * @param {String} uniqueName The group unique name
     * @param {Number} userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupMemberResource} and HTTP response
     */
    getGroupMemberWithHttpInfo(uniqueName, userId) {
      let postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling getGroupMember");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getGroupMember");
      }


      let pathParams = {
        'unique_name': uniqueName,
        'user_id': userId
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
      let returnType = GroupMemberResource;

      return this.apiClient.callApi(
        '/users/groups/{unique_name}/members/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a user from a group
     * @param {String} uniqueName The group unique name
     * @param {Number} userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupMemberResource}
     */
    getGroupMember(uniqueName, userId) {
      return this.getGroupMemberWithHttpInfo(uniqueName, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists members of the group
     * @param {String} uniqueName The group unique name
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceGroupMemberResource} and HTTP response
     */
    getGroupMembersWithHttpInfo(uniqueName, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling getGroupMembers");
      }


      let pathParams = {
        'unique_name': uniqueName
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

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourceGroupMemberResource;

      return this.apiClient.callApi(
        '/users/groups/{unique_name}/members', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lists members of the group
     * @param {String} uniqueName The group unique name
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceGroupMemberResource}
     */
    getGroupMembers(uniqueName, opts) {
      return this.getGroupMembersWithHttpInfo(uniqueName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single group template
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    getGroupTemplateWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getGroupTemplate");
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
        '/users/groups/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single group template
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    getGroupTemplate(id) {
      return this.getGroupTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search group templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceTemplateResource} and HTTP response
     */
    getGroupTemplatesWithHttpInfo(opts) {
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
        '/users/groups/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search group templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceTemplateResource}
     */
    getGroupTemplates(opts) {
      return this.getGroupTemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List groups a user is in
     * @param {Number} userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<'String'>} and HTTP response
     */
    getGroupsForUserWithHttpInfo(userId) {
      let postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getGroupsForUser");
      }


      let pathParams = {
        'user_id': userId
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
      let returnType = ['String'];

      return this.apiClient.callApi(
        '/users/{user_id}/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List groups a user is in
     * @param {Number} userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<'String'>}
     */
    getGroupsForUser(userId) {
      return this.getGroupsForUserWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Removes a user from a group
     * @param {String} uniqueName The group unique name
     * @param {Number} userId The id of the user to remove
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeGroupMemberWithHttpInfo(uniqueName, userId) {
      let postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling removeGroupMember");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeGroupMember");
      }


      let pathParams = {
        'unique_name': uniqueName,
        'user_id': userId
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
        '/users/groups/{unique_name}/members/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Removes a user from a group
     * @param {String} uniqueName The group unique name
     * @param {Number} userId The id of the user to remove
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeGroupMember(uniqueName, userId) {
      return this.removeGroupMemberWithHttpInfo(uniqueName, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a group
     * @param {String} uniqueName The group unique name
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupResource} opts.groupResource The updated group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateGroupWithHttpInfo(uniqueName, opts) {
      opts = opts || {};
      let postBody = opts['groupResource'];

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling updateGroup");
      }


      let pathParams = {
        'unique_name': uniqueName
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
        '/users/groups/{unique_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a group
     * @param {String} uniqueName The group unique name
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupResource} opts.groupResource The updated group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateGroup(uniqueName, opts) {
      return this.updateGroupWithHttpInfo(uniqueName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Change a user&#39;s status
     * @param {String} uniqueName The group unique name
     * @param {Number} userId The user id of the member to modify
     * @param {String} status The new status for the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateGroupMemberStatusWithHttpInfo(uniqueName, userId, status) {
      let postBody = status;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling updateGroupMemberStatus");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateGroupMemberStatus");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling updateGroupMemberStatus");
      }


      let pathParams = {
        'unique_name': uniqueName,
        'user_id': userId
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
        '/users/groups/{unique_name}/members/{user_id}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Change a user&#39;s status
     * @param {String} uniqueName The group unique name
     * @param {Number} userId The user id of the member to modify
     * @param {String} status The new status for the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateGroupMemberStatus(uniqueName, userId, status) {
      return this.updateGroupMemberStatusWithHttpInfo(uniqueName, userId, status)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a group template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.groupTemplateResource The group template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    updateGroupTemplateWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['groupTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateGroupTemplate");
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
        '/users/groups/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a group template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.groupTemplateResource The group template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    updateGroupTemplate(id, opts) {
      return this.updateGroupTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search groups
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterTemplate Filter for groups using a specific template, by id
     * @param {String} opts.filterMemberCount Filters groups by member count. Multiple values possible for range search. Format: filter_member_count&#x3D;OP,ts&amp;... where OP in (GT, LT, GOE, LOE, EQ). Ex: filter_member_count&#x3D;GT,14,LT,17
     * @param {String} opts.filterName Filter for groups with names starting with the given string
     * @param {String} opts.filterUniqueName Filter for groups whose unique_name starts with provided string
     * @param {String} opts.filterParent Filter for groups with a specific parent, by unique name
     * @param {module:model/String} opts.filterStatus Filter for groups with a certain status
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceGroupResource} and HTTP response
     */
    updateGroupsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'filter_template': opts['filterTemplate'],
        'filter_member_count': opts['filterMemberCount'],
        'filter_name': opts['filterName'],
        'filter_unique_name': opts['filterUniqueName'],
        'filter_parent': opts['filterParent'],
        'filter_status': opts['filterStatus'],
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
      let returnType = PageResourceGroupResource;

      return this.apiClient.callApi(
        '/users/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search groups
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterTemplate Filter for groups using a specific template, by id
     * @param {String} opts.filterMemberCount Filters groups by member count. Multiple values possible for range search. Format: filter_member_count&#x3D;OP,ts&amp;... where OP in (GT, LT, GOE, LOE, EQ). Ex: filter_member_count&#x3D;GT,14,LT,17
     * @param {String} opts.filterName Filter for groups with names starting with the given string
     * @param {String} opts.filterUniqueName Filter for groups whose unique_name starts with provided string
     * @param {String} opts.filterParent Filter for groups with a specific parent, by unique name
     * @param {module:model/String} opts.filterStatus Filter for groups with a certain status
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceGroupResource}
     */
    updateGroups(opts) {
      return this.updateGroupsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
