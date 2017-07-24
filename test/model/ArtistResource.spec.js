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
    instance = new KnetikPlatformApiDocumentationLatest.ArtistResource();
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

  describe('ArtistResource', function() {
    it('should create an instance of ArtistResource', function() {
      // uncomment below and update the code to test ArtistResource
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.ArtistResource);
    });

    it('should have the property additionalProperties (base name: "additional_properties")', function() {
      // uncomment below and update the code to test the property additionalProperties
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property born (base name: "born")', function() {
      // uncomment below and update the code to test the property born
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property contributionCount (base name: "contribution_count")', function() {
      // uncomment below and update the code to test the property contributionCount
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property contributions (base name: "contributions")', function() {
      // uncomment below and update the code to test the property contributions
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property died (base name: "died")', function() {
      // uncomment below and update the code to test the property died
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ArtistResource();
      //expect(instance).to.be();
    });

  });

}));
