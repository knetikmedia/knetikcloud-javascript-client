# KnetikCloud.PropertyFieldResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | A description of the field | [optional] 
**inner_type** | **String** | The type of values within a &#39;list&#39; type field | [optional] 
**inner_type_fields** | [**[PropertyFieldResource]**](PropertyFieldResource.md) | A description of fields within objects within a &#39;list&#39; type field, when inner_type is &#39;object&#39; | [optional] 
**name** | **String** | The name of the field | [optional] 
**required** | **Boolean** | Whether the field is required | [optional] 
**type** | **String** | The type of the field | [optional] 
**valid_values** | **[String]** | A list of valid values for &#39;enum&#39; type fields | [optional] 


<a name="InnerTypeEnum"></a>
## Enum: InnerTypeEnum


* `integer` (value: `"integer"`)

* `number` (value: `"number"`)

* `bool` (value: `"bool"`)

* `string` (value: `"string"`)

* `enumeration` (value: `"enumeration"`)

* `list` (value: `"list"`)

* `object` (value: `"object"`)

* `definition` (value: `"definition"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `integer` (value: `"integer"`)

* `number` (value: `"number"`)

* `bool` (value: `"bool"`)

* `string` (value: `"string"`)

* `enumeration` (value: `"enumeration"`)

* `list` (value: `"list"`)

* `object` (value: `"object"`)

* `definition` (value: `"definition"`)




