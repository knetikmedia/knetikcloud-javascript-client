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
    instance = new KnetikCloud.MediaModerationApi();
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

  describe('MediaModerationApi', function() {
    describe('addFlag', function() {
      it('should call addFlag successfully', function(done) {
        //uncomment below and update the code to test addFlag
        //instance.addFlag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFlag', function() {
      it('should call deleteFlag successfully', function(done) {
        //uncomment below and update the code to test deleteFlag
        //instance.deleteFlag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFlags', function() {
      it('should call getFlags successfully', function(done) {
        //uncomment below and update the code to test getFlags
        //instance.getFlags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getModerationReport', function() {
      it('should call getModerationReport successfully', function(done) {
        //uncomment below and update the code to test getModerationReport
        //instance.getModerationReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getModerationReports', function() {
      it('should call getModerationReports successfully', function(done) {
        //uncomment below and update the code to test getModerationReports
        //instance.getModerationReports(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateModerationReport', function() {
      it('should call updateModerationReport successfully', function(done) {
        //uncomment below and update the code to test updateModerationReport
        //instance.updateModerationReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
