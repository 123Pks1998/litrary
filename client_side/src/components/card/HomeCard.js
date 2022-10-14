import React, { useEffect, useState } from 'react'
import '../navbar/gazal.css';

const HomeCard = () => {
    const [poems, setPoems] = useState([])

    useEffect(() => {
        getPoems()
    }, [])

    const getPoems = async () => {
        let result = await fetch('http://localhost:5000/poemshomes')
        result = await result.json()
        setPoems(result)
        // console.warn(result)
    }


    return (
        <>
            {poems.map((data, index) => {
                return (
                    <>
                        <div className="col-4">
                            <div className="gazalcard" >
                                <h2 className="gazalname">{data.name}</h2>
                                <div className="card-body">
                                    <h5 className="gazal_title " >{data.title}</h5>
                                    <p className="gazal_text">{data.subtitle}.</p>

                                </div>
                            </div>
                        </div>
                    </>)

            })}


        </>
    )
}

export default HomeCard
