import { Component } from "@angular/core";
import { NavController,ToastController } from "ionic-angular";

//importamos pagina singinup
import { RegistroPage } from "../registro/registro";

import { HTTP } from "@ionic-native/http";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  nombre: String;
  apellido: String;
  cedula: number;
  contrasena: String;
  celular: number;

  constructor(public navCtrl: NavController, private http: HTTP,
              private toastCtrl: ToastController) {}

  login() {
    //

    if (
      this.cedula != null &&
      (this.contrasena != null || this.contrasena == "")
    ) {
      let link = "https://biciapp-jhon0520.c9users.io/api/login";

      let data = {
        cedula: this.cedula,
        password: this.contrasena
      };

      this.http
        .post(link, data, {})
        .then(data => {
          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);

          //Inicializamos el toast
   let toast = this.toastCtrl.create({
    message: data.data,
    duration: 3000,
    position: 'bottom'
    });
    //ejecutamos el toast
    toast.present();

        })
        .catch(error => {
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
        });

      this.navCtrl.popToRoot();
    }

    //
  }

  //funcion navegar a singinup
  irsinginup() {
    this.navCtrl.push(RegistroPage);
  }



}
