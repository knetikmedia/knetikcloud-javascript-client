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
    instance = new KnetikPlatformApiDocumentationLatest.WalletAlterRequest();
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

  describe('WalletAlterRequest', function() {
    it('should create an instance of WalletAlterRequest', function() {
      // uncomment below and update the code to test WalletAlterRequest
      //var instane = new KnetikPlatformApiDocumentationLatest.WalletAlterRequest();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.WalletAlterRequest);
    });

    it('should have the property delta (base name: "delta")', function() {
      // uncomment below and update the code to test the property delta
      //var instane = new KnetikPlatformApiDocumentationLatest.WalletAlterRequest();
      //expect(instance).to.be();
    });

    it('should have the property invoiceId (base name: "invoice_id")', function() {
      // uncomment below and update the code to test the property invoiceId
      //var instane = new KnetikPlatformApiDocumentationLatest.WalletAlterRequest();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new KnetikPlatformApiDocumentationLatest.WalletAlterRequest();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KnetikPlatformApiDocumentationLatest.WalletAlterRequest();
      //expect(instance).to.be();
    });

  });

}));
