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
    instance = new KnetikCloud.ContentPollsApi();
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
    describe('answerPoll', function() {
      it('should call answerPoll successfully', function(done) {
        //uncomment below and update the code to test answerPoll
        //instance.answerPoll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPoll', function() {
      it('should call createPoll successfully', function(done) {
        //uncomment below and update the code to test createPoll
        //instance.createPoll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPollTemplate', function() {
      it('should call createPollTemplate successfully', function(done) {
        //uncomment below and update the code to test createPollTemplate
        //instance.createPollTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePoll', function() {
      it('should call deletePoll successfully', function(done) {
        //uncomment below and update the code to test deletePoll
        //instance.deletePoll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePollTemplate', function() {
      it('should call deletePollTemplate successfully', function(done) {
        //uncomment below and update the code to test deletePollTemplate
        //instance.deletePollTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPoll', function() {
      it('should call getPoll successfully', function(done) {
        //uncomment below and update the code to test getPoll
        //instance.getPoll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPollAnswer', function() {
      it('should call getPollAnswer successfully', function(done) {
        //uncomment below and update the code to test getPollAnswer
        //instance.getPollAnswer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPollTemplate', function() {
      it('should call getPollTemplate successfully', function(done) {
        //uncomment below and update the code to test getPollTemplate
        //instance.getPollTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPollTemplates', function() {
      it('should call getPollTemplates successfully', function(done) {
        //uncomment below and update the code to test getPollTemplates
        //instance.getPollTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPolls', function() {
      it('should call getPolls successfully', function(done) {
        //uncomment below and update the code to test getPolls
        //instance.getPolls(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePoll', function() {
      it('should call updatePoll successfully', function(done) {
        //uncomment below and update the code to test updatePoll
        //instance.updatePoll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePollTemplate', function() {
      it('should call updatePollTemplate successfully', function(done) {
        //uncomment below and update the code to test updatePollTemplate
        //instance.updatePollTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
