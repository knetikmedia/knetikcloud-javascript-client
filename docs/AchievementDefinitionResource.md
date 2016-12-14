# KnetikPlatformApiDocumentationLatest.AchievementDefinitionResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalProperties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this resource type | [optional] 
**createdDate** | **Number** | The date/time this resource was created in seconds since unix epoch | [optional] 
**description** | **String** | The description of the achievement. Must be at least 2 characters in length. | [optional] 
**hidden** | **Boolean** | Whether the achievement is hidden from the user | 
**maxValue** | **Number** | The maximum value for the achievement definition. Must be greater than or equal to min_value. | 
**minValue** | **Number** | The minimum value for the achievement definition. Must be greater than zero. | 
**name** | **String** | The name of the achievement. Must be at least 6 characters in length. IMMUTABLE | 
**ruleId** | **String** | The id of the rule generated for this achievement | [optional] 
**tags** | **[String]** | The tags for the achievement definition | [optional] 
**template** | **String** | An achievement template this achievement is validated against (private). May be null and no validation of additional_properties will be done | [optional] 
**triggerEventName** | **String** | The name of the trigger event associated with this achievement | [optional] 
**updatedDate** | **Number** | The date/time this resource was last updated in seconds since unix epoch | [optional] 


