# KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billDate** | **Number** | The date the subscription will be billed | [optional] 
**credit** | **Number** | A credit of money already applied to a subscription for the next bill, or a debt if negative | [optional] 
**creditLog** | [**[SubscriptionCreditResource]**](SubscriptionCreditResource.md) | A record of past and present credit/debt changes | [optional] 
**graceEnd** | **Number** | The date the grace period ends | [optional] 
**inventoryId** | **Number** | The id of the inventory | [optional] 
**inventoryStatus** | **String** | The inventory status object | [optional] 
**itemId** | **Number** | The id of the item | [optional] 
**paymentMethod** | [**PaymentMethodResource**](PaymentMethodResource.md) | The payment method object | [optional] 
**priceOverride** | **Number** | The recurring price that has been set to override the base price. Null if not overriding | [optional] 
**priceOverrideReason** | **String** | An explanation for the reason the price is being overridden | [optional] 
**recurringPrice** | **Number** | The default recurring price | [optional] 
**sku** | **String** | The recurring sku of the subscription | [optional] 
**startDate** | **Number** | The date the subscription will start | [optional] 
**subscriptionStatus** | **Number** | The status of the subscription | [optional] 
**user** | [**SimpleUserResource**](SimpleUserResource.md) | The user | [optional] 


<a name="InventoryStatusEnum"></a>
## Enum: InventoryStatusEnum


* `pending` (value: `"pending"`)

* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)




