import { ManageComponent } from './components/manage/manage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
    path: '';
    component: DashboardComponent
    },
    {
    path: 'manage',
    component: ManageComponent
    }
    ];

    export const AppRoutes = RouterModule.forRoot(routes);