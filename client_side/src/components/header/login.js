import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('users')
    })

    const loginData = async () => {
        let result = fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: { 'content-Type': 'application/json' }
        })
        result = await (await result).json()
        localStorage.setItem('users', JSON.stringify(result))

        if (result) {
            alert('sign in successful')
            navigate('/profile')
        }

    }

    return (
        <div className="main_login">
            <div className="login_first_child">

                <input type="text" placeholder='email' onChange={(e) => { setEmail(e.target.value) }} value={email} />

                <input type="text" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} value={password} />

                <button onClick={loginData}>login</button>
                <Link to='/signup' className='signUp_link'>Sign Up</Link>
            </div>
        </div>
    )
}
