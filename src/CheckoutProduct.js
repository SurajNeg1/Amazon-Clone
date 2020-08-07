import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, title, price, image, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const RemoveFromBasket= ()=>{
        dispatch({
            type:"Remove_From_BASKET",
            id:id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_)=>(
                            <p><StarIcon fontSize="small" /></p>
                        ))
                    }
                </div>
                <button onClick={RemoveFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
