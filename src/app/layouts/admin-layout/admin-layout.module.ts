import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { HomeComponent } from "../../pages/home/home.component";
import { RetailComponent } from "../../pages/retail/retail.component";
import { RestoComponent } from "../../pages/resto/resto.component";
import { OfficeComponent } from "../../pages/office/office.component";
import { HardwareComponent } from "../../pages/hardware/hardware.component";
import { OnlineComponent } from "../../pages/online/online.component";
import { ContactComponent } from "../../pages/contact/contact.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    HardwareComponent,
    RetailComponent,
    OfficeComponent,
    OnlineComponent,
    RestoComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
