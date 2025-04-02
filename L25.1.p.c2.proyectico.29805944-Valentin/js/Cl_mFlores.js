import Cl_arreglo from "./Cl_arreglo.js";
export default class Cl_mFlores extends Cl_arreglo{
    constructor(codigo,envase,costo,tipo){
        super(codigo,envase,costo)
        this.tipo = tipo
    }

    descuento(){
        return this.tipo == "A" ? this.costo*(-0.10):(this.tipo =="B"? this.costo*(0.08):0)   
    }
}