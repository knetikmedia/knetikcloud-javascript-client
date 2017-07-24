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
    instance = new KnetikPlatformApiDocumentationLatest.VendorResource();
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

  describe('VendorResource', function() {
    it('should create an instance of VendorResource', function() {
      // uncomment below and update the code to test VendorResource
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.VendorResource);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property additionalProperties (base name: "additional_properties")', function() {
      // uncomment below and update the code to test the property additionalProperties
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property imageUrl (base name: "image_url")', function() {
      // uncomment below and update the code to test the property imageUrl
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property manualApproval (base name: "manual_approval")', function() {
      // uncomment below and update the code to test the property manualApproval
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property primaryContactEmail (base name: "primary_contact_email")', function() {
      // uncomment below and update the code to test the property primaryContactEmail
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property primaryContactName (base name: "primary_contact_name")', function() {
      // uncomment below and update the code to test the property primaryContactName
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property primaryContactPhone (base name: "primary_contact_phone")', function() {
      // uncomment below and update the code to test the property primaryContactPhone
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property salesEmail (base name: "sales_email")', function() {
      // uncomment below and update the code to test the property salesEmail
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property supportEmail (base name: "support_email")', function() {
      // uncomment below and update the code to test the property supportEmail
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new KnetikPlatformApiDocumentationLatest.VendorResource();
      //expect(instance).to.be();
    });

  });

}));
