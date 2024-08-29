import { Category } from './../interfaces/IProducts';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment.prod';
import { IProducts } from '../interfaces/IProducts';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public products!: IProducts[];
  public contentProducts: IProducts[] = [];
  public categories = Object.values(Category).filter(value => typeof value === 'string'); 
  public selectedCategory: string | null = null;

  constructor(private readonly httpSrv: HttpService, private readonly navigateControl: NavController) { }

  async ngOnInit() {
    this.fetchProducts();
  }

  async fetchProducts(category?: string) {
    let url = environment.URL_BASE + "products";
    if (category) {
      url += `/category/${category}`;
    }
    this.products = await this.httpSrv.get<IProducts[]>(url);
    this.contentProducts = this.products;
  }

  onCategoryChange(event: any) {
    const selectedCategory = event.detail.value;
    if (selectedCategory) {
      this.fetchProducts(selectedCategory);
    } else {
      this.fetchProducts();
    }
  }

  public Navigate(id: number) {
    this.navigateControl.navigateForward("products/" + id);
  }

  public goCart() {
    this.navigateControl.navigateForward("cart");
  }
}
