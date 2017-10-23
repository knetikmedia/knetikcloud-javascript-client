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
    instance = new KnetikCloud.ActivitiesApi();
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

  describe('ActivitiesApi', function() {
    describe('createActivity', function() {
      it('should call createActivity successfully', function(done) {
        //uncomment below and update the code to test createActivity
        //instance.createActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createActivityOccurrence', function() {
      it('should call createActivityOccurrence successfully', function(done) {
        //uncomment below and update the code to test createActivityOccurrence
        //instance.createActivityOccurrence(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createActivityTemplate', function() {
      it('should call createActivityTemplate successfully', function(done) {
        //uncomment below and update the code to test createActivityTemplate
        //instance.createActivityTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteActivity', function() {
      it('should call deleteActivity successfully', function(done) {
        //uncomment below and update the code to test deleteActivity
        //instance.deleteActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteActivityTemplate', function() {
      it('should call deleteActivityTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteActivityTemplate
        //instance.deleteActivityTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActivities', function() {
      it('should call getActivities successfully', function(done) {
        //uncomment below and update the code to test getActivities
        //instance.getActivities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActivity', function() {
      it('should call getActivity successfully', function(done) {
        //uncomment below and update the code to test getActivity
        //instance.getActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActivityOccurrenceDetails', function() {
      it('should call getActivityOccurrenceDetails successfully', function(done) {
        //uncomment below and update the code to test getActivityOccurrenceDetails
        //instance.getActivityOccurrenceDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActivityTemplate', function() {
      it('should call getActivityTemplate successfully', function(done) {
        //uncomment below and update the code to test getActivityTemplate
        //instance.getActivityTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActivityTemplates', function() {
      it('should call getActivityTemplates successfully', function(done) {
        //uncomment below and update the code to test getActivityTemplates
        //instance.getActivityTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listActivityOccurrences', function() {
      it('should call listActivityOccurrences successfully', function(done) {
        //uncomment below and update the code to test listActivityOccurrences
        //instance.listActivityOccurrences(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setActivityOccurrenceResults', function() {
      it('should call setActivityOccurrenceResults successfully', function(done) {
        //uncomment below and update the code to test setActivityOccurrenceResults
        //instance.setActivityOccurrenceResults(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateActivity', function() {
      it('should call updateActivity successfully', function(done) {
        //uncomment below and update the code to test updateActivity
        //instance.updateActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateActivityOccurrence', function() {
      it('should call updateActivityOccurrence successfully', function(done) {
        //uncomment below and update the code to test updateActivityOccurrence
        //instance.updateActivityOccurrence(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateActivityTemplate', function() {
      it('should call updateActivityTemplate successfully', function(done) {
        //uncomment below and update the code to test updateActivityTemplate
        //instance.updateActivityTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
