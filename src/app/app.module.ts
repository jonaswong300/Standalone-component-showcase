import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ChildComponentComponent } from './child-component/child-component.component';
import { UppercasePipe } from './uppercase.pipe';

@NgModule({
  declarations: [
    
  
    ChildComponentComponent,
            UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
