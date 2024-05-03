import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { IBalanceDetail } from '../../interfaces/balance-detail';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit {

  public balanceDetail: any;
  public ignoreColumns: string[];
  public keyMapper: any;
  public objectKeys: (item: any) => string[];

  constructor(
    private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public product: IProduct
  ) {
    this.objectKeys = Object.keys;
    this.ignoreColumns = ['id', 'numeroProducto'];

    this.keyMapper = {
      montoDisponible: 'Monto Disponible',
      montoContable: 'Monto Contable',
      montoUtilizado: 'Monto Utilizado'
    };

    this.balanceDetail = {
      id: 0,
      montoContable: 0,
      montoDisponible: 0,
      montoUtilizado: 0,
      numeroProducto: ''
    };
  }

  public ngOnInit(): void {
    this._productService.getDetailByProductNumber(this.product.numero).subscribe((result) => {
      this.balanceDetail = result;
    });
  }

}
