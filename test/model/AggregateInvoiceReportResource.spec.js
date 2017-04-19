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
    instance = new KnetikPlatformApiDocumentationLatest.AggregateInvoiceReportResource();
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

  describe('AggregateInvoiceReportResource', function() {
    it('should create an instance of AggregateInvoiceReportResource', function() {
      // uncomment below and update the code to test AggregateInvoiceReportResource
      //var instane = new KnetikPlatformApiDocumentationLatest.AggregateInvoiceReportResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.AggregateInvoiceReportResource);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new KnetikPlatformApiDocumentationLatest.AggregateInvoiceReportResource();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new KnetikPlatformApiDocumentationLatest.AggregateInvoiceReportResource();
      //expect(instance).to.be();
    });

    it('should have the property revenue (base name: "revenue")', function() {
      // uncomment below and update the code to test the property revenue
      //var instane = new KnetikPlatformApiDocumentationLatest.AggregateInvoiceReportResource();
      //expect(instance).to.be();
    });

    it('should have the property userCount (base name: "user_count")', function() {
      // uncomment below and update the code to test the property userCount
      //var instane = new KnetikPlatformApiDocumentationLatest.AggregateInvoiceReportResource();
      //expect(instance).to.be();
    });

  });

}));
