import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IProducts } from 'src/app/interfaces/IProducts';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';
import {ToastController} from '@ionic/angular';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  public contentProducts!: IProducts;
  private id!: number; 
  constructor(
    private readonly httpSrv: HttpService,
    private readonly params: ActivatedRoute,
    private readonly navCtrl: NavController,
    private readonly cartSrv: CartService,
    private toAstCtrl: ToastController
  ) { }

  async ngOnInit() {
    this.params.params.subscribe( async (params)=>{
      const url = environment.URL_BASE + "products/" +params["id"] ;
      console.log(params);
      this.contentProducts = await this.httpSrv.get<IProducts>(url);
    });
  }


  backTo(){
    this.navCtrl.navigateBack('/home');
  }

  goCart(){
    this.navCtrl.navigateBack('/cart');
  }

  addCart(){
    this.cartSrv.addProduct(this.contentProducts);
  }

  async addNotification() {
    const toast = await this.toAstCtrl.create({
      message: 'Added to cart',
      duration: 2000, 
      position: 'top',
      color: 'success' 
    });
    toast.present();
  }
}
