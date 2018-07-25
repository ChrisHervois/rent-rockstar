import React from 'react';
import { Navbar, NavItem, Icon, SideNav, Button, SideNavItem, Input } from 'react-materialize';
import Cart from './Cart';

const Header = () => {
    return (


        <Navbar style={{ 
            paddingRight: 10, 
            paddingLeft: 150, 
            fontFamily: "impact"
            }} 
            className="blue-grey darken-3" brand='Rent Rockstar' right>
            
            <NavItem><Icon>search</Icon></NavItem>
            <NavItem>

                <SideNav
                    trigger={<Button floating large className='red' waves='light' icon='shopping_cart' />}
                    options={{ closeOnClick: true }}>
                    <SideNavItem icon='shopping_cart'>YOUR SAVED ITEMS</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem>Click on item to reserve</SideNavItem>
                    <Cart />
                </SideNav>

            </NavItem>

        </Navbar>
    )
};

export default Header

