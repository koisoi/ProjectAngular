import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {AuthRoutingModule} from "./auth.routing-module";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
