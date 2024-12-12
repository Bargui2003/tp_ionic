import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'forgetpass', loadChildren: () => import('./forgetpass/forgetpass.module').then(m => m.ForgetpassPageModule) },
  { path: 'accueil', loadChildren: () => import('./accueil/accueil.module').then( m => m.DashboardPageModule) },
  {
    path: 'matiere',
    loadChildren: () => import('./matiere/matiere.module').then( m => m.MatierePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'propos',
    loadChildren: () => import('./propos/propos.module').then( m => m.ProposPageModule)
  },
  {
    path: 'etudiant',
    loadChildren: () => import('./etudiant/etudiant.module').then( m => m.EtudiantPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
