import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/modules/core/interfaces/user';
import { ProductService } from '../../services/product.service';
import { Observable, of } from 'rxjs';
import { IProduct } from '../../interfaces/product';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { NotRequestedComponent } from '../not-requested/not-requested.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: IUser;
  public productList!: IProduct[];

  constructor(
    private _productService: ProductService,
    private _matDialog: MatDialog,
    private _toastrService: ToastrService
  ) {
    this.user = JSON.parse(sessionStorage.getItem('auth') as any) as IUser;
  }

  public ngOnInit(): void {
    this._productService.getProductListByRut(this.user.rut).subscribe({
      next: (productList) => this.productList = productList,
      error: () => this._toastrService.error('No se pudo obtener la lista de productos')
    });
  }

  public openDetailDialog(product: IProduct): void {
    this._matDialog.open(DetailDialogComponent, { 
      data: product,
      width: '540px',
      minWidth: '360px'
    });
  }

  public openCommonDialog(): void {
    this._matDialog.open(NotRequestedComponent);
  }
}
