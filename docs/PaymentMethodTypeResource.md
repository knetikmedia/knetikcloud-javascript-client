# KnetikCloud.PaymentMethodTypeResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The id of the payment method type | 
**invoice_processing_hours** | **Number** | The maximum timelimit in hours for an invoice in the processing status while waiting on this payment method type. Defaults to the global config invoice.processing_expiration_hours if null | [optional] 
**name** | **String** | The name of the payment method type | 
**supports_capture** | **Boolean** | Whether the payment handler supports the authorize and capture flow | [optional] 
**supports_partial** | **Boolean** | Whether the payment handler supports paying for part of an invoice, rather than the full grand_total | [optional] 
**supports_rebill** | **Boolean** | Whether the payment handler supports rebilling the method later (for saved payments or subscriptions) | [optional] 
**supports_refunds** | **Boolean** | Whether the payment handler supports refunding | [optional] 


