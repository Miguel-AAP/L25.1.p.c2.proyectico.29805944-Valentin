import Cl_vArreglo from "./Cl_vArreglo.js";
import Cl_mFlores from "./Cl_mFlores.js";
import Cl_mFrutas from "./Cl_mFrutas.js"
export default class Cl_vTienda{
    constructor(){
        this.controlador = null
        this.mainForm = document.getElementById("mainForm")
        this.tabla = document.getElementById("mainForm_tabla")
        this.salida = document.getElementById("salida")
        this.vArreglo = new Cl_vArreglo()
        this.tipoArreglo = null
        this.vArreglo.ocultar()
        this.btVenta = document.getElementById("mainForm_button")
        this.btVenta.onclick = () => (this.tipoArreglo = prompt("Tipo de arreglo: 1.Flores 2.Frutas"),
        this.vArreglo.ocultar(),
        this.mainForm.hidden = true,
        this.tipoArreglo == 1 ? this.vArreglo.inAditivo.hidden = true : this.vArreglo.inTipo.hidden = true)
        
        this.vArreglo.btAceptar.onclick = () => (this.controlador.procesarVenta(),
        this.vArreglo.ocultar(),
        this.mainForm.hidden = !this.mainForm.hidden)
            
    }

    procesarVenta(){
        
        if(this.tipoArreglo == 1){
            this.mArreglo = new Cl_mFlores({
                codigo: this.vArreglo.codigo,
                envase: this.vArreglo.envase,
                costo: this.vArreglo.costo,
                tipo: this.vArreglo.tipo
            })
        }
        else if(this.tipoArreglo == 2){
            
            this.mArreglo = new Cl_mFrutas({
                codigo: this.vArreglo.codigo,
                envase: this.vArreglo.envase,
                costo: this.vArreglo.costo,
                aditivo: this.vArreglo.aditivo
            })
        }
        this.vArreglo.inTipo.hidden = false
        this.vArreglo.inAditivo.hidden = false
        return this.mArreglo
    }

    reportarArreglo(vendido,porcentaje){
        this.tabla.innerHTML += `<tr>
        <td>${this.mArreglo.codigo}</td>
        <td>${this.mArreglo.envase}</td>
        <td>${this.mArreglo.costo}</td>
        <td>${this.mArreglo.tipo === undefined ? "No aplica": this.mArreglo.tipo }</td>
        <td>${this.mArreglo.aditivo === undefined ? "No aplica": this.mArreglo.aditivo}</td>
        </tr>`

        this.salida.innerHTML = `Total vendido:${vendido}<br>
        Porcentaje de ramos medianos: ${porcentaje}`
    }
}