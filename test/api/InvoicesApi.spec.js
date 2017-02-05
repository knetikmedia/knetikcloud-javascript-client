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
    instance = new KnetikPlatformApiDocumentationLatest.InvoicesApi();
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

  describe('InvoicesApi', function() {
    describe('createInvoiceUsingPOST', function() {
      it('should call createInvoiceUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createInvoiceUsingPOST
        //instance.createInvoiceUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoiceHistoryUsingGET', function() {
      it('should call getInvoiceHistoryUsingGET successfully', function(done) {
        //uncomment below and update the code to test getInvoiceHistoryUsingGET
        //instance.getInvoiceHistoryUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoiceUsingGET', function() {
      it('should call getInvoiceUsingGET successfully', function(done) {
        //uncomment below and update the code to test getInvoiceUsingGET
        //instance.getInvoiceUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLogsUsingGET', function() {
      it('should call getLogsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getLogsUsingGET
        //instance.getLogsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listFulFillmentStatusesUsingGET', function() {
      it('should call listFulFillmentStatusesUsingGET successfully', function(done) {
        //uncomment below and update the code to test listFulFillmentStatusesUsingGET
        //instance.listFulFillmentStatusesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPaymentStatusesUsingGET', function() {
      it('should call listPaymentStatusesUsingGET successfully', function(done) {
        //uncomment below and update the code to test listPaymentStatusesUsingGET
        //instance.listPaymentStatusesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('payInvoiceUsingPOST', function() {
      it('should call payInvoiceUsingPOST successfully', function(done) {
        //uncomment below and update the code to test payInvoiceUsingPOST
        //instance.payInvoiceUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setItemFulfillmentStatusUsingPUT', function() {
      it('should call setItemFulfillmentStatusUsingPUT successfully', function(done) {
        //uncomment below and update the code to test setItemFulfillmentStatusUsingPUT
        //instance.setItemFulfillmentStatusUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setOrderNotesUsingPUT', function() {
      it('should call setOrderNotesUsingPUT successfully', function(done) {
        //uncomment below and update the code to test setOrderNotesUsingPUT
        //instance.setOrderNotesUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setPaymentStatusUsingPUT', function() {
      it('should call setPaymentStatusUsingPUT successfully', function(done) {
        //uncomment below and update the code to test setPaymentStatusUsingPUT
        //instance.setPaymentStatusUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBillingInfoUsingPUT', function() {
      it('should call updateBillingInfoUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateBillingInfoUsingPUT
        //instance.updateBillingInfoUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
