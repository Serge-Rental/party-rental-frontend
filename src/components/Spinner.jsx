import React from 'react';
import './Spinner.css'

function Spinner(props) {
    return (
        <div className="lds-container">
            <div className="lds-dual-ring"></div>
        </div>
    );
}

export default Spinner;