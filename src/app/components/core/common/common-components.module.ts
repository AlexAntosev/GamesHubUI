import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridPageNavigationComponent } from 'src/app/components/core/common/grid-page-navigation/grid-page-navigation.component';

@NgModule({
  declarations: [GridPageNavigationComponent],
  imports: [CommonModule],
  exports:[GridPageNavigationComponent]
})
export class CommonComponentsModule {}
