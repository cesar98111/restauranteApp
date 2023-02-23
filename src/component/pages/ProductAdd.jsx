import { useEffect, useState } from "react"
import { getTable,inserProducto } from "../../services/services"
import { useNavigate, useParams } from "react-router-dom"

const ProductAdd= ()=>{

    const navigate = useNavigate()
    const {id} = useParams()
    const [Proveedor, setProveedor] = useState()
    const [Producto, setProducto] = useState({
        nombre:"",
        alergeno:"",
        costo:0,
        proveedor:"",
        
    })

    
    useEffect(()=>{
        const getProveedor =async () =>{
            setProveedor(await getTable("proveedores"))
        }
        getProveedor()
    },[])
    

    const handleChamge = (e)=>{
        setProducto({
           ...Producto,
           [e.target.name]:e.target.value
        })
    }
    const handlerSubmit = async (e)=>{
        e.preventDefault()
       // await inserProducto(Producto)
       console.log(Producto)
        navigate("/product")
        
    }

    const renderSelect =() =>{
        return(
            Proveedor&&
            Proveedor.map((values)=>{
                return(
                    <option value="2">2</option>
                )
            })
        )
    }
    return(
        <div class="containerFormEmploye">
           <form  onSubmit={handlerSubmit} class="formEmploye">
                <h1 class="titleAdd">INTRODUCE LOS DATOS DEL NUEVO PRODUCTO</h1>
                <p>
                    <label htmlFor="nombre">Nombre</label>
                    <input class="inputEmploye"
                        type="text" 
                        placeholder="introduce nombre"
                        id="nombre"
                        name="nombre"
                        value={Producto.nombre}
                        onChange={handleChamge}/>
                </p>
                <p>
                    <label htmlFor="alergeno">Alergeno</label>
                    <select class="inputEmploye" name="alergeno" id="alergeno" onChange={handleChamge} >
                        <option value="altramuz">Altramuz</option>
                        <option value="apio">Apio</option>
                        <option value="Cacahuete">Cacahuete</option>
                        <option value="Crustaceos">Crustaceos</option>
                        <option value="frutos">Frutos con cascara</option>
                        <option value="gluten">Gluten</option>
                        <option value="huevo">Huevo</option>
                        <option value="leche">Leche</option>
                        <option value="moluscos">Moluscos</option>
                        <option value="mostaza">Mostaza</option>
                        <option value="pescado">Pescado</option>
                        <option value="sesamo">Sesamo</option>
                        <option value="soja">Soja</option>
                        <option value="sulfito">Sulfito</option>
                        <option value="ninguno">Ninguno</option>

                    </select>
                </p>
                <p>
                    <label htmlFor="costo">Coste</label>
                    <input class="inputEmploye"
                        id="costo"
                        type="number"
                        name="costo"
                        placeholder="introduce el coste"
                        value={Producto.costo}
                        onChange={handleChamge}/>
                </p>
                <p>
                    <label htmlFor="Product">ocupacion</label>
                    <select class="inputEmploye" name="Product" onChange={handleChamge} >
                        {renderSelect()}
                    </select>
                </p>
               
                
                <div class="buttonBoxEmploye">
                    <button class = "buttonSend" type="submit">enviar</button>
                </div>

                

           </form>
        </div>
    )
}

export default ProductAdd