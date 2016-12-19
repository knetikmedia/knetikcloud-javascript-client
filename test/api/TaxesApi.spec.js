/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: Latest
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
    instance = new KnetikPlatformApiDocumentationLatest.TaxesApi();
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

  describe('TaxesApi', function() {
    describe('createTaxUsingPOST', function() {
      it('should call createTaxUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createTaxUsingPOST
        //instance.createTaxUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTaxUsingDELETE', function() {
      it('should call deleteTaxUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteTaxUsingDELETE
        //instance.deleteTaxUsingDELETE(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTaxUsingDELETE1', function() {
      it('should call deleteTaxUsingDELETE1 successfully', function(done) {
        //uncomment below and update the code to test deleteTaxUsingDELETE1
        //instance.deleteTaxUsingDELETE1(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllTaxesUsingGET', function() {
      it('should call getAllTaxesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAllTaxesUsingGET
        //instance.getAllTaxesUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTaxUsingGET', function() {
      it('should call getTaxUsingGET successfully', function(done) {
        //uncomment below and update the code to test getTaxUsingGET
        //instance.getTaxUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTaxUsingGET1', function() {
      it('should call getTaxUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getTaxUsingGET1
        //instance.getTaxUsingGET1(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTaxesUsingGET', function() {
      it('should call getTaxesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getTaxesUsingGET
        //instance.getTaxesUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTaxesUsingGET1', function() {
      it('should call getTaxesUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getTaxesUsingGET1
        //instance.getTaxesUsingGET1(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTaxUsingPOST', function() {
      it('should call updateTaxUsingPOST successfully', function(done) {
        //uncomment below and update the code to test updateTaxUsingPOST
        //instance.updateTaxUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTaxUsingPUT', function() {
      it('should call updateTaxUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateTaxUsingPUT
        //instance.updateTaxUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTaxUsingPUT1', function() {
      it('should call updateTaxUsingPUT1 successfully', function(done) {
        //uncomment below and update the code to test updateTaxUsingPUT1
        //instance.updateTaxUsingPUT1(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
