import React from 'react';
//import '../navbar/poems.css';
export default function Pgscard(props) {
    return (
        <>
         <div className="col-4">
             <div className="card" >
                 <h1 className="name">{props.name}</h1>
                  
                      <div className="card-body">
                          <h5 className="card-title " >{props.title}</h5>
                            <p className="card-text">{props.subtitle}.</p>
                           
                      </div>
                </div>
          </div>
            
        </>
    )
}
