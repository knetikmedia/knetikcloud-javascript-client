# KnetikcloudSdk.Cart

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableShippingOptions** | [**[CartShippingOption]**](CartShippingOption.md) |  | [optional] 
**countryTax** | **Number** |  | [optional] 
**coupons** | [**[CouponDefinition]**](CouponDefinition.md) |  | [optional] 
**created** | **Number** |  | [optional] 
**currencyCode** | **String** |  | [optional] 
**discountTotal** | **Number** |  | [optional] 
**errorCode** | **Number** |  | [optional] 
**errorMessage** | **String** |  | [optional] 
**grandTotal** | **Number** |  | [optional] 
**id** | **String** |  | [optional] 
**invoiceId** | **Number** |  | [optional] 
**items** | [**[CartLineItem]**](CartLineItem.md) |  | [optional] 
**owner** | **Number** |  | [optional] 
**selectedShippingOptions** | [**[CartShippingOption]**](CartShippingOption.md) |  | [optional] 
**shippable** | **Boolean** |  | [optional] 
**shippingAddress** | [**CartShippingAddressRequest**](CartShippingAddressRequest.md) |  | [optional] 
**shippingCost** | **Number** |  | [optional] 
**stateTax** | **Number** |  | [optional] 
**status** | **String** |  | [optional] 
**subtotal** | **Number** |  | [optional] 
**updated** | **Number** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `active` (value: `"active"`)

* `processing` (value: `"processing"`)

* `closed` (value: `"closed"`)

* `onhold` (value: `"onhold"`)




