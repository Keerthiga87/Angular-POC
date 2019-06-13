export interface Validator{
    name:string;
    validator:any;
    message:string;
}

export interface FieldConfig{
    label?:string;
    key?:string;
    type?:string;
    value?:string;
    required?:Boolean;
    validations?:Validator[];
}