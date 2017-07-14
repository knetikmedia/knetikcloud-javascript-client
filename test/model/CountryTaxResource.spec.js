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
    instance = new KnetikcloudSdk.CountryTaxResource();
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

  describe('CountryTaxResource', function() {
    it('should create an instance of CountryTaxResource', function() {
      // uncomment below and update the code to test CountryTaxResource
      //var instane = new KnetikcloudSdk.CountryTaxResource();
      //expect(instance).to.be.a(KnetikcloudSdk.CountryTaxResource);
    });

    it('should have the property countryIso3 (base name: "country_iso3")', function() {
      // uncomment below and update the code to test the property countryIso3
      //var instane = new KnetikcloudSdk.CountryTaxResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikcloudSdk.CountryTaxResource();
      //expect(instance).to.be();
    });

    it('should have the property rate (base name: "rate")', function() {
      // uncomment below and update the code to test the property rate
      //var instane = new KnetikcloudSdk.CountryTaxResource();
      //expect(instance).to.be();
    });

    it('should have the property taxShipping (base name: "tax_shipping")', function() {
      // uncomment below and update the code to test the property taxShipping
      //var instane = new KnetikcloudSdk.CountryTaxResource();
      //expect(instance).to.be();
    });

  });

}));
