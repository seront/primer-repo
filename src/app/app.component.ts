import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Juan','Perez'), 
    new Persona('Lara','Juanes'),
    new Persona('Karla','Lara')
];

personaAgregada(persona: Persona){
  console.log("personaAgregada");
  this.personas.push( persona );
}

}
