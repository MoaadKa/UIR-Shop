import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VarietyService } from 'src/app/services/variety.service';

@Component({
  selector: 'app-add-variety',
  templateUrl: './add-variety.component.html',
  styleUrls: ['./add-variety.component.scss']
})
export class AddVarietyComponent implements OnInit {

  varietyForm: FormGroup = new FormGroup({
    idVariety: new FormControl(),
    varietyName: new FormControl(),
    varietyValue: new FormControl(),
    quantity: new FormControl()
  })
  constructor(private varietyService: VarietyService,
    private modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  addVariety(){
    let variety = this.varietyForm.value;
    this.varietyService.addVariety(variety).subscribe(
      reponse => {
        console.log(this.varietyForm)
        this.varietyService.emitting(reponse);
        this.modal.close()
      }
      
    );
  }

}
