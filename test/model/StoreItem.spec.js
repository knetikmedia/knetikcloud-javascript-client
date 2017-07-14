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
    factory(root.expect, root.KnetikcloudSdk);
  }
}(this, function(expect, KnetikcloudSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikcloudSdk.StoreItem();
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

  describe('StoreItem', function() {
    it('should create an instance of StoreItem', function() {
      // uncomment below and update the code to test StoreItem
      //var instane = new KnetikcloudSdk.StoreItem();
      //expect(instance).to.be.a(KnetikcloudSdk.StoreItem);
    });

    it('should have the property displayable (base name: "displayable")', function() {
      // uncomment below and update the code to test the property displayable
      //var instane = new KnetikcloudSdk.StoreItem();
      //expect(instance).to.be();
    });

    it('should have the property geoCountryList (base name: "geo_country_list")', function() {
      // uncomment below and update the code to test the property geoCountryList
      //var instane = new KnetikcloudSdk.StoreItem();
      //expect(instance).to.be();
    });

    it('should have the property geoPolicyType (base name: "geo_policy_type")', function() {
      // uncomment below and update the code to test the property geoPolicyType
      //var instane = new KnetikcloudSdk.StoreItem();
      //expect(instance).to.be();
    });

    it('should have the property shippingTier (base name: "shipping_tier")', function() {
      // uncomment below and update the code to test the property shippingTier
      //var instane = new KnetikcloudSdk.StoreItem();
      //expect(instance).to.be();
    });

    it('should have the property skus (base name: "skus")', function() {
      // uncomment below and update the code to test the property skus
      //var instane = new KnetikcloudSdk.StoreItem();
      //expect(instance).to.be();
    });

    it('should have the property storeEnd (base name: "store_end")', function() {
      // uncomment below and update the code to test the property storeEnd
      //var instane = new KnetikcloudSdk.StoreItem();
      //expect(instance).to.be();
    });

    it('should have the property storeStart (base name: "store_start")', function() {
      // uncomment below and update the code to test the property storeStart
      //var instane = new KnetikcloudSdk.StoreItem();
      //expect(instance).to.be();
    });

    it('should have the property vendorId (base name: "vendor_id")', function() {
      // uncomment below and update the code to test the property vendorId
      //var instane = new KnetikcloudSdk.StoreItem();
      //expect(instance).to.be();
    });

  });

}));
