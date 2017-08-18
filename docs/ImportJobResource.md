# KnetikCloud.ImportJobResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **String** | The id of the category to assign all questions in the import to | 
**created_date** | **Number** | The date the job was created in seconds since unix epoc | [optional] 
**id** | **Number** | The id of the job | [optional] 
**name** | **String** | A name for this import for later reference | 
**output** | [**[ImportJobOutputResource]**](ImportJobOutputResource.md) | Error information from validation | [optional] 
**record_count** | **Number** | The number of questions form the CSV file. Filled in after validation | [optional] 
**status** | **String** | The status of the job | [optional] 
**updated_date** | **Number** | The date the job was last updated in seconds since unix epoc | [optional] 
**url** | **String** | The url of a CSV file to pull trivia questions from. Cannot be changed after initial POST | 
**vendor** | **String** | The vendor who supplied this set of questions | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PENDING_VALIDATION` (value: `"PENDING_VALIDATION"`)

* `VALIDATING` (value: `"VALIDATING"`)

* `VALID` (value: `"VALID"`)

* `INVALID` (value: `"INVALID"`)

* `PENDING_PROCESS` (value: `"PENDING_PROCESS"`)

* `PROCESSING` (value: `"PROCESSING"`)

* `PROCESSED` (value: `"PROCESSED"`)

* `FAILED` (value: `"FAILED"`)




