<Navbar  bg="dark" expand="md">
<NavbarBrand   href="/">
    <img className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTL3wIiwQ4HDnIX2wEdhara8u9mqQNkF9b3w&usqp=CAU" 
        alt="Logo" />
</NavbarBrand>
<div className="header__search">
    <input type="text" className="header__searchInput"/>
    <SearchIcon className="header__searchIcon"/>
</div>
<NavbarToggler onClick={toggle} />
<Collapse isOpen={isOpen} navbar>
    <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
            <div onClick={login}className="header__option">
                <span className="header__optionLineOne">Hello{user?.email}</span>
                <span className="header__optionLineTwo">{user?'Sign Out':'Sign In'}</span>
            </div>
        </Link>

        <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Return </span>
                <span className="header__optionLineTwo"> & Orders</span>
            </div>
        </Link>

        <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Subscription</span>
            </div>
        </Link>
        <Link to="/checkout" className="header__link" >
            <div className="header__optionBasket">
                <ShoppingBasketIcon/>
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>
    </div>
</Collapse>

</Navbar>