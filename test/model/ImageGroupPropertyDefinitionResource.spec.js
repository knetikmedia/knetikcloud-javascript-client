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
    instance = new KnetikPlatformApiDocumentationLatest.ImageGroupPropertyDefinitionResource();
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

  describe('ImageGroupPropertyDefinitionResource', function() {
    it('should create an instance of ImageGroupPropertyDefinitionResource', function() {
      // uncomment below and update the code to test ImageGroupPropertyDefinitionResource
      //var instane = new KnetikPlatformApiDocumentationLatest.ImageGroupPropertyDefinitionResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.ImageGroupPropertyDefinitionResource);
    });

    it('should have the property maxHeight (base name: "max_height")', function() {
      // uncomment below and update the code to test the property maxHeight
      //var instane = new KnetikPlatformApiDocumentationLatest.ImageGroupPropertyDefinitionResource();
      //expect(instance).to.be();
    });

    it('should have the property maxWidth (base name: "max_width")', function() {
      // uncomment below and update the code to test the property maxWidth
      //var instane = new KnetikPlatformApiDocumentationLatest.ImageGroupPropertyDefinitionResource();
      //expect(instance).to.be();
    });

    it('should have the property minHeight (base name: "min_height")', function() {
      // uncomment below and update the code to test the property minHeight
      //var instane = new KnetikPlatformApiDocumentationLatest.ImageGroupPropertyDefinitionResource();
      //expect(instance).to.be();
    });

    it('should have the property minWidth (base name: "min_width")', function() {
      // uncomment below and update the code to test the property minWidth
      //var instane = new KnetikPlatformApiDocumentationLatest.ImageGroupPropertyDefinitionResource();
      //expect(instance).to.be();
    });

  });

}));
