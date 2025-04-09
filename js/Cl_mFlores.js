import Cl_arreglo from "./Cl_arreglo.js";
export default class Cl_mFlores extends Cl_arreglo{
    constructor({codigo,envase,costo,tipo=0}){
        super(codigo,envase,costo)
        this.tipo = tipo
    }

    descuento(){
        if(this.tipo =="A"){
            return this.costo*(-0.10)
        }
        else if(this.tipo == "N"){
            return this.costo*0.08
        }
        else return 0
    }
}