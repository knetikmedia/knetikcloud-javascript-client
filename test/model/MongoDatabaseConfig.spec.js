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
    instance = new KnetikPlatformApiDocumentationLatest.MongoDatabaseConfig();
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

  describe('MongoDatabaseConfig', function() {
    it('should create an instance of MongoDatabaseConfig', function() {
      // uncomment below and update the code to test MongoDatabaseConfig
      //var instane = new KnetikPlatformApiDocumentationLatest.MongoDatabaseConfig();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.MongoDatabaseConfig);
    });

    it('should have the property dbName (base name: "db_name")', function() {
      // uncomment below and update the code to test the property dbName
      //var instane = new KnetikPlatformApiDocumentationLatest.MongoDatabaseConfig();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instane = new KnetikPlatformApiDocumentationLatest.MongoDatabaseConfig();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new KnetikPlatformApiDocumentationLatest.MongoDatabaseConfig();
      //expect(instance).to.be();
    });

    it('should have the property servers (base name: "servers")', function() {
      // uncomment below and update the code to test the property servers
      //var instane = new KnetikPlatformApiDocumentationLatest.MongoDatabaseConfig();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new KnetikPlatformApiDocumentationLatest.MongoDatabaseConfig();
      //expect(instance).to.be();
    });

  });

}));
