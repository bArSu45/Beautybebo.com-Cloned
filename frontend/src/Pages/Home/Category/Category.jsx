import React from 'react'
import style from "./Category.module.css"
export default function Category() {
        return (
                <div id={style.main_div}>
                        <div className={style.single_div}>
                                <img src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png" alt="" />
                                <p>Makeup</p>
                        </div>

                        <div className={style.single_div}>
                                <img src="https://www.beautybebo.com/pub/media/catalog/category/skin.png" alt="" />
                                <p>Skin</p>
                        </div>

                        <div className={style.single_div}>
                                <img src="https://www.beautybebo.com/pub/media/catalog/category/hair.png" alt="" />
                                <p>Hair</p>
                        </div>

                        <div className={style.single_div}>
                                <img src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png" alt="" />
                                <p>Personal Care</p>
                        </div>

                        <div className={style.single_div}>
                                <img src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png" alt="" />
                                <p>Mom & Body Care</p>
                        </div>

                        <div className={style.single_div}>
                                <img src="https://www.beautybebo.com/pub/media/catalog/category/eye_1.png" alt="" />
                                <p>Eye</p>
                        </div>

                        <div className={style.single_div}>
                                <img src="https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png" alt="" />
                                <p>Fragrance</p>
                        </div>

                </div>
        )
}
