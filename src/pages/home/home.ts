import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Persona} from "../../classes/persona.class";
import {PersonaService} from "../../services/persona.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{
  personaList: Persona[];
  persona1: any = {id:1,arcana:"Fool",name:"Arsene",lvl:1,weaknesses:['','','','Wk','','','','','Wk','Str'],description:"A being based off the main character of Maurice Leblanc's novels, Arsene Lupin. He appears everywhere and is a master of disguise. He is known to help law-abiding citizens."};
  persona2: any = {id:2,arcana:"Fool",name:"Obariyon",lvl:1,weaknesses:['Str','','','','Wk','','','','',''],description:"A 'piggyback monster' of Japan that jumps on the backs of those who pass grassy paths. It is heavy and not easily removed, but will turn into gold coins if you can carry it back home."};

  constructor(public navCtrl: NavController, private personaService: PersonaService){}

  ngOnInit(){
    this.getPersonas();
    console.log(this.personaList);
  }

  getPersonas():void{
    this.personaService.getPersonas().subscribe(personas => this.personaList = personas)
  }

}
