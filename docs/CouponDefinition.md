# KnetikPlatformApiDocumentationLatest.CouponDefinition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**discountType** | **String** |  | [optional] 
**exclusive** | **Boolean** |  | [optional] 
**maxDiscount** | **Number** |  | [optional] 
**maxQuantity** | **Number** |  | [optional] 
**minCartTotal** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**selfExclusive** | **Boolean** |  | [optional] 
**targetItemId** | **Number** |  | [optional] 
**type** | **String** |  | [optional] 
**validForTags** | **[String]** |  | [optional] 
**value** | **Number** |  | [optional] 
**vendorId** | **Number** |  | [optional] 


<a name="DiscountTypeEnum"></a>
## Enum: DiscountTypeEnum


* `value` (value: `"value"`)

* `percentage` (value: `"percentage"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `cart` (value: `"coupon_cart"`)

* `single_item` (value: `"coupon_single_item"`)

* `voucher` (value: `"coupon_voucher"`)

* `vendor` (value: `"coupon_vendor"`)

* `tag` (value: `"coupon_tag"`)




