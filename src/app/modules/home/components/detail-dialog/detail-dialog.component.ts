import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit {

  public productDetail: any;
  public ignoreColumns: string[];
  public keyMapper: any;
  public objectKeys: (list: any[]) => string[];

  constructor(
    private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public productNumber: string
  ) {
    this.ignoreColumns = ['id', 'numeroProducto'];

    this.keyMapper = {
      montoDisponible: 'Monto Disponible',
      montoContable: 'Monto Contable',
      montoUtilizado: 'Monto Utilizado'
    };
    this.objectKeys = Object.keys;
  }

  public ngOnInit(): void {
    this._productService.getDetailByProductNumber(this.productNumber).subscribe((result) => {
      this.productDetail = result;
    });
  }

}
