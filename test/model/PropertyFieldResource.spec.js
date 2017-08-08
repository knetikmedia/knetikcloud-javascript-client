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
    instance = new KnetikCloud.PropertyFieldResource();
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

  describe('PropertyFieldResource', function() {
    it('should create an instance of PropertyFieldResource', function() {
      // uncomment below and update the code to test PropertyFieldResource
      //var instane = new KnetikCloud.PropertyFieldResource();
      //expect(instance).to.be.a(KnetikCloud.PropertyFieldResource);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new KnetikCloud.PropertyFieldResource();
      //expect(instance).to.be();
    });

    it('should have the property innerType (base name: "inner_type")', function() {
      // uncomment below and update the code to test the property innerType
      //var instane = new KnetikCloud.PropertyFieldResource();
      //expect(instance).to.be();
    });

    it('should have the property innerTypeFields (base name: "inner_type_fields")', function() {
      // uncomment below and update the code to test the property innerTypeFields
      //var instane = new KnetikCloud.PropertyFieldResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikCloud.PropertyFieldResource();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instane = new KnetikCloud.PropertyFieldResource();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KnetikCloud.PropertyFieldResource();
      //expect(instance).to.be();
    });

    it('should have the property validValues (base name: "valid_values")', function() {
      // uncomment below and update the code to test the property validValues
      //var instane = new KnetikCloud.PropertyFieldResource();
      //expect(instance).to.be();
    });

  });

}));
