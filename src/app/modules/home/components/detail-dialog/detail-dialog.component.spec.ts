import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { PRODUCT_MOCK, USER_MOCK } from 'src/app/modules/core/tests/mocks';
import { ProductService } from '../../services/product.service';
import { DetailDialogComponent } from './detail-dialog.component';

describe('DetailDialogComponent', () => {
  let component: DetailDialogComponent;
  let fixture: ComponentFixture<DetailDialogComponent>;

  beforeEach(async () => {
    // At this point the user is authenticated
    sessionStorage.setItem('auth', JSON.stringify(USER_MOCK));

    await TestBed.configureTestingModule({
      declarations: [ DetailDialogComponent ],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        MatDialogModule,
      ],
      providers: [
        ProductService,
        { provide: MAT_DIALOG_DATA, useValue: PRODUCT_MOCK },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
