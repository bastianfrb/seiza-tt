import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ProductService } from '../../services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PRODUCT_MOCK, USER_MOCK } from 'src/app/modules/core/tests/mocks';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { NotRequestedComponent } from '../not-requested/not-requested.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let matDialog: MatDialog;
  let productService: ProductService;

  beforeEach(async () => {
    // At this point the user is authenticated
    sessionStorage.setItem('auth', JSON.stringify(USER_MOCK));

    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        RouterTestingModule,
        MatDialogModule
      ],
      providers: [
        ProductService,
        { provide: MAT_DIALOG_DATA, useValue: PRODUCT_MOCK },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    matDialog = TestBed.inject(MatDialog);
    productService = TestBed.inject(ProductService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get product list', () => {
    const spyProduct = spyOn(productService, 'getProductListByRut').and.callThrough();
    component.ngOnInit();
    expect(spyProduct).toHaveBeenCalledWith(USER_MOCK.rut);
  });

  it('should open useless dialog component', () => {
    const dialogSpy = spyOn(matDialog, 'open');
    component.openCommonDialog();
    expect(dialogSpy).toHaveBeenCalledWith(NotRequestedComponent);
  });

  it('should open detail dialog component', () => {
    const dialogSpy = spyOn(matDialog, 'open');
    component.openDetailDialog(PRODUCT_MOCK);
    expect(dialogSpy).toHaveBeenCalledWith(DetailDialogComponent, { 
      data: PRODUCT_MOCK,  
      width: '540px',
      minWidth: '360px'
    });
  });
});
