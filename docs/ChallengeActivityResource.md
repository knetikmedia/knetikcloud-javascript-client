# KnetikPlatformApiDocumentationLatest.ChallengeActivityResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activityId** | **Number** | The id of the activity | 
**additionalProperties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type | [optional] 
**challengeId** | **Number** | The id of the challenge | [optional] 
**entitlement** | [**ActivityEntitlementResource**](ActivityEntitlementResource.md) | The entitlement item needed to participate in the activity as part of this event. Null indicates free entry. When creating/updating only id is used. Item must be pre-existing | [optional] 
**id** | **Number** | The unique ID for this resource | [optional] 
**rewardSet** | [**RewardSetResource**](RewardSetResource.md) | The rewards to give at the end of each occurence of the activity. When creating/updating only id is used. Reward set must be pre-existing | [optional] 
**settings** | [**[SelectedSettingResource]**](SelectedSettingResource.md) | The list of settings and the select options | [optional] 
**template** | **String** | A challenge activity template this challenge activity is validated against (private). May be null and no validation of additional_properties will be done | [optional] 


