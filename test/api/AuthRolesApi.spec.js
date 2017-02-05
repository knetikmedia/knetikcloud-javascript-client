/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    instance = new KnetikPlatformApiDocumentationLatest.AuthRolesApi();
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

  describe('AuthRolesApi', function() {
    describe('assignClientRolesUsingPUT', function() {
      it('should call assignClientRolesUsingPUT successfully', function(done) {
        //uncomment below and update the code to test assignClientRolesUsingPUT
        //instance.assignClientRolesUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assignPermissionsUsingPUT', function() {
      it('should call assignPermissionsUsingPUT successfully', function(done) {
        //uncomment below and update the code to test assignPermissionsUsingPUT
        //instance.assignPermissionsUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assignUserRolesExternalUsingPUT', function() {
      it('should call assignUserRolesExternalUsingPUT successfully', function(done) {
        //uncomment below and update the code to test assignUserRolesExternalUsingPUT
        //instance.assignUserRolesExternalUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRoleUsingPOST', function() {
      it('should call createRoleUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createRoleUsingPOST
        //instance.createRoleUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRoleUsingDELETE', function() {
      it('should call deleteRoleUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteRoleUsingDELETE
        //instance.deleteRoleUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientRolesUsingGET', function() {
      it('should call getClientRolesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getClientRolesUsingGET
        //instance.getClientRolesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoleUsingGET', function() {
      it('should call getRoleUsingGET successfully', function(done) {
        //uncomment below and update the code to test getRoleUsingGET
        //instance.getRoleUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRolesUsingGET', function() {
      it('should call getRolesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getRolesUsingGET
        //instance.getRolesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserRolesUsingGET', function() {
      it('should call getUserRolesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getUserRolesUsingGET
        //instance.getUserRolesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRoleUsingPUT', function() {
      it('should call updateRoleUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateRoleUsingPUT
        //instance.updateRoleUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
