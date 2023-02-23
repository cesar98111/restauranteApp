import { useEffect, useState } from "react"


const Pagination = ({records, recordsPerPages, currentPages, setCurrentPages}) =>{
    const [paginationList, setPaginationList] = useState([])
    useEffect(()=>{
        
        let list =[]
        for(let i=0; i<Math.ceil(records/recordsPerPages);i++){
            list.push(i)
            
        }
        setPaginationList(list)
        if(currentPages===paginationList.length){
            setCurrentPages(currentPages-1)
        }
    },[records])
    

    
    return(
        <div >
            <button class="pagination" disabled={currentPages<=1} onClick={()=>setCurrentPages(currentPages-1)}>🠔</button>
            <span>{currentPages} /</span>
            <span>{paginationList.length}</span>
            <button class="pagination" disabled={currentPages >= paginationList.length} onClick={()=>setCurrentPages(currentPages+1)}>🠖</button>
        </div>
    )
}

export default Pagination