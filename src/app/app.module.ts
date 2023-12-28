import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ControlSiderbarComponent } from './control-siderbar/control-siderbar.component';
import {DataTablesModule} from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    ControlSiderbarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    RouterModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
