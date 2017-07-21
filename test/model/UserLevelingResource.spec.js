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
    instance = new KnetikPlatformApiDocumentationLatest.UserLevelingResource();
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

  describe('UserLevelingResource', function() {
    it('should create an instance of UserLevelingResource', function() {
      // uncomment below and update the code to test UserLevelingResource
      //var instane = new KnetikPlatformApiDocumentationLatest.UserLevelingResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.UserLevelingResource);
    });

    it('should have the property lastTierName (base name: "last_tier_name")', function() {
      // uncomment below and update the code to test the property lastTierName
      //var instane = new KnetikPlatformApiDocumentationLatest.UserLevelingResource();
      //expect(instance).to.be();
    });

    it('should have the property lastTierProgress (base name: "last_tier_progress")', function() {
      // uncomment below and update the code to test the property lastTierProgress
      //var instane = new KnetikPlatformApiDocumentationLatest.UserLevelingResource();
      //expect(instance).to.be();
    });

    it('should have the property levelName (base name: "level_name")', function() {
      // uncomment below and update the code to test the property levelName
      //var instane = new KnetikPlatformApiDocumentationLatest.UserLevelingResource();
      //expect(instance).to.be();
    });

    it('should have the property nextTierName (base name: "next_tier_name")', function() {
      // uncomment below and update the code to test the property nextTierName
      //var instane = new KnetikPlatformApiDocumentationLatest.UserLevelingResource();
      //expect(instance).to.be();
    });

    it('should have the property nextTierProgress (base name: "next_tier_progress")', function() {
      // uncomment below and update the code to test the property nextTierProgress
      //var instane = new KnetikPlatformApiDocumentationLatest.UserLevelingResource();
      //expect(instance).to.be();
    });

    it('should have the property progress (base name: "progress")', function() {
      // uncomment below and update the code to test the property progress
      //var instane = new KnetikPlatformApiDocumentationLatest.UserLevelingResource();
      //expect(instance).to.be();
    });

    it('should have the property tierNames (base name: "tier_names")', function() {
      // uncomment below and update the code to test the property tierNames
      //var instane = new KnetikPlatformApiDocumentationLatest.UserLevelingResource();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new KnetikPlatformApiDocumentationLatest.UserLevelingResource();
      //expect(instance).to.be();
    });

  });

}));
