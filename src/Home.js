import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                 alt=""/>
            <div className="home__row">
                <Product
                    id="12345"
                    title="The Intelligent Investor"
                    price={10.00}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"
                />
                <Product
                    id="12345"
                    title="The Intelligent Investor"
                    price={10.00}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12345"
                    title="The Intelligent Investor"
                    price={10.00}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"
                />
                <Product
                    id="12345"
                    title="The Intelligent Investor"
                    price={10.00}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"
                />
                    <Product
                    id="12345"
                    title="The Intelligent Investor"
                    price={10.00}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12345"
                    title="The Intelligent Investor"
                    price={10.00}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"
                />
            </div>
        </div>
    )
}

export default Home;
