import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './post.css'

const Update = () => {
    const [name, setName] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [subtitle, setSubTitle] = React.useState('')
    let params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // console.warn(params);
        poemsDetails()
    }, [])

    const poemsDetails = async () => {
        let result = await fetch(`http://localhost:5000/getone/${params.id}`)
        result = await result.json()
        setName(result.name)
        setTitle(result.title)
        setSubTitle(result.subtitle)
        console.warn(result);
    }


    const updateData = async () => {
        let result = await fetch(`http://localhost:5000/update/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, title, subtitle }),
            headers: { 'content-type': 'application/json' }
        })
        result = await result.json()
        if (result) {
            alert('data updated')
            navigate('/')
        }
    }


    return (
        <div className='update_div'>
            <input type="text" placeholder='Writer Name' className='inputbox' onChange={(e) => { setName(e.target.value) }} value={name}
            />

            <input type="text" placeholder='Poem Title' className='inputbox' value={title} onChange={(e) => { setTitle(e.target.value) }}
            />

            <textarea placeholder='Sub Title' defaultValue={subtitle} onChange={(e) => { setSubTitle(e.target.value) }} className='sub__title' cols="40" rows="3"></textarea>

            <div ><button className="update_but" onClick={updateData}>Update</button></div>
        </div>
    )
}

export default Update