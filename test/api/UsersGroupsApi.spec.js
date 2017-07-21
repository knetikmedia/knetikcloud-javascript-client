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
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KnetikPlatformApiDocumentationLatest);
  }
}(this, function(expect, KnetikPlatformApiDocumentationLatest) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikPlatformApiDocumentationLatest.UsersGroupsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsersGroupsApi', function() {
    describe('addMemberToGroup', function() {
      it('should call addMemberToGroup successfully', function(done) {
        //uncomment below and update the code to test addMemberToGroup
        //instance.addMemberToGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addMembersToGroup', function() {
      it('should call addMembersToGroup successfully', function(done) {
        //uncomment below and update the code to test addMembersToGroup
        //instance.addMembersToGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createGroup', function() {
      it('should call createGroup successfully', function(done) {
        //uncomment below and update the code to test createGroup
        //instance.createGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createGroupTemplate', function() {
      it('should call createGroupTemplate successfully', function(done) {
        //uncomment below and update the code to test createGroupTemplate
        //instance.createGroupTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGroup', function() {
      it('should call deleteGroup successfully', function(done) {
        //uncomment below and update the code to test deleteGroup
        //instance.deleteGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGroupTemplate', function() {
      it('should call deleteGroupTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteGroupTemplate
        //instance.deleteGroupTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroup', function() {
      it('should call getGroup successfully', function(done) {
        //uncomment below and update the code to test getGroup
        //instance.getGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroupMember', function() {
      it('should call getGroupMember successfully', function(done) {
        //uncomment below and update the code to test getGroupMember
        //instance.getGroupMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroupMembers', function() {
      it('should call getGroupMembers successfully', function(done) {
        //uncomment below and update the code to test getGroupMembers
        //instance.getGroupMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroupTemplate', function() {
      it('should call getGroupTemplate successfully', function(done) {
        //uncomment below and update the code to test getGroupTemplate
        //instance.getGroupTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroupTemplates', function() {
      it('should call getGroupTemplates successfully', function(done) {
        //uncomment below and update the code to test getGroupTemplates
        //instance.getGroupTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroupsForUser', function() {
      it('should call getGroupsForUser successfully', function(done) {
        //uncomment below and update the code to test getGroupsForUser
        //instance.getGroupsForUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeGroupMember', function() {
      it('should call removeGroupMember successfully', function(done) {
        //uncomment below and update the code to test removeGroupMember
        //instance.removeGroupMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGroup', function() {
      it('should call updateGroup successfully', function(done) {
        //uncomment below and update the code to test updateGroup
        //instance.updateGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGroupMemberStatus', function() {
      it('should call updateGroupMemberStatus successfully', function(done) {
        //uncomment below and update the code to test updateGroupMemberStatus
        //instance.updateGroupMemberStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGroupTemplate', function() {
      it('should call updateGroupTemplate successfully', function(done) {
        //uncomment below and update the code to test updateGroupTemplate
        //instance.updateGroupTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGroups', function() {
      it('should call updateGroups successfully', function(done) {
        //uncomment below and update the code to test updateGroups
        //instance.updateGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
