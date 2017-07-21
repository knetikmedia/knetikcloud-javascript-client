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
    instance = new KnetikPlatformApiDocumentationLatest.StoreVendorsApi();
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

  describe('StoreVendorsApi', function() {
    describe('createVendor', function() {
      it('should call createVendor successfully', function(done) {
        //uncomment below and update the code to test createVendor
        //instance.createVendor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createVendorTemplate', function() {
      it('should call createVendorTemplate successfully', function(done) {
        //uncomment below and update the code to test createVendorTemplate
        //instance.createVendorTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVendor', function() {
      it('should call deleteVendor successfully', function(done) {
        //uncomment below and update the code to test deleteVendor
        //instance.deleteVendor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVendorTemplate', function() {
      it('should call deleteVendorTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteVendorTemplate
        //instance.deleteVendorTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVendor', function() {
      it('should call getVendor successfully', function(done) {
        //uncomment below and update the code to test getVendor
        //instance.getVendor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVendorTemplate', function() {
      it('should call getVendorTemplate successfully', function(done) {
        //uncomment below and update the code to test getVendorTemplate
        //instance.getVendorTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVendorTemplates', function() {
      it('should call getVendorTemplates successfully', function(done) {
        //uncomment below and update the code to test getVendorTemplates
        //instance.getVendorTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVendors', function() {
      it('should call getVendors successfully', function(done) {
        //uncomment below and update the code to test getVendors
        //instance.getVendors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVendor', function() {
      it('should call updateVendor successfully', function(done) {
        //uncomment below and update the code to test updateVendor
        //instance.updateVendor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVendorTemplate', function() {
      it('should call updateVendorTemplate successfully', function(done) {
        //uncomment below and update the code to test updateVendorTemplate
        //instance.updateVendorTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
