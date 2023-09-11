import { useEffect, useState } from "react"
import View from "./View";
import ViewList from "./View";



export default function Albam(){
   const [albums , setAlbums] = useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res=>res.json())
    .then (data => setAlbums(data))

},[])
        
    return(
        <div >
            <h4>Total: {albums.length}</h4>
            {
                albums.map(n=><ViewList infor={n}></ViewList> )
            }
        </div>
    )
}