import { FieldConfig } from '../interface/field-config.interface';
import { Validators } from '@angular/forms';

export const CREATE_POST_META: Array<FieldConfig> = [
    {
        "key": "title",
        "label": "Title",
        "type": "text",
        "required": true,
        "validations": [

            {
                name: "required",
                validator: Validators.required,
                message: "Title is Required"

            },
            {
                name: "pattern",
                validator: Validators.pattern("^[a-zA-Z0-9 ]*$"),
                message: "Title Should be Alpha Numeric"

            },
            {
                name: "maxlength",
                validator: Validators.maxLength(24),
                message: "Maximum Length of title should be 24"

            }
        ]
    },
    {
        "key": "body",
        "label": "Body",
        "type": "textarea",
        "required": true,
        "validations": [

            {
                name: "required",
                validator: Validators.required,
                message: "Title is Required"

            },
            {
                name: "maxlength",
                validator: Validators.maxLength(50),
                message: "Maximum Length of title should be 24"

            }
        ]
    }
]