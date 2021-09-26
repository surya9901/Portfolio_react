import { Link } from 'react-scroll';
import './header.css';

function Header() {
    return (
        <div class="header">
            <div class="header__left">
                <h1><i class="fas fa-briefcase"></i>Portfolio</h1>
            </div>
            <div class="header__right">
                <Link to="about" smooth={true} duration={500}>
                    <h4>
                        About me
                    </h4>
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                    <h4>
                        Skills
                    </h4>
                </Link>
                <Link to="project" smooth={true} duration={500}>
                    <h4>
                        Project
                    </h4>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    <h4>
                        Contact
                    </h4>
                </Link>
            </div>
        </div>
    )
}

export default Header
