# KnetikCloud.SubscriptionResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_properties** | [**{String: Property}**](Property.md) | The additional properties for the subscription | [optional] 
**availability** | **String** | Who can purchase this subscription | [optional] 
**behaviors** | [**[Behavior]**](Behavior.md) | The behaviors linked to the item, describing various options and interactions. May not be included in item lists | [optional] 
**category** | **String** | The category of the subscription | [optional] 
**consolidation_day_of_month** | **Number** | The day of the month 1..31 this subscription will renew | [optional] 
**created_date** | **Number** | The date the item was created, unix timestamp in seconds | [optional] 
**displayable** | **Boolean** | Whether or not the item is currently visible to users. Does not block purchase; Use store_start or store_end to block purchase.  Default &#x3D; true | [optional] 
**geo_country_list** | **[String]** | The geo country list for the subscription | [optional] 
**geo_policy_type** | **String** | The geo policy type for the subscription | [optional] 
**id** | **Number** | The id of the item | [optional] 
**long_description** | **String** | A long description of the subscription | [optional] 
**name** | **String** | The name of the item | 
**plans** | [**[SubscriptionPlanResource]**](SubscriptionPlanResource.md) | The billing options for this subscription | [optional] 
**short_description** | **String** | A short description of the subscription.  Max 255 characters | [optional] 
**sort** | **Number** | A number to use in sorting items.  Default 500 | [optional] 
**store_end** | **Number** | Used to schedule removal from store.  Null means the subscription will never be removed | [optional] 
**store_start** | **Number** | Used to schedule appearance in store.  Null means the subscription will appear now | [optional] 
**tags** | **[String]** | The tags for the subscription | [optional] 
**template** | **String** | The template being used | [optional] 
**unique_key** | **String** | The unique key of the subscription | [optional] 
**updated_date** | **Number** | The date the item was last updated | [optional] 
**vendor_id** | **Number** | The id of the vendor | 


<a name="AvailabilityEnum"></a>
## Enum: AvailabilityEnum


* `all` (value: `"all"`)

* `new_subscribers` (value: `"new_subscribers"`)




<a name="GeoPolicyTypeEnum"></a>
## Enum: GeoPolicyTypeEnum


* `whitelist` (value: `"whitelist"`)

* `blacklist` (value: `"blacklist"`)




