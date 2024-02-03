import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Variety } from 'src/app/model/variety';
import { VarietyService } from 'src/app/services/variety.service';
import { AddVarietyComponent } from './add-variety/add-variety.component';

@Component({
  selector: 'app-variety',
  templateUrl: './variety.component.html',
  styleUrls: ['./variety.component.scss']
})
export class VarietyComponent implements OnInit {

  varieties: Variety[];

  constructor(private varietyService: VarietyService,
    private modal: NgbModal
    ) { }

  ngOnInit(): void {
    this.getVarieties();
    this.varietyService.newVariety.subscribe(
      data => this.varieties.push(data)
    )
  }

  getVarieties(){
    this.varietyService.fetchVarieties().subscribe(
      data => this.varieties = data
    )
  }

  openAddVarietyModal() {
    this.modal.open(AddVarietyComponent);
  }

  deleteVariety(id: number) {
    this.varietyService.deleteVariety(id).subscribe(
      () => this.varieties = this.varieties.filter(
        variety => variety.idVariety != id
      )
    )
  }
    
}
