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
    factory(root.expect, root.KnetikcloudSdk);
  }
}(this, function(expect, KnetikcloudSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikcloudSdk.RefundResource();
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

  describe('RefundResource', function() {
    it('should create an instance of RefundResource', function() {
      // uncomment below and update the code to test RefundResource
      //var instane = new KnetikcloudSdk.RefundResource();
      //expect(instance).to.be.a(KnetikcloudSdk.RefundResource);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new KnetikcloudSdk.RefundResource();
      //expect(instance).to.be();
    });

    it('should have the property refundTransactionId (base name: "refund_transaction_id")', function() {
      // uncomment below and update the code to test the property refundTransactionId
      //var instane = new KnetikcloudSdk.RefundResource();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transaction_id")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instane = new KnetikcloudSdk.RefundResource();
      //expect(instance).to.be();
    });

  });

}));
