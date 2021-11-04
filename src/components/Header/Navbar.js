import React from "react"
import logo from '../../img/img_avatar.png'

import ItemsMenu from './ItemsMenu'
import FooterNav from './FooterNav'
import { NavbarWrapper } from "./NavbarWrapper"

function Navbar({ open }) {
    const stylesItem = 'd-block text-dark p-2'
    return (
        <NavbarWrapper open={open} className="bg-primary">
            <div className="cover">
                <img src={logo} alt="Cover page" width="150" height="150" />
            </div>
            <div className="presentation">
                <h4 style={{ fontWeight: 'bold' }}>Kevin Guzman</h4>
                <h6><a href="https://bootcamp.learn.utoronto.ca/blog/what-is-a-full-stack-developer/" target="blank">Full Stack Developer</a> in Colombia</h6>
            </div>
            <div className="menu">
                <ItemsMenu class={stylesItem} href="#1">Home</ItemsMenu>
                <ItemsMenu class={stylesItem} href="#2">About</ItemsMenu>
                <ItemsMenu class={stylesItem} href="#3">Services</ItemsMenu>
                <ItemsMenu class={stylesItem} href="#4">Skills</ItemsMenu>
                <ItemsMenu class={stylesItem} href="#5">Experience</ItemsMenu>
                <ItemsMenu class={stylesItem} href="#6">Work</ItemsMenu>
                <ItemsMenu class={stylesItem} href="#7">Contact</ItemsMenu>
            </div>
            <FooterNav />
        </NavbarWrapper>
    )
}

export default Navbar