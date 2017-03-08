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
    instance = new KnetikPlatformApiDocumentationLatest.QuestionResource();
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

  describe('QuestionResource', function() {
    it('should create an instance of QuestionResource', function() {
      // uncomment below and update the code to test QuestionResource
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.QuestionResource);
    });

    it('should have the property additionalProperties (base name: "additional_properties")', function() {
      // uncomment below and update the code to test the property additionalProperties
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property answers (base name: "answers")', function() {
      // uncomment below and update the code to test the property answers
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property difficulty (base name: "difficulty")', function() {
      // uncomment below and update the code to test the property difficulty
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property importId (base name: "import_id")', function() {
      // uncomment below and update the code to test the property importId
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property publishedDate (base name: "published_date")', function() {
      // uncomment below and update the code to test the property publishedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property question (base name: "question")', function() {
      // uncomment below and update the code to test the property question
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property source1 (base name: "source1")', function() {
      // uncomment below and update the code to test the property source1
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property source2 (base name: "source2")', function() {
      // uncomment below and update the code to test the property source2
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

    it('should have the property vendor (base name: "vendor")', function() {
      // uncomment below and update the code to test the property vendor
      //var instane = new KnetikPlatformApiDocumentationLatest.QuestionResource();
      //expect(instance).to.be();
    });

  });

}));
