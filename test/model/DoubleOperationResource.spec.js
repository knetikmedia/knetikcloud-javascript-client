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
    instance = new KnetikCloud.DoubleOperationResource();
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

  describe('DoubleOperationResource', function() {
    it('should create an instance of DoubleOperationResource', function() {
      // uncomment below and update the code to test DoubleOperationResource
      //var instane = new KnetikCloud.DoubleOperationResource();
      //expect(instance).to.be.a(KnetikCloud.DoubleOperationResource);
    });

    it('should have the property args (base name: "args")', function() {
      // uncomment below and update the code to test the property args
      //var instane = new KnetikCloud.DoubleOperationResource();
      //expect(instance).to.be();
    });

    it('should have the property definition (base name: "definition")', function() {
      // uncomment below and update the code to test the property definition
      //var instane = new KnetikCloud.DoubleOperationResource();
      //expect(instance).to.be();
    });

    it('should have the property op (base name: "op")', function() {
      // uncomment below and update the code to test the property op
      //var instane = new KnetikCloud.DoubleOperationResource();
      //expect(instance).to.be();
    });

    it('should have the property returnType (base name: "return_type")', function() {
      // uncomment below and update the code to test the property returnType
      //var instane = new KnetikCloud.DoubleOperationResource();
      //expect(instance).to.be();
    });

    it('should have the property supportedOperators (base name: "supported_operators")', function() {
      // uncomment below and update the code to test the property supportedOperators
      //var instane = new KnetikCloud.DoubleOperationResource();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KnetikCloud.DoubleOperationResource();
      //expect(instance).to.be();
    });

  });

}));
