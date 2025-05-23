import Cl_mFlores from "./Cl_mFlores.js"

export default class Cl_mTienda{
    constructor(){
        this.contArreglos = +0
        this.contFlores = +0
        this.contFloresNatMed = +0
        this.acumVendido = +0
    }
    procesarVenta(arreglo){
        this.contArreglos++
        if(arreglo instanceof Cl_mFlores){
            this.contFlores++
            if(arreglo.envase == "2" && arreglo.tipo =="N"){
                this.contFloresNatMed++
            }
        }
        this.acumVendido += arreglo.costo+arreglo.descuento()
    }

    calcularPorciento(){
        return (this.contFloresNatMed/this.contFlores)*100
    }
}