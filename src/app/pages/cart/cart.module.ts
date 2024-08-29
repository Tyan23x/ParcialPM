import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [CartPage],
  providers: [HttpService]
})

export class CartPageModule {}
