import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>
                    <img className="cheeseLogo" src="https://cdn.iconscout.com/icon/free/png-256/cheese-1616900-1371045.png" alt="cheese logo"/>
                </div>
            </Link>
        </nav>
    );
}

export default Header;