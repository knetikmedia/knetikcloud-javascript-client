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
    instance = new KnetikCloud.BRERuleEngineCategoriesApi();
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

  describe('BRERuleEngineCategoriesApi', function() {
    describe('createBRECategoryTemplate', function() {
      it('should call createBRECategoryTemplate successfully', function(done) {
        //uncomment below and update the code to test createBRECategoryTemplate
        //instance.createBRECategoryTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBRECategoryTemplate', function() {
      it('should call deleteBRECategoryTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteBRECategoryTemplate
        //instance.deleteBRECategoryTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBRECategories', function() {
      it('should call getBRECategories successfully', function(done) {
        //uncomment below and update the code to test getBRECategories
        //instance.getBRECategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBRECategory', function() {
      it('should call getBRECategory successfully', function(done) {
        //uncomment below and update the code to test getBRECategory
        //instance.getBRECategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBRECategoryTemplate', function() {
      it('should call getBRECategoryTemplate successfully', function(done) {
        //uncomment below and update the code to test getBRECategoryTemplate
        //instance.getBRECategoryTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBRECategoryTemplates', function() {
      it('should call getBRECategoryTemplates successfully', function(done) {
        //uncomment below and update the code to test getBRECategoryTemplates
        //instance.getBRECategoryTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBRECategory', function() {
      it('should call updateBRECategory successfully', function(done) {
        //uncomment below and update the code to test updateBRECategory
        //instance.updateBRECategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBRECategoryTemplate', function() {
      it('should call updateBRECategoryTemplate successfully', function(done) {
        //uncomment below and update the code to test updateBRECategoryTemplate
        //instance.updateBRECategoryTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
