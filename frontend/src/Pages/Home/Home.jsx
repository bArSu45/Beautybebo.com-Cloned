import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Homepage.module.css"
import Makeup from './SidebarHover/Makeup';
import Skin from './SidebarHover/Skin';
import Hair from './SidebarHover/Hair';
import Sidebar from './Sidebar/Sidebar';

export default function Home() {

    const [makeup, setMakeup] = useState(false)
    const [skin, setSkin] = useState(false)
    const [hair, setHair] = useState(false)
    return (
        <div id={style.main_container_div}>
            
            <div id={style.fst_main_div}>
                <div id={style.upper_sidebar}>
                    <Sidebar makeup={makeup} skin={skin} hair={hair} setMakeup={setMakeup} setSkin={setSkin} setHair={setHair} />
                </div>
                <div style={{ position: "fixed", left: '25%', zIndex: 1 }} >
                    {makeup ? <Makeup /> : null}
                    {skin ? <Skin /> : null}
                    {hair ? <Hair /> : null}
                </div>
                <div id={style.fst_carousel_div}>
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src="https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <img
                                className="d-block w-100"
                                src="https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
            
<div id={style.upto_40_off_div}><img src="https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg" alt="" /></div>

<div id={style.joy_lotus_div}>
    <img src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif" alt="" />
    <img src="https://www.beautybebo.com/pub/media/ads/lotus_banner.gif" alt="" />
</div>
        </div>
    )
}


