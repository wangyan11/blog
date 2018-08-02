import React,{Component} from 'react';
import {withRouter} from "react-router-dom";
import Frame from "./Frame";
import axios from "axios";

class Blog extends Component{
    state = {
        posts:[]
    }
    componentDidMount(){
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(res=>{
                console.log(res)
                if(res.status===200 && res.statusText==="OK"){
                    this.setState({
                        posts:res.data
                    })
                }
            })
    }
    render(){
        console.log(props)
        return (
            <Frame>
                {
                    this.state.posts.map(post=>{
                        return (
                            <p 
                            key={post.id}
                            className="blog-list-item"
                            >
                                {post.id}.  {post.title}
                            </p>
                        )
                    })
                }
            </Frame>
        )
    }
}

export default withRouter(Blog);