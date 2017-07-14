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
    describe('addDeviceUsers', function() {
      it('should call addDeviceUsers successfully', function(done) {
        //uncomment below and update the code to test addDeviceUsers
        //instance.addDeviceUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDevice', function() {
      it('should call createDevice successfully', function(done) {
        //uncomment below and update the code to test createDevice
        //instance.createDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDevice', function() {
      it('should call deleteDevice successfully', function(done) {
        //uncomment below and update the code to test deleteDevice
        //instance.deleteDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDeviceUser', function() {
      it('should call deleteDeviceUser successfully', function(done) {
        //uncomment below and update the code to test deleteDeviceUser
        //instance.deleteDeviceUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDeviceUsers', function() {
      it('should call deleteDeviceUsers successfully', function(done) {
        //uncomment below and update the code to test deleteDeviceUsers
        //instance.deleteDeviceUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDevice', function() {
      it('should call getDevice successfully', function(done) {
        //uncomment below and update the code to test getDevice
        //instance.getDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDevices', function() {
      it('should call getDevices successfully', function(done) {
        //uncomment below and update the code to test getDevices
        //instance.getDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDevice', function() {
      it('should call updateDevice successfully', function(done) {
        //uncomment below and update the code to test updateDevice
        //instance.updateDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
