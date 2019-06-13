import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  @Input() fieldsConfig: Array<Object>;
  @Input() data: Array<Object>;
  @Input() isRowToBeClicked: boolean;
  @Output() selectedRow? = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() { 
  }
}
