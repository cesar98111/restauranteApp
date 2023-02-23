
import { useState,useEffect } from "react"
import { getTable } from "../../services/services"

const Costos = ({}) =>{

    const [employe, setEmploye] = useState()
    const [product, setProduct] = useState()
    const [costo, setCosto] = useState(0)
    useEffect(()=>{
        const getDatas = async() => {
            setEmploye(await getTable("empleados"))
            setProduct(await getTable("productos"))
        }
        getDatas()
    },[])


    const calculate =()=>{
        let sum = 0;
        employe.forEach(element => {
            sum += element.salario
        });
        product.forEach(element=>{
            sum+= element.coste
        })

        setCosto(sum.toFixed(2))
    }
    const renderProduct = () =>{
        return(
            product&&
            product.map((value)=>{
                return(
                    <tr>
                        <td>{value.nombre}</td>
                        <td>{value.coste}</td>
                    </tr>
                )
            })
        )
    }

    const renderEmploye = () =>{
        return(
            employe&&
            employe.map((value)=>{
                return(
                    <tr>
                        <td>{value.nombre}</td>
                        <td>{value.salario}</td>
                    </tr>
                )
            })
        )
    }
    return(
        <div class="containerCostes">
            <div class="products">
                <h1>Costes de productos</h1>
                <div class="containerTableProduct">
                    <table >
                        <thead>
                            <tr>
                                <th>
                                    nombre
                                </th>
                                <th>
                                    precio
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderProduct()}
                        </tbody>
                    </table>
                </div>
                
            </div>
            {
                costo === 0?
                (<div>
                    <h1>calcular presupuesto mensual</h1>
                    <button onClick={()=>calculate()}>calcular</button>
                </div>)
                :
                (
                    <div>
                        <h1>resultado</h1>
                        <h1>{costo}</h1>
                    </div>
                )
            }
            <div class="employe">
                <h1>Salarios de empleados</h1>
                <div class="containerEmployesCost">
                    <table >
                        <thead>
                            <tr>
                                <th>
                                    nombre
                                </th>
                                <th>
                                    salario
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderEmploye()}
                        </tbody>
                    </table>
                </div>
                
            </div>
            
        </div>
    )
}

export default Costos