# KnetikCloud.InventorySubscriptionResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bill_date** | **Number** | The date the subscription will be billed | [optional] 
**credit** | **Number** | A credit of money already applied to a subscription for the next bill, or a debt if negative | [optional] 
**credit_log** | [**[SubscriptionCreditResource]**](SubscriptionCreditResource.md) | A record of past and present credit/debt changes | [optional] 
**grace_end** | **Number** | The date the grace period ends | [optional] 
**inventory_id** | **Number** | The id of the inventory | [optional] 
**inventory_status** | **String** | The inventory status object | [optional] 
**item_id** | **Number** | The id of the item | [optional] 
**payment_method** | [**PaymentMethodResource**](PaymentMethodResource.md) | The payment method object | [optional] 
**price_override** | **Number** | The recurring price that has been set to override the base price. Null if not overriding | [optional] 
**price_override_reason** | **String** | An explanation for the reason the price is being overridden | [optional] 
**recurring_price** | **Number** | The default recurring price | [optional] 
**sku** | **String** | The recurring sku of the subscription | [optional] 
**start_date** | **Number** | The date the subscription will start | [optional] 
**subscription_status** | **Number** | The status of the subscription | [optional] 
**user** | [**SimpleUserResource**](SimpleUserResource.md) | The user | [optional] 


<a name="InventoryStatusEnum"></a>
## Enum: InventoryStatusEnum


* `pending` (value: `"pending"`)

* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)




