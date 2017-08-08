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
    instance = new KnetikCloud.FileGroupPropertyDefinitionResource();
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

  describe('FileGroupPropertyDefinitionResource', function() {
    it('should create an instance of FileGroupPropertyDefinitionResource', function() {
      // uncomment below and update the code to test FileGroupPropertyDefinitionResource
      //var instane = new KnetikCloud.FileGroupPropertyDefinitionResource();
      //expect(instance).to.be.a(KnetikCloud.FileGroupPropertyDefinitionResource);
    });

    it('should have the property fileType (base name: "file_type")', function() {
      // uncomment below and update the code to test the property fileType
      //var instane = new KnetikCloud.FileGroupPropertyDefinitionResource();
      //expect(instance).to.be();
    });

    it('should have the property maxCount (base name: "max_count")', function() {
      // uncomment below and update the code to test the property maxCount
      //var instane = new KnetikCloud.FileGroupPropertyDefinitionResource();
      //expect(instance).to.be();
    });

    it('should have the property maxFileSize (base name: "max_file_size")', function() {
      // uncomment below and update the code to test the property maxFileSize
      //var instane = new KnetikCloud.FileGroupPropertyDefinitionResource();
      //expect(instance).to.be();
    });

    it('should have the property minCount (base name: "min_count")', function() {
      // uncomment below and update the code to test the property minCount
      //var instane = new KnetikCloud.FileGroupPropertyDefinitionResource();
      //expect(instance).to.be();
    });

  });

}));
