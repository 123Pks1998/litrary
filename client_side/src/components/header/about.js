import React from 'react'
import './about.css'

function About() {
    return (
        <div className="about_main">
            <div className="first_child">
                <span>hello, user's we have just provid a platform to all of you writer's.use itand & enjoy your company with another.
                    <hr />
                    Poetry has been around for almost four thousand years. Like other forms of literature, poetry is written to share ideas, express emotions, and create imagery. Poets choose words for their meaning and acoustics, arranging them to create a tempo known as the meter. Some poems incorporate rhyme schemes, with two or more lines that end in like-sounding words. </span>
                <img src="../imgs/img2.jpg" alt="pic" className='pic' />
            </div>

            <div className="second_child">
                <span> dear user's if you ae facing any issue during tue uses of this website then,plz give us feddback on feedback portal</span>



            </div>

            <div className="gap"></div>

            <div className="third_child">
                <div className="information">
                    <span>house no.1 A block amrit vihar 25 foot road near puliya,bhurari,delhi</span>


                </div>

                <a href="/contact">feedback</a>
            </div>
        </div>

    )
}

export default About
