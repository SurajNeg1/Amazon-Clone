import React,{useState} from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function Header() {

    const [{basket, user}]= useStateValue();
   
    const login=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <Navbar className="header" expand="md">
            <Navbar.Brand href="/">
                <img className="header__logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTL3wIiwQ4HDnIX2wEdhara8u9mqQNkF9b3w&usqp=CAU" 
                    alt="Logo" />
            </Navbar.Brand>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <Navbar.Toggle className="header__toggle"/>
            <Navbar.Collapse >
                <Nav className="header__nav">
                <Nav.Link href={!user && "/login"} className="header__link">
                    <div onClick={login}className="header__option">
                         <span className="header__optionLineOne">Hello{user?.email}</span>
                         <span className="header__optionLineTwo">{user?'Sign Out':'Sign In'}</span>
                    </div>
                </Nav.Link>
                <Nav.Link href="/" className="header__link">
                    <div className="header__option">
                         <span className="header__optionLineOne">Return </span>
                        <span className="header__optionLineTwo"> & Orders</span>
                    </div>
                </Nav.Link>
                <Nav.Link href="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Subscription</span>
                    </div>
                </Nav.Link>
                <Nav.Link href="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
