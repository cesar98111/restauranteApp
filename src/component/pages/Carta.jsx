import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTable , getAlergen, deleteCompuesto, deleteFood} from "../../services/services"
import Alergenos from "../Alergenos/Alergenos"
import Pagination from "../Paginations.jsx/Pagination"
const Carta = () =>{

    const navigate = useNavigate()
    const [recordsPerPages, setRecordsPerPages]= useState(5)
    const [currentPages, setCurrentPages]= useState(1)
    const lastIndex = currentPages * recordsPerPages
    const firstIndex = lastIndex - recordsPerPages
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
                            <button onClick={()=> handlerDeleteFood(value.idPlato)} class="DeleteButton">Eliminar</button> 
                            
                        </td>
                    </tr>
                )
                
            }).slice(firstIndex,lastIndex)
        )
    }

    return(
        <div class="cartaTable">
            <h1>MENU DE LA CARTA</h1>
            <button class="addButtonFood" onClick={()=>navigate("/carta/add")}>Añadir</button>
            <table class="tableFood">
                <thead>
                    <tr>
                        <th>Numero de plato</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Alergenos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTbody()}
                </tbody>
            </table>
            {
                platos&&
                <Pagination
                    records={platos.length}
                    recordsPerPages={recordsPerPages}
                    currentPages={currentPages}
                    setCurrentPages={setCurrentPages}/>
            }
        </div>
    )
}

export default Carta