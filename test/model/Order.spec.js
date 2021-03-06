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
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    factory(root.expect, root.KnetikCloud);
  }
}(this, function(expect, KnetikCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikCloud.Order();
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

  describe('Order', function() {
    it('should create an instance of Order', function() {
      // uncomment below and update the code to test Order
      //var instane = new KnetikCloud.Order();
      //expect(instance).to.be.a(KnetikCloud.Order);
    });

    it('should have the property ascending (base name: "ascending")', function() {
      // uncomment below and update the code to test the property ascending
      //var instane = new KnetikCloud.Order();
      //expect(instance).to.be();
    });

    it('should have the property descending (base name: "descending")', function() {
      // uncomment below and update the code to test the property descending
      //var instane = new KnetikCloud.Order();
      //expect(instance).to.be();
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instane = new KnetikCloud.Order();
      //expect(instance).to.be();
    });

    it('should have the property ignoreCase (base name: "ignore_case")', function() {
      // uncomment below and update the code to test the property ignoreCase
      //var instane = new KnetikCloud.Order();
      //expect(instance).to.be();
    });

    it('should have the property nullHandling (base name: "null_handling")', function() {
      // uncomment below and update the code to test the property nullHandling
      //var instane = new KnetikCloud.Order();
      //expect(instance).to.be();
    });

    it('should have the property property (base name: "property")', function() {
      // uncomment below and update the code to test the property property
      //var instane = new KnetikCloud.Order();
      //expect(instance).to.be();
    });

  });

}));
