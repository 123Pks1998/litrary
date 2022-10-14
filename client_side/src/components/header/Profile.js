import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../header/profile.css'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [subtitle, setSubTitle] = useState('')
    const navigate = useNavigate()

    const PostData = async () => {
        let result = await fetch('http://localhost:5000/poemshomes', {
            method: 'post',
            body: JSON.stringify({ name, title, subtitle }),
            headers: { 'content-Type': 'application/json' }
        })
        result = await result.json()
        if (result) {
            alert('Post Updated')
            navigate('/')
        }
        // console.warn(result);
    }

    return (
        <div className='writer_page'>
            <div className='Writer_home'>
                <div className='writer_profile'>  <h1>pradeep kumar</h1>
                    <h3>Writer</h3>
                    <p>address <span>vill+po+ps-inarwa bazar</span> </p>
                </div>
                <div className='goto_posts'><Link to='/posts'>Your Posts</Link></div>


                <div className="posts">
                    <div className='post_inputs'>
                        <p>keep writing here</p>
                        <input type="text" placeholder='Writer Name' onChange={(e) => { setName(e.target.value) }} />

                        <input type="text" placeholder='Poem Title' onChange={(e) => { setTitle(e.target.value) }} />

                        {/* <input type="text" placeholder='Poem' onChange={(e) => { setSubTitle(e.target.value) }} /> */}
                        <textarea type="text" placeholder='poem' onChange={(e) => { setSubTitle(e.target.value) }} className="subtitle"></textarea>
                        <button onClick={PostData} className='content_upload'>UPLOAD</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
