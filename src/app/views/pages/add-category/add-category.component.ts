import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryForm!: FormGroup;

  constructor(private categoryService: CategoryService,
    private modal: NgbActiveModal,
    private router: Router) { }

  ngOnInit(): void {
   this.categoryForm = new FormGroup({
      
      idCategory: new FormControl(0),
      nomCategory: new FormControl('')
    });
  
  }
  
  addCategory(){
    console.log(this.categoryForm.value)
    this.categoryService.addCategory(this.categoryForm.value).subscribe(
      response => {
        this.categoryService.emitting(response)
        this.modal.close()}
    );
  }

 

}
