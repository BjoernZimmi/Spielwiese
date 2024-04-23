import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignalsComponent } from './signals/signals.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { SignalWarenkorbComponent } from './signal-warenkorb/signal-warenkorb.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'signals', component: SignalsComponent },
    { path: 'signal-warenkorb', component: SignalWarenkorbComponent },
    { path: 'home', component: InfoBoxComponent },
    { path: '**', component: InfoBoxComponent }
];
