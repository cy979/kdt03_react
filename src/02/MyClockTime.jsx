import {useState, useEffect} from 'react'

export default function MyClockTime() {
    const[currentTime, setCurrentTime] = useState(new Date());
    
    useEffect(() => { 
       let timerID = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerID)
    }, []);
    return (
        <div className=" w-1/3 
                        p-2 m-2 text-center 
                        rounded-x1 text-5xl font-bold
                         text-white bg-cyan-950 flex flex-col items-center justify-center">
            현재시각 : {currentTime.toLocaleTimeString()}
        </div>
    )
}
                 