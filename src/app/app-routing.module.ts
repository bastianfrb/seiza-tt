import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './modules/auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuardService],
  },
  // {
  //   path: 'patient',
  //   loadChildren: () => import('./modules/patient/patient.module').then((m) => m.PatientModule),
  //   canActivate: [AuthGuardService],
  //   data: {
  //     title: 'Pacientes',
  //     breadcrumb: {
  //       name: 'Pacientes',
  //       url: '/patient'
  //     }
  //   }
  // },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
6