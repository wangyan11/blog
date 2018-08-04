import React,{Component} from 'react';
import {withRouter} from "react-router-dom";
import axios from "axios";
import Frame from "./Frame";
import {Loading} from "../components";

class Blog extends Component{
    state = {
        posts:[],
        isLoading:true
    }
    componentDidMount(){
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(res=>{
                console.log(res)
                if(res.status===200 && res.statusText==="OK"){
                    this.setState({
                        posts:res.data,
                        isLoading:false
                    })
                }
            })
    }
    handlePostClick(id){
        this.props.history.push(`/Blog/post/${id}`)
    }
    render(){
        return (
            <Frame>
                {
                    this.state.isLoading
                    ?
                    <Loading/>
                    :
                    this.state.posts.map(post=>{
                        return (
                            <p 
                            key={post.id}
                            className="blog-list-item"
                            onClick={this.handlePostClick.bind(this,post.id)}
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