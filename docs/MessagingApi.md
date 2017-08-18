# KnetikCloud.MessagingApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendRawEmail**](MessagingApi.md#sendRawEmail) | **POST** /messaging/raw-email | Send a raw email to one or more users
[**sendRawSMS**](MessagingApi.md#sendRawSMS) | **POST** /messaging/raw-sms | Send a raw SMS
[**sendTemplatedEmail**](MessagingApi.md#sendTemplatedEmail) | **POST** /messaging/templated-email | Send a templated email to one or more users
[**sendTemplatedSMS**](MessagingApi.md#sendTemplatedSMS) | **POST** /messaging/templated-sms | Send a new templated SMS


<a name="sendRawEmail"></a>
# **sendRawEmail**
> sendRawEmail(opts)

Send a raw email to one or more users

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.MessagingApi();

var opts = { 
  'rawEmailResource': new KnetikCloud.RawEmailResource() // RawEmailResource | The new raw email to be sent
};
apiInstance.sendRawEmail(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rawEmailResource** | [**RawEmailResource**](RawEmailResource.md)| The new raw email to be sent | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendRawSMS"></a>
# **sendRawSMS**
> sendRawSMS(opts)

Send a raw SMS

Sends a raw SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.MessagingApi();

var opts = { 
  'rawSMSResource': new KnetikCloud.RawSMSResource() // RawSMSResource | The new raw SMS to be sent
};
apiInstance.sendRawSMS(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rawSMSResource** | [**RawSMSResource**](RawSMSResource.md)| The new raw SMS to be sent | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTemplatedEmail"></a>
# **sendTemplatedEmail**
> sendTemplatedEmail(opts)

Send a templated email to one or more users

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.MessagingApi();

var opts = { 
  'messageResource': new KnetikCloud.TemplateEmailResource() // TemplateEmailResource | The new template email to be sent
};
apiInstance.sendTemplatedEmail(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageResource** | [**TemplateEmailResource**](TemplateEmailResource.md)| The new template email to be sent | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTemplatedSMS"></a>
# **sendTemplatedSMS**
> sendTemplatedSMS(opts)

Send a new templated SMS

Sends a templated SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.MessagingApi();

var opts = { 
  'templateSMSResource': new KnetikCloud.TemplateSMSResource() // TemplateSMSResource | The new template SMS to be sent
};
apiInstance.sendTemplatedSMS(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateSMSResource** | [**TemplateSMSResource**](TemplateSMSResource.md)| The new template SMS to be sent | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

