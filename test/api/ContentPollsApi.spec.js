/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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
    instance = new KnetikPlatformApiDocumentationLatest.ContentPollsApi();
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

  describe('ContentPollsApi', function() {
    describe('answerPollUsingPOST', function() {
      it('should call answerPollUsingPOST successfully', function(done) {
        //uncomment below and update the code to test answerPollUsingPOST
        //instance.answerPollUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPollTemplateUsingPOST', function() {
      it('should call createPollTemplateUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createPollTemplateUsingPOST
        //instance.createPollTemplateUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPollUsingPOST', function() {
      it('should call createPollUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createPollUsingPOST
        //instance.createPollUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePollTemplateUsingDELETE', function() {
      it('should call deletePollTemplateUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deletePollTemplateUsingDELETE
        //instance.deletePollTemplateUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePollUsingDELETE', function() {
      it('should call deletePollUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deletePollUsingDELETE
        //instance.deletePollUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPollAnswerUsingGET', function() {
      it('should call getPollAnswerUsingGET successfully', function(done) {
        //uncomment below and update the code to test getPollAnswerUsingGET
        //instance.getPollAnswerUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPollTemplateUsingGET', function() {
      it('should call getPollTemplateUsingGET successfully', function(done) {
        //uncomment below and update the code to test getPollTemplateUsingGET
        //instance.getPollTemplateUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPollTemplatesUsingGET', function() {
      it('should call getPollTemplatesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getPollTemplatesUsingGET
        //instance.getPollTemplatesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPollUsingGET', function() {
      it('should call getPollUsingGET successfully', function(done) {
        //uncomment below and update the code to test getPollUsingGET
        //instance.getPollUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPollsUsingGET', function() {
      it('should call getPollsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getPollsUsingGET
        //instance.getPollsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePollTemplateUsingPUT', function() {
      it('should call updatePollTemplateUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updatePollTemplateUsingPUT
        //instance.updatePollTemplateUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePollUsingPUT', function() {
      it('should call updatePollUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updatePollUsingPUT
        //instance.updatePollUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
