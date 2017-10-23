# KnetikCloud.Participant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **Boolean** | Whether this user is the &#39;host&#39; of the occurrence and has increased access to settings/etc (default: false) | [optional] 
**status** | **String** | The current status of the user in the occurrence (default: present) | [optional] 
**user** | [**IdRef**](IdRef.md) | The user | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `present` (value: `"present"`)

* `ready` (value: `"ready"`)

* `left` (value: `"left"`)

* `surrendered` (value: `"surrendered"`)

* `disconnected` (value: `"disconnected"`)




