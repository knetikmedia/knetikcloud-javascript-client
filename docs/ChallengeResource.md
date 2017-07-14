# knetikcloud-sdk.ChallengeResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activities** | **Number** | The number of activities allowed to this challenge | [optional] 
**additionalProperties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type | [optional] 
**campaignId** | **Number** | The id of the campaign this challenge is a part of. The challenge must be tied to an active campaign before it will spawn events | [optional] 
**copyOf** | **Number** | The ID of the original challenge it was copied from | [optional] 
**createdDate** | **Number** | The date/time this resource was created in seconds since unix epoch | [optional] 
**endDate** | **Number** | The end date of this challenge in seconds since epoch. required if part of a campaign | [optional] 
**id** | **Number** | The unique ID for that resource | [optional] 
**leaderboardStrategy** | **String** | The strategy for calculating the leaderboard. Defaults to highest score. Value MUST come from the list of available strategies from the Leaderboard Service. | [optional] 
**longDescription** | **String** | The user friendly name of that resource. Defaults to blank string | [optional] 
**name** | **String** | The user friendly name of that resource | 
**nextEventDate** | **Number** | The next date this challenge will be occur in seconds since epoch | [optional] 
**rewardLagMinutes** | **Number** | The number of minutes minimum to wait at the end of this challenge before running rewards, to allow activities to complete | [optional] 
**rewardSet** | [**RewardSetResource**](RewardSetResource.md) | The rewards to give at the end of the challenge. When creating/updating only id is used. Reward set must be pre-existing | [optional] 
**schedule** | [**Schedule**](Schedule.md) | The repeat schedule for the challenge | [optional] 
**shortDescription** | **String** | The user friendly name of that resource. Defaults to blank string | [optional] 
**startDate** | **Number** | The start date of this challenge in seconds since epoch. required if part of a campaign | [optional] 
**template** | **String** | A challenge template this challenge is validated against (private). May be null and no validation of additional_properties will be done | [optional] 
**updatedDate** | **Number** | The date/time this resource was last updated in seconds since unix epoch | [optional] 


