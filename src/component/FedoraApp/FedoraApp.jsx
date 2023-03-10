import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Navbar from "../Navbar/Navbar";
import Costos from "../pages/Costos";
import Carta from "../pages/Carta";
import Foother from "../Foother/Foother";
import AddFood from "../pages/AddFood";
import Employes from "../pages/Employes";
import EmployeModify from "../pages/EmployeModify";
import Product from "../pages/Product";
import ProductAdd from "../pages/ProductAdd";
const FedoraApp = () =>{
    return(
        <div className="containerApp">
            <Navbar/>
            <Routes className= "containerPages">
                <Route path="/" element={<Home/>}></Route>
                <Route path="/costos" element={<Costos/>}></Route>
                <Route path="/carta" element={<Carta/>}></Route>
                <Route path="/carta/add" element={<AddFood/>}></Route>
                <Route path="/employe" element={<Employes/>}></Route>
                <Route path="/employe/add/" element={<EmployeModify/>}></Route>
                <Route path="/employe/add/:id" element={<EmployeModify/>}></Route>
                <Route path="/product" element={<Product/>}></Route>
                <Route path="/product/Add" element={<ProductAdd/>}></Route>
            </Routes>
            <Foother/>
        </div>
    )
}

export default FedoraApp;