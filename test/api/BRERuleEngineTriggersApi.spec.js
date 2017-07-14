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
    factory(root.expect, root.KnetikPlatformApiDocumentationLatest);
  }
}(this, function(expect, KnetikPlatformApiDocumentationLatest) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikPlatformApiDocumentationLatest.BRERuleEngineTriggersApi();
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

  describe('BRERuleEngineTriggersApi', function() {
    describe('createBRETrigger', function() {
      it('should call createBRETrigger successfully', function(done) {
        //uncomment below and update the code to test createBRETrigger
        //instance.createBRETrigger(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBRETrigger', function() {
      it('should call deleteBRETrigger successfully', function(done) {
        //uncomment below and update the code to test deleteBRETrigger
        //instance.deleteBRETrigger(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBRETrigger', function() {
      it('should call getBRETrigger successfully', function(done) {
        //uncomment below and update the code to test getBRETrigger
        //instance.getBRETrigger(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBRETriggers', function() {
      it('should call getBRETriggers successfully', function(done) {
        //uncomment below and update the code to test getBRETriggers
        //instance.getBRETriggers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBRETrigger', function() {
      it('should call updateBRETrigger successfully', function(done) {
        //uncomment below and update the code to test updateBRETrigger
        //instance.updateBRETrigger(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
