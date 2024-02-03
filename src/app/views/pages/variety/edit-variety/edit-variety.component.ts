import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Variety } from 'src/app/model/variety';

@Component({
  selector: 'app-edit-variety',
  templateUrl: './edit-variety.component.html',
  styleUrls: ['./edit-variety.component.scss']
})
export class EditVarietyComponent implements OnInit {

  @Input() variety: Variety;
  varietyForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.varietyForm = new FormGroup({
      varietyName: new FormControl(this.variety.varietyName),
      varietyValue: new FormControl(this.variety.varietyValue),
      quantity: new FormControl(this.variety.quantity)
    })
  }

  editVariety(){
    
  }

}
