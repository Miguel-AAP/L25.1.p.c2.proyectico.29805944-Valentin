import Cl_vArreglo from "./Cl_vArreglo.js";
import Cl_mFlores from "./Cl_mFlores.js";
import Cl_mFrutas from "./Cl_mFrutas.js";
export default class Cl_vTienda{
    constructor(){
        this.controlador = null
        this.tabla = document.getElementById("mainForm_tabla")
        this.salida = document.getElementById("salida")
        this.vArreglo = new Cl_vArreglo()
        this.vArreglo.btAceptar.onclick = () => this.controlador.procesarVenta()
    }

    procesarVenta(){
        this.
    }
}