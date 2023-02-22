import { useEffect, useState } from "react"
import { getTable, deleteEmployee } from "../../services/services"
import { useNavigate } from "react-router-dom"


const Employes = () =>{
    const navigate = useNavigate()
    const [employeList, setEmployeList] = useState()
    const [filter , setFilter] = useState()
    useEffect(()=>{
        const requestEmployee= async() =>{
            setEmployeList(await getTable("empleados"))
        }
        requestEmployee()
    },[])

    const handlerChange = (e) =>{
        setFilter(e.target.value)
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
                            <button class = "UpdateButton">modificar</button>
                            <button onClick={()=> handlerDelete(value.idEmpleado)} class="DeleteButton">Eliminar</button>
                        </td>
                    </tr>
                )
            })
        )
    }
    return(
        <div class="containerEmploye">
            <div class="actionEmploye">
                <div class="containerFilterEmploye">
                    <form>
                        <input type="text"
                            placeholder="introduzca"
                            name="filtro"
                            class="inputFilter"
                            onChange={handlerChange}
                            value={filter}
                            />
                        <button class="UpdateButton">buscar</button>
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
        </div>
    )
}

export default Employes