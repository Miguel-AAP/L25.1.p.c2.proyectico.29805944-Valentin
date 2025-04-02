import Cl_mFlores from "./Cl_mFlores"

export default class Cl_mTienda{
    constructor(){
        this.contArreglos == 0
        this.contFlores == 0
        this.contFloresNatMed == 0
    }
    procesarArreglo(arreglo){
        this.contArreglos++
        if(arreglo instanceof Cl_mFlores){
            this.contFlores++
            if(arreglo.envase == "2" && arreglo.tipo =="N"){
                this.contFloresNatMed++
            }
        }
    }

    calcularPorciento(){
        return (this.contFloresNatMed/this.contFlores)*100
    }
}