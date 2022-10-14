import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './post.css'

const Posts = () => {
    const [pdetails, setPDetails] = useState([])

    useEffect(() => {
        poemDetails()
    }, [])

    const poemDetails = async () => {
        let result = await fetch('http://localhost:5000/poemshomes')
        result = await result.json()
        setPDetails(result)
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/delete/${id}`, {
            method: 'delete',
        })
        result = await result.json()
        if (result) {
            alert('data is deleted')
            poemDetails()
        }
    }


    return (
        <div>
            <div className='post_div'>
                <ul>
                    <li>s no.</li>
                    <li>name</li>
                    <li>title</li>
                    <li>subtitle</li>
                </ul>
                {pdetails.map((data, index) => {
                    return (
                        <ul key={data._id}>
                            <li>{index + 1}</li>
                            <li>{data.name}</li>
                            <li>{data.title}</li>
                            <textarea type="text" placeholder='poem' className="sub_title">{data.subtitle}</textarea>

                            <li><button className='delete_button' onClick={() => deleteProduct(data._id)}>Delete</button>
                                <Link to={"/update/" + data._id} className='update_button'>Update</Link></li>
                        </ul>
                    )

                })}

            </div>
        </div>
    )
}

export default Posts