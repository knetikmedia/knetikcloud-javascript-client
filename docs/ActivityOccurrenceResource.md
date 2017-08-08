# KnetikCloud.ActivityOccurrenceResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activityId** | **Number** | The id of the activity | 
**challengeActivityId** | **Number** | The id of the challenge activity (as part of the event, required if eventId set) | [optional] 
**createdDate** | **Number** | The date this occurrence was created, unix timestamp in seconds | [optional] 
**entitlement** | [**ActivityEntitlementResource**](ActivityEntitlementResource.md) | The entitlement item required to enter the occurrence. Required if not part of an event. Must come from the set of entitlement items listed in the activity | [optional] 
**eventId** | **Number** | The id of the event | [optional] 
**id** | **Number** | The id of the activity occurrence | [optional] 
**rewardStatus** | **String** | Indicate if the rewards have been given out already | [optional] 
**settings** | [**[SelectedSettingResource]**](SelectedSettingResource.md) | The values selected from the available settings defined for the activity. Ex: difficulty: hard. Can be left out if the activity is played during an event and the settings are already set at the event level. Ex: every monday, difficulty: hard, number of questions: 10, category: sport. Otherwise, the set must exactly match those of the activity. | [optional] 
**simulated** | **Boolean** | Whether this occurrence will be ran as a simulation. Simulations will not be rewarded. Useful for bot play or trials | [optional] 
**startDate** | **Number** | The date this occurrence was started, unix timestamp in seconds. null if not yet started | [optional] 
**status** | **String** | The current status of the occurrence (default: OPEN) | [optional] 
**updatedDate** | **Number** | The date this occurrence was last updated, unix timestamp in seconds | [optional] 
**users** | [**[ActivityUserResource]**](ActivityUserResource.md) | The list of users participating in this occurrence. Can only be set directly with ACTIVITIES_ADMIN permission | [optional] 


<a name="RewardStatusEnum"></a>
## Enum: RewardStatusEnum


* `pending` (value: `"pending"`)

* `failed` (value: `"failed"`)

* `complete` (value: `"complete"`)

* `partial` (value: `"partial"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `SETUP` (value: `"SETUP"`)

* `OPEN` (value: `"OPEN"`)

* `PLAYING` (value: `"PLAYING"`)

* `FINISHED` (value: `"FINISHED"`)

* `ABANDONED` (value: `"ABANDONED"`)




