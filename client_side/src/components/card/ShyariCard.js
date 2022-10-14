import React, { useEffect, useState } from 'react'
import '../navbar/shyari.css';
function Shyaricard(props) {
    const [shyari, setShyari] = useState([])

    useEffect(() => {
        getShyari()
    }, [])

    const getShyari = async () => {
        let result = await fetch('http://localhost:5000/shyari')
        result = await result.json()
        setShyari(result)
    }
    return (
        <>
            {shyari.map((data) => {
                return (
                    <div className="col-4">
                        <div className="shayaricard" >
                            <h1 className="shyarname">{data.name}</h1>
                            <div className="card-body">
                                <h5 className="shyari_title">{data.title}</h5>
                                <p className="shyari_text">{data.subtitle}.</p>
                            </div>
                        </div>
                    </div>
                )
            })}


        </>
    )
}

export default Shyaricard
