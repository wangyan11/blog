import React,{Component} from "react";
import Swiper from 'swiper/dist/js/swiper';
import "swiper/dist/css/swiper.css";
import Frame from "./Frame";


export default class About extends Component{
    componentDidMount(){
        this.swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay:true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })     
    }
    componentWillUnmount(){
        this.swiper = null;
    }
    render(){
        return (
            <Frame>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                        <div className="swiper-slide">Slide 4</div>
                        <div className="swiper-slide">Slide 5</div>
                        <div className="swiper-slide">Slide 6</div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </Frame>
        )
    }
}