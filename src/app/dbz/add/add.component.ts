import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Input() new: Character = {
    name:'',
    power: 0
  }

  constructor( private dbzService:DbzService  ) {

  }

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  add(): void {

    if( this.new.name.trim().length === 0) {  //validadion para que no capture si el nombre esta vacio
      return;
    } 
    // this.onNewCharacter.emit( this.new );
    this.dbzService.addCharacter( this.new );
    
    this.new = {
      name: '',
      power: 0 
    }             //IMPORTANTE no es que volvamos los valores de new a  '' y 0 si no que creamos un nuevo new vacío que se mostrara en el input despues de insertar
                  // rompiendo la referencia anterior.

  }

}
