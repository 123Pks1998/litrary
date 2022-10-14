import React, { useEffect, useState } from 'react'
import '../navbar/poet.css';
export default function PoetCard(props) {
    const [poet, setPoet] = useState([])

    useEffect(() => {
        getPoetDetails()
    }, [])

    const getPoetDetails = async () => {
        let result = await fetch('http://localhost:5000/poet')
        result = await result.json()
        setPoet(result)
    }
    return (

        <>{poet.map((data) => {
            return (
                <div className="col-4">
                    <div className="poetcard" >
                        <h1 className="poetname">{data.name}</h1>
                        <div className="card-body">
                            <h5 className="poet_title" >{data.about}</h5>
                            <p className="poet_text">{data.subtitle}</p>

                        </div>
                    </div>
                </div>
            )
        })}


        </>
    )
}
