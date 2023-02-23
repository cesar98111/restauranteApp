import { useEffect, useState } from "react"
import { addEmployee, requestEmployeById, updateEmploye } from "../../services/services"
import { useNavigate, useParams } from "react-router-dom"

const EmployeModify = ()=>{

    const navigate = useNavigate()
    const {id} = useParams()
    
    const [Employee, setEmployee] = useState({
        nombre:"",
        apellido:"",
        salario:0,
        ocupacion:"",
        telefono:""
    })

    useEffect(()=>{
        if(id){
            const getEmploye = async ()=>{
            
                const data= await requestEmployeById(id)
                console.log(data)
                setEmployee({
                    ...Employee,
                    nombre:data[0].nombre,
                    apellido:data[0].apellido,
                    salario:data[0].salario,
                    ocupacion:data[0].ocupacion,
                    telefono:data[0].telefono
                })
            
            }
            getEmploye()
        }
        
            

    },[])

    

    const handleChamge = (e)=>{
        setEmployee({
           ...Employee,
           [e.target.name]:e.target.value
        })
    }
    const handlerSubmit = async (e)=>{
        e.preventDefault()
        if(id){
            await updateEmploye(Employee,id)
            navigate("/employe")
        }else{
            console.log("pasa")
            await addEmployee(Employee)
            navigate("/employe")
        }
        
    }
    return(
        <div class="containerFormEmploye">
           <form  onSubmit={handlerSubmit} class="formEmploye">
                <h1 class="titleAdd">{id?"MODIFICA LOS DATOS DEL EMPLEADO":"INTRODUCE LOS DATOS DEL NUEVO EMPLEADO"}</h1>
                <p>
                    <label htmlFor="nombre">Nombre</label>
                    <input class="inputEmploye"
                        type="text" 
                        placeholder="introduce nombre"
                        id="nombre"
                        name="nombre"
                        value={Employee.nombre}
                        onChange={handleChamge}/>
                </p>
                <p>
                    <label htmlFor="apellido">Apellido</label>
                    <input class="inputEmploye"
                        id="apellido"
                        type="text"
                        name="apellido"
                        value={Employee.apellido}
                        placeholder="introduce apellido"
                        onChange={handleChamge}/>
                </p>
                <p>
                    <label htmlFor="salario">salario</label>
                    <input class="inputEmploye"
                        id="salario"
                        type="number"
                        name="salario"
                        placeholder="introduce el salario"
                        value={Employee.salario}
                        onChange={handleChamge}/>
                </p>
                <p>
                    <label htmlFor="ocupacion">ocupacion</label>
                    <select class="inputEmploye" name="ocupacion" onChange={handleChamge} >
                        <option value="camarero">camarero</option>
                        <option value="cocinero">cocinero</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="telefono" name="telefono">telefono</label>
                    <input class="inputEmploye"
                        id="telefono"
                        type="text"
                        name="telefono"  
                        value={Employee.telefono}       
                        placeholder=" introduce el telefono"
                        onChange={handleChamge}
                        />
                </p>
                
                <div class="buttonBoxEmploye">
                    <button class = "buttonSend" type="submit">enviar</button>
                </div>

                

           </form>
        </div>
    )
}

export default EmployeModify