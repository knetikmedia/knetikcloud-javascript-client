/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: Latest
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
    factory(root.expect, root.KnetikPlatformApiDocumentationLatest);
  }
}(this, function(expect, KnetikPlatformApiDocumentationLatest) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikPlatformApiDocumentationLatest.SqlDatabaseConfig();
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

  describe('SqlDatabaseConfig', function() {
    it('should create an instance of SqlDatabaseConfig', function() {
      // uncomment below and update the code to test SqlDatabaseConfig
      //var instane = new KnetikPlatformApiDocumentationLatest.SqlDatabaseConfig();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.SqlDatabaseConfig);
    });

    it('should have the property connectionPoolSize (base name: "connection_pool_size")', function() {
      // uncomment below and update the code to test the property connectionPoolSize
      //var instane = new KnetikPlatformApiDocumentationLatest.SqlDatabaseConfig();
      //expect(instance).to.be();
    });

    it('should have the property connectionString (base name: "connection_string")', function() {
      // uncomment below and update the code to test the property connectionString
      //var instane = new KnetikPlatformApiDocumentationLatest.SqlDatabaseConfig();
      //expect(instance).to.be();
    });

    it('should have the property dbName (base name: "db_name")', function() {
      // uncomment below and update the code to test the property dbName
      //var instane = new KnetikPlatformApiDocumentationLatest.SqlDatabaseConfig();
      //expect(instance).to.be();
    });

    it('should have the property hostname (base name: "hostname")', function() {
      // uncomment below and update the code to test the property hostname
      //var instane = new KnetikPlatformApiDocumentationLatest.SqlDatabaseConfig();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new KnetikPlatformApiDocumentationLatest.SqlDatabaseConfig();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instane = new KnetikPlatformApiDocumentationLatest.SqlDatabaseConfig();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new KnetikPlatformApiDocumentationLatest.SqlDatabaseConfig();
      //expect(instance).to.be();
    });

  });

}));
