import { Component, input } from '@angular/core';

@Component({
  selector: 'component-users-header',
  imports: [],
  templateUrl: './users-header.html',
})
export class UsersHeader {
  placeholder = input('Buscar')
  buttonTitle = input('Aceptar')
}
