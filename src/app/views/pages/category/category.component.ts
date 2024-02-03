import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  
  
})
export class CategoryComponent implements OnInit {



  categories: Category[];
  constructor(private categoryService: CategoryService,
              private modal: NgbModal
    ) { }

  ngOnInit(): void {
    this.getCategories();
    this.categoryService.emittedCategory.subscribe(
      data => this.categories.push(data)
    )
  }

  getCategories(){
    this.categoryService.fetchCategories().subscribe(
      (cat) => this.categories = cat
    )
  }

  openAddCategoryModal() {
    this.modal.open(AddCategoryComponent)
    
  }

  handleDelete(id: number) {
    console.log("delete")
    this.categoryService.deleteCategory(id).subscribe(
      () =>  this.categories = this.categories.filter(
        category => category.idCategory != id
      )
    );
  }

  handleEdit(category: Category) {
    console.log(category)
    const modalRef = this.modal.open(EditCategoryComponent);
    modalRef.componentInstance.category = category
    }
}
