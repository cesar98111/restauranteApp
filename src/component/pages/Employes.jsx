import { useEffect, useState } from "react"
import { getTable, deleteEmployee ,requestEmployeByName } from "../../services/services"
import { useNavigate, Link } from "react-router-dom"
import Pagination from "../Paginations.jsx/Pagination"

const Employes = () =>{
    const navigate = useNavigate()
    const [employeList, setEmployeList] = useState()
    const [filter , setFilter] = useState()
    const [recordsPerPages, setRecordsPerPages]= useState(5)
    const [currentPages, setCurrentPages]= useState(1)
    const lastIndex = currentPages * recordsPerPages
    const firstIndex = lastIndex - recordsPerPages
    useEffect(()=>{
        const requestEmployee= async() =>{
            setEmployeList(await getTable("empleados"))
        }
        requestEmployee()
    },[])

    const handlerChange = (e) =>{
        setFilter(e.target.value)
    }

    const handleSubmitFilter = async (e)=>{
        e.preventDefault()
        const data = await requestEmployeByName(filter)
        
        if(data.length !== 0){
            setEmployeList(data)
        }else{
            console.log("hola")
            setEmployeList(await getTable("empleados"))
        }
        
    }

    const handlerDelete = async(id)=>{
        await deleteEmployee(id)
        setEmployeList(employeList.filter((value)=>value.idEmpleado !== id))
        
    }
    const tableEmploye = ()=>{
        return(
            employeList&&
            employeList.map(value =>{
                return(
                    <tr>
                        <td>{value.nombre}</td>
                        <td>{value.apellido}</td>
                        <td>{value.salario}</td>
                        <td>{value.ocupacion}</td>
                        <td>{value.telefono}</td>
                        <td>
                            <Link class = "UpdateButtonEmploye" to={`/employe/add/${value.idEmpleado}`}>modificar</Link>
                            <button onClick={()=> handlerDelete(value.idEmpleado)} class="DeleteButtonEmploye">Eliminar</button>
                        </td>
                    </tr>
                )
            }).slice(firstIndex,lastIndex)
        )
    }
    return(
        <div class="containerEmploye">
            <div class="actionEmploye">
                <div class="containerFilterEmploye">
                    
                    <label className="labelFiltro" htmlFor="filtro">Filtro por nombre</label>
                    
                    <form onSubmit={handleSubmitFilter}>
                        <input type="text"
                            placeholder="introduzca"
                            name="filtro"
                            class="inputFilter"
                            onChange={handlerChange}
                            value={filter}
                            />
                        
                        <button type="submit" name="filtro" class="UpdateButton">buscar</button>
                    </form>
                </div>
                <button onClick={()=> navigate("/employe/add")} class="addButtonFilter">añadir nuevo empleado</button>
            </div>
            
            <table class="TableEmploye">
                <thead>
                    <tr>
                        <th>nombre</th>
                        <th>apellido</th>
                        <th>salario</th>
                        <th>ocupacion</th>
                        <th>telefono</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tableEmploye()}
                </tbody>
            </table>
            {
                employeList&&
                <Pagination
                    records={employeList.length}
                    recordsPerPages={recordsPerPages}
                    currentPages={currentPages}
                    setCurrentPages={setCurrentPages}/>
            }
            
        </div>
    )
}

export default Employes