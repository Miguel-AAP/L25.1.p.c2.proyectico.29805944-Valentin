import Cl_arreglo from "./Cl_arreglo.js";
export default class Cl_mFrutas extends Cl_arreglo{
    constructor(codigo,envase,costo,aditivo){
        super(codigo,envase,costo)
        this.aditivo = aditivo
    }

    descuento(){
        return this.aditivo == 0 ? 0:(this.aditivo >= 1 ? this.costo*0.15:0 )
    }
}