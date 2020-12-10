import React from 'react';
import logo from './media/RedLine.jpg';
import inst from './media/inst3.png'
import {Icon, Navbar, NavItem} from "react-materialize";
import {Link} from "react-router-dom";

export const NavBar = () => (
    <div>
    <Navbar
        className="red accent-4"
        alignLinks="right"
        brand={<Link className="brand-logo" to = "/"><img src={logo} height = "57"   alt=""/> </Link>}

        menuIcon={<Icon>menu</Icon>}
        options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
        }}
    >
        <Link to ="/Store">
            <Icon>local_mall</Icon>
        </Link>
        <Link to ="/OwnPage">
            <Icon>account_circle</Icon>
        </Link>

        <NavItem id="easynetshop-cart">
            <Icon>local_grocery_store</Icon>
        </NavItem>

        <NavItem style={{marginLeft: '-5px'}} href="https://instagram.com/red_line__shop?igshid=x5rao37la4sk">
            <img src={inst} style={{marginTop:'15px'}} height='35' alt=""/>
        </NavItem>

    </Navbar>
    </div>
)

