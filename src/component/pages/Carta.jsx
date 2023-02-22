import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTable , getAlergen, deleteCompuesto, deleteFood} from "../../services/services"
import Alergenos from "../Alergenos/Alergenos"

const Carta = () =>{

    const navigate = useNavigate()

    const[platos, setPlatos] = useState()
    useEffect(()=>{
        const getPlato = async() =>{
            setPlatos(await getTable("platos"))
        }

        getPlato()

        
    },[])
    const handlerDeleteFood = async (id) =>{
        console.log(id)
        await deleteCompuesto(id)
        await deleteFood(id)
        setPlatos(platos.filter((value)=> value.idPlato !== id))
    }
    const renderTbody = () =>{
        return(
            platos&&
            platos.map(value =>{
                return(
                    <tr>
                        <td>{value.idPlato}</td>
                        <td>{value.nombre}</td>
                        <td>{value.precio}</td>
                        <td> 
                            <Alergenos name={value.nombre}/>
                        </td>
                        <td>
                            <button onClick={()=> handlerDeleteFood(value.idPlato)} class="DeleteButton">eliminar</button> 
                            <button class="UpdateButton">modificar</button>
                        </td>
                    </tr>
                )
                
            })
        )
    }

    return(
        <div class="cartaTable">
            <button onClick={()=>navigate("/carta/add")}>añadir</button>
            <table class="tableFood">
                <thead>
                    <tr>
                        <th>numero de plato</th>
                        <th>nombre</th>
                        <th>precio</th>
                        <th>alergenos</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTbody()}
                </tbody>
            </table>
        </div>
    )
}

export default Carta