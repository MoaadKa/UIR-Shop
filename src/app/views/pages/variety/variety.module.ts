import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VarietyComponent } from './variety.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddVarietyComponent } from './add-variety/add-variety.component';
import { EditVarietyComponent } from './edit-variety/edit-variety.component';

const routes: Routes = [
  {
    path: '',
    component: VarietyComponent
  }
]

@NgModule({
  declarations: [
    AddVarietyComponent,
    EditVarietyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class VarietyModule { }
