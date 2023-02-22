import { useEffect, useState } from "react"

import { getTable, insertFood, insertCompuesto } from "../../services/services"
import { useNavigate } from "react-router-dom"

const AddFood = () =>{
    const navigate = useNavigate()
    const [Food, setFood] = useState({
        nombre:"",
        precio:0
    })

    const [product, setProduct] = useState()
    const[select, setSelect] = useState([])

    useEffect(()=>{
        const getProduct = async () =>{
            setProduct(await getTable("productos"))
        }
        
        getProduct()

    },[])
   

    const handleChangeTex= (e) =>{
        setFood({
            ...Food,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(Food)
        const data = await insertFood(Food)
        console.log(data.insertId)
        console.log(select[1].idProducto)
        for(let i= 0; i<select.length;i++){
            await insertCompuesto(data.insertId, select[i].idProducto)
        }
        setSelect([])
        setFood({
            ...Food,
            nombre:"",
            precio:0
        })
        navigate("/carta")   
        
    }

    const handlerSelect = (value) =>{
        setSelect([...select,value])
        
    }
    const handleDelete = (value)=>{
        setSelect(select.filter(data => value.nombre !== data.nombre))
    }
    const rederBody = () =>{
        return(
            product&&
            product.map((value)=>{
                return(
                    <tr>
                        <td>{value.nombre}</td>
                        <td>{value.coste}</td>
                        <td>{value.idProveedores}</td>
                        <td> 
                            <button class="UpdateButton"  onClick={()=> handlerSelect(value)}>selecionar</button>
                        </td>
                    </tr>
                )
            })
        )
    }

    const renderSelectedBody = () =>{
        return(
            select&&
            select.map(value=>{
                return(
                    <tr>
                        <td>{value.nombre}</td>
                        <td>{value.coste}</td>
                        <td>{value.idProveedores}</td>
                        <td> 
                                <button onClick={()=>handleDelete(value)} class="DeleteButton">quitar</button>
                        </td>
                    </tr>
                )
            })
        )
    }


    return(
        <div class="ContainerAddFood">
            <form class="form" onSubmit={handleSubmit}>
                <h1>INFORMACIÓN DEL PRODUCTO</h1>
                <input type="text"
                    onChange={handleChangeTex}
                    name="nombre" 
                    class="inputFood"
                    placeholder="nombre de plato"
                    value={Food.nombre}
                    />
                <input type="number"
                    onChange={handleChangeTex}
                    name="precio"
                    class="inputFood"
                    placeholder="precio"/>
                <button class="UpdateButton" type="submit"> enviar </button>
            </form>
            {
                select.length === 0 ?
                (
                    <div class="noneProduct">
                        <h1>NO HAY PRODUCTOS SELECIONADOS</h1>
                    </div>
                )
                :(
                    <div class="containerSelected">
                        <table class="tableSelected">
                            <thead>
                                <tr>
                                    <th>nombre</th>
                                    <th>precio</th>
                                    <th>proveedor</th>
                                    <th>Accion</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {renderSelectedBody()}
                            </tbody>
                        </table>
                        
                    </div>
                )
            }
            

            <div class="ContainerProducts">
                <table>
                    <thead>
                        <tr>
                            <th>nombre</th>
                            <th>precio</th>
                            <th>proveedor</th>
                            <th>seleccionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rederBody()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AddFood