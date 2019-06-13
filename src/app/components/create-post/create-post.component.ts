import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
declare var $: any;

import { FieldConfig } from "../../interface/field-config.interface";
import { CREATE_POST_META } from '../../meta/create-post.meta';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  fields: FieldConfig[];
  group: FormGroup;
  isSaved: boolean;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private postsService: PostsService) { }

  ngOnInit() {
    //dynamic field configuration
    this.fields = CREATE_POST_META;
    this.createControl();
  }

  /**
  * Create the form group, form control for the fields mentioned in CREATE_POST_META config file
  * @param none
  * @returns none
  */
  createControl() {
    this.group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      this.group.addControl(field.key, control);
    });
  }

  /**
  * Create the validators dynamically based on the validations configured in CREATE_POST_META config file
  * @param array of validation
  * @returns ValidatorLists
  */
  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  /**
  * Create the validators dynamically based on the validations configured in CREATE_POST_META config file
  * @param array of validation
  * @returns ValidatorLists
  */
  hasError(key, validatorName) {
    var control: any = this.group.get(key);
    if (!control.touched && !control.dirty) return false;
    return control.hasError(validatorName);
  }

  /**
  * Invoke postsservice to save the post and display the message based on response status
  * @param none
  * @returns none
  */
  submit() {
    if (this.group.valid) {
      this.postsService.addPost(this.group.value).subscribe(data => {
        this.isSubmitted = true;
        this.isSaved = true;
      }, error => {
        this.isSubmitted = true;
        this.isSaved = false;
      });
    } else {
      this.validateAllFormFields(this.group);
    }
  }

  /**
  * set formcontrol's touch properties if the form fails to meet validation
  * @param formGroup
  * @returns none
  */
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  /**
  * reset the form fields on modal dismiss
  * @param none
  * @returns none
  */
  closeForm() {
    this.group.reset();
    this.isSubmitted = false;
    $('#exampleModal').modal('hide')
  }

}
