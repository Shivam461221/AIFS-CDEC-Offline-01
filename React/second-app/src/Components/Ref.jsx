import { useEffect, useRef, useState } from "react"

export default function Ref() {
    const btnRef = useRef();
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('First rendering');
        btnRef.current.style.backgroundColor = 'blue';
        return()=>{
            btnRef.current.style.backgroundColor = 'blue';
        }
    }, [])

    useEffect(() => {
        btnRef.current.style.backgroundColor = 'red';
    }, [count])
    return (
        <>
            {count}
            <button ref={btnRef} >Click me</button>
            <button onClick={() => setCount(count + 1)} >Increment</button>

        </>
    )
}