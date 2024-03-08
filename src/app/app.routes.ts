import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "login",
    canActivate: [],
    loadComponent: () => import("./core/authentication/login/login.component").then((x) => x.LoginComponent),
    title: "login",
  },
  {
    path: "register",
    canActivate: [],
    loadComponent: () => import("./core/authentication/login/login.component").then((x) => x.LoginComponent),
    title: "register",
  },
];
