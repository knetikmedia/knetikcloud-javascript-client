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
    instance = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
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

  describe('ActivityOccurrenceResource', function() {
    it('should create an instance of ActivityOccurrenceResource', function() {
      // uncomment below and update the code to test ActivityOccurrenceResource
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource);
    });

    it('should have the property activityId (base name: "activity_id")', function() {
      // uncomment below and update the code to test the property activityId
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property challengeActivityId (base name: "challenge_activity_id")', function() {
      // uncomment below and update the code to test the property challengeActivityId
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property entitlement (base name: "entitlement")', function() {
      // uncomment below and update the code to test the property entitlement
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property eventId (base name: "event_id")', function() {
      // uncomment below and update the code to test the property eventId
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property rewardStatus (base name: "reward_status")', function() {
      // uncomment below and update the code to test the property rewardStatus
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property settings (base name: "settings")', function() {
      // uncomment below and update the code to test the property settings
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property simulated (base name: "simulated")', function() {
      // uncomment below and update the code to test the property simulated
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instane = new KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource();
      //expect(instance).to.be();
    });

  });

}));
