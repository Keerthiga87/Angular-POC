export const USERS_DETAILS_META: Array<Object>=[
    {
        "key": "id",
        "label": "ID"
    },
    {
        "key": "name",
        "label": "Name"
    },
    {
        "key": "username",
        "label": "User Name"
    },
    {
        key:"address",
        label:"Address",
        subFields:[
            {
                key:"street",
                label:"Street"
            },
            {
                key:"suite",
                label:"Suite No"
            },
            {
                key:"city",
                label:"City"
            },
            {
                key:"zipcode",
                label:"ZipCode"
            },
            {
                key:"geo",
                label:"Geo",
                subFields:[
                    {
                        key:"lat",
                        label:"Latitude"
                    },
                    {
                        key:"lng",
                        label:"Longitude"
                    }
                ]
            }
        ]
    },
    {
        "key": "email",
        "label": "Email"
    },
    {
        "key": "phone",
        "label": "Phone"
    },
    {
        "key": "website",
        "label": "Website"
    },
    {
        "key": "company",
        "label": "Company",
        "subFields":[
            {
                "key": "name",
                "label": "Name"
            },
            {
                "key": "catchPhrase",
                "label": "Catch Phrase"
            },
            {
                "key": "bs",
                "label": "BS"
            }
        ]
    }
]