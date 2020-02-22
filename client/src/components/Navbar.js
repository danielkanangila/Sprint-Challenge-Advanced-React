import React from 'react';
import styled from 'styled-components';
import { useDarMode } from './../hooks/useDarkMode';

const Navbar = () => {
    const [ darkMode, setDarkMode ] = useDarMode(false);

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    } 

    return(
        <Nav>
            <div className="dark-mode__toggle">
                <div 
                    onClick={toggleDarkMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'} />
            </div>
        </Nav>
    )
}   

const Nav = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 5%;
    box-shadow: 0px 2px 15px -8px rgba(0,0,0,0.42);
    position: fixed;
    top: 0;
    z-index: 900;
    background-color: #fff;

    @media (min-width: 600px) {
        padding: 0 12.5%;
    }

    .dark-mode__toggle {
        background-color: #424242;
        border-radius: 50px;
        height: 20px;
        width: 40px;
        position: relative;
        cursor: pointer;
        box-shadow: inset 0 0 10px rgba(0,0,0,0.8);
        border: 1px solid #212121; 
    }

    .toggle {
        background-color: #2196f3;
        height: 18px;
        width: 20px;
        border-radius: 40px;
        position: absolute;
        left: 1;
        transition: 0.3s;
    }

    .toggled {
        left: 19px;
    }
`

export default Navbar;