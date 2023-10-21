import React from 'react';
import Sammy from "../img/sammy.jpeg";


import {A} from 'hookrouter';

function Nav() {
    return(
        <div>
            <nav>
                    <ul className="nav-links">
                        <A className='Home button is-link' type="button" href='/'>
                            <li>Home</li>
                        </A>
                        <A className='Contact button is-link' href='/contact'>
                            <li>Contact</li>
                        </A>
                        <A className='Resume button is-link' href='/resume'>
                            <li>Resume</li>
                        </A>
                        <A className='Portfolio button is-link' href='/portfolio'>
                            <li>Portfolio</li>
                        </A>
                    </ul>
        </nav>
    </div>
)};


export default Nav;