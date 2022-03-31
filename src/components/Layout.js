import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';

function Layout(props) {
    const [open, setOpen] = useState(false);

    function handleHumburgerClick() {
        setOpen(!open);
    }

    function handleNavLinkClick() {
        open && setOpen(false);
        props.scrollToTop();
    }

    return (
        <>
            <Header
                handleNavLinkClick={handleNavLinkClick}
                open={open}
                handleHumburgerClick={handleHumburgerClick}
            ></Header>

            <main className='main'>
                <Outlet></Outlet>
            </main>
            <Footer handleNavLinkClick={handleNavLinkClick}></Footer>
        </>
    );
}

export default Layout;
