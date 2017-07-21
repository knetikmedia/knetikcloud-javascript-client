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
    instance = new KnetikPlatformApiDocumentationLatest.SelectedSettingResource();
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

  describe('SelectedSettingResource', function() {
    it('should create an instance of SelectedSettingResource', function() {
      // uncomment below and update the code to test SelectedSettingResource
      //var instane = new KnetikPlatformApiDocumentationLatest.SelectedSettingResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.SelectedSettingResource);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new KnetikPlatformApiDocumentationLatest.SelectedSettingResource();
      //expect(instance).to.be();
    });

    it('should have the property keyName (base name: "key_name")', function() {
      // uncomment below and update the code to test the property keyName
      //var instane = new KnetikPlatformApiDocumentationLatest.SelectedSettingResource();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new KnetikPlatformApiDocumentationLatest.SelectedSettingResource();
      //expect(instance).to.be();
    });

    it('should have the property valueName (base name: "value_name")', function() {
      // uncomment below and update the code to test the property valueName
      //var instane = new KnetikPlatformApiDocumentationLatest.SelectedSettingResource();
      //expect(instance).to.be();
    });

  });

}));
