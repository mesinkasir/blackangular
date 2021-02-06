import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/home",
    title: "Home",
    rtlTitle: "لوحة القيادة",
    icon: "icon-components",
    class: ""
  },
  {
    path: "/retail",
    title: "Retail",
    rtlTitle: "الرموز",
    icon: "icon-cart",
    class: ""
  },
  {
    path: "/resto",
    title: "Resto",
    rtlTitle: "خرائط",
    icon: "icon-chart-pie-36",
    class: "" },
  {
    path: "/office",
    title: "Office",
    rtlTitle: "إخطارات",
    icon: "icon-paper",
    class: ""
  },

  {
    path: "/online",
    title: "Online",
    rtlTitle: "قائمة الجدول",
    icon: "icon-planet",
    class: ""
  },
  {
    path: "/hardware",
    title: "POS Hardware",
    rtlTitle: "طباعة",
    icon: "icon-tv-2",
    class: ""
  },
  {
    path: "/contact",
    title: "Contact",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-badge",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
