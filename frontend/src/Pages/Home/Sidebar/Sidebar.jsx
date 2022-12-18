import React from 'react'
import { ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons"
import style from "./Sidebar.module.css"
export default function Sidebar({ makeup, setMakeup, setSkin, setHair, skin, hair }) {
    return (
        <div id={style.sidebar}>
            <div>
                <div className={style.whole_div}>
                    <div><HamburgerIcon marginLeft={"24px"} marginTop={"10px"} /></div>
                    <div><h1 style={{ marginTop: "10px", fontWeight: "bolder" }}>ALL CATEGORIES</h1></div>
                </div>

                <div className={style.whole_div} onMouseOver={() => setMakeup(true)} onMouseLeave={() => setMakeup(false)}>
                    <div className={style.whole_inside_div}>
                        <div><img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" alt="" /></div>
                        <div><p>Makeup</p></div>
                    </div>
                    <div> <ChevronRightIcon /> </div>
                </div>

                <div className={style.whole_div} onMouseOver={() => setSkin(true)} onMouseLeave={() => setSkin(false)}>
                    <div className={style.whole_inside_div}>
                        <div><img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" alt="" /></div>
                        <div><p>Skin</p></div>
                    </div>
                    <div> <ChevronRightIcon /> </div>
                </div>

                <div className={style.whole_div} onMouseOver={() => setHair(true)} onMouseLeave={() => setHair(false)}>
                    <div className={style.whole_inside_div}>
                        <div><img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png" alt="" /></div>
                        <div><p>Hair</p></div>
                    </div>
                    <div> <ChevronRightIcon /> </div>
                </div>

                <div className={style.whole_div} onMouseOver={() => setMakeup(true)} onMouseLeave={() => setMakeup(false)}>
                    <div className={style.whole_inside_div}>
                        <div><img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" alt="" /></div>
                        <div><p>Personal Care</p></div>
                    </div>
                    <div> <ChevronRightIcon /> </div>
                </div>

                <div className={style.whole_div} onMouseOver={() => setMakeup(true)} onMouseLeave={() => setMakeup(false)}>
                    <div className={style.whole_inside_div}>
                        <div><img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png" alt="" /></div>
                        <div>Mom & Baby Care</div>
                    </div>
                    <div> <ChevronRightIcon /> </div>
                </div>

                <div className={style.whole_div} onMouseOver={() => setMakeup(true)} onMouseLeave={() => setMakeup(false)}>
                    <div className={style.whole_inside_div}>
                        <div><img src="https://www.beautybebo.com/pub/media/fragrance.png" alt="" /></div>
                        <div><p>Fragrance</p></div>
                    </div>
                    <div> <ChevronRightIcon /> </div>
                </div>

                <div className={style.whole_div} onMouseOver={() => setMakeup(true)} onMouseLeave={() => setMakeup(false)}>
                    <div className={style.whole_inside_div}>
                        <div><img src="https://www.beautybebo.com/pub/media/ayurveda.png" alt="" /></div>
                        <div><p>Ayurveda</p></div>
                    </div>
                    <div> <ChevronRightIcon /> </div>
                </div>
            </div>
        </div>
    )
}
