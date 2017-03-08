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
    instance = new KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest();
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

  describe('OptimalPaymentRequest', function() {
    it('should create an instance of OptimalPaymentRequest', function() {
      // uncomment below and update the code to test OptimalPaymentRequest
      //var instane = new KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property invoiceId (base name: "invoice_id")', function() {
      // uncomment below and update the code to test the property invoiceId
      //var instane = new KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property onDecline (base name: "on_decline")', function() {
      // uncomment below and update the code to test the property onDecline
      //var instane = new KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property onError (base name: "on_error")', function() {
      // uncomment below and update the code to test the property onError
      //var instane = new KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property onSuccess (base name: "on_success")', function() {
      // uncomment below and update the code to test the property onSuccess
      //var instane = new KnetikPlatformApiDocumentationLatest.OptimalPaymentRequest();
      //expect(instance).to.be();
    });

  });

}));