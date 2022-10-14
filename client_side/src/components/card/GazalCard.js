import React, { useEffect, useState } from 'react'
import '../navbar/gazal.css';
function Gazalcard(props) {
    const [gazal, setGazal] = useState([])

    useEffect(() => {
        getGazals()
    }, [])

    const getGazals = async () => {
        let result = await fetch('http://localhost:5000/gazal')
        result = await result.json()
        setGazal(result)
    }
    return (
        <>{gazal.map((data) => {
            return (
                <div className="col-4">
                    <div className="gazalcard" >
                        <h2 className="gazalname">{data.name}</h2>
                        <div className="card-body">
                            <h5 className="gazal_title " >{data.title}</h5>
                            <p className="gazal_text">{data.subtitle}.</p>
                        </div>
                    </div>
                </div>
            )

        })}


        </>
    )
}

export default Gazalcard
