import { Routes } from '@angular/router';
import { NeedBarsConfigComponent } from './need-bars-config/need-bars-config';
import { NeedBarsDisplayComponent } from './need-bars-display/need-bars-display';

export const routes: Routes = [
  { path: '', redirectTo: '/config', pathMatch: 'full' },
  { path: 'config', component: NeedBarsConfigComponent },
  { path: 'display', component: NeedBarsDisplayComponent },
  { path: 'display/:data', component: NeedBarsDisplayComponent }
];
