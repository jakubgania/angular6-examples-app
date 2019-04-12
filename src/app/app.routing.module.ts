import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToDoComponent } from './to-do/to-do.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
        path: 'to-do',
        component: ToDoComponent
    },
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule {

}