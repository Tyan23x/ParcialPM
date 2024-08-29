import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    HttpClientModule,
    CurrencyPipe
  ],
  declarations: [ProductsPage],
  providers: [HttpService]
})
export class ProductsPageModule {}
