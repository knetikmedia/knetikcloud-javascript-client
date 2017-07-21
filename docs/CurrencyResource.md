# KnetikPlatformApiDocumentationLatest.CurrencyResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Whether the currency is active. Default true | [optional] 
**code** | **String** | The unique id code for the currency. Maximum 5 characters | 
**createdDate** | **Number** | The unix timestamp in seconds the currency was added to the system | [optional] 
**factor** | **Number** | The decimal to multiply the system base currency (from config &#39;currency&#39;) to localize to this one. Should be 1 for the base currency itself. | 
**icon** | **String** | The url for an icon of the currency | [optional] 
**name** | **String** | The name of the currency | 
**type** | **String** | The type of currency. Default &#39;real&#39; | [optional] 
**updatedDate** | **Number** | The unix timestamp in seconds the currency was last updated in the system. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `real` (value: `"real"`)

* `virtual` (value: `"virtual"`)




