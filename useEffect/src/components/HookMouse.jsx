import { useState, useEffect } from 'react'

const HookUse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    },[])

    return (
        <div>
            Hook X - {x} Y - {y}
        </div>
    )
}

export default HookUse