
import { useState } from "react"



const Home = () =>{

   
    const [client , setClient] = useState([{
        id:1,
        nombre:"paco",
        apellido:"pepe",
        userName:"paco123"

    },
    {
        id:2,
        nombre:"paco",
        apellido:"pepe",
        userName:"paco123"
    },
    {
        id:3,
        nombre:"paco",
        apellido:"pepe",
        userName:"paco123"  
    }])
    
    const renderBody = () =>{

        return(
            client.map(value =>{    
                return(
                    <tr >
                            <td>{value.id}</td>
                            <td >{value.nombre}</td>
                            <td>{value.apellido}</td>
                            <td>{value.userName}</td>
                    </tr>
                )
            }        
        ))
        
    }
    return(
    <div className="containerHome">
        
        <div className='reservasTable'>
            <h1 className="tableTitle">productos mas vendidos</h1>
            <table>
                <thead>
                    <tr >
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
        <div className="productTable">
            <h1 className="tableTitle">Reservas recientes</h1>
            <table>
                <thead>
                    <tr >
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr >
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr >
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    
    )
}

export default Home