import { useState, useEffect } from 'react'

const HookCounter = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(`Clicked ${count} times`)
    },[])
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter