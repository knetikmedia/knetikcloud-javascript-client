# KnetikCloud.CartSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **Number** | The date/time this resource was created in seconds since unix epoch | [optional] 
**currency_code** | **String** | The unique id code for the currency used in the cart | [optional] 
**grand_total** | **Number** | The grand total for the cart | [optional] 
**id** | **String** | The unique ID for the cart | [optional] 
**invoice_id** | **Number** | The ID of the invoice associated with this cart | [optional] 
**items_in_cart** | **Number** | The number of items in the cart | [optional] 
**status** | **String** | The status of the cart | [optional] 
**subtotal** | **Number** | The subtotal of all items in the cart | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `active` (value: `"active"`)

* `processing` (value: `"processing"`)

* `closed` (value: `"closed"`)

* `onhold` (value: `"onhold"`)




