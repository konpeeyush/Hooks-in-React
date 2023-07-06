import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchData2 = () => {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const[idFromButtonClick, setIdFromButtonClick] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPosts(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
    },[idFromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={() => setIdFromButtonClick(id)}>Fetch Post</button>
            {posts.title}
        </div>
    )
}

export default FetchData2