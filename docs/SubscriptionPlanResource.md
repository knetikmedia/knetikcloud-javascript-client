# KnetikCloud.SubscriptionPlanResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_properties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this subscription | [optional] 
**billing_cycle_length** | **Number** | The length of the billing cycle in number of billing cycle unit | 
**billing_cycle_unit** | **String** | The time period unit to apply to the length of billing cycles | 
**consolidated** | **Boolean** | Whether this plan will be renewed on the consolidated billing cycle | 
**currency_code** | **String** | The ISO3 currency code to use for the fees | 
**end_date** | **Number** | Used to schedule plan availability end date | [optional] 
**first_billing_cycle_length** | **Number** | Optional override for the length of the first billing cycle before the first recurring billing | [optional] 
**first_billing_cycle_unit** | **String** | The time period unit to apply to the length of the first billing cycle. Required when first_billing_cycle_length is specified | [optional] 
**grace_period** | **Number** | The number of late payment days before a subscription is canceled | 
**id** | **String** | The id of the plan used to generate the SKUs | [optional] 
**initial_fee** | **Number** | The fee charged when the subscription is purchased | 
**initial_sku** | **String** | The SKU to be used when purchasing the subscription through the cart | [optional] 
**late_payment_fee** | **Number** | The fee to add to the bill when an invoice has gone unpaid passed the grace period | 
**late_payment_sku** | **String** | The SKU that will show on the invoice when the subscription is delinquent | [optional] 
**locked** | **Boolean** | Whether this plan is locked because it has been purchased by at least one user.  When locked, a number of properties can no longer be changed | [optional] 
**max_bill_attempts** | **Number** | The number of charge attempts before the subscription becomes delinquent | 
**max_cycles** | **Number** | Maximum number of renewals. If a migration plan is provided, the subscription will automatically switch to it when this limit is reached | [optional] 
**migrate_to_plan** | **String** | Automatically migrate to the specified plan when the subscription is first renewed | [optional] 
**min_cycles** | **Number** | The minimum number of renewals to charge for | [optional] 
**name** | **String** | The name of the plan used to generate the SKUs | 
**published** | **Boolean** | Whether this plan is currently available | 
**reactivation_fee** | **Number** | The fee to charge when a suspended subscription is to be re-activated | 
**reactivation_sku** | **String** | The SKU that will show on the invoice when the subscription is re-activated after a suspension | [optional] 
**recurring_fee** | **Number** | The recurring fee to charge for each renewal | 
**recurring_sku** | **String** | The SKU that will show on the invoice when the subscription is activated | [optional] 
**start_date** | **Number** | Used to schedule plan availability start date | [optional] 


<a name="BillingCycleUnitEnum"></a>
## Enum: BillingCycleUnitEnum


* `millisecond` (value: `"millisecond"`)

* `second` (value: `"second"`)

* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)

* `week` (value: `"week"`)

* `month` (value: `"month"`)

* `year` (value: `"year"`)




<a name="FirstBillingCycleUnitEnum"></a>
## Enum: FirstBillingCycleUnitEnum


* `millisecond` (value: `"millisecond"`)

* `second` (value: `"second"`)

* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)

* `week` (value: `"week"`)

* `month` (value: `"month"`)

* `year` (value: `"year"`)




