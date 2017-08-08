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
    factory(root.expect, root.KnetikCloud);
  }
}(this, function(expect, KnetikCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikCloud.StoreBundlesApi();
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
    describe('createBundleItem', function() {
      it('should call createBundleItem successfully', function(done) {
        //uncomment below and update the code to test createBundleItem
        //instance.createBundleItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBundleTemplate', function() {
      it('should call createBundleTemplate successfully', function(done) {
        //uncomment below and update the code to test createBundleTemplate
        //instance.createBundleTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBundleItem', function() {
      it('should call deleteBundleItem successfully', function(done) {
        //uncomment below and update the code to test deleteBundleItem
        //instance.deleteBundleItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBundleTemplate', function() {
      it('should call deleteBundleTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteBundleTemplate
        //instance.deleteBundleTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBundleItem', function() {
      it('should call getBundleItem successfully', function(done) {
        //uncomment below and update the code to test getBundleItem
        //instance.getBundleItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBundleTemplate', function() {
      it('should call getBundleTemplate successfully', function(done) {
        //uncomment below and update the code to test getBundleTemplate
        //instance.getBundleTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBundleTemplates', function() {
      it('should call getBundleTemplates successfully', function(done) {
        //uncomment below and update the code to test getBundleTemplates
        //instance.getBundleTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBundleItem', function() {
      it('should call updateBundleItem successfully', function(done) {
        //uncomment below and update the code to test updateBundleItem
        //instance.updateBundleItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBundleTemplate', function() {
      it('should call updateBundleTemplate successfully', function(done) {
        //uncomment below and update the code to test updateBundleTemplate
        //instance.updateBundleTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
