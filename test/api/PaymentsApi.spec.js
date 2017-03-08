/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    instance = new KnetikPlatformApiDocumentationLatest.PaymentsApi();
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

  describe('PaymentsApi', function() {
    describe('createPaymentMethod', function() {
      it('should call createPaymentMethod successfully', function(done) {
        //uncomment below and update the code to test createPaymentMethod
        //instance.createPaymentMethod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePaymentMethod', function() {
      it('should call deletePaymentMethod successfully', function(done) {
        //uncomment below and update the code to test deletePaymentMethod
        //instance.deletePaymentMethod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentMethod', function() {
      it('should call getPaymentMethod successfully', function(done) {
        //uncomment below and update the code to test getPaymentMethod
        //instance.getPaymentMethod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentMethods', function() {
      it('should call getPaymentMethods successfully', function(done) {
        //uncomment below and update the code to test getPaymentMethods
        //instance.getPaymentMethods(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentAuthorization', function() {
      it('should call paymentAuthorization successfully', function(done) {
        //uncomment below and update the code to test paymentAuthorization
        //instance.paymentAuthorization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentCapture', function() {
      it('should call paymentCapture successfully', function(done) {
        //uncomment below and update the code to test paymentCapture
        //instance.paymentCapture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePaymentMethod', function() {
      it('should call updatePaymentMethod successfully', function(done) {
        //uncomment below and update the code to test updatePaymentMethod
        //instance.updatePaymentMethod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));