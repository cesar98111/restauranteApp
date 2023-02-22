import { Link } from "react-router-dom"

const Navbar = () =>{

    const imgStyle={
        
        height:50,
        marginTop:5,
        marginRight:10
    }
    return(
        <div className="containerNavbar">
            
            <spam className="titleNavbar">
            <img src="./Fedora.png" alt="fedora" style={imgStyle}/>
            Fedora</spam>
            <div className="linkContainer">
                <Link className="link" to="/">HOME</Link>
                <Link className="link" to="/carta">CARTA</Link>
                <Link className="link" to="/costos">COSTES</Link>
                <Link className="link" to="/employe">EMPLEADOS</Link>
            </div>
        </div>
    )
}

export default Navbar