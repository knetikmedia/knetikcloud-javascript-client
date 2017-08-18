# KnetikCloud.StoreItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayable** | **Boolean** | Whether or not the item is currently displayable.  Default &#x3D; true | [optional] 
**geo_country_list** | **[String]** | A list of country ID to include in the blacklist/whitelist geo policy | [optional] 
**geo_policy_type** | **String** | Whether to use the geo_country_list as a black list or white list for item geographical availability | [optional] 
**shipping_tier** | **Number** | Provides the abstract shipping needs if this item is physical and can be shipped.  A value of zero means no shipping needed.  Default &#x3D; 0 | [optional] 
**skus** | [**[Sku]**](Sku.md) | The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart | 
**store_end** | **Number** | The date the item will leave the store, unix timestamp in seconds.  If set to null, item will never leave the store | [optional] 
**store_start** | **Number** | The date the item will appear in the store, unix timestamp in seconds.  If set to null, item will appear in store immediately | [optional] 
**vendor_id** | **Number** | The vendor who provides the item | 


<a name="GeoPolicyTypeEnum"></a>
## Enum: GeoPolicyTypeEnum


* `whitelist` (value: `"whitelist"`)

* `blacklist` (value: `"blacklist"`)




