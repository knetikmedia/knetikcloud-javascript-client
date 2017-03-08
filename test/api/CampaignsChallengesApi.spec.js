/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    instance = new KnetikPlatformApiDocumentationLatest.CampaignsChallengesApi();
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

  describe('CampaignsChallengesApi', function() {
    describe('createChallenge', function() {
      it('should call createChallenge successfully', function(done) {
        //uncomment below and update the code to test createChallenge
        //instance.createChallenge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createChallengeActivity', function() {
      it('should call createChallengeActivity successfully', function(done) {
        //uncomment below and update the code to test createChallengeActivity
        //instance.createChallengeActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createChallengeTemplate', function() {
      it('should call createChallengeTemplate successfully', function(done) {
        //uncomment below and update the code to test createChallengeTemplate
        //instance.createChallengeTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteChallenge', function() {
      it('should call deleteChallenge successfully', function(done) {
        //uncomment below and update the code to test deleteChallenge
        //instance.deleteChallenge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteChallengeActivity', function() {
      it('should call deleteChallengeActivity successfully', function(done) {
        //uncomment below and update the code to test deleteChallengeActivity
        //instance.deleteChallengeActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteChallengeEvent', function() {
      it('should call deleteChallengeEvent successfully', function(done) {
        //uncomment below and update the code to test deleteChallengeEvent
        //instance.deleteChallengeEvent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteChallengeTemplate', function() {
      it('should call deleteChallengeTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteChallengeTemplate
        //instance.deleteChallengeTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChallenge', function() {
      it('should call getChallenge successfully', function(done) {
        //uncomment below and update the code to test getChallenge
        //instance.getChallenge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChallengeActivities', function() {
      it('should call getChallengeActivities successfully', function(done) {
        //uncomment below and update the code to test getChallengeActivities
        //instance.getChallengeActivities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChallengeActivity', function() {
      it('should call getChallengeActivity successfully', function(done) {
        //uncomment below and update the code to test getChallengeActivity
        //instance.getChallengeActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChallengeEvent', function() {
      it('should call getChallengeEvent successfully', function(done) {
        //uncomment below and update the code to test getChallengeEvent
        //instance.getChallengeEvent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChallengeEvents', function() {
      it('should call getChallengeEvents successfully', function(done) {
        //uncomment below and update the code to test getChallengeEvents
        //instance.getChallengeEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChallengeTemplate', function() {
      it('should call getChallengeTemplate successfully', function(done) {
        //uncomment below and update the code to test getChallengeTemplate
        //instance.getChallengeTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChallengeTemplates', function() {
      it('should call getChallengeTemplates successfully', function(done) {
        //uncomment below and update the code to test getChallengeTemplates
        //instance.getChallengeTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChallenges', function() {
      it('should call getChallenges successfully', function(done) {
        //uncomment below and update the code to test getChallenges
        //instance.getChallenges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateChallenge', function() {
      it('should call updateChallenge successfully', function(done) {
        //uncomment below and update the code to test updateChallenge
        //instance.updateChallenge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateChallengeActivity', function() {
      it('should call updateChallengeActivity successfully', function(done) {
        //uncomment below and update the code to test updateChallengeActivity
        //instance.updateChallengeActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateChallengeTemplate', function() {
      it('should call updateChallengeTemplate successfully', function(done) {
        //uncomment below and update the code to test updateChallengeTemplate
        //instance.updateChallengeTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
