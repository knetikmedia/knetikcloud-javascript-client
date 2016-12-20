/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AnswerResource', 'model/NestedCategory', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnswerResource'), require('./NestedCategory'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.QuestionResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.AnswerResource, root.KnetikPlatformApiDocumentationLatest.NestedCategory, root.KnetikPlatformApiDocumentationLatest.Property);
  }
}(this, function(ApiClient, AnswerResource, NestedCategory, Property) {
  'use strict';




  /**
   * The QuestionResource model module.
   * @module model/QuestionResource
   * @version Latest
   */

  /**
   * Constructs a new <code>QuestionResource</code>.
   * @alias module:model/QuestionResource
   * @class
   * @param category {module:model/NestedCategory} The category for the question
   * @param difficulty {Number} The difficulty of the question
   * @param question {module:model/Property} The question. Different 'type' values indicate different structures as the question may be test, image, etc. See information on additional properties for the list and their structures
   */
  var exports = function(category, difficulty, question) {
    var _this = this;



    _this['category'] = category;

    _this['difficulty'] = difficulty;



    _this['question'] = question;






  };

  /**
   * Constructs a <code>QuestionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuestionResource} obj Optional instance to populate.
   * @return {module:model/QuestionResource} The populated <code>QuestionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('answers')) {
        obj['answers'] = ApiClient.convertToType(data['answers'], [AnswerResource]);
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = NestedCategory.constructFromObject(data['category']);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('difficulty')) {
        obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('import_id')) {
        obj['import_id'] = ApiClient.convertToType(data['import_id'], 'Number');
      }
      if (data.hasOwnProperty('published_date')) {
        obj['published_date'] = ApiClient.convertToType(data['published_date'], 'Number');
      }
      if (data.hasOwnProperty('question')) {
        obj['question'] = Property.constructFromObject(data['question']);
      }
      if (data.hasOwnProperty('source1')) {
        obj['source1'] = ApiClient.convertToType(data['source1'], 'String');
      }
      if (data.hasOwnProperty('source2')) {
        obj['source2'] = ApiClient.convertToType(data['source2'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('vendor')) {
        obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
      }
    }
    return obj;
  }

  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The list of available answers
   * @member {Array.<module:model/AnswerResource>} answers
   */
  exports.prototype['answers'] = undefined;
  /**
   * The category for the question
   * @member {module:model/NestedCategory} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The difficulty of the question
   * @member {Number} difficulty
   */
  exports.prototype['difficulty'] = undefined;
  /**
   * The unique ID for that resource
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the import job that created the question, or null if not from an import
   * @member {Number} import_id
   */
  exports.prototype['import_id'] = undefined;
  /**
   * When the question becomes available, null for never, in seconds since epoch
   * @member {Number} published_date
   */
  exports.prototype['published_date'] = undefined;
  /**
   * The question. Different 'type' values indicate different structures as the question may be test, image, etc. See information on additional properties for the list and their structures
   * @member {module:model/Property} question
   */
  exports.prototype['question'] = undefined;
  /**
   * The first source of the question
   * @member {String} source1
   */
  exports.prototype['source1'] = undefined;
  /**
   * The second source of the question
   * @member {String} source2
   */
  exports.prototype['source2'] = undefined;
  /**
   * The list of tags
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * A question template this question is validated against (private). May be null and no validation of additional_properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The supplier of the question
   * @member {String} vendor
   */
  exports.prototype['vendor'] = undefined;



  return exports;
}));


