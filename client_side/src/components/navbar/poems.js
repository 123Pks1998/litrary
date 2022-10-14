import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
//import './poems.css';
// import PoemsData from '../PoemsData';
import Poemscard from '../card/PoemsCard';
function Poems() {
    return (
        <>
            {/* <div className="my-3">
            </div> */}
            <div className="box">
                <div className="row ">
                    <Poemscard />
                </div>
            </div>
        </>
    )
}

export default Poems
