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
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    factory(root.expect, root.KnetikCloud);
  }
}(this, function(expect, KnetikCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikCloud.ObjectsApi();
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

  describe('ObjectsApi', function() {
    describe('createObjectItem', function() {
      it('should call createObjectItem successfully', function(done) {
        //uncomment below and update the code to test createObjectItem
        //instance.createObjectItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createObjectTemplate', function() {
      it('should call createObjectTemplate successfully', function(done) {
        //uncomment below and update the code to test createObjectTemplate
        //instance.createObjectTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteObjectItem', function() {
      it('should call deleteObjectItem successfully', function(done) {
        //uncomment below and update the code to test deleteObjectItem
        //instance.deleteObjectItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteObjectTemplate', function() {
      it('should call deleteObjectTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteObjectTemplate
        //instance.deleteObjectTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObjectItem', function() {
      it('should call getObjectItem successfully', function(done) {
        //uncomment below and update the code to test getObjectItem
        //instance.getObjectItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObjectItems', function() {
      it('should call getObjectItems successfully', function(done) {
        //uncomment below and update the code to test getObjectItems
        //instance.getObjectItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObjectTemplate', function() {
      it('should call getObjectTemplate successfully', function(done) {
        //uncomment below and update the code to test getObjectTemplate
        //instance.getObjectTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObjectTemplates', function() {
      it('should call getObjectTemplates successfully', function(done) {
        //uncomment below and update the code to test getObjectTemplates
        //instance.getObjectTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateObjectItem', function() {
      it('should call updateObjectItem successfully', function(done) {
        //uncomment below and update the code to test updateObjectItem
        //instance.updateObjectItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateObjectTemplate', function() {
      it('should call updateObjectTemplate successfully', function(done) {
        //uncomment below and update the code to test updateObjectTemplate
        //instance.updateObjectTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
