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
    instance = new KnetikPlatformApiDocumentationLatest.UserActivityResultsResource();
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

  describe('UserActivityResultsResource', function() {
    it('should create an instance of UserActivityResultsResource', function() {
      // uncomment below and update the code to test UserActivityResultsResource
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActivityResultsResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.UserActivityResultsResource);
    });

    it('should have the property currencyRewards (base name: "currency_rewards")', function() {
      // uncomment below and update the code to test the property currencyRewards
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActivityResultsResource();
      //expect(instance).to.be();
    });

    it('should have the property itemRewards (base name: "item_rewards")', function() {
      // uncomment below and update the code to test the property itemRewards
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActivityResultsResource();
      //expect(instance).to.be();
    });

    it('should have the property rank (base name: "rank")', function() {
      // uncomment below and update the code to test the property rank
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActivityResultsResource();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActivityResultsResource();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActivityResultsResource();
      //expect(instance).to.be();
    });

    it('should have the property ties (base name: "ties")', function() {
      // uncomment below and update the code to test the property ties
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActivityResultsResource();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActivityResultsResource();
      //expect(instance).to.be();
    });

  });

}));
