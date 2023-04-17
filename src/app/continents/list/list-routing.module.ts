import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListResolverResolver } from './list-continents.resolver';

import { ListPage } from './list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage,
    resolve: {
      data: ListResolverResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
