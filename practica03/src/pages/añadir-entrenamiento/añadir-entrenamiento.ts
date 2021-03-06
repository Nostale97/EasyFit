import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AñadirEntrenamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-añadir-entrenamiento',
  templateUrl: 'añadir-entrenamiento.html',
})
export class AñadirEntrenamientoPage {
  deportista;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.deportista = navParams.get("cliente");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AñadirEntrenamientoPage');
  }
  irPagSiguiente(){
    this.navCtrl.pop();
  }
}
