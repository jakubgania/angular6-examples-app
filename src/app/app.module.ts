import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		ToDoComponent,
		HomeComponent
	],
	imports: [
		BrowserModule, FormsModule, AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
