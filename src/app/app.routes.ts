import { Routes } from "@angular/router";
import { authUserGuard } from "./core/guards/auth-user.guard";

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
    loadComponent: () => import("./core/authentication/register/register.component").then((x) => x.RegisterComponent),
    title: "register",
  },
  {
    path: "dashboard",
    canActivate: [authUserGuard],
    loadComponent: () => import("./features/dashboard/dashboard.component").then((x) => x.DashboardComponent),
    title: "Dashboard",
  },
  {
    path: "**",
    canActivate: [authUserGuard],
    loadComponent: () => import("./features/dashboard/dashboard.component").then((x) => x.DashboardComponent),
    title: "Dashboard",
  },
];
