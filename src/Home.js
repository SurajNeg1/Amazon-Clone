import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                 src="https://himachaltourism.gov.in/wp-content/uploads/2018/03/slider1-min.png" 
                 alt=""/>
            <div className="home__row">
                <Product
                    id="1"
                    title="The Intelligent Investor"
                    price={100.0}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"
                />
                <Product
                    id="2"
                    title="iPhone8(256GB)"
                    price={56000}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJFAV095jGFFuaaI0Z6w4RvFmkpWk5SWyfpQ&usqp=CAU"
                />
            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title=" Mi Notebook 14 Horizon laptop"
                    price={50000}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxK5wlqMLLTH5WSSnfU9lVHI73xrWKbIVRYg&usqp=CAU"
                />
                <Product
                    id="4"
                    title="Artisan Mini Series 3.3 L Tilt-Head Stand Mixer"
                    price={35000}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCkaV0NPKE4t7zDfYbeVq3QTD2TzipKX_5g&usqp=CAU"
                />
                    <Product
                    id="5"
                    title="Marvel-Verse: Iron Man"
                    price={5000}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNYNNmsh8XUHIVI-4YEoLWfjNbL9ySwlXCwA&usqp=CAU"
                />
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="Samsung 50NU7470 (50-inch) Ultra HD 4K Smart LED TV"
                    price={67000}
                    rating={3}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTliVjriUf2oU9Yfph3wU1-UC8lXZLCJIufYQ&usqp=CAU"
                />
            </div>
        </div>
    )
}

export default Home;
