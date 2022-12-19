import './Header.scss'

function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__items">
                    <a href="#" className="header__items__logo">DRAMATIC</a>
                    <input type="text" className="header__items__search"/>
                </div>
            </div>
        </header>
    )
}

export default Header;