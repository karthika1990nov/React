import { useEffect, useState } from "react";
const Message =(props)=>{
    const {value} =props;
    const [message, setMessage] = useState();
    useEffect(() => {
        console.log("Inside useEffect of CounterMessage Component")
        if ((value == true)) {
            setMessage("Data has fetched");
        }else {
            setMessage("");
        }
    }, [value]);
    return(
        <>
            <h3>
            {message}
        </h3>
        </>
    )
}

export {Message}