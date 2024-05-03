import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api/api.service';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable()
export class ProductService {

  private _baseUrl: string;

  constructor(private _apiService: ApiService) {
    this._baseUrl = 'productos';
  }

  public getProductListByRut(rut: string): Observable<IProduct[]> {
    return this._apiService.get(`${this._baseUrl}/${rut}`);
  }
}
