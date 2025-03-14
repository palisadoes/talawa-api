[talawa-api](../README.md) / [Exports](../modules.md) / [models/User](../modules/models_User.md) / InterfaceUser

# Interface: InterfaceUser

[models/User](../modules/models_User.md).InterfaceUser

This is an interface that represents a database(MongoDB) document for User.

## Table of contents

### Properties

- [\_id](models_User.InterfaceUser.md#_id)
- [address](models_User.InterfaceUser.md#address)
- [adminApproved](models_User.InterfaceUser.md#adminapproved)
- [adminFor](models_User.InterfaceUser.md#adminfor)
- [appLanguageCode](models_User.InterfaceUser.md#applanguagecode)
- [birthDate](models_User.InterfaceUser.md#birthdate)
- [createdAt](models_User.InterfaceUser.md#createdat)
- [createdEvents](models_User.InterfaceUser.md#createdevents)
- [createdOrganizations](models_User.InterfaceUser.md#createdorganizations)
- [educationGrade](models_User.InterfaceUser.md#educationgrade)
- [email](models_User.InterfaceUser.md#email)
- [employmentStatus](models_User.InterfaceUser.md#employmentstatus)
- [eventAdmin](models_User.InterfaceUser.md#eventadmin)
- [firstName](models_User.InterfaceUser.md#firstname)
- [gender](models_User.InterfaceUser.md#gender)
- [image](models_User.InterfaceUser.md#image)
- [joinedOrganizations](models_User.InterfaceUser.md#joinedorganizations)
- [lastName](models_User.InterfaceUser.md#lastname)
- [maritalStatus](models_User.InterfaceUser.md#maritalstatus)
- [membershipRequests](models_User.InterfaceUser.md#membershiprequests)
- [organizationsBlockedBy](models_User.InterfaceUser.md#organizationsblockedby)
- [password](models_User.InterfaceUser.md#password)
- [phone](models_User.InterfaceUser.md#phone)
- [registeredEvents](models_User.InterfaceUser.md#registeredevents)
- [status](models_User.InterfaceUser.md#status)
- [token](models_User.InterfaceUser.md#token)
- [tokenVersion](models_User.InterfaceUser.md#tokenversion)
- [updatedAt](models_User.InterfaceUser.md#updatedat)
- [userType](models_User.InterfaceUser.md#usertype)

## Properties

### \_id

• **\_id**: `ObjectId`

#### Defined in

[src/models/User.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L15)

---

### address

• **address**: `Object`

#### Type declaration

| Name                | Type     |
| :------------------ | :------- |
| `city`              | `string` |
| `countryCode`       | `string` |
| `dependentLocality` | `string` |
| `line1`             | `string` |
| `line2`             | `string` |
| `postalCode`        | `string` |
| `sortingCode`       | `string` |
| `state`             | `string` |

#### Defined in

[src/models/User.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L16)

---

### adminApproved

• **adminApproved**: `boolean`

#### Defined in

[src/models/User.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L26)

---

### adminFor

• **adminFor**: `any`[]

#### Defined in

[src/models/User.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L27)

---

### appLanguageCode

• **appLanguageCode**: `string`

#### Defined in

[src/models/User.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L28)

---

### birthDate

• **birthDate**: `Date`

#### Defined in

[src/models/User.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L29)

---

### createdAt

• **createdAt**: `Date`

#### Defined in

[src/models/User.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L30)

---

### createdEvents

• **createdEvents**: `any`[]

#### Defined in

[src/models/User.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L31)

---

### createdOrganizations

• **createdOrganizations**: `any`[]

#### Defined in

[src/models/User.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L32)

---

### educationGrade

• **educationGrade**: `string`

#### Defined in

[src/models/User.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L33)

---

### email

• **email**: `string`

#### Defined in

[src/models/User.ts:34](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L34)

---

### employmentStatus

• **employmentStatus**: `string`

#### Defined in

[src/models/User.ts:35](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L35)

---

### eventAdmin

• **eventAdmin**: `any`[]

#### Defined in

[src/models/User.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L36)

---

### firstName

• **firstName**: `string`

#### Defined in

[src/models/User.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L37)

---

### gender

• **gender**: `string`

#### Defined in

[src/models/User.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L38)

---

### image

• **image**: `undefined` \| `null` \| `string`

#### Defined in

[src/models/User.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L39)

---

### joinedOrganizations

• **joinedOrganizations**: `any`[]

#### Defined in

[src/models/User.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L40)

---

### lastName

• **lastName**: `string`

#### Defined in

[src/models/User.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L41)

---

### maritalStatus

• **maritalStatus**: `string`

#### Defined in

[src/models/User.ts:42](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L42)

---

### membershipRequests

• **membershipRequests**: `any`[]

#### Defined in

[src/models/User.ts:43](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L43)

---

### organizationsBlockedBy

• **organizationsBlockedBy**: `any`[]

#### Defined in

[src/models/User.ts:44](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L44)

---

### password

• **password**: `string`

#### Defined in

[src/models/User.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L45)

---

### phone

• **phone**: `Object`

#### Type declaration

| Name     | Type     |
| :------- | :------- |
| `home`   | `string` |
| `mobile` | `string` |
| `work`   | `string` |

#### Defined in

[src/models/User.ts:46](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L46)

---

### pluginCreationAllowed

• **pluginCreationAllowed**: `boolean`

#### Defined in

[src/models/User.ts:51](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L51)

---

### registeredEvents

• **registeredEvents**: `any`[]

#### Defined in

[src/models/User.ts:52](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L52)

---

### status

• **status**: `string`

#### Defined in

[src/models/User.ts:53](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L53)

---

### token

• **token**: `undefined` \| `string`

#### Defined in

[src/models/User.ts:54](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L54)

---

### tokenVersion

• **tokenVersion**: `number`

#### Defined in

[src/models/User.ts:55](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L55)

---

### updatedAt

• **updatedAt**: `Date`

#### Defined in

[src/models/User.ts:56](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L56)

---

### userType

• **userType**: `string`

#### Defined in

[src/models/User.ts:57](https://github.com/PalisadoesFoundation/talawa-api/blob/cf57ca9/src/models/User.ts#L57)
