import React from 'react';
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                    src="https://himachaltourism.gov.in/wp-content/themes/Avada-Child-Theme/images/mount-1-header.png" 
                    alt="ad" />
                {basket?.length=== 0 ? (
                    <div>
                        <h2>Your Shopping basket is Empty</h2>
                        <p>You have no time in your basket. To buy one or more 
                            item click "Add To Basket" next to the items.
                        </p>
                    </div>
                ):(
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        
                        {basket?.map((item)=>(
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length >0 && (
                  <div className="checkout__right" >
                        <Subtotal/>
                  </div>
            )}
          
        </div>
    );
}

export default Checkout;

