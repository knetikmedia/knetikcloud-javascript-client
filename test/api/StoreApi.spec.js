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
    instance = new KnetikCloud.StoreApi();
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

  describe('StoreApi', function() {
    describe('createItemTemplate', function() {
      it('should call createItemTemplate successfully', function(done) {
        //uncomment below and update the code to test createItemTemplate
        //instance.createItemTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createStoreItem', function() {
      it('should call createStoreItem successfully', function(done) {
        //uncomment below and update the code to test createStoreItem
        //instance.createStoreItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemTemplate', function() {
      it('should call deleteItemTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteItemTemplate
        //instance.deleteItemTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteStoreItem', function() {
      it('should call deleteStoreItem successfully', function(done) {
        //uncomment below and update the code to test deleteStoreItem
        //instance.deleteStoreItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBehaviors', function() {
      it('should call getBehaviors successfully', function(done) {
        //uncomment below and update the code to test getBehaviors
        //instance.getBehaviors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemTemplate', function() {
      it('should call getItemTemplate successfully', function(done) {
        //uncomment below and update the code to test getItemTemplate
        //instance.getItemTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemTemplates', function() {
      it('should call getItemTemplates successfully', function(done) {
        //uncomment below and update the code to test getItemTemplates
        //instance.getItemTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreItem', function() {
      it('should call getStoreItem successfully', function(done) {
        //uncomment below and update the code to test getStoreItem
        //instance.getStoreItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoreItems', function() {
      it('should call getStoreItems successfully', function(done) {
        //uncomment below and update the code to test getStoreItems
        //instance.getStoreItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quickBuy', function() {
      it('should call quickBuy successfully', function(done) {
        //uncomment below and update the code to test quickBuy
        //instance.quickBuy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItemTemplate', function() {
      it('should call updateItemTemplate successfully', function(done) {
        //uncomment below and update the code to test updateItemTemplate
        //instance.updateItemTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStoreItem', function() {
      it('should call updateStoreItem successfully', function(done) {
        //uncomment below and update the code to test updateStoreItem
        //instance.updateStoreItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
