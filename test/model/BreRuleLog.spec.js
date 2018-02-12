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
    instance = new KnetikCloud.BreRuleLog();
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

  describe('BreRuleLog', function() {
    it('should create an instance of BreRuleLog', function() {
      // uncomment below and update the code to test BreRuleLog
      //var instane = new KnetikCloud.BreRuleLog();
      //expect(instance).to.be.a(KnetikCloud.BreRuleLog);
    });

    it('should have the property actions (base name: "actions")', function() {
      // uncomment below and update the code to test the property actions
      //var instane = new KnetikCloud.BreRuleLog();
      //expect(instance).to.be();
    });

    it('should have the property ran (base name: "ran")', function() {
      // uncomment below and update the code to test the property ran
      //var instane = new KnetikCloud.BreRuleLog();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new KnetikCloud.BreRuleLog();
      //expect(instance).to.be();
    });

    it('should have the property ruleEndDate (base name: "rule_end_date")', function() {
      // uncomment below and update the code to test the property ruleEndDate
      //var instane = new KnetikCloud.BreRuleLog();
      //expect(instance).to.be();
    });

    it('should have the property ruleId (base name: "rule_id")', function() {
      // uncomment below and update the code to test the property ruleId
      //var instane = new KnetikCloud.BreRuleLog();
      //expect(instance).to.be();
    });

    it('should have the property ruleName (base name: "rule_name")', function() {
      // uncomment below and update the code to test the property ruleName
      //var instane = new KnetikCloud.BreRuleLog();
      //expect(instance).to.be();
    });

    it('should have the property ruleStartDate (base name: "rule_start_date")', function() {
      // uncomment below and update the code to test the property ruleStartDate
      //var instane = new KnetikCloud.BreRuleLog();
      //expect(instance).to.be();
    });

  });

}));
