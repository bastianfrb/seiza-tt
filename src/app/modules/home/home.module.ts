import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from '../core/core.module';
import { ProductService } from './services/product.service';
import { DetailDialogComponent } from './components/detail-dialog/detail-dialog.component';
import { NotRequestedComponent } from './components/not-requested/not-requested.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    HomeComponent,
    DetailDialogComponent,
    NotRequestedComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HomeRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  providers: [ProductService]
})
export class HomeModule { }
