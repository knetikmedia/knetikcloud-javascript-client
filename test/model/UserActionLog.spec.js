/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    instance = new KnetikPlatformApiDocumentationLatest.UserActionLog();
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

  describe('UserActionLog', function() {
    it('should create an instance of UserActionLog', function() {
      // uncomment below and update the code to test UserActionLog
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActionLog();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.UserActionLog);
    });

    it('should have the property actionDescription (base name: "action_description")', function() {
      // uncomment below and update the code to test the property actionDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActionLog();
      //expect(instance).to.be();
    });

    it('should have the property actionName (base name: "action_name")', function() {
      // uncomment below and update the code to test the property actionName
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActionLog();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActionLog();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActionLog();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActionLog();
      //expect(instance).to.be();
    });

    it('should have the property requestId (base name: "request_id")', function() {
      // uncomment below and update the code to test the property requestId
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActionLog();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new KnetikPlatformApiDocumentationLatest.UserActionLog();
      //expect(instance).to.be();
    });

  });

}));
