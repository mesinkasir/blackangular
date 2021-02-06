import { Routes } from "@angular/router";

import { HomeComponent } from "../../pages/home/home.component";
import { RetailComponent } from "../../pages/retail/retail.component";
import { RestoComponent } from "../../pages/resto/resto.component";
import { OfficeComponent } from "../../pages/office/office.component";
import { ContactComponent } from "../../pages/contact/contact.component";
import { HardwareComponent } from "../../pages/hardware/hardware.component";
import { OnlineComponent } from "../../pages/online/online.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "retail", component: RetailComponent },
  { path: "resto", component: RestoComponent },
  { path: "office", component: OfficeComponent },
  { path: "contact", component: ContactComponent },
  { path: "hardware", component: HardwareComponent },
  { path: "online", component: OnlineComponent },
  // { path: "rtl", component: RtlComponent }
];
