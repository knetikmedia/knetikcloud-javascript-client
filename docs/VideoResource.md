# KnetikCloud.VideoResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Whether the video is available, based on various factors | [optional] 
**additional_properties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type | [optional] 
**author** | [**SimpleReferenceResourcelong**](SimpleReferenceResourcelong.md) | The original artist of the media | [optional] 
**authored** | **Number** | The date the media was created as a unix timestamp in seconds | [optional] 
**banned** | **Boolean** | Whether the video has been banned or not | [optional] 
**category** | [**SimpleReferenceResourcestring**](SimpleReferenceResourcestring.md) | The category of the video | 
**comments** | [**[CommentResource]**](CommentResource.md) | The comments of the video | [optional] 
**contributors** | [**[ContributionResource]**](ContributionResource.md) | Artists that contributed to the creation. See separate endpoint to add to list | [optional] 
**created_date** | **Number** | The date/time this resource was created in seconds since unix epoch | [optional] 
**embed** | **String** | The country of an embedable version | [optional] 
**extension** | **String** | The file extension of the media file. 1-5 characters | 
**height** | **Number** | The height of the video in px | 
**id** | **Number** | The unique ID for that resource | [optional] 
**length** | **Number** | The length of the video in seconds | 
**location** | **String** | The country of the media. Typically a url. Cannot be blank | 
**long_description** | **String** | The user friendly name of that resource. Defaults to blank string | [optional] 
**mime_type** | **String** | The mime-type of the media | [optional] 
**name** | **String** | The user friendly name of that resource | 
**priority** | **Number** | The sort order of the video. default: 100 | [optional] 
**privacy** | **String** | The privacy setting. default: private | [optional] 
**published** | **Boolean** | Whether the video has been made public. Default true | [optional] 
**short_description** | **String** | The user friendly name of that resource. Defaults to blank string | [optional] 
**size** | **Number** | The size of the media. Minimum 0 if supplied | [optional] 
**tags** | **[String]** | The tags for the video | [optional] 
**template** | **String** | A video template this video is validated against (private). May be null and no validation of additional_properties will be done | [optional] 
**thumbnail** | **String** | The country of a thumbnail version. Typically a url | [optional] 
**updated_date** | **Number** | The date/time this resource was last updated in seconds since unix epoch | [optional] 
**uploader** | [**SimpleUserResource**](SimpleUserResource.md) | The user the media was uploaded by. May be null for system uploaded media. May only be set to a user other than the current caller if VIDEOS_ADMIN permission. Null will mean the caller is the uploader unless the caller has VIDEOS_ADMIN permission, in which case it will be set to null | [optional] 
**views** | **Number** | The view count of the video | [optional] 
**width** | **Number** | The width of the video in px | 


<a name="PrivacyEnum"></a>
## Enum: PrivacyEnum


* `private` (value: `"private"`)

* `friends` (value: `"friends"`)

* `public` (value: `"public"`)




