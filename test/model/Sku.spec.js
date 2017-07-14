/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
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
    instance = new KnetikPlatformApiDocumentationLatest.Sku();
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

  describe('Sku', function() {
    it('should create an instance of Sku', function() {
      // uncomment below and update the code to test Sku
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.Sku);
    });

    it('should have the property additionalProperties (base name: "additional_properties")', function() {
      // uncomment below and update the code to test the property additionalProperties
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property inventory (base name: "inventory")', function() {
      // uncomment below and update the code to test the property inventory
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property minInventoryThreshold (base name: "min_inventory_threshold")', function() {
      // uncomment below and update the code to test the property minInventoryThreshold
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property originalPrice (base name: "original_price")', function() {
      // uncomment below and update the code to test the property originalPrice
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property published (base name: "published")', function() {
      // uncomment below and update the code to test the property published
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property saleId (base name: "sale_id")', function() {
      // uncomment below and update the code to test the property saleId
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property saleName (base name: "sale_name")', function() {
      // uncomment below and update the code to test the property saleName
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

    it('should have the property stopDate (base name: "stop_date")', function() {
      // uncomment below and update the code to test the property stopDate
      //var instane = new KnetikPlatformApiDocumentationLatest.Sku();
      //expect(instance).to.be();
    });

  });

}));
