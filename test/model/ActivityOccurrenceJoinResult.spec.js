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
    instance = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceJoinResult();
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

  describe('ActivityOccurrenceJoinResult', function() {
    it('should create an instance of ActivityOccurrenceJoinResult', function() {
      // uncomment below and update the code to test ActivityOccurrenceJoinResult
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceJoinResult();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.ActivityOccurrenceJoinResult);
    });

    it('should have the property entitlement (base name: "entitlement")', function() {
      // uncomment below and update the code to test the property entitlement
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceJoinResult();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "error_code")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceJoinResult();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceJoinResult();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceJoinResult();
      //expect(instance).to.be();
    });

  });

}));
