import { useState, useEffect } from 'react'

const DependencyArray = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log(`Clicked times`)
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(prev => prev + 1)}>Count {count}</button>
        </div>
    )
}

export default DependencyArray