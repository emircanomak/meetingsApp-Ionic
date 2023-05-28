import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { Tab3Page } from '../tab3/tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path:"updatetab",
    component:Tab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
