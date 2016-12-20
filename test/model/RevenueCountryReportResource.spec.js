/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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
    instance = new KnetikPlatformApiDocumentationLatest.RevenueCountryReportResource();
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

  describe('RevenueCountryReportResource', function() {
    it('should create an instance of RevenueCountryReportResource', function() {
      // uncomment below and update the code to test RevenueCountryReportResource
      //var instane = new KnetikPlatformApiDocumentationLatest.RevenueCountryReportResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.RevenueCountryReportResource);
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new KnetikPlatformApiDocumentationLatest.RevenueCountryReportResource();
      //expect(instance).to.be();
    });

    it('should have the property revenue (base name: "revenue")', function() {
      // uncomment below and update the code to test the property revenue
      //var instane = new KnetikPlatformApiDocumentationLatest.RevenueCountryReportResource();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new KnetikPlatformApiDocumentationLatest.RevenueCountryReportResource();
      //expect(instance).to.be();
    });

  });

}));
