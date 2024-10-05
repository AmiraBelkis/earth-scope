import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LogoMobileView } from '../Logo';

export const Menu = ({ items }) => {
    const path = window.location.pathname;
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar className="menu bg-white" expand="lg" expanded={expanded}>
            <Navbar.Brand href="/"><LogoMobileView></LogoMobileView></Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className='menu-btn'
                onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto pe-5 ps-5">
                    {items.map(item => {
                        return (
                            <Nav.Link
                                key={item.id}
                                className={(path === item.link) ? "active" : ""}
                                href={item.link}
                                disabled={item.disabled}>
                                {item.title}
                            </Nav.Link>
                        )
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}



const ResponsiveNavbar = () => {

    return (
        <Navbar >
            <Navbar.Brand href="#">Brand</Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default ResponsiveNavbar;
