import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'profile', 
    loadChildren: './profile/profile.module#ProfilePageModule' 
  },
  { path: 'myfoods', 
    loadChildren: './myfoods/myfoods.module#MyfoodsPageModule' 
  },
  { path: 'messages', 
    loadChildren: './messages/messages.module#MessagesPageModule' 
  },
  { path: 'qrcode', 
    loadChildren: './qrcode/qrcode.module#QrcodePageModule' 
  },
  { path: 'settings', 
    loadChildren: './settings/settings.module#SettingsPageModule' 
  },
  { path: 'login', 
  loadChildren: './login/login.module#LoginPageModule' 
},
  { path: 'list-foods', loadChildren: './list-foods/list-foods.module#ListFoodsPageModule' },
  { path: 'steps-menu', loadChildren: './steps-menu/steps-menu.module#StepsMenuPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
