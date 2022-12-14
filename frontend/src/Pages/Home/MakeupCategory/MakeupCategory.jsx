import React from 'react'
import { FaShoppingBasket } from "react-icons/fa"
import { HiHeart } from "react-icons/hi"
import { GoStar } from "react-icons/go"
import style from "./MakeupCategory.module.css"
export default function MakeupCategory() {
  return (
    <div>
        <div id={style.makeup_main_div}>
            <div id={style.makeup_img_div}><img src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/8/68caf778903487000186_1.jpg" alt="" /></div>
            <div id={style.makeup_name_div}><p>Miss Claire Eyeshadow Kit 3716-11-1</p></div>
            <div id={style.go_star_div}> 
                <GoStar />
                <GoStar />
                <GoStar />
                <GoStar />
                <GoStar />
             </div>
            <div><h4>₹ 395.00</h4></div>
            <div id={style.main_add_cart_div}>
                <div id={style.add_to_cart_div}>
                <FaShoppingBasket />
                    <p>Add To Cart</p>
                </div>
                <div id={style.hrt_div}>
<HiHeart color='white'/>
                </div>
            </div>
        </div>
    </div>
  )
}
