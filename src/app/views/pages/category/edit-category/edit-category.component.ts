import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  
  @Input() category: Category;
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService,
    private modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      nomCategory: new FormControl(this.category.nomCategory)
    })
  }

  editCategory(){
    this.category.nomCategory = this.categoryForm.value.nomCategory;
    this.categoryService.editCategory(this.category).subscribe(response => {
      this.modal.close()})
  }
}
