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
    instance = new KnetikCloud.InvoiceResource();
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

  describe('InvoiceResource', function() {
    it('should create an instance of InvoiceResource', function() {
      // uncomment below and update the code to test InvoiceResource
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be.a(KnetikCloud.InvoiceResource);
    });

    it('should have the property billingAddress1 (base name: "billing_address1")', function() {
      // uncomment below and update the code to test the property billingAddress1
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property billingAddress2 (base name: "billing_address2")', function() {
      // uncomment below and update the code to test the property billingAddress2
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property billingCityName (base name: "billing_city_name")', function() {
      // uncomment below and update the code to test the property billingCityName
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property billingCountryName (base name: "billing_country_name")', function() {
      // uncomment below and update the code to test the property billingCountryName
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property billingFullName (base name: "billing_full_name")', function() {
      // uncomment below and update the code to test the property billingFullName
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property billingPostalCode (base name: "billing_postal_code")', function() {
      // uncomment below and update the code to test the property billingPostalCode
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property billingStateName (base name: "billing_state_name")', function() {
      // uncomment below and update the code to test the property billingStateName
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property cartId (base name: "cart_id")', function() {
      // uncomment below and update the code to test the property cartId
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property currentFulfillmentStatus (base name: "current_fulfillment_status")', function() {
      // uncomment below and update the code to test the property currentFulfillmentStatus
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property currentPaymentStatus (base name: "current_payment_status")', function() {
      // uncomment below and update the code to test the property currentPaymentStatus
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property discount (base name: "discount")', function() {
      // uncomment below and update the code to test the property discount
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property externalRef (base name: "external_ref")', function() {
      // uncomment below and update the code to test the property externalRef
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property fedTax (base name: "fed_tax")', function() {
      // uncomment below and update the code to test the property fedTax
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property grandTotal (base name: "grand_total")', function() {
      // uncomment below and update the code to test the property grandTotal
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property invoiceNumber (base name: "invoice_number")', function() {
      // uncomment below and update the code to test the property invoiceNumber
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property namePrefix (base name: "name_prefix")', function() {
      // uncomment below and update the code to test the property namePrefix
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property orderNotes (base name: "order_notes")', function() {
      // uncomment below and update the code to test the property orderNotes
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property parentInvoiceId (base name: "parent_invoice_id")', function() {
      // uncomment below and update the code to test the property parentInvoiceId
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodId (base name: "payment_method_id")', function() {
      // uncomment below and update the code to test the property paymentMethodId
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phone_number")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property remainingBalance (base name: "remaining_balance")', function() {
      // uncomment below and update the code to test the property remainingBalance
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property shipping (base name: "shipping")', function() {
      // uncomment below and update the code to test the property shipping
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress1 (base name: "shipping_address1")', function() {
      // uncomment below and update the code to test the property shippingAddress1
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress2 (base name: "shipping_address2")', function() {
      // uncomment below and update the code to test the property shippingAddress2
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property shippingCityName (base name: "shipping_city_name")', function() {
      // uncomment below and update the code to test the property shippingCityName
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property shippingCountryName (base name: "shipping_country_name")', function() {
      // uncomment below and update the code to test the property shippingCountryName
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property shippingFullName (base name: "shipping_full_name")', function() {
      // uncomment below and update the code to test the property shippingFullName
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property shippingPostalCode (base name: "shipping_postal_code")', function() {
      // uncomment below and update the code to test the property shippingPostalCode
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property shippingStateName (base name: "shipping_state_name")', function() {
      // uncomment below and update the code to test the property shippingStateName
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property stateTax (base name: "state_tax")', function() {
      // uncomment below and update the code to test the property stateTax
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property subtotal (base name: "subtotal")', function() {
      // uncomment below and update the code to test the property subtotal
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property vendorId (base name: "vendor_id")', function() {
      // uncomment below and update the code to test the property vendorId
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

    it('should have the property vendorName (base name: "vendor_name")', function() {
      // uncomment below and update the code to test the property vendorName
      //var instane = new KnetikCloud.InvoiceResource();
      //expect(instance).to.be();
    });

  });

}));
