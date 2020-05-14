import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { ShopComponent} from './shop/shop.component';
import { PuzzleComponent } from './puzzle/puzzle.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dragdrop', component: DragdropComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'puzzle', component: PuzzleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
