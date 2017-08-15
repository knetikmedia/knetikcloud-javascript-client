# KnetikCloud.SocialFacebookApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkAccounts**](SocialFacebookApi.md#linkAccounts) | **POST** /social/facebook/users | Link facebook account


<a name="linkAccounts"></a>
# **linkAccounts**
> linkAccounts(opts)

Link facebook account

Links the current user account to a facebook account, using the acccess token from facebook. Can also be used to update the access token after it has expired.

### Example
```javascript
import KnetikCloud from 'knetikcloud-sdk';

let apiInstance = new KnetikCloud.SocialFacebookApi();

let opts = { 
  'facebookToken': new KnetikCloud.FacebookToken() // FacebookToken | The token from facebook
};
apiInstance.linkAccounts(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **facebookToken** | [**FacebookToken**](FacebookToken.md)| The token from facebook | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

