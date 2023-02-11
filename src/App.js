import "./App.css"
import FedoraApp from "./component/FedoraApp/FedoraApp"
import { BrowserRouter } from "react-router-dom"


function App (){
    return(
        <div className="App">
            <BrowserRouter>
                <FedoraApp/>
            </BrowserRouter>
        </div>
       
    )
}

export default App