export class persona{
    ///este dato no es necesario
id?: number;
nombre: string;
apellido: string;
img: string;
acercademi: string;
constructor(nombre: string, apellido:string, img:string, acercademi: string){
  ///this nombre por referencia  ///el que ingresa por parametro
this.nombre = nombre;
this.apellido = apellido;
this.img = img;
this.acercademi = acercademi;

}

}