# KnetikCloud.ChatMessageResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **Object** | The content of the message | 
**created_date** | **Number** | The date the chat message was created | [optional] 
**edited** | **Boolean** | Whether the message has been edited | [optional] 
**id** | **String** | The id for this message | [optional] 
**message_type** | **String** | The type of the message set by the client | 
**recipient_id** | **String** | The id of the recipient: user id or topic id | 
**recipient_type** | **String** | The recipient type of the message | 
**sender_id** | **Number** | The id of the sender | [optional] 
**thread_id** | **String** | The id of the thread | [optional] 
**updated_date** | **Number** | The date the chat message was updated | [optional] 


<a name="RecipientTypeEnum"></a>
## Enum: RecipientTypeEnum


* `user` (value: `"user"`)

* `topic` (value: `"topic"`)




