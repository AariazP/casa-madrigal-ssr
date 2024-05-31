import { Routes } from '@angular/router';
import { PageInitComponent } from './page-init/page-init.component';

export const routes: Routes = [
    { path: '', 
        component: PageInitComponent
    },
    {
        path:'**',
        component: PageInitComponent
    }
    
];
