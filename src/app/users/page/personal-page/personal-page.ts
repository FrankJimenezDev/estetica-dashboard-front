import { Component } from '@angular/core';
import { UsersHeader } from "../../components/users-header/users-header";
import { UsersTable } from "../../components/users-table/users-table";

@Component({
  selector: 'personal-page',
  imports: [UsersHeader, UsersTable],
  templateUrl: './personal-page.html',
})
export class PersonalPage { }
