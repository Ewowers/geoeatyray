import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { –°ontestPage } from './contest.page';

const routes: Routes = [
  {
    path: '',
    component: –°ontestPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestPageRoutingModule {}
