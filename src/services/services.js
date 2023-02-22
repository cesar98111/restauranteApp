

const url = "http://192.168.0.106:8000/api/restaurant"

const getBooking = async() =>{
    try{
        const response = await fetch(`${url}/relation`)
        const data = await response.json()
        console.log(data)
        return data.data
    }catch(err){
        console.log("hola")
        console.log(err)
    }
}

const getSelter = async(limit) =>{
    try{
        const response = await fetch(`${url}/mostSeld/${limit}`)
        const data = await response.json()
        console.log(data)
        return data.data
    }catch(err){
        console.log(err)
    }
}
const getTable = async (table) =>{
    try{
        const response = await fetch(`${url}/table/${table}`)
        const data = await response.json()
        console.log(data)
        return data.data
    }catch(err){
        console.log(err)
    }
}

const getAlergen = async (name) =>{
    try{
        const response = await fetch(`${url}/alergen/${name}`)
        const data = await response.json()
        return data.data


    }catch(err){
        console.log(err)
    }
}

const insertFood = async (plato) =>{
    try{
        const response = await fetch(`${url}/insert/plato`,{
            method:"POST",
            body:JSON.stringify({
                nombre:plato.nombre,
                precio:plato.precio
            }),
            headers:{
                "Content-type":"application/json"
            }
        })
        const data = await response.json()

        return data.data
    }catch(err){
        console.log(err)
    }
}
const insertCompuesto = async (id,compuesto) =>{
    console.log(id, compuesto)
    try{
        const response = await fetch(`${url}/insert/compuesto`,{
            method:"POST",
            body:JSON.stringify({
                plato:id,
                producto:compuesto
            }),
            headers:{
                "Content-type":"application/json"
            }
        })
        const data = await response.json()

        return data.data
    }catch(err){
        console.log(err)
    }
}

const deleteCompuesto = async(id) =>{
    try{
        const response = await fetch(`${url}/delete/compuesto/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            }
        })

        const data = await response.json()

        return data
    }catch(err){
        console.log(err)
    }
}

const deleteFood = async(id) =>{
    try{
        const response = await fetch(`${url}/delete/plato/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            }
        })

        const data = await response.json()

        return data
    }catch(err){
        console.log(err)
    }
}
export{
    getBooking,
    getSelter,
    getTable,
    getAlergen,
    insertFood,
    insertCompuesto,
    deleteCompuesto,
    deleteFood
}


