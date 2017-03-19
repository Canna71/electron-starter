import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './UI/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
   {
    path: 'main',
    component: MainComponent,
    
  }
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes, { useHash: true } ),
  ],
  providers: [   ],
  declarations: [  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {}
