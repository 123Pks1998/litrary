import React from 'react'
import './contact.css'
function Contact() {
    return (
        <div className="main_contact">

            <div className="first_child_contact">

                <span>email :- pks28697@gmail.com</span>
                <br />
                <span>mobile no. :- 9817530061</span>

            </div>

            <div className="second_child_contact">

                <div className="social">
                    <span>social media contacts </span>
                </div>

                <div className='social_contact'>

                    <a href="https://www.instagram.com" target='blank'>instagram </a>

                    <a href="https://www.facebook.com"
                        target='blank'>facebook</a>

                    <a href="https://twitter.com/?lang=en-in" target='blank'>twitter</a>

                </div>


            </div>
        </div>
    )
}

export default Contact
