import React from 'react'
import ComponentC from './ComponentC'
import { useContext } from 'react'
import { userContext, channelContext } from '../App'

const ComponentB = () => {
    const user = useContext(userContext)
    const channel = useContext(channelContext)

    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default ComponentB