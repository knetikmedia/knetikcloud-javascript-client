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
    instance = new KnetikCloud.ChatApi();
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

  describe('ChatApi', function() {
    describe('acknowledgeChatMessage', function() {
      it('should call acknowledgeChatMessage successfully', function(done) {
        //uncomment below and update the code to test acknowledgeChatMessage
        //instance.acknowledgeChatMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addChatMessageBlacklist', function() {
      it('should call addChatMessageBlacklist successfully', function(done) {
        //uncomment below and update the code to test addChatMessageBlacklist
        //instance.addChatMessageBlacklist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteChatMessage', function() {
      it('should call deleteChatMessage successfully', function(done) {
        //uncomment below and update the code to test deleteChatMessage
        //instance.deleteChatMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editChatMessage', function() {
      it('should call editChatMessage successfully', function(done) {
        //uncomment below and update the code to test editChatMessage
        //instance.editChatMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChatMessage', function() {
      it('should call getChatMessage successfully', function(done) {
        //uncomment below and update the code to test getChatMessage
        //instance.getChatMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChatMessageBlacklist', function() {
      it('should call getChatMessageBlacklist successfully', function(done) {
        //uncomment below and update the code to test getChatMessageBlacklist
        //instance.getChatMessageBlacklist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChatThreads', function() {
      it('should call getChatThreads successfully', function(done) {
        //uncomment below and update the code to test getChatThreads
        //instance.getChatThreads(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDirectMessages', function() {
      it('should call getDirectMessages successfully', function(done) {
        //uncomment below and update the code to test getDirectMessages
        //instance.getDirectMessages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getThreadMessages', function() {
      it('should call getThreadMessages successfully', function(done) {
        //uncomment below and update the code to test getThreadMessages
        //instance.getThreadMessages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTopicMessages', function() {
      it('should call getTopicMessages successfully', function(done) {
        //uncomment below and update the code to test getTopicMessages
        //instance.getTopicMessages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeChatBlacklist', function() {
      it('should call removeChatBlacklist successfully', function(done) {
        //uncomment below and update the code to test removeChatBlacklist
        //instance.removeChatBlacklist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendChatMessage', function() {
      it('should call sendChatMessage successfully', function(done) {
        //uncomment below and update the code to test sendChatMessage
        //instance.sendChatMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
