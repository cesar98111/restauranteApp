import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Navbar from "../Navbar/Navbar";
import Costos from "../pages/Costos";
import Carta from "../pages/Carta";
import Foother from "../Foother/Foother";

const FedoraApp = () =>{
    return(
        <div className="containerApp">
            <Navbar/>
            <Routes className= "containerPages">
                <Route path="/" element={<Home/>}></Route>
                <Route path="/costos" element={<Costos/>}></Route>
                <Route path="/carta" element={<Carta/>}></Route>
            </Routes>
            <Foother/>
        </div>
    )
}

export default FedoraApp;