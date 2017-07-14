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
    instance = new KnetikPlatformApiDocumentationLatest.UserResource();
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

  describe('UserResource', function() {
    it('should create an instance of UserResource', function() {
      // uncomment below and update the code to test UserResource
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.UserResource);
    });

    it('should have the property additionalProperties (base name: "additional_properties")', function() {
      // uncomment below and update the code to test the property additionalProperties
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property address2 (base name: "address2")', function() {
      // uncomment below and update the code to test the property address2
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property avatarUrl (base name: "avatar_url")', function() {
      // uncomment below and update the code to test the property avatarUrl
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property children (base name: "children")', function() {
      // uncomment below and update the code to test the property children
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "country_code")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property dateOfBirth (base name: "date_of_birth")', function() {
      // uncomment below and update the code to test the property dateOfBirth
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "display_name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property fullname (base name: "fullname")', function() {
      // uncomment below and update the code to test the property fullname
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property languageCode (base name: "language_code")', function() {
      // uncomment below and update the code to test the property languageCode
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdated (base name: "last_updated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property memberSince (base name: "member_since")', function() {
      // uncomment below and update the code to test the property memberSince
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property mobileNumber (base name: "mobile_number")', function() {
      // uncomment below and update the code to test the property mobileNumber
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property parents (base name: "parents")', function() {
      // uncomment below and update the code to test the property parents
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property timezoneCode (base name: "timezone_code")', function() {
      // uncomment below and update the code to test the property timezoneCode
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new KnetikPlatformApiDocumentationLatest.UserResource();
      //expect(instance).to.be();
    });

  });

}));
