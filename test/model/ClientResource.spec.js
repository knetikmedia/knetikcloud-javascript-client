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
    instance = new KnetikCloud.ClientResource();
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

  describe('ClientResource', function() {
    it('should create an instance of ClientResource', function() {
      // uncomment below and update the code to test ClientResource
      //var instane = new KnetikCloud.ClientResource();
      //expect(instance).to.be.a(KnetikCloud.ClientResource);
    });

    it('should have the property accessTokenValiditySeconds (base name: "access_token_validity_seconds")', function() {
      // uncomment below and update the code to test the property accessTokenValiditySeconds
      //var instane = new KnetikCloud.ClientResource();
      //expect(instance).to.be();
    });

    it('should have the property clientKey (base name: "client_key")', function() {
      // uncomment below and update the code to test the property clientKey
      //var instane = new KnetikCloud.ClientResource();
      //expect(instance).to.be();
    });

    it('should have the property grantTypes (base name: "grant_types")', function() {
      // uncomment below and update the code to test the property grantTypes
      //var instane = new KnetikCloud.ClientResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikCloud.ClientResource();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "is_public")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instane = new KnetikCloud.ClientResource();
      //expect(instance).to.be();
    });

    it('should have the property locked (base name: "locked")', function() {
      // uncomment below and update the code to test the property locked
      //var instane = new KnetikCloud.ClientResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikCloud.ClientResource();
      //expect(instance).to.be();
    });

    it('should have the property redirectUris (base name: "redirect_uris")', function() {
      // uncomment below and update the code to test the property redirectUris
      //var instane = new KnetikCloud.ClientResource();
      //expect(instance).to.be();
    });

    it('should have the property refreshTokenValiditySeconds (base name: "refresh_token_validity_seconds")', function() {
      // uncomment below and update the code to test the property refreshTokenValiditySeconds
      //var instane = new KnetikCloud.ClientResource();
      //expect(instance).to.be();
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instane = new KnetikCloud.ClientResource();
      //expect(instance).to.be();
    });

  });

}));
