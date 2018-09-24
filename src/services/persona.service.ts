import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Persona} from "../classes/persona.class";
import {of} from "rxjs/observable/of";
import {personas} from "../assets/personaData";

@Injectable()
export class PersonaService {

  subs: any[] = [];
  constructor(){}

  getPersonas(): Observable<Persona[]> {
    return of (personas);
  }

  add(persona: {}){
    this.subs.push(persona);
  }

  select(id: number){
    this.subs.forEach(function (a){
      if(a.persona.id !== id){
        a.hide();
      }
    });
  }
}