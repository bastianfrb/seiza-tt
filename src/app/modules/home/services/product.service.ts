import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api/api.service';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable()
export class ProductService {

  constructor(private _apiService: ApiService) { }

  public getProductListByRut(rut: string): Observable<IProduct[]> {
    return this._apiService.get(`productos/${rut}`);
  }

  public getDetailByProductNumber(productNumber: string): Observable<any> {
    return this._apiService.get(`saldo/${productNumber}`);
  }
}
