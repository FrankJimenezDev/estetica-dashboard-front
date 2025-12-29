import { Component } from '@angular/core';
import { NavbarMenu } from "./components/navbar-menu/navbar-menu";
import { NavbarActions } from "./components/navbar-actions/navbar-actions";

@Component({
  selector: 'component-nav-bar',
  imports: [NavbarMenu, NavbarActions],
  templateUrl: './nav-bar.html',
})
export class NavBar { }
