dmx.config({
  "index": {
    "repeat1": {
      "meta": null,
      "outputType": "array"
    },
    "usersTable": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "firstName"
        },
        {
          "type": "text",
          "name": "lastName"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "verificationCode"
        },
        {
          "type": "datetime",
          "name": "verificationCodeExpire"
        },
        {
          "type": "boolean",
          "name": "disabled"
        },
        {
          "type": "text",
          "name": "phone"
        },
        {
          "type": "number",
          "name": "userIdInvited"
        },
        {
          "type": "datetime",
          "name": "createdAt"
        },
        {
          "type": "datetime",
          "name": "updatedAt"
        }
      ],
      "outputType": "array"
    },
    "usersData": {
      "meta": null,
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "type": "text",
          "name": "firstName"
        },
        {
          "type": "text",
          "name": "lastName"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "phone"
        },
        {
          "type": "number",
          "name": "userIdInvited"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "number",
          "name": "id"
        }
      ],
      "outputType": "array"
    },
    "data_user": {
      "meta": null,
      "outputType": "array"
    },
    "facilitiesData": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "logo"
        },
        {
          "type": "text",
          "name": "address"
        },
        {
          "type": "text",
          "name": "phone"
        },
        {
          "type": "text",
          "name": "ownerFirstName"
        },
        {
          "type": "text",
          "name": "ownerLastName"
        },
        {
          "type": "text",
          "name": "ownerEmail"
        },
        {
          "type": "text",
          "name": "ownerPhone"
        },
        {
          "type": "text",
          "name": "distributor"
        },
        {
          "type": "boolean",
          "name": "disabled"
        },
        {
          "type": "datetime",
          "name": "createdAt"
        },
        {
          "type": "datetime",
          "name": "updatedAt"
        },
        {
          "type": "text",
          "name": "name"
        }
      ],
      "outputType": "object"
    },
    "data_facility": {
      "meta": null,
      "outputType": "array"
    },
    "devicesData": {
      "meta": null,
      "outputType": "array"
    },
    "data_device": {
      "meta": [
        {
          "type": "text",
          "name": "id"
        },
        {
          "type": "text",
          "name": "serial"
        },
        {
          "type": "text",
          "name": "createdAt"
        },
        {
          "type": "text",
          "name": "phone"
        },
        {
          "type": "text",
          "name": "ownerFirstName"
        },
        {
          "type": "text",
          "name": "ownerLastName"
        },
        {
          "type": "text",
          "name": "name"
        }
      ],
      "outputType": "array"
    },
    "packageData": {
      "meta": null,
      "outputType": "array"
    },
    "data_package": {
      "meta": null,
      "outputType": "array"
    },
    "query": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "employeesData": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "firstName"
        },
        {
          "type": "text",
          "name": "lastName"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "verificationCode"
        },
        {
          "type": "datetime",
          "name": "verificationCodeExpire"
        },
        {
          "type": "boolean",
          "name": "disabled"
        },
        {
          "type": "text",
          "name": "phone"
        },
        {
          "type": "number",
          "name": "userIdInvited"
        },
        {
          "type": "datetime",
          "name": "createdAt"
        },
        {
          "type": "datetime",
          "name": "updatedAt"
        }
      ],
      "outputType": "array"
    },
    "sessionStorage": [
      {
        "type": "text",
        "name": "jwt"
      }
    ],
    "data": {
      "meta": null,
      "outputType": "array"
    },
    "reportsData": {
      "meta": null,
      "outputType": "array"
    }
  },
  "main": {
    "sessionStorage": [
      {
        "type": "text",
        "name": "jwt"
      }
    ]
  },
  "sidebar": {
    "sessionStorage": [
      {
        "type": "text",
        "name": "jwt"
      }
    ]
  }
});
