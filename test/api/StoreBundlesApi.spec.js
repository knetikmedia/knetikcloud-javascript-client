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
    instance = new KnetikPlatformApiDocumentationLatest.StoreBundlesApi();
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

  describe('StoreBundlesApi', function() {
    describe('createBundleItemUsingPOST', function() {
      it('should call createBundleItemUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createBundleItemUsingPOST
        //instance.createBundleItemUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBundleTemplateUsingPOST', function() {
      it('should call createBundleTemplateUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createBundleTemplateUsingPOST
        //instance.createBundleTemplateUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBundleTemplateUsingDELETE', function() {
      it('should call deleteBundleTemplateUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteBundleTemplateUsingDELETE
        //instance.deleteBundleTemplateUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteStoreItemUsingDELETE', function() {
      it('should call deleteStoreItemUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteStoreItemUsingDELETE
        //instance.deleteStoreItemUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBundleTemplateUsingGET', function() {
      it('should call getBundleTemplateUsingGET successfully', function(done) {
        //uncomment below and update the code to test getBundleTemplateUsingGET
        //instance.getBundleTemplateUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBundleTemplatesUsingGET', function() {
      it('should call getBundleTemplatesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getBundleTemplatesUsingGET
        //instance.getBundleTemplatesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreItemUsingGET', function() {
      it('should call getStoreItemUsingGET successfully', function(done) {
        //uncomment below and update the code to test getStoreItemUsingGET
        //instance.getStoreItemUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBundleItemUsingPUT', function() {
      it('should call updateBundleItemUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateBundleItemUsingPUT
        //instance.updateBundleItemUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBundleTemplateUsingPUT', function() {
      it('should call updateBundleTemplateUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateBundleTemplateUsingPUT
        //instance.updateBundleTemplateUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
