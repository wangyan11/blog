import React from "react";
import classNames from 'classnames';
import logo from "./logo.svg";
import "./logo.css";

export default (props)=>{
    console.log(props)
    return (
        <div className={classNames("logo bounceIn",{"vertical":props.vertical})}>
            <img src={logo} alt="Blog" className="logo-img"/>
            <h1 className="logo-title">wangyan的博客</h1>
        </div>
    )
}

