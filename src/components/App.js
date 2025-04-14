// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [randomPics, setRandomPics] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setRandomPics(data.message)
                setIsLoaded(true)
            })
            
    }, [])
    if(!isLoaded) return <h3>Loading...</h3>
    return (
            <img style={{width: "500px", height: "400px", margin:"40px", borderRadius:"10px", boxShadow:"0 0 10px black", objectFit:"cover"}} src={randomPics} alt='A Random Dog'/>
    )
}

export default App