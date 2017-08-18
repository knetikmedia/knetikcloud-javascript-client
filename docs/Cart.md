# KnetikCloud.Cart

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_shipping_options** | [**[CartShippingOption]**](CartShippingOption.md) |  | [optional] 
**country_tax** | **Number** |  | [optional] 
**coupons** | [**[CouponDefinition]**](CouponDefinition.md) |  | [optional] 
**created** | **Number** |  | [optional] 
**currency_code** | **String** |  | [optional] 
**discount_total** | **Number** |  | [optional] 
**error_code** | **Number** |  | [optional] 
**error_message** | **String** |  | [optional] 
**grand_total** | **Number** |  | [optional] 
**id** | **String** |  | [optional] 
**invoice_id** | **Number** |  | [optional] 
**items** | [**[CartLineItem]**](CartLineItem.md) |  | [optional] 
**owner** | **Number** |  | [optional] 
**selected_shipping_options** | [**[CartShippingOption]**](CartShippingOption.md) |  | [optional] 
**shippable** | **Boolean** |  | [optional] 
**shipping_address** | [**CartShippingAddressRequest**](CartShippingAddressRequest.md) |  | [optional] 
**shipping_cost** | **Number** |  | [optional] 
**state_tax** | **Number** |  | [optional] 
**status** | **String** |  | [optional] 
**subtotal** | **Number** |  | [optional] 
**updated** | **Number** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `active` (value: `"active"`)

* `processing` (value: `"processing"`)

* `closed` (value: `"closed"`)

* `onhold` (value: `"onhold"`)




