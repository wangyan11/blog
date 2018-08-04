import React from 'react';
import loading from './loading.svg';
import './loading.css';

export default ()=>{
    return (
        <div className="loading">
            <img src={loading} alt="loading"/>
        </div>
    )
}