import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './signup.css';

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('users')


    })

    const collectData = async () => {

        if (!name || !email || !password) {
            setError(true)
            return false
        }
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: { "content-Type": "application/json" }
        })
        result = await result.json()
        localStorage.setItem('users', JSON.stringify(result))

        if (result) {
            alert('sign up successful')
            navigate('/profile')
        }
    }

    return (
        <div className="main_signup">

            <div className="first_signup_child">
                <label className='signUP' htmlFor="">Sign Up Form</label>

                <input type="text" placeholder='name' onChange={(e) => { setName(e.target.value) }} value={name} />
                {error && !name && <span className='invalid_input'>Enter Valid Name</span>}

                <input type="text" placeholder='email' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                {error && !email && <span className='invalid_input'>Enter Valid Name</span>}

                <input type="text" placeholder='phone' onChange={(e) => { setPassword(e.target.value) }} value={password} />
                {error && !password && <span className='invalid_input'>Enter Valid Name</span>}

                <button onClick={collectData}>submit</button>


            </div>
        </div>
    )
}

export default SignUp
