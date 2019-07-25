import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.guard';

const routes: Routes = [
  { path: '',redirectTo:'login',pathMatch:'full'  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule',canLoad:[AuthGuard]},
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
