# KnetikCloud.PollResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Whether the poll is active | 
**additional_properties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type | [optional] 
**answers** | [**[PollAnswerResource]**](PollAnswerResource.md) | The answers to the poll | 
**category** | [**NestedCategory**](NestedCategory.md) | The category for the poll | 
**created_date** | **Number** | The date/time this resource was created in seconds since unix epoch | [optional] 
**id** | **String** | The id of the poll | [optional] 
**tags** | **[String]** | The tags for the poll | [optional] 
**template** | **String** | A poll template this poll is validated against (private). May be null and no validation of additional_properties will be done | [optional] 
**text** | **String** | The text of the poll | 
**type** | **String** | The media type of the poll | 
**updated_date** | **Number** | The date/time this resource was last updated in seconds since unix epoch | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `TEXT` (value: `"TEXT"`)

* `IMAGE` (value: `"IMAGE"`)

* `VIDEO` (value: `"VIDEO"`)

* `AUDIO` (value: `"AUDIO"`)




