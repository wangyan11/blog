import React,{Component,Fragment} from 'react';
import {
    Logo,
    Nav
} from "../components";



export default class Frame extends Component{
    state = {
        navItems:[
            {
                url:"/home",
                text:"首页"
            },
            {
                url:"/blog",
                text:"博客"
            },
            {
                url:"/about",
                text:"关于我"
            }
        ]
    }
    render(){
        return (
            <Fragment>
                <Logo vertical={this.props.verticalLogo}/>
                <Nav items={this.state.navItems}/>
                <div className="main">{this.props.children}</div>
            </Fragment>
        )
    }
}