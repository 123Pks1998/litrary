import React, { useEffect, useState } from 'react'
import '../navbar/poems.css';
function Poemscard(props) {
    const [poems, setPoems] = useState([])

    useEffect(() => {
        getPoems()
    }, [])

    const getPoems = async () => {
        let result = await fetch('http://localhost:5000/poems')
        result = await result.json()
        setPoems(result)
    }
    return (
        <>
            {poems.map((data) => {
                return (
                    <div className="col-4">
                        <div className="poemcard" >
                            <h1 className="poemname">{data.name}</h1>
                            <div className="card-body">
                                <h5 className="poem_title " >{data.title}</h5>
                                <p className="poem_text">{data.subtitle}.</p>
                            </div>
                        </div>
                    </div>
                )
            })}


        </>
    )
}

export default Poemscard
