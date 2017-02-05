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
    instance = new KnetikPlatformApiDocumentationLatest.DevicesApi();
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

  describe('DevicesApi', function() {
    describe('createDeviceUsingPOST', function() {
      it('should call createDeviceUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createDeviceUsingPOST
        //instance.createDeviceUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDeviceUsingDELETE', function() {
      it('should call deleteDeviceUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteDeviceUsingDELETE
        //instance.deleteDeviceUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceUsingGET', function() {
      it('should call getDeviceUsingGET successfully', function(done) {
        //uncomment below and update the code to test getDeviceUsingGET
        //instance.getDeviceUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDevicesUsingGET', function() {
      it('should call getDevicesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getDevicesUsingGET
        //instance.getDevicesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDeviceUsingPUT', function() {
      it('should call updateDeviceUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateDeviceUsingPUT
        //instance.updateDeviceUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
