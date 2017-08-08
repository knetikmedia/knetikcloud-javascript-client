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
    factory(root.expect, root.KnetikCloud);
  }
}(this, function(expect, KnetikCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikCloud.ContentArticlesApi();
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

  describe('ContentArticlesApi', function() {
    describe('createArticle', function() {
      it('should call createArticle successfully', function(done) {
        //uncomment below and update the code to test createArticle
        //instance.createArticle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createArticleTemplate', function() {
      it('should call createArticleTemplate successfully', function(done) {
        //uncomment below and update the code to test createArticleTemplate
        //instance.createArticleTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteArticle', function() {
      it('should call deleteArticle successfully', function(done) {
        //uncomment below and update the code to test deleteArticle
        //instance.deleteArticle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteArticleTemplate', function() {
      it('should call deleteArticleTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteArticleTemplate
        //instance.deleteArticleTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticle', function() {
      it('should call getArticle successfully', function(done) {
        //uncomment below and update the code to test getArticle
        //instance.getArticle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticleTemplate', function() {
      it('should call getArticleTemplate successfully', function(done) {
        //uncomment below and update the code to test getArticleTemplate
        //instance.getArticleTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticleTemplates', function() {
      it('should call getArticleTemplates successfully', function(done) {
        //uncomment below and update the code to test getArticleTemplates
        //instance.getArticleTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticles', function() {
      it('should call getArticles successfully', function(done) {
        //uncomment below and update the code to test getArticles
        //instance.getArticles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateArticle', function() {
      it('should call updateArticle successfully', function(done) {
        //uncomment below and update the code to test updateArticle
        //instance.updateArticle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateArticleTemplate', function() {
      it('should call updateArticleTemplate successfully', function(done) {
        //uncomment below and update the code to test updateArticleTemplate
        //instance.updateArticleTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
