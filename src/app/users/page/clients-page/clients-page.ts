import { Component } from '@angular/core';
import { UsersHeader } from "../../components/users-header/users-header";
import { UsersTable } from "../../components/users-table/users-table";

@Component({
  selector: 'clients-page',
  imports: [UsersHeader, UsersTable],
  templateUrl: './clients-page.html',
})
export class ClientsPage { }
