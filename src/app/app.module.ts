import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { BasicExampleComponent } from './components/basic-example/basic-example.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
