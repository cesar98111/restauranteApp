import { useEffect, useState } from "react"
import { getAlergen } from "../../services/services";



const Alergenos = ({name}) =>{
    const [alergenos, setAlergenos] = useState("");
    
    useEffect(()=>{
        console.log(name)
        const getAlergenos = async () =>{
            setAlergenos(await getAlergen(name))
            
        }
        getAlergenos()
    },[])

    const handlerAlergen =(value) =>{
        switch(value){
            case "sulfitos":
                return "./sulfito.png"
            case "soja":
                return "./soja.png"
            case "moluscos":
                return "./moluscos.png"
            case "huevo":
                return "./huevo.png"
            case "gluten":
                return "./glutn.png"
            case "apio":
                return "./apio.png"
            case "lacteos":
                return "./leche.png"
            case "mostaza":
                return "./mostaza.png"
            case "sesamo":
                return "./sesamo.png"
            case "pescados":
                return "./pescado.png"
            case"frutos":
                return "./frutos.png"
            case"altramuz":
                return "./altramuz.png"
            case"cacahuete":
                return "./cacahuete.png"
            case"crustaceos":
                return "./crustaceos.png"
        }
    }
    return(
        <div class="containerAllergens">
           {
            alergenos&&
            alergenos.map((value)=>{
                
                return(
                    <div>
                        {
                            value.alergenos !== "ninguno"
                            ?(<img class="allergens" src={handlerAlergen(value.alergenos)}></img>)
                            :null
                        }
                        
                    </div>
                    
                ) 
            })
           }
        </div>
    )
}


export default Alergenos