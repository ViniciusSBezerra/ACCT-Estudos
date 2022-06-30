import { useState, useEffect } from "react";


export function CurrentDate  () {


    const [date, setDate] = useState();

    function getDate() {

        const currentDate = new Date();

        const day = currentDate.getDate();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        const format = ` Hoje é ${day} do ${month + 1} de ${year}`

        setDate(format)
       

    }

   useEffect(() =>{
        getDate()
   },[])
   
    return <p style={{fontSize:"1.5rem"}}>{date}</p>
}