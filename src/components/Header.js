import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link className="logo">
                    Ashutosh Dubal
                </Link>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;