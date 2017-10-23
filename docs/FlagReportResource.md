# KnetikCloud.FlagReportResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **String** | The context of that resource  | [optional] 
**context_id** | **String** | The context ID of that resource | [optional] 
**created_date** | **Number** | The date/time this resource was created in seconds since epoch | [optional] 
**id** | **Number** | The unique ID for that resource | [optional] 
**reason** | **String** | The reason of that resource required only in case of active resolution | [optional] 
**resolution** | **String** | The resolution of that resource | 
**resolved** | **Number** | The date/time this report was resolved in seconds since epoch. Null if not resolved yet | [optional] 
**updated_date** | **Number** | The date/time this resource was last updated in seconds since epoch | [optional] 


<a name="ResolutionEnum"></a>
## Enum: ResolutionEnum


* `banned` (value: `"banned"`)

* `ignored` (value: `"ignored"`)




