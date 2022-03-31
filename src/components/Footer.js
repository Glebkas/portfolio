import Nav from './Nav';
import Icons from './Icons';
import { Link } from 'react-router-dom';
function Footer(props) {
    const setFooterNavActive = ({ isActive }) =>
        isActive
            ? 'nav__link nav__link_active'
            : 'nav__link nav__link_type_footer';

    return (
        <div className='footer'>
            <div className='footer__container'>
                <Link to='/' className='footer__logo'></Link>
                <div className='footer__menu-icons-container'>
                    <Nav
                        handleNavLinkClick={props.handleNavLinkClick}
                        classType={`nav nav_type_footer`}
                        setActive={setFooterNavActive}
                    ></Nav>
                    <Icons />
                </div>
            </div>
        </div>
    );
}

export default Footer;
