# KnetikCloud.WalletTransactionResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **Number** | The new balance of the wallet after the transaction | [optional] 
**create_date** | **Number** | The unix timestamp in seconds of the transaction | [optional] 
**currency_code** | **String** | The code of the currency for the transaction | [optional] 
**details** | **String** | The specific details of the transaction, such as a message from the admin that created it | [optional] 
**id** | **Number** | The id of the transaction | [optional] 
**invoice_id** | **Number** | The id of the invoice that spawned the transaction, if any | [optional] 
**is_refunded** | **Boolean** | Whether the transaction has been refunded | [optional] 
**response** | **String** | The response | [optional] 
**source** | **String** | The root source of the transaction | [optional] 
**successful** | **Boolean** | If the transaction was successful | [optional] 
**transaction_id** | **String** | The payment gateway (external) transaction ID | [optional] 
**type** | **String** | The general type of the transaction | [optional] 
**type_hint** | **String** | The table name of the subclass | [optional] 
**user** | [**SimpleUserResource**](SimpleUserResource.md) | The owner of the wallet | [optional] 
**value** | **Number** | The amount of the transaction, positive if a gain, negative if an expenditure | [optional] 
**wallet_id** | **Number** | The id of the wallet this transaction affected | [optional] 


<a name="SourceEnum"></a>
## Enum: SourceEnum


* `digital` (value: `"digital"`)

* `physical` (value: `"physical"`)




