import React from 'react'
import style from "./Category.module.css"
export default function Category() {
  return (
    <div id={style.main_div}>
        <div className={style.single_div}>
<div><img src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png" alt="" /></div>
<p>Makeup</p>
        </div>

        <div className={style.single_div}>
<div><img src="https://www.beautybebo.com/pub/media/catalog/category/skin.png" alt="" /></div>
<p>Skin</p>
        </div>

        <div className={style.single_div}>
<div><img src="https://www.beautybebo.com/pub/media/catalog/category/hair.png" alt="" /></div>
<p>Hair</p>
        </div>

        <div className={style.single_div}>
<div><img src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png" alt="" /></div>
<p>Personal Care</p>
        </div>

        <div className={style.single_div}>
<div><img src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png" alt="" /></div>
<p>Mom & Body Care</p>
        </div>

        <div className={style.single_div}>
<div><img src="https://www.beautybebo.com/pub/media/catalog/category/eye_1.png" alt="" /></div>
<p>Eye</p>
        </div>

        <div className={style.single_div}>
<div><img src="https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png" alt="" /></div>
<p>Fragrance</p>
        </div>
       
    </div>
  )
}
