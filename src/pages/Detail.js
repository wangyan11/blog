import React,{Component} from "react";
import axios from "axios";
import Frame from "./Frame";
import {Loading} from "../components";


export default class Detail extends Component{
    state = {
        post:{},
        isLoading:true
    }
    componentDidMount(){
        console.log(this.props)
        axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(res=>{
                console.log(res)
                this.setState({
                    post:res.data,
                    isLoading:false
                })
            })
    }
    render(){
        const {post} = this.state;
        return (
            <Frame>
            {
                this.state.isLoading
                ?
                <Loading/>
                :
                <div>
                    <h2 style={{fontWeight:'bold',fontSize:25}}>{post.title}</h2>
                    <div>
                        {post.body}
                    </div> 
                </div>
            } 
            </Frame>
        )
    }
}