export default class Cl_vArreglo{
    constructor(){
        this.arregloSeccion = document.getElementById("arregloForm")
        this.inCodigo = document.getElementById("arregloForm_inCodigo")
        this.inEnvase = document.getElementById("arregloForm_inEnvase")
        this.inCosto = document.getElementById("arregloForm_inCosto")
        this.inTipo = document.getElementById("arregloForm_inTipo")
        this.inAditivo = document.getElementById("arregloForm_inAditivo")
        this.btAceptar = document.getElementById("arregloForm_button")
    }

    get codigo(){
        return this.inCodigo.value 
    }

    get envase(){
        return this.inEnvase.value 
    }

    get costo(){
        return this.inCosto.value 
    }

    get tipo(){
        return this.inTipo.value 
    }

    get aditivo(){
        return this.inAditivo.value 
    }

    ocultar(){
        this.arregloSeccion.hidden = !this.arregloSeccion.hidden
    }
}