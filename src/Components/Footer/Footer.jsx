import './Footer.scss'

export const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer__items">
                    <p className="footer__items__copy">copyright © {date}</p>
                    <a className="footer__items__link" href="#">Repo</a>
                </div>
            </div>
        </footer>
    )
}