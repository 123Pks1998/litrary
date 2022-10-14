import React, { useState } from 'react'

const Poet = () => {
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [subtitle, setSubtitle] = useState('')

    const submitData = async () => {
        let result = await fetch('http://localhost:5000/poethomes', {
            method: 'post',
            body: JSON.stringify({ name, about, subtitle }),
            headers: { 'content-Type': 'application/json' }
        })
        result = await result.json()
        console.warn(result);
        if (result) {
            alert('poet details added')
        }
    }

    return (
        <div className='poet_page'>
            <div className="poet_page2">
                <p>about poet</p>
                <input type="text" placeholder='writer name' onChange={(e) => { setName(e.target.value) }} />
                <input type="text" placeholder='about' onChange={(e) => { setAbout(e.target.value) }} />
                <textarea type="text" placeholder='sub title' cols="30" rows="5" className='gazal_subtitle' onChange={(e) => { setSubtitle(e.target.value) }}></textarea>

                <button className='poet_submit' onClick={submitData}>submit</button>
            </div>
        </div>
    )
}

export default Poet
