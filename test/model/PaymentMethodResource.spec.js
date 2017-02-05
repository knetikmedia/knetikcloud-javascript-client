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
    instance = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
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

  describe('PaymentMethodResource', function() {
    it('should create an instance of PaymentMethodResource', function() {
      // uncomment below and update the code to test PaymentMethodResource
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.PaymentMethodResource);
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function() {
      // uncomment below and update the code to test the property disabled
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "expiration_date")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property expirationMonth (base name: "expiration_month")', function() {
      // uncomment below and update the code to test the property expirationMonth
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property expirationYear (base name: "expiration_year")', function() {
      // uncomment below and update the code to test the property expirationYear
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property last4 (base name: "last4")', function() {
      // uncomment below and update the code to test the property last4
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodType (base name: "payment_method_type")', function() {
      // uncomment below and update the code to test the property paymentMethodType
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property paymentType (base name: "payment_type")', function() {
      // uncomment below and update the code to test the property paymentType
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property uniqueKey (base name: "unique_key")', function() {
      // uncomment below and update the code to test the property uniqueKey
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

    it('should have the property verified (base name: "verified")', function() {
      // uncomment below and update the code to test the property verified
      //var instane = new KnetikPlatformApiDocumentationLatest.PaymentMethodResource();
      //expect(instance).to.be();
    });

  });

}));
