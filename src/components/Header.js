import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>vdmo.design</h1>
        <p>JAMstack Technologies & Illustrations Art for the Modern Web</p>
    </header>
)

export default Header
