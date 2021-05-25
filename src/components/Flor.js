import React, { Fragment } from 'react'

function flor({nameFlor,urlFlor}) {
    console.log(urlFlor)
    return (
        <div className="d-flex justify-content-center py-1">
            <div className="card" style={{width:'240px'}}>
                <img src={urlFlor} className="card-img-top" alt="imagen_flor" width="240px" height="180px"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{nameFlor}</h5>                    
                </div>
            </div>            
        </div>
    )
}

export default flor
