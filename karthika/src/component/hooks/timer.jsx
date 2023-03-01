import { useState } from "react";
const useTimer = () => {
  const [id,setID]=useState(null)
  const [isActive, setIsActive] = useState('off');
  const [seconds, setSeconds] = useState({
    hrs:'00',mins:'00',secs:'00',
  })


  const start = (durationInSecs)=>{
    if(isActive === 'on' || id !== null){
throw new Error('Another timer already running')
    }
    try {
      let timer = durationInSecs
      const thisId = setInterval(()=>{
        const hrs = parseInt(timer/3600,10)
        const mins = parseInt(timer/60,10)
        const secs = parseInt(timer%60,10)


        setSeconds({hrs,mins,secs})
        if (--timer < 0){
          clear()
        }

    },1000)
    setID(thisId)
    setIsActive('ON')
    return{ok:true}
  }
    catch(err){
      return {ok:false}
    }
  }
 const clear =()=>{

  clearInterval(id)
  setIsActive('off')
  setID(null)
  setSeconds({hrs:'00',mins:'00',secs:'00'})
return{ok:true}
 }
 return {start,clear,seconds}

};

export { useTimer };
