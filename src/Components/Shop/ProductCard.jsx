import { useContext, useEffect, useRef, useState } from 'react'
import './Shop.css'
export const ProductCard = ({ category, description, id, image, price, title, handleClick }) => {
 

    const Article = useRef(null)

    return (
        <div className="fullCard">

            <article ref={Article} onClick={handleClick} className="CardContainer">
                <h2 className="product-tittle">{title}</h2>
                <img className="product-image" src={image} alt="" />
                    <p className="product-description">{description}</p>
                <p className="product-price">{price}$</p>
                <p>{category}</p>
            </article>
        </div>
    )
}
