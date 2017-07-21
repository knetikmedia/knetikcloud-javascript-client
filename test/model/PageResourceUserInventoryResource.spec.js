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
    instance = new KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource();
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

  describe('PageResourceUserInventoryResource', function() {
    it('should create an instance of PageResourceUserInventoryResource', function() {
      // uncomment below and update the code to test PageResourceUserInventoryResource
      //var instane = new KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource);
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property first (base name: "first")', function() {
      // uncomment below and update the code to test the property first
      //var instane = new KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property last (base name: "last")', function() {
      // uncomment below and update the code to test the property last
      //var instane = new KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property numberOfElements (base name: "number_of_elements")', function() {
      // uncomment below and update the code to test the property numberOfElements
      //var instane = new KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instane = new KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property totalElements (base name: "total_elements")', function() {
      // uncomment below and update the code to test the property totalElements
      //var instane = new KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property totalPages (base name: "total_pages")', function() {
      // uncomment below and update the code to test the property totalPages
      //var instane = new KnetikPlatformApiDocumentationLatest.PageResourceUserInventoryResource();
      //expect(instance).to.be();
    });

  });

}));
