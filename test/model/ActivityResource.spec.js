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
    instance = new KnetikPlatformApiDocumentationLatest.ActivityResource();
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

  describe('ActivityResource', function() {
    it('should create an instance of ActivityResource', function() {
      // uncomment below and update the code to test ActivityResource
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.ActivityResource);
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property entitlements (base name: "entitlements")', function() {
      // uncomment below and update the code to test the property entitlements
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property launch (base name: "launch")', function() {
      // uncomment below and update the code to test the property launch
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property rewardSet (base name: "reward_set")', function() {
      // uncomment below and update the code to test the property rewardSet
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property settings (base name: "settings")', function() {
      // uncomment below and update the code to test the property settings
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property uniqueKey (base name: "unique_key")', function() {
      // uncomment below and update the code to test the property uniqueKey
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityResource();
      //expect(instance).to.be();
    });

  });

}));