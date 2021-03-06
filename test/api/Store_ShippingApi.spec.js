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
    instance = new KnetikCloud.Store_ShippingApi();
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

  describe('Store_ShippingApi', function() {
    describe('createShippingItem', function() {
      it('should call createShippingItem successfully', function(done) {
        //uncomment below and update the code to test createShippingItem
        //instance.createShippingItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createShippingTemplate', function() {
      it('should call createShippingTemplate successfully', function(done) {
        //uncomment below and update the code to test createShippingTemplate
        //instance.createShippingTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteShippingItem', function() {
      it('should call deleteShippingItem successfully', function(done) {
        //uncomment below and update the code to test deleteShippingItem
        //instance.deleteShippingItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteShippingTemplate', function() {
      it('should call deleteShippingTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteShippingTemplate
        //instance.deleteShippingTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShippingItem', function() {
      it('should call getShippingItem successfully', function(done) {
        //uncomment below and update the code to test getShippingItem
        //instance.getShippingItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShippingTemplate', function() {
      it('should call getShippingTemplate successfully', function(done) {
        //uncomment below and update the code to test getShippingTemplate
        //instance.getShippingTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShippingTemplates', function() {
      it('should call getShippingTemplates successfully', function(done) {
        //uncomment below and update the code to test getShippingTemplates
        //instance.getShippingTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateShippingItem', function() {
      it('should call updateShippingItem successfully', function(done) {
        //uncomment below and update the code to test updateShippingItem
        //instance.updateShippingItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateShippingTemplate', function() {
      it('should call updateShippingTemplate successfully', function(done) {
        //uncomment below and update the code to test updateShippingTemplate
        //instance.updateShippingTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
