
import { useEffect, useState } from "react"
import { getBooking,getSelter} from "../../services/services"


const Home = () =>{


    const [booking, setBooking] = useState()
    const [mostSelter, setMostSelter] = useState()

    useEffect(()=>{
        const requestBooking = async() =>{
            setBooking(await getBooking())
            setMostSelter(await getSelter(2))
        }

        requestBooking()
    },[])


   
    
    const renderBody = () =>{

        return(
            booking&&
            booking.map(value =>{    
                return(
                    <tr >
                            <td>{value.clienteNombre}</td>
                            <td>{value.telefono}</td>
                            <td>{value.fecha}</td>
                            <td>{value.mesa}</td>
                            <td>{value.Npersonas}</td>
                            <td>{value.empleadoNombre}</td>
                    </tr>
                )
            }        
        ))
        
    }

    const renderBodySelter = () =>{
        return(
            mostSelter&&
            mostSelter.map(value =>{
                return(
                    <tr>
                        <td>{value.platillos}</td>
                        <td>{value.cuenta}</td>
                    </tr>
                )
            })
        )
    }
    return(
    <div className="containerHome">
        
        <div className='reservasTable'>
            <h1 className="tableTitle">RESERVAS RECIENTES</h1>
            <table>
                <thead>
                    <tr >
                        <th>Nombre de cliente</th>
                        <th>telefono</th>
                        <th>fecha</th>
                        <th>mesa</th>
                        <th>numero de personas</th>
                        <th>Nombre de empleado</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
        <div className="productTable">
            <h1 className="tableTitle">PLATOS MAS VENDIDOS</h1>
            <table>
                <thead>
                    <tr >
                        <th>Plato</th>
                        <th>numero de ventas</th>
                    </tr>
                </thead>
                <tbody>
                   {renderBodySelter()}
                </tbody>
            </table>
        </div>
    </div>

    
    )
}

export default Home