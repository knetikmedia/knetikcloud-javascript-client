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
    factory(root.expect, root.KnetikCloud);
  }
}(this, function(expect, KnetikCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikCloud.SubscriptionResource();
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

  describe('SubscriptionResource', function() {
    it('should create an instance of SubscriptionResource', function() {
      // uncomment below and update the code to test SubscriptionResource
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be.a(KnetikCloud.SubscriptionResource);
    });

    it('should have the property additionalProperties (base name: "additional_properties")', function() {
      // uncomment below and update the code to test the property additionalProperties
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property availability (base name: "availability")', function() {
      // uncomment below and update the code to test the property availability
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property consolidationDayOfMonth (base name: "consolidation_day_of_month")', function() {
      // uncomment below and update the code to test the property consolidationDayOfMonth
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property geoCountryList (base name: "geo_country_list")', function() {
      // uncomment below and update the code to test the property geoCountryList
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property geoPolicyType (base name: "geo_policy_type")', function() {
      // uncomment below and update the code to test the property geoPolicyType
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property plans (base name: "plans")', function() {
      // uncomment below and update the code to test the property plans
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property storeEnd (base name: "store_end")', function() {
      // uncomment below and update the code to test the property storeEnd
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property storeStart (base name: "store_start")', function() {
      // uncomment below and update the code to test the property storeStart
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property uniqueKey (base name: "unique_key")', function() {
      // uncomment below and update the code to test the property uniqueKey
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property vendorId (base name: "vendor_id")', function() {
      // uncomment below and update the code to test the property vendorId
      //var instane = new KnetikCloud.SubscriptionResource();
      //expect(instance).to.be();
    });

  });

}));
