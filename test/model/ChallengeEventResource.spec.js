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
    instance = new KnetikPlatformApiDocumentationLatest.ChallengeEventResource();
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

  describe('ChallengeEventResource', function() {
    it('should create an instance of ChallengeEventResource', function() {
      // uncomment below and update the code to test ChallengeEventResource
      //var instane = new KnetikPlatformApiDocumentationLatest.ChallengeEventResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.ChallengeEventResource);
    });

    it('should have the property challengeId (base name: "challenge_id")', function() {
      // uncomment below and update the code to test the property challengeId
      //var instane = new KnetikPlatformApiDocumentationLatest.ChallengeEventResource();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ChallengeEventResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.ChallengeEventResource();
      //expect(instance).to.be();
    });

    it('should have the property rewardStatus (base name: "reward_status")', function() {
      // uncomment below and update the code to test the property rewardStatus
      //var instane = new KnetikPlatformApiDocumentationLatest.ChallengeEventResource();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ChallengeEventResource();
      //expect(instance).to.be();
    });

  });

}));
