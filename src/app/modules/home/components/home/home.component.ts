import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/modules/core/interfaces/user';
import { ProductService } from '../../services/product.service';
import { Observable, of } from 'rxjs';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: IUser;
  public productList: Observable<IProduct[]>;

  constructor(
    private _productService: ProductService
  ) {
    this.user = JSON.parse(sessionStorage.getItem('auth') as any) as IUser;
    this.productList = of([]);
  }

  public ngOnInit(): void {
    this.productList = this._productService.getProductListByRut(this.user.rut);
  }
}
