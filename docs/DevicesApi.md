# KnetikCloud.DevicesApi

All URIs are relative to *https://sandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDeviceUsers**](DevicesApi.md#addDeviceUsers) | **POST** /devices/{id}/users | Add device users
[**createDevice**](DevicesApi.md#createDevice) | **POST** /devices | Create a device
[**deleteDevice**](DevicesApi.md#deleteDevice) | **DELETE** /devices/{id} | Delete a device
[**deleteDeviceUser**](DevicesApi.md#deleteDeviceUser) | **DELETE** /devices/{id}/users/{user_id} | Delete a device user
[**deleteDeviceUsers**](DevicesApi.md#deleteDeviceUsers) | **DELETE** /devices/{id}/users | Delete all device users
[**getDevice**](DevicesApi.md#getDevice) | **GET** /devices/{id} | Get a single device
[**getDevices**](DevicesApi.md#getDevices) | **GET** /devices | List and search devices
[**updateDevice**](DevicesApi.md#updateDevice) | **PUT** /devices/{id} | Update a device


<a name="addDeviceUsers"></a>
# **addDeviceUsers**
> DeviceResource addDeviceUsers(userResources, id)

Add device users

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.DevicesApi();

var userResources = [new KnetikCloud.SimpleUserResource()]; // [SimpleUserResource] | userResources

var id = 56; // Number | id

apiInstance.addDeviceUsers(userResources, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userResources** | [**[SimpleUserResource]**](SimpleUserResource.md)| userResources | 
 **id** | **Number**| id | 

### Return type

[**DeviceResource**](DeviceResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDevice"></a>
# **createDevice**
> DeviceResource createDevice(device)

Create a device

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.DevicesApi();

var device = new KnetikCloud.DeviceResource(); // DeviceResource | device

apiInstance.createDevice(device).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**DeviceResource**](DeviceResource.md)| device | 

### Return type

[**DeviceResource**](DeviceResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDevice"></a>
# **deleteDevice**
> deleteDevice(id)

Delete a device

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.DevicesApi();

var id = 56; // Number | id

apiInstance.deleteDevice(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDeviceUser"></a>
# **deleteDeviceUser**
> deleteDeviceUser(id, userId)

Delete a device user

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.DevicesApi();

var id = 56; // Number | The id of the device

var userId = 56; // Number | The user id of the device user

apiInstance.deleteDeviceUser(id, userId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the device | 
 **userId** | **Number**| The user id of the device user | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDeviceUsers"></a>
# **deleteDeviceUsers**
> deleteDeviceUsers(id, opts)

Delete all device users

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.DevicesApi();

var id = 56; // Number | The id of the device

var opts = { 
  'filterId': "filterId_example" // String | Filter for device users to delete with a user id in a given comma separated list of ids
};
apiInstance.deleteDeviceUsers(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the device | 
 **filterId** | **String**| Filter for device users to delete with a user id in a given comma separated list of ids | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDevice"></a>
# **getDevice**
> DeviceResource getDevice(id)

Get a single device

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.DevicesApi();

var id = 56; // Number | id

apiInstance.getDevice(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**DeviceResource**](DeviceResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDevices"></a>
# **getDevices**
> PageResourceDeviceResource getDevices(opts)

List and search devices

Get a list of devices with optional filtering

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.DevicesApi();

var opts = { 
  'filterMake': "filterMake_example", // String | Filter for devices with specified make
  'filterModel': "filterModel_example", // String | Filter for devices with specified model
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getDevices(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterMake** | **String**| Filter for devices with specified make | [optional] 
 **filterModel** | **String**| Filter for devices with specified model | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceDeviceResource**](PageResourceDeviceResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDevice"></a>
# **updateDevice**
> DeviceResource updateDevice(device, id)

Update a device

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.DevicesApi();

var device = new KnetikCloud.DeviceResource(); // DeviceResource | device

var id = 56; // Number | id

apiInstance.updateDevice(device, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**DeviceResource**](DeviceResource.md)| device | 
 **id** | **Number**| id | 

### Return type

[**DeviceResource**](DeviceResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

