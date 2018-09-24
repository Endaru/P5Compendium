import {Component, Input, OnInit} from '@angular/core';
import {Persona} from "../../classes/persona.class";
import {PersonaService} from "../../services/persona.service";

/**
 * Generated class for the ContainerCmpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'container-cmp',
  templateUrl: 'container-cmp.html'
})
export class ContainerCmpComponent implements OnInit {
  @Input("persona") tempPersona;
  persona: Persona;
  selected: string;
  hidden: boolean;

  constructor(private personaService: PersonaService) {}

  ngOnInit(){
    this.persona = this.tempPersona;
    this.personaService.add(this);
  }

  show(){
      this.hidden = true;
      this.selected = "active";
      this.personaService.select(this.persona.id);
  }

  hide(){
    this.hidden = false;
    this.selected = "";
  }
}
