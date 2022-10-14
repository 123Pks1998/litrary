import React, { useState } from 'react'

const Gazal = () => {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')

    const submitData = async () => {
        let result = await fetch('http://localhost:5000/gazalhomes', {
            method: 'post',
            body: JSON.stringify({ name, title, subtitle }),
            headers: { 'content-type': 'application/json' }
        })
        result = await result.json()
        if (result) {
            alert('gazal submitted')
        }
    }


    return (
        <div className='poet_page'>
            <div className="poet_page2">
                <p>write gazal here</p>
                <input type="text" placeholder='writer name' onChange={(e) => { setName(e.target.value) }} />
                <input type="text" placeholder='gazal title' onChange={(e) => { setTitle(e.target.value) }} />
                <textarea type="text" placeholder='sub title' cols="30" rows="5" className='gazal_subtitle' onChange={(e) => { setSubtitle(e.target.value) }}></textarea>

                <button className='poet_submit' onClick={submitData}>submit</button>
            </div>
        </div>
    )
}

export default Gazal

