export default class Cl_controlador{
    constructor(modelo,vista){
        this.modelo = modelo
        this.vista = vista
    }
    
    procesarVenta(){
        this.modelo.procesarVenta(this.vista.procesarVenta())    
        this.vista.reportarArreglo(this.modelo.acumVendido,this.modelo.calcularPorciento())
    }


}