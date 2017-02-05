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
    instance = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
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

  describe('InventorySubscriptionResource', function() {
    it('should create an instance of InventorySubscriptionResource', function() {
      // uncomment below and update the code to test InventorySubscriptionResource
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource);
    });

    it('should have the property billDate (base name: "bill_date")', function() {
      // uncomment below and update the code to test the property billDate
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property credit (base name: "credit")', function() {
      // uncomment below and update the code to test the property credit
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property creditLog (base name: "credit_log")', function() {
      // uncomment below and update the code to test the property creditLog
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property graceEnd (base name: "grace_end")', function() {
      // uncomment below and update the code to test the property graceEnd
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property inventoryId (base name: "inventory_id")', function() {
      // uncomment below and update the code to test the property inventoryId
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property inventoryStatus (base name: "inventory_status")', function() {
      // uncomment below and update the code to test the property inventoryStatus
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "item_id")', function() {
      // uncomment below and update the code to test the property itemId
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethod (base name: "payment_method")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property recurringPrice (base name: "recurring_price")', function() {
      // uncomment below and update the code to test the property recurringPrice
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionStatus (base name: "subscription_status")', function() {
      // uncomment below and update the code to test the property subscriptionStatus
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource();
      //expect(instance).to.be();
    });

  });

}));
