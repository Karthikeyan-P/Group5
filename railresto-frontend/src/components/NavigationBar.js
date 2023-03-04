import { Link } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Navigationbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (<>
            <Navbar color="dark" dark expand="md" className="fixed-top">
                <NavbarBrand href="/">Rail Resto</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/" tag={Link} > Home </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/history" tag={Link}> History</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/orderOnline" tag={Link}> Order Online </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret>
                                Manage
                            </DropdownToggle>
                            <DropdownMenu dark end>
                                <DropdownItem>
                                    <NavLink to="/addRestaurant" tag={Link}> Add Restaurant </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink to="/addMenu" tag={Link}> Add Menu </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
        );
    }
}