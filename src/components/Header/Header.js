import './Header.css'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase()

    return (
        <div className='header'>
            <Link to='/' className='logo'>
                <h2>AdventurLover</h2>
            </Link>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about-us'>About Us</NavLink>
                <NavLink to='/community'>Community</NavLink>
                {
                    !user.uid ?
                        <Link to='/signin'><button className="btn-primary">Sign In</button></Link>
                        :
                        <>
                            <button onClick={logOut} className="btn-secondery">Logout</button>
                            <span className="user">{user.displayName}</span>
                        </>
                }

            </nav>
        </div>
    );
};

export default Header;