
import { useEffect, useState } from "react"
import { Await } from "react-router-dom"
import { getProveedor } from "../../services/services"
import { useNavigate } from "react-router-dom"
import Pagination from "../Paginations.jsx/Pagination"

const Product =()=>{
    const navigate = useNavigate()
    const[product, setProduct] = useState()
    const [recordsPerPages, setRecordsPerPages]= useState(5)
    const [currentPages, setCurrentPages]= useState(1)
    const lastIndex = currentPages * recordsPerPages
    const firstIndex = lastIndex - recordsPerPages
    useEffect(()=>{
        const getProduct = async () =>{
            setProduct(await getProveedor())
        }

        getProduct()
    },[])
    

    const renderBody = ()=>{
        return(
            product&&
            product.map((value)=>{
                return(
                    <tr>
                        <td>{value.producto}</td>
                        <td>{value.alergenos}</td>
                        <td>{value.coste}€</td>
                        <td>{value.proveedor}</td>
                        <td>{value.correo}</td>
                        <td>{value.direccion}</td>
                    </tr>
                )
            }).slice(firstIndex,lastIndex)

        )
    }
    return(
        <div class="productRequest">
            <h1>LISTA DE PRODUCTOS</h1>
            <button class="addButtonFood" onClick={()=>navigate("/product/add")}>Añadir</button>
            <table class="tableProductProv">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Alergenos</th>
                        <th>Coste</th>
                        <th>Proveedor</th>
                        <th>Correo</th>
                        <th>Dirección</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
            {
                product&&
                <Pagination
                    records={product.length}
                    recordsPerPages={recordsPerPages}
                    currentPages={currentPages}
                    setCurrentPages={setCurrentPages}/>
            }
        </div>
    )
}

export default Product