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
    instance = new KnetikCloud.Payments_PayPalClassicApi();
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

  describe('Payments_PayPalClassicApi', function() {
    describe('createPayPalBillingAgreementUrl', function() {
      it('should call createPayPalBillingAgreementUrl successfully', function(done) {
        //uncomment below and update the code to test createPayPalBillingAgreementUrl
        //instance.createPayPalBillingAgreementUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPayPalExpressCheckout', function() {
      it('should call createPayPalExpressCheckout successfully', function(done) {
        //uncomment below and update the code to test createPayPalExpressCheckout
        //instance.createPayPalExpressCheckout(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('finalizePayPalBillingAgreement', function() {
      it('should call finalizePayPalBillingAgreement successfully', function(done) {
        //uncomment below and update the code to test finalizePayPalBillingAgreement
        //instance.finalizePayPalBillingAgreement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('finalizePayPalCheckout', function() {
      it('should call finalizePayPalCheckout successfully', function(done) {
        //uncomment below and update the code to test finalizePayPalCheckout
        //instance.finalizePayPalCheckout(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));