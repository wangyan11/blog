import React from 'react';
import {Link} from 'react-router-dom';
import "./nav.css";
import "bulma/css/bulma.css";

export default (props)=>{
    console.log(props)
    return (
        <ul className="navbar is-primary">
            {
               props.items.map(item=>{
                   return (
                       <li key={item.url} className="navbar-item">
                            <Link to={item.url}>
                                {item.text}
                            </Link>
                       </li>
                   )
               }) 
            }
        </ul>
    )
}