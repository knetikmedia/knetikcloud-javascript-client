# KnetikCloud.BRERuleEngineEventsApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendBREEvent**](BRERuleEngineEventsApi.md#sendBREEvent) | **POST** /bre/events | Fire a new event, based on an existing trigger


<a name="sendBREEvent"></a>
# **sendBREEvent**
> &#39;String&#39; sendBREEvent(opts)

Fire a new event, based on an existing trigger

Parameters within the event must match names and types from the trigger. Actual rule execution is asynchornous.  Returns request id, which will be used as the event id

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.BRERuleEngineEventsApi();

var opts = { 
  'breEvent': new KnetikCloud.BreEvent() // BreEvent | The BRE event object
};
apiInstance.sendBREEvent(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **breEvent** | [**BreEvent**](BreEvent.md)| The BRE event object | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

