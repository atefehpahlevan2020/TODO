import React , { useContext } from 'react';
import AuthContext from './../../Context/auth';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background: #778beb;
    }
    .navbar-brand{
        color:white;
    &:hover{
        color:white;
    }}
    .nav-item{
        font-weight:bold;
    } 
`;

function Header() {
    const authContext = useContext(AuthContext);

    let doLogin = () => authContext.dispatch({ type : 'login_user' });
    let doLogout = () => authContext.dispatch({ type : 'logout_user' });
    return (
        <Styles>
            <Navbar className="navbar navbar-dark navbar-expand-lg shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="http://localhost:3000/" className="navbar-brand d-flex align-items-center">
                    <strong style={{color:'#f9ca24'}}>TODO</strong>
                    </a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    {
                        !authContext.authenticated
                        ?  <button className="btn btn-sm btn-primary" onClick={doLogin}>Login</button>
                        :  <button className="btn btn-sm btn-warning" onClick={doLogout}>Logout</button>
                    }
                </div>
            </Navbar>
        </Styles>
    )
}
export default Header;