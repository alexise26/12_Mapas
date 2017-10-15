import { Component } from '@angular/core';
import {MapasService} from './services/mapas.service';
import {Marcador} from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number =  28.681834;
  lng: number = -106.113611;
  zoom: number = 16;
  draggable:string="1";
  marcadorSel:any=null;

  constructor(public _ms:MapasService){
    this._ms.cargarMarcadores();
  }

  clickMapa(evento){

    let nuevoMarcador:Marcador ={
      lat:evento.coords.lat,
      lng:evento.coords.lng,
      titulo:"Sin título",
      draggable:true
    }
    this._ms.insertarMarcador(nuevoMarcador);

  }

  clickMarcador(marcador:Marcador, i:number){
    this.marcadorSel = marcador;
    if (this.marcadorSel.draggable) {
        this.draggable = "1";
    }else{
      this.draggable = "0";
    }
  }

  dragEndMArcador(marcador:Marcador, evento){
    let lat= evento.coords.lat;
    let lng= evento.coords.lng;

    marcador.lat=lat;
    marcador.lng=lng;

    this._ms.guardarMarcadores();
  }

  cambiarDraggable(){
    if (this.draggable === "1") {
        this.marcadorSel.draggable =true;
    }else{
      this.marcadorSel.draggable =false;
    }
  }


}
