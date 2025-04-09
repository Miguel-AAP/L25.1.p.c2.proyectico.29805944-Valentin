import Cl_controlador from "./Cl_controlador.js";
import Cl_vTienda from "./Cl_vTienda.js";
import Cl_mTienda from "./Cl_mTienda.js";

export default class Cl_index{
    constructor(){
        let vista = new Cl_vTienda()
        let modelo = new Cl_mTienda()
        let controlador = new Cl_controlador(modelo,vista)
        vista.controlador = controlador
    }
}
