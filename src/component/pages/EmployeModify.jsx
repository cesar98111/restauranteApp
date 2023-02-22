import { useState } from "react"
import { addEmployee } from "../../services/services"
import { useNavigate } from "react-router-dom"

const EmployeModify = ()=>{

    const navigate = useNavigate()

    const [Employee, setEmployee] = useState({
        nombre:"",
        apellido:"",
        salario:0,
        ocupacion:"",
        telefono:""
    })

    const handleChamge = (e)=>{
        setEmployee({
           ...Employee,
           [e.target.name]:e.target.value
        })
    }
    const handlerSubmit = async (e)=>{
        e.preventDefault()
        await addEmployee(Employee)
        navigate("/employe")
    }
    return(
        <div class="containerFormEmploye">
           <form  onSubmit={handlerSubmit} class="formEmploye">

                <p>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        placeholder="introduce nombre"
                        id="nombre"
                        name="nombre"
                        onChange={handleChamge}/>
                </p>
                <p>
                    <label htmlFor="apellido">Apellido</label>
                    <input 
                        id="apellido"
                        type="text"
                        name="apellido"
                        placeholder="introduce apellido"
                        onChange={handleChamge}/>
                </p>
                <p>
                    <label htmlFor="salario">salario</label>
                    <input 
                        id="salario"
                        type="number"
                        name="salario"
                        placeholder="introduce el salario"
                        onChange={handleChamge}/>
                </p>
                <p>
                    <label htmlFor="ocupacion">ocupacion</label>
                    <select name="ocupacion" onChange={handleChamge} >
                        <option value="camarero">camarero</option>
                        <option value="cocinero">cocinero</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="telefono" name="telefono">telefono</label>
                    <input
                        id="telefono"
                        type="number"
                        name="telefono"
                        placeholder=" introduce el telefono"
                        onChange={handleChamge}
                        />
                </p>
                
                <div>
                    <button  type="submit">enviar</button>
                </div>

                

           </form>
        </div>
    )
}

export default EmployeModify