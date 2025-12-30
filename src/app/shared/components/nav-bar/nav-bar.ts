import { Component } from '@angular/core';
import { NavbarMenu } from "./components/navbar-menu/navbar-menu";
import { NavbarActions } from "./components/navbar-actions/navbar-actions";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'component-nav-bar',
  imports: [NavbarMenu, NavbarActions, RouterLink],
  templateUrl: './nav-bar.html',
})
export class NavBar { }
