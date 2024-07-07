import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from '../Components/blank/blank.component';
import { SectionComponent } from '../Components/section/section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, BlankComponent, SectionComponent, FormsModule],
  exports: [CommonModule, BlankComponent, SectionComponent, FormsModule],
})
export class SharedModule {}
