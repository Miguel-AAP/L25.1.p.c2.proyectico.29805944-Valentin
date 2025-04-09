import Cl_arreglo from "./Cl_arreglo.js";
export default class Cl_mFrutas extends Cl_arreglo{
    constructor({codigo,envase,costo,aditivo=0}){
        super(codigo,envase,costo)
        this.aditivo = aditivo
    }

    descuento(){
        if(this.aditivo == 0){
            return 0
        }
        else if(this.aditivo == 1){
            return this.costo*(-0.15)
        }

    }
}