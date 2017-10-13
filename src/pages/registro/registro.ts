import { Component } from '@angular/core';
import { NavController, NavParams ,ToastController} from 'ionic-angular';
import { HTTP } from '@ionic-native/http';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  nombre:String; apellido:String; cedula:number; contrasena:String;
  celular:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http: HTTP, private toastCtrl: ToastController, ) {
  }

  registrar(){


    ///

    if((this.nombre!=null||this.nombre=="")&&
    (this.apellido!=null||this.apellido=="")&&
     this.cedula!=null&&
    (this.contrasena!=null||this.contrasena=="")&&
     this.celular!=null){

       let link = 'https://biciapp-jhon0520.c9users.io/api/crear-usuarios';

       let data={
         nombre:this.nombre,
         apellido:this.apellido,
         cedula:this.cedula,
         password:this.contrasena,
         numero:this.celular
       };

       this.http.post(link, data, {})
       .then(data => {

         console.log(data.status);
         console.log(data.data); // data received by server
         console.log(data.headers);

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

       //Inicializamos el toast


       this.navCtrl.popToRoot();

 }else{
   //Inicializamos el toast
   let toast = this.toastCtrl.create({
   message: 'Campos por rellenar',
   duration: 3000,
   position: 'bottom'
   });
   //ejecutamos el toast
   toast.present();
 }

    ///


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
