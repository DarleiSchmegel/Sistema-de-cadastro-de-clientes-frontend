import React from 'react';

export default function Loading(){

    return(
    
        <div id="loading" className="hide-loading">
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
      
    )
}