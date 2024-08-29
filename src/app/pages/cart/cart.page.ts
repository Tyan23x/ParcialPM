import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IProducts } from 'src/app/interfaces/IProducts';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {


  public contentCart: IProducts[] = [];

  constructor(
    private readonly httpSrv: HttpService,
    private readonly navCtrl: NavController,
    private readonly params: ActivatedRoute,
    private readonly cartSrv: CartService,
    private toAstControl: ToastController
  ) { }

  ngOnInit() {
    this.contentCart = this.cartSrv.getCartItems();
  }

  removeFromCart(product: IProducts) {
    this.cartSrv.removeFromCart(product);
    this.contentCart = this.cartSrv.getCartItems();
  }
  
  backTo(){
    this.navCtrl.navigateBack('/home');
  }


  clearCart(){
    this.cartSrv.clearCart();
    this.contentCart = this.cartSrv.getCartItems();
  }

  async buyNotification() {
    if(this.contentCart.length > 0){

      const toast = await this.toAstControl.create({
        message: 'Purchase completed successfully!',
        duration: 2000, 
        position: 'bottom',
        color: 'success' 
      });
      toast.present();

    } else {
      const toast = await this.toAstControl.create({
        message: 'add an article first',
        duration: 2000, 
        position: 'bottom',
        color: 'warning' 
      });
      toast.present();
    }
  }

}
