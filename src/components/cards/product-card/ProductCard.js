import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../slices/cart/cartSlice";
import './productCard.css'

const ProductCard = ({productsInfo}) => {
    const {id, title, description, price, discountPercentage, rating, thumbnail} = productsInfo
    let discountPrice = Math.round(price - ((price / 100) * discountPercentage))
    if(isNaN(discountPrice)){
        discountPrice = 0
    }

    const allCartActions = useSelector((state)=> state.allCartActions)
    const dispatch = useDispatch()
    return (
        <article className="product-card">
            <div className="product-card__header">
                <figure className="product-card__header__figure">
                    <img src={thumbnail ?? ''} alt="Product Image" draggable="false" className="product-card__header__figure__image" />
                </figure>
            </div>
            <div className="product-card__body">
                <h3 className="product-card__body__title">{title ?? 'Product Title'}</h3>
                <div className="product-card__body__rating">
                    <div className="product-card__body__rating__box">
                        <ul className="product-card__body__rating__list">
                            <li className="product-card__body__rating__list__item">
                                <i className="bi bi-star"></i>
                            </li>
                            <li className="product-card__body__rating__list__item">
                                <i className="bi bi-star"></i>
                            </li>
                            <li className="product-card__body__rating__list__item">
                                <i className="bi bi-star"></i>
                            </li>
                            <li className="product-card__body__rating__list__item">
                                <i className="bi bi-star"></i>
                            </li>
                            <li className="product-card__body__rating__list__item">
                                <i className="bi bi-star"></i>
                            </li>
                        </ul>
                    </div>
                    <div style={{"--rating-percent": rating ?? 5}} className="product-card__body__rating__box product-card__body__rating__box--filled">
                        <ul className="product-card__body__rating__list">
                            <li className="product-card__body__rating__list__item">
                                <i className="bi bi-star-fill"></i>
                            </li>
                            <li className="product-card__body__rating__list__item">
                                <i className="bi bi-star-fill"></i>
                            </li>
                            <li className="product-card__body__rating__list__item">
                                <i className="bi bi-star-fill"></i>
                            </li>
                            <li className="product-card__body__rating__list__item">
                                <i className="bi bi-star-fill"></i>
                            </li>
                            <li className="product-card__body__rating__list__item">
                                <i className="bi bi-star-fill"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="product-card__body__text">{description ?? 'Product Description'}</p>
                <h4 className='product-card__body__title product-card__body__title--lg mb-0'>
                    <small className="text-muted"><del>${price ?? 0}</del></small> ${discountPrice}
                </h4>
                <button type="button" className="product-card__body__btn" onClick={() => dispatch(addToCart({id, quantity: 1}))}>
                    <i className="bi bi-cart"></i>
                </button>
            </div>
        </article>
    )
}

export default ProductCard