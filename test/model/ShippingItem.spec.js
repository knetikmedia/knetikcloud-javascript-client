/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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
    instance = new KnetikPlatformApiDocumentationLatest.ShippingItem();
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

  describe('ShippingItem', function() {
    it('should create an instance of ShippingItem', function() {
      // uncomment below and update the code to test ShippingItem
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.ShippingItem);
    });

    it('should have the property additionalProperties (base name: "additional_properties")', function() {
      // uncomment below and update the code to test the property additionalProperties
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property behaviors (base name: "behaviors")', function() {
      // uncomment below and update the code to test the property behaviors
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property countries (base name: "countries")', function() {
      // uncomment below and update the code to test the property countries
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property displayable (base name: "displayable")', function() {
      // uncomment below and update the code to test the property displayable
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property geoCountryList (base name: "geo_country_list")', function() {
      // uncomment below and update the code to test the property geoCountryList
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property geoPolicyType (base name: "geo_policy_type")', function() {
      // uncomment below and update the code to test the property geoPolicyType
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property maxTierTotal (base name: "max_tier_total")', function() {
      // uncomment below and update the code to test the property maxTierTotal
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property shippingTier (base name: "shipping_tier")', function() {
      // uncomment below and update the code to test the property shippingTier
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property skus (base name: "skus")', function() {
      // uncomment below and update the code to test the property skus
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property storeEnd (base name: "store_end")', function() {
      // uncomment below and update the code to test the property storeEnd
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property storeStart (base name: "store_start")', function() {
      // uncomment below and update the code to test the property storeStart
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property taxable (base name: "taxable")', function() {
      // uncomment below and update the code to test the property taxable
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property typeHint (base name: "type_hint")', function() {
      // uncomment below and update the code to test the property typeHint
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property uniqueKey (base name: "unique_key")', function() {
      // uncomment below and update the code to test the property uniqueKey
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property vendorId (base name: "vendor_id")', function() {
      // uncomment below and update the code to test the property vendorId
      //var instane = new KnetikPlatformApiDocumentationLatest.ShippingItem();
      //expect(instance).to.be();
    });

  });

}));
