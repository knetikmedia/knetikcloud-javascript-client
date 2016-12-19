# KnetikPlatformApiDocumentationLatest.MessagingApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendRawEmailUsingPOST**](MessagingApi.md#sendRawEmailUsingPOST) | **POST** /messaging/raw-email | Send a raw email to one or more users
[**sendRawSMSUsingPOST**](MessagingApi.md#sendRawSMSUsingPOST) | **POST** /messaging/raw-sms | Send a raw SMS
[**sendRawSMSUsingPOST1**](MessagingApi.md#sendRawSMSUsingPOST1) | **POST** /messaging/templated-sms | Send a new templated SMS
[**sendTemplateEmailUsingPOST**](MessagingApi.md#sendTemplateEmailUsingPOST) | **POST** /messaging/templated-email | Send a templated email to one or more users


<a name="sendRawEmailUsingPOST"></a>
# **sendRawEmailUsingPOST**
> sendRawEmailUsingPOST(opts)

Send a raw email to one or more users

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MessagingApi();

var opts = { 
  'rawEmailResource': new KnetikPlatformApiDocumentationLatest.RawEmailResource() // RawEmailResource | The new raw email to be sent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendRawEmailUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rawEmailResource** | [**RawEmailResource**](RawEmailResource.md)| The new raw email to be sent | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="sendRawSMSUsingPOST"></a>
# **sendRawSMSUsingPOST**
> sendRawSMSUsingPOST(opts)

Send a raw SMS

Sends a raw SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MessagingApi();

var opts = { 
  'rawSMSResource': new KnetikPlatformApiDocumentationLatest.RawSMSResource() // RawSMSResource | The new raw SMS to be sent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendRawSMSUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rawSMSResource** | [**RawSMSResource**](RawSMSResource.md)| The new raw SMS to be sent | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="sendRawSMSUsingPOST1"></a>
# **sendRawSMSUsingPOST1**
> sendRawSMSUsingPOST1(opts)

Send a new templated SMS

Sends a templated SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MessagingApi();

var opts = { 
  'templateSMSResource': new KnetikPlatformApiDocumentationLatest.TemplateSMSResource() // TemplateSMSResource | The new template SMS to be sent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendRawSMSUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateSMSResource** | [**TemplateSMSResource**](TemplateSMSResource.md)| The new template SMS to be sent | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="sendTemplateEmailUsingPOST"></a>
# **sendTemplateEmailUsingPOST**
> sendTemplateEmailUsingPOST(opts)

Send a templated email to one or more users

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.MessagingApi();

var opts = { 
  'messageResource': new KnetikPlatformApiDocumentationLatest.TemplateEmailResource() // TemplateEmailResource | The new template email to be sent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendTemplateEmailUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageResource** | [**TemplateEmailResource**](TemplateEmailResource.md)| The new template email to be sent | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

