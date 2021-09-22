import React, {useState, useEffect} from 'react'
import axios from "axios";

function Homescreen(){
    
    useEffect(async () => {
try {
const data = (await axios.get('/api/sports/getallsports')).data
console.log(data)
}
catch (error){
console.log(error)

}
    }, [])



return(
<div>
<h1>Home screen</h1>






</div>


)
}
export default Homescreen